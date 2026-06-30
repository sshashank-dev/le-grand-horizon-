

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ wrapperRef }) {
    useEffect(() => {
        if (!wrapperRef.current) return;
        const lenis = new Lenis({
            wrapper: wrapperRef.current,
            content: wrapperRef.current.firstElementChild,
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, [wrapperRef]);
    return null;
}