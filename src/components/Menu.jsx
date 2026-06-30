

import { motion, AnimatePresence } from 'framer-motion';

export default function Menu({ isOpen, setIsOpen, onNavigate }) {
    const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

    const menuItems = [
        { name: "HOME", target: "home" },
        { name: "OUR FLEET", target: "fleet" },
        { name: "MEMBERSHIP", target: "membership" },
        { name: "NEWS & EVENTS", target: "news" },    // Change 'home' to 'news'
        { name: "CONTACTS", target: "contacts" },       // Change 'home' to 'contact'
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[90] bg-black"
                    />
                    <motion.div
                        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                        transition={transition}
                        className="fixed top-0 right-0 h-full w-[420px] z-[100] bg-white text-black p-16 shadow-2xl"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-10 right-10 text-[10px] uppercase tracking-[0.3em]"
                        >
                            Close
                        </button>
                        <nav className="flex flex-col gap-8 mt-20">
                            {menuItems.map((item, index) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => onNavigate(item.target)}    // ← swap section
                                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.08, ...transition }}
                                    className="text-3xl font-serif uppercase text-left hover:text-blue-700"
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}