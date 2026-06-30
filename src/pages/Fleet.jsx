





import { motion, AnimatePresence } from 'framer-motion';

const yachts = [
    {
        name: "OCEAN ECLIPSE",
        img: "https://images.pexels.com/photos/5953478/pexels-photo-5953478.jpeg",
        specs: [
            { label: "LENGTH", value: "262 FT" },
            { label: "SPEED", value: "24 KNOTS" },
            { label: "HULL", value: "STEEL" },
            { label: "GUESTS", value: "12" },
        ],
    },
    {
        name: "BLACK SOVEREIGN",
        img: "https://images.pexels.com/photos/34758600/pexels-photo-34758600.jpeg",
        specs: [
            { label: "LENGTH", value: "328 FT" },
            { label: "SPEED", value: "19 KNOTS" },
            { label: "HULL", value: "STEEL & ALUMINIUM" },
            { label: "CABINS", value: "8" },
        ],
    },
    {
        name: "AZURE HORIZON",
        img: "https://images.pexels.com/photos/33129987/pexels-photo-33129987.jpeg",
        specs: [
            { label: "LENGTH", value: "180 FT" },
            { label: "SPEED", value: "22 KNOTS" },
            { label: "DECK", value: "SUN DECK WITH JACUZZI" },
            { label: "CREW", value: "6 + 2 CHEF" },
        ],
    },
];

// Smoother, more cinematic easing (ease-out-expo-like)
const easing = [0.16, 1, 0.3, 1];

export default function Fleet({ isActive, onClose }) {
    return (
        <div className="relative w-full h-full pointer-events-none">

            {/* CLOSE BUTTON — Now smaller and horizontally aligned */}
            <AnimatePresence>
                {isActive && (
                    <motion.button
                        key="fleet-close"
                        onClick={onClose}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.25 } }}
                        transition={{ duration: 0.5, ease: easing, delay: 0.9 }}
                        aria-label="Close fleet"
                        className="absolute top-5 right-8 z-[110] pointer-events-auto
            w-8 h-8 flex items-center justify-center
            rounded-full border border-white/20 bg-black/30 backdrop-blur-md
            text-white hover:bg-white hover:text-black
            transition-colors duration-300 group"
                    >
                        <span className="relative w-3 h-3 block">
                            <span className="absolute top-1/2 left-0 h-px w-full bg-current rotate-45 origin-center
                    group-hover:rotate-[135deg] transition-transform duration-500" />
                            <span className="absolute top-1/2 left-0 h-px w-full bg-current -rotate-45 origin-center
                    group-hover:rotate-45 transition-transform duration-500" />
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>
            {/* CARDS */}
            <div className="flex h-full w-full">
                {yachts.map((y, i) => (
                    <motion.article
                        key={y.name}
                        initial={{ x: '110vw' }}
                        animate={isActive ? { x: 0 } : { x: '110vw' }}
                        transition={{
                            duration: 1.4,                            // ⬅ longer = silkier
                            ease: easing,                             // ⬅ smoother curve
                            delay: isActive ? i * 0.12 : (2 - i) * 0.08,
                        }}
                        className="relative flex-1 h-full pt-2  overflow-hidden pointer-events-auto cursor-pointer group"
                    >
                        {/* Full-bleed overhead yacht image with slow Ken Burns */}
                        <motion.img
                            src={y.img}
                            alt={y.name}
                            className="absolute inset-0 w-full h-full object-cover will-change-transform"
                            initial={{ scale: 1.25 }}
                            animate={isActive ? { scale: 1 } : { scale: 1.25 }}
                            transition={{ duration: 2.4, ease: easing, delay: 0.3 + i * 0.12 }}
                        />

                        {/* Gradient for legibility */}
                        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/40 to-transparent" />

                        {/* Caption — name & specs fade up after card lands */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.7, ease: easing, delay: 0.8 + i * 0.12 }}
                            className="absolute bottom-0 left-0 right-0 p-8 text-white"
                        >
                            <h3 className="font-serif italic text-4xl md:text-5xl tracking-wide mb-6">
                                {y.name}
                            </h3>

                            <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-w-[280px]">
                                {y.specs.map((s) => (
                                    <div key={s.label}>
                                        <p className="text-[9px] tracking-[0.3em] text-white/50 uppercase mb-1">
                                            {s.label}
                                        </p>
                                        <p className="text-xs tracking-[0.15em] uppercase font-medium">
                                            {s.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Hover wash */}
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 pointer-events-none" />
                    </motion.article>
                ))}
            </div>
        </div>
    );
}