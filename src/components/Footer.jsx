




import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Footer({ onNavigate }) {
    const [popupContent, setPopupContent] = useState(null);
    const [mounted, setMounted] = useState(false);

    // This ensures the portal only mounts on the client-side
    useEffect(() => {
        setMounted(true);
    }, []);

    const modalData = {
        privacy: { title: "Privacy Policy", text: "We value your privacy. We collect minimal data to provide you with the best yacht experience." },
        legal: { title: "Legal Terms", text: "By using this site, you agree to our terms of service regarding luxury services and yacht charters." },
        cookies: { title: "Cookie Settings", text: "We use cookies to enhance your browsing experience. You can adjust your preferences here." }
    };

    const navLinks = [
        { name: "YACHTS", path: "fleet" },
        { name: "SERVICE", path: "service" },
        { name: "NEWS & EVENTS", path: "news" },
        { name: "CONTACTS", path: "contacts" },
        { name: "CAREERS", path: "careers" }
    ];

    // The Modal component to be ported
    const Modal = () => (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-6 pointer-events-auto">
            <div className="bg-white text-black p-10 max-w-md w-full rounded-sm shadow-2xl">
                <h2 className="text-2xl font-bold mb-4 uppercase">{modalData[popupContent].title}</h2>
                <p className="mb-6 text-sm leading-relaxed">{modalData[popupContent].text}</p>
                <button
                    onClick={() => setPopupContent(null)}
                    className="bg-black text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    );

    return (
        <footer className="bg-black text-white py-20 px-[6%] font-sans">
            <div className="max-w-[1400px] mx-auto">
                <h1 className="text-[5rem] md:text-[6rem] font-sans font-extrabold leading-[0.75] tracking-[-0.05em] mb-12 uppercase">
                    Le Grand Horizon
                </h1>

                <div className="flex flex-wrap gap-x-12 gap-y-4 mb-8 text-[14px] font-medium tracking-[0.15em] uppercase">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => onNavigate && onNavigate(link.path)}
                            className="relative group hover:text-white transition-colors duration-300 cursor-pointer"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-2 mb-8 text-[10px] uppercase tracking-[0.1em] text-white/40">
                    <button onClick={() => setPopupContent('privacy')} className="hover:text-white transition-colors duration-300 cursor-pointer">Privacy Policy</button>
                    <button onClick={() => setPopupContent('legal')} className="hover:text-white transition-colors duration-300 cursor-pointer">Legal Terms</button>
                    <button onClick={() => setPopupContent('cookies')} className="hover:text-white transition-colors duration-300 cursor-pointer">Cookie Settings</button>
                </div>

                <div className="border-t border-white/10 mb-6"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                        © 2025 AByachts Next Yacht Group. All rights reserved
                    </p>


                    <div className="text-[8px] uppercase tracking-[0.2em] text-white/20 hover:text-white/40 transition-colors duration-500 cursor-default">
                        Design & Dev by Shashank Sharma
                    </div>
                    <div className="flex gap-6 text-[10px] uppercase tracking-[0.15em] text-white/50">
                        {["Instagram", "LinkedIn"].map((social) => (
                            <a key={social} href="#" className="hover:text-white transition-colors duration-300">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Portal Logic: Teleports the Modal directly to the document.body */}
            {mounted && popupContent && createPortal(<Modal />, document.body)}
        </footer>
    );
}