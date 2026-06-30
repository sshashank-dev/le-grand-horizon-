



import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function OctaneShowcase({ scrollContainerRef }) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        container: scrollContainerRef,
        target: ref,
        offset: ["start start", "end end"],
    });

    const p = useSpring(scrollYProgress, {
        stiffness: 50, damping: 25, mass: 0.5, restDelta: 0.0005,
    });

    // 1. Synchronized movement
    const boatY = useTransform(p, [0, 1], ["80%", "-70%"]);
    const maskY = useTransform(p, [0, 1], ["0%", "-100%"]);
    const boatScale = useTransform(p, [0, 0.5, 1], [1.02, 1, 0.95]);
    const oceanY = useTransform(p, [0, 1], ["-5%", "5%"]);

    // 2. Text/Watermark animations
    const t0Opacity = useTransform(p, [0, 0.2], [1, 0]);
    const t1Opacity = useTransform(p, [0, 0.08, 0.28, 0.38], [0, 1, 1, 0]);
    const t1Y = useTransform(p, [0, 0.38], [30, -30]);
    const t2Opacity = useTransform(p, [0.28, 0.38, 0.6, 0.72], [0, 1, 1, 0]);
    const t2Y = useTransform(p, [0.28, 0.72], [30, -30]);

    // Delayed Brand Personality (T3 starts at 0.8)
    const t3Opacity = useTransform(p, [0.8, 0.9, 0.95, 1], [0, 1, 1, 1]);
    const t3Y = useTransform(p, [0.8, 1], [50, -10]);

    const TEAL_BG = "#0b1f2a";

    return (
        <section ref={ref} className="relative h-[450vh]" style={{ backgroundColor: TEAL_BG }}>

            {/* --- FULL WIDTH TOP DIVIDER LINE --- */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-white z-50 pointer-events-none" />

            <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ backgroundColor: TEAL_BG }}>

                {/* ─── OCEAN LAYER ─── */}
                <motion.div
                    style={{ y: maskY, willChange: "transform", transform: "translateZ(0)" }}
                    className="absolute inset-0 z-0"
                    style={{
                        maskImage: `linear-gradient(to bottom, black 40%, transparent 90%)`,
                        WebkitMaskImage: `linear-gradient(to bottom, black 40%, transparent 90%)`,
                    }}
                >
                    {/* Big Watermark Text */}
                    <motion.div
                        style={{ opacity: t0Opacity }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                    >
                        <h1 className="text-[15vw] font-serif italic text-white/5 uppercase select-none tracking-tighter">
                            IT BEGINS
                        </h1>
                    </motion.div>

                    {/* Ocean Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
                        <motion.p
                            style={{ opacity: t0Opacity }}
                            className="text-white/40 uppercase tracking-[0.8em] text-[10px] font-light"
                        >
                            Le Grand Horizon
                        </motion.p>
                    </div>

                    <motion.div style={{ y: oceanY }} className="absolute inset-0 scale-110">
                        <video src="/videos/yacht-hero.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    </motion.div>
                </motion.div>

                {/* ─── YACHT LAYER ─── */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <motion.img
                        src="/yacht.png"
                        alt="Octane Yacht"
                        style={{ y: boatY, scale: boatScale, willChange: "transform" }}
                        className="h-[200vh] w-auto object-contain drop-shadow-[0_60px_120px_rgba(0,0,0,0.85)]"
                    />
                </div>

                {/* ─── TEXT LAYERS ─── */}
                <motion.div style={{ opacity: t1Opacity, y: t1Y }} className="absolute bottom-[14%] left-[6%] z-20 pointer-events-none max-w-md">
                    <span className="block text-[10px] uppercase tracking-[0.45em] text-white/70 mb-3">Brand Essence</span>
                    <h2 className="text-3xl md:text-5xl font-serif italic text-white leading-tight">Engineered for those who command the sea.</h2>
                </motion.div>

                <motion.div style={{ opacity: t2Opacity, y: t2Y }} className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="text-center px-6">
                        <span className="block text-[10px] uppercase tracking-[0.45em] text-white/70 mb-4">The Pinnacle of Engineering</span>
                        <h1 className="text-6xl md:text-[9rem] font-serif italic text-white/95 leading-none">Octane Luxury</h1>
                    </div>
                </motion.div>

                {/* ─── DELAYED BRAND PERSONALITY ─── */}
                <motion.div
                    style={{ opacity: t3Opacity, y: t3Y }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-[8%] pointer-events-none text-center px-6"
                >
                    <div className="pointer-events-auto flex flex-col items-center">
                        <h2 className="text-2xl md:text-6xl font-serif italic text-white mb-8 uppercase tracking-tight">
                            Brand Personality
                        </h2>
                        <p className="max-w-2xl text-white/80 leading-relaxed tracking-wide font-light mb-10">
                            Le Grand Horizon is the fastest, most extreme yet efficient and comfort at sea.
                            The most unapologetically bold expression of luxury yachting power on water.
                            Built for visionary, adventurous rebels, high-adrenaline thrill-seekers who conquer and never compromise.
                        </p>
                        <button className="px-10 py-4 bg-red-600 text-black uppercase tracking-widest text-sm font-extrabold hover:bg-red-700 transition-colors duration-300">
                            Discover the Range
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}