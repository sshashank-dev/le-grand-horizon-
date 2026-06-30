import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar({ onMenuClick, onNavigate, isMenuOpen }) {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = (e) => {
            const currentScrollY = e.target.scrollingElement
                ? e.target.scrollingElement.scrollTop
                : e.target.scrollTop;

            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    setHidden(true);
                } else {
                    setHidden(false);
                }
            } else {
                setHidden(false);
            }
            setLastScrollY(currentScrollY);
        };

        document.addEventListener("scroll", handleScroll, true);
        return () => document.removeEventListener("scroll", handleScroll, true);
    }, [lastScrollY]);

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between px-22 py-5 text-white bg-gradient-to-b from-black/60 to-transparent transition-all duration-300 pointer-events-none ${isMenuOpen ? "z-40" : "z-[9999]"
                }`}
            animate={{ y: hidden ? "-100%" : "0%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <div
                onClick={() => onNavigate && onNavigate("home")}
                className="cursor-pointer text-xl font-extrabold tracking-[0.2em] uppercase pointer-events-auto"
            >
                LE GRAND HORIZON
            </div>

            <ul className="flex items-center gap-12 text-[11px] font-extrabold tracking-[0.2em] uppercase pointer-events-auto">
                {/* Updated paths to match your App.jsx logic */}
                {[
                    { name: "YACHTS", path: "fleet" },
                    { name: "SERVICE", path: "service" },
                    { name: "NEWS & EVENTS", path: "news" },
                    { name: "CONTACTS", path: "contacts" }
                ].map((link) => (
                    <li
                        key={link.name}
                        onClick={() => onNavigate && onNavigate(link.path)}
                        className="cursor-pointer hover:opacity-60 transition-opacity"
                    >
                        {link.name}
                    </li>
                ))}

                <li
                    onClick={(e) => {
                        e.stopPropagation();
                        onMenuClick();
                    }}
                    className="cursor-pointer border border-white/20 hover:border-white px-8 py-2 transition-all duration-500 hover:bg-white hover:text-black"
                >
                    MENU
                </li>
            </ul>
        </motion.nav>
    );
}