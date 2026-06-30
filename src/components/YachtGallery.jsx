


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const yachtData = [
    {
        id: 1,
        src: "/videos/yacht-1.mp4",
        title: "Flagship Explorer",
        desc: "Built for long-range comfort.",
        specs: { Length: "45m", Speed: "18 Knots", Range: "5,000 NM", Guests: "12" },
        info: "The Flagship Explorer is designed for those who refuse to let the horizon be the limit. With a reinforced steel hull and advanced long-range fuel systems, this vessel ensures absolute stability even in the most challenging maritime conditions."
    },
    {
        id: 2,
        src: "/videos/yacht-2.mp4",
        title: "Performance Elite",
        desc: "Engineered for speed and agility.",
        specs: { Length: "32m", Speed: "35 Knots", Range: "1,200 NM", Guests: "8" },
        info: "Precision-engineered for the modern adventurer, the Performance Elite utilizes carbon-fiber construction to achieve unparalleled speed. Equipped with twin high-output propulsion systems and an agile steering bridge, this yacht turns every passage into an adrenaline-fueled experience."
    },
    {
        id: 3,
        src: "/videos/yacht-3.mp4",
        title: "Luxury Horizon",
        desc: "The pinnacle of maritime luxury.",
        specs: { Length: "52m", Speed: "22 Knots", Range: "3,500 NM", Guests: "14" },
        info: "The Luxury Horizon defines the standard of modern elegance on the water. Featuring bespoke interior finishes, a sprawling sky deck for social gatherings, and a state-of-the-art climate control system, it serves as a floating sanctuary."
    },
];

export default function YachtGallery() {
    const [selectedYacht, setSelectedYacht] = useState(null);

    return (
        <section className="relative bg-[#cecece] text-black min-h-screen py-24">
            <div className="max-w-[1400px] mx-auto px-[6%]">
                {!selectedYacht && (
                    <div className="mb-20 border-l border-black/20 pl-8 pt-10">
                        <span className="text-[10px] uppercase tracking-[0.45em] text-black/50 mb-4 block">The Fleet</span>
                        <h2 className="text-4xl md:text-6xl font-serif leading-[1.1]">THREE VESSELS.<br />ONE STANDARD.</h2>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {!selectedYacht ? (
                            yachtData.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layoutId={`yacht-${item.id}`}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    onClick={() => setSelectedYacht(item)}
                                    className="group flex flex-col cursor-pointer"
                                >
                                    <div className="relative aspect-[2/4] w-full overflow-hidden bg-black/10">
                                        <video src={item.src} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                                    </div>
                                    <div className="py-8">
                                        <h3 className="text-2xl font-serif italic">{item.title}</h3>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                layoutId={`yacht-${selectedYacht.id}`}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="col-span-1 md:col-span-3 flex flex-col md:flex-row gap-12 items-center"
                            >
                                <div className="w-full md:w-1/2 aspect-[2/3] overflow-hidden">
                                    <video src={selectedYacht.src} autoPlay loop muted className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h2 className="text-5xl font-serif mb-6">{selectedYacht.title}</h2>
                                    <p className="text-lg mb-6 text-black/70 font-semibold">{selectedYacht.desc}</p>

                                    {/* Detailed Specs Grid */}
                                    <div className="grid grid-cols-2 gap-y-6 mb-8">
                                        {Object.entries(selectedYacht.specs).map(([key, value]) => (
                                            <div key={key}>
                                                <p className="text-[10px] uppercase tracking-widest text-black/50">{key}</p>
                                                <p className="text-xl font-serif">{value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-md mb-8 text-black/60 leading-relaxed">{selectedYacht.info}</p>

                                    <button
                                        onClick={() => setSelectedYacht(null)}
                                        className="border border-black px-8 py-3 uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                                    >
                                        Close Details
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}