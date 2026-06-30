import { useEffect } from "react";
import { motion } from "framer-motion";

export default function FormModal({ onClose }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "auto"; };
    }, []);

    const handleSend = () => {
        alert("Request Sent Successfully!");
        onClose();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                // Applied the same gradient background stack from RequestInfo
                className="relative w-full max-w-2xl p-10 border border-white/10 shadow-2xl overflow-hidden"
                style={{
                    background: `
                        radial-gradient(ellipse 85% 80% at 75% 105%, rgba(170,0,30,0.60) 0%, rgba(120,0,20,0.42) 18%, rgba(70,0,12,0.22) 38%, rgba(20,0,5,0.08) 58%, transparent 76%),
                        radial-gradient(ellipse 120% 90% at 50% 110%, rgba(90,0,18,0.28) 0%, rgba(35,0,10,0.12) 45%, transparent 75%),
                        linear-gradient(to top, #2a050d 10%, #180207 25%, #090102 42%, rgba(0,0,0,0.96) 75%, #000 70%),
                        radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.45) 100%),
                        #000
                    `
                }}
            >
                <button onClick={onClose} className="absolute top-6 right-6 z-10 text-white text-3xl hover:text-red-600">✕</button>

                <h2 className="text-white text-3xl uppercase font-bold mb-8 tracking-tight">TAKE THE HELM</h2>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                    <div className="grid grid-cols-2 gap-6">
                        <input required className="bg-transparent border-b border-white/30 py-2 text-white outline-none placeholder-white/50" placeholder="First Name*" />
                        <input required className="bg-transparent border-b border-white/30 py-2 text-white outline-none placeholder-white/50" placeholder="Last Name*" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <input required className="bg-transparent border-b border-white/30 py-2 text-white outline-none placeholder-white/50" placeholder="E-mail*" />
                        <select className="bg-transparent border-b border-white/30 py-2 text-white outline-none [&>option]:bg-black [&>option]:text-white">
                            <option value="">Country*</option>
                            <option value="usa">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ita">Italy</option>
                            <option value="ita">India</option>
                        </select>
                    </div>

                    <select className="bg-transparent border-b border-white/30 py-2 w-full text-white outline-none [&>option]:bg-black [&>option]:text-white">
                        <option value="">Do you already own a Yacht?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <textarea className="w-full h-24 bg-transparent border border-white/30 text-white p-3 outline-none placeholder-white/50" placeholder="Request"></textarea>

                    <div className="text-sm text-white flex items-center gap-3">
                        <input type="checkbox" required className="accent-[#d60018]" />
                        <label>I consent to receive information...*</label>
                    </div>

                    <button type="submit" className="w-full bg-[#d60018] text-white py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        SEND REQUEST
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
}