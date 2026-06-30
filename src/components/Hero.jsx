


import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const { scrollY } = useScroll();

    const scale = useTransform(scrollY, [0, 800], [1, 1.15]);
    const opacity = useTransform(scrollY, [0, 700], [1, 0]);

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background Video */}
            <motion.video
                style={{ scale }}
                autoPlay
                muted
                loop
                playsInline
                src="/hero.mp4"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <motion.div
                style={{ opacity }}
                className="absolute inset-0 bg-black/30"
            />

            {/* Main Content Wrapper */}
            <motion.div
                style={{ opacity }}
                className="absolute top-[18%] left-[6%] z-20 max-w-[500px]"
            >
                {/* Top Labels */}
                <div className="flex items-center gap-6 mb-8">
                    <p className="text-[10px] tracking-[0.4em] uppercase font-light opacity-80">
                        Private Membership
                    </p>
                    <span className="w-16 h-[1px] bg-white/50" />
                    <p className="text-[10px] tracking-[0.4em] uppercase font-light opacity-80">
                        Est. 1975
                    </p>
                </div>

                {/* Editorial Description */}
                <p className="text-[11px] leading-[1.8] tracking-[0.2em] font-light opacity-70 border-l border-white/30 pl-8 max-w-[320px]">
                    Step into a world where nautical prestige meets the untamed horizon.
                    Our fleet offers more than travel; it provides a sanctuary
                    engineered for those who command the sea.
                </p>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
}