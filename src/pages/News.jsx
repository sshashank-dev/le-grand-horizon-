import { useRef, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import SmoothScroll from "../components/SmoothScroll";
import Footer from "../components/Footer";

export default function News() {
    const scrollRef = useRef(null);
    const [filter, setFilter] = useState("ALL");

    const newsItems = [
        { id: 1, category: "BOAT SHOWS", title: "VENICE BOAT SHOW", desc: "We had the honor of participating in the prestigious Venice Boat Show, bringing our vision of the sea to one of the most iconic...", img: "https://image.yachtbuyer.com/w1440/h755/qh/cs0-913-4602-2417/k18bc80f4/cms/photo/3029750.jpg", link: "#" },
        { id: 2, category: "NEWS", title: "SUSTAINABILITY AT SEA", desc: "Our commitment to the environment reaches a new milestone with the integration of hybrid propulsion systems...", img: "https://tse3.mm.bing.net/th/id/OIP.w1_PN9H9USTfpONuRvbFYQHaGM?w=1974&h=1652&rs=1&pid=ImgDetMain&o=7&rm=3", link: "#" },
        { id: 3, category: "EVENTS", title: "OWNER'S EXCLUSIVE GALA", desc: "An unforgettable evening in Monaco, celebrating the launch of our newest flagship yacht with our owners...", img: "https://image.yachtcharterfleet.com/w640/h453/qh/ca/k2cd2e089/vessel/document/thumbnail/11567.jpg", link: "#" },
        { id: 4, category: "BOAT SHOWS", title: "CANNES YACHTING FESTIVAL", desc: "Experience the pinnacle of luxury at the Cannes Yachting Festival, where innovation meets elegant design...", img: "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2024/09/Cannes-Yachting-festival-1024x542.jpg", link: "#" },
        { id: 5, category: "NEWS", title: "NEW FLEET EXPANSION", desc: "We are proud to announce the addition of three new models to our fleet, setting a new standard for performance...", img: "https://tse2.mm.bing.net/th/id/OIP.2U5mquV8eCtmQlJAm70H3gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3", link: "#" },
        { id: 6, category: "EVENTS", title: "DOHA INTERNATIONAL SHOW", desc: "Showcasing our latest nautical technology in the heart of the Middle East, reaching new horizons in maritime excellence...", img: "https://tse1.mm.bing.net/th/id/OIP.VU_XCR_lC0SL6mS_yJ1JugHaE7?rs=1&pid=ImgDetMain&o=7&rm=3", link: "#" },
    ];

    const filteredItems = filter === "ALL" ? newsItems : newsItems.filter(item => item.category === filter);

    return (
        <div ref={scrollRef} className="w-full h-screen overflow-y-auto bg-black text-white">
            <SmoothScroll wrapperRef={scrollRef} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
                {/* Header Section */}
                <div className="relative w-full h-[400px] flex flex-col justify-center items-center px-8 overflow-hidden">
                    {/* Base Background */}
                    <div className="absolute inset-0 bg-black" />

                    {/* High-Intensity Oceanic Glow */}
                    <div className="absolute inset-0" style={{
                        background: `radial-gradient(ellipse 95% 90% at 75% 100%, rgba(0, 120, 255, 0.75) 0%, rgba(0, 60, 180, 0.55) 25%, rgba(40, 0, 120, 0.35) 50%, rgba(10, 0, 30, 0.15) 75%, transparent 90%)`
                    }} />

                    {/* Secondary Vibrant Purple/Blue Depth */}
                    <div className="absolute inset-0" style={{
                        background: `radial-gradient(ellipse 140% 110% at 50% 115%, rgba(100, 30, 200, 0.45) 0%, rgba(30, 0, 80, 0.25) 45%, transparent 80%)`
                    }} />

                    {/* Base Ocean Floor Gradient */}
                    <div className="absolute inset-0" style={{
                        background: `linear-gradient(to top, #081230 0%, #030612 30%, transparent 65%)`
                    }} />

                    {/* Depth Vignette */}
                    <div className="absolute inset-0" style={{
                        background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,.3) 100%)"
                    }} />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-center items-center">
                        <div className="mb-6">
                            <button
                                onClick={() => window.location.href = '/'}
                                className="text-[10px] tracking-[0.2em] text-white/60 uppercase hover:text-white transition-colors"
                            >
                                Home / NEWS & EVENTS
                            </button>
                        </div>
                        <h1 className="text-6xl md:text-8xl tracking-tighter text-center text-white">
                            NEWS & EVENTS
                        </h1>
                    </div>
                </div>

                {/* Filter Navigation - From Screenshot 2026-06-27 184032.png */}
                <div className="max-w-4xl mx-auto flex justify-center gap-12 py-12 text-sm uppercase tracking-[0.2em]">
                    {["ALL", "NEWS", "BOAT SHOWS"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setFilter(tab)}
                            className={`pb-2 border-b-2 transition-colors ${filter === tab ? " border-blue-700 text-white" : "border-transparent text-white/50 hover:text-white"}`}
                        >
                            {tab === "ALL" ? "VIEW ALL" : tab}
                        </button>
                    ))}
                </div>

                {/* News Grid - Cards style from Screenshot 2026-06-27 184554.jpg */}
                <div className="max-w-7xl mx-auto px-8 py-20">
                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    // Updated className below for a permanent red border
                                    className="bg-black border border-blue-700 transition-colors duration-300"
                                >
                                    <div className="w-full aspect-[4/3] overflow-hidden">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-8">
                                        <p className="text-white text-xs font-bold tracking-widest mb-4">{item.category}</p>
                                        <h3 className="text-3xl font-bold italic mb-4 leading-tight uppercase">{item.title}</h3>
                                        <p className="text-neutral-400 text-sm mb-8 leading-relaxed">{item.desc}</p>
                                        <a href={item.link} className="text-red-600 font-bold text-sm uppercase flex items-center gap-2 hover:text-red-500">
                                            DISCOVER MORE →
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                <Footer />
            </motion.div>
        </div>
    );
}