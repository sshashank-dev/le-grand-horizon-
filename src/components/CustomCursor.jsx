import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // The "spring" config makes it feel like it's dragging through water
    const springConfig = { damping: 25, stiffness: 150 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16); // Centers the cursor
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            {/* The "Liquid" Blob */}
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
        </motion.div>
    );
}