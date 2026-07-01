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

    // Light, sky-blue oceanic gradient
    const backgroundStyle = {
        background: `
            radial-gradient(circle at 70% 20%, rgba(200, 230, 255, 0.8) 0%, transparent 60%),
            linear-gradient(135deg, #f0f4f8 0%, #e0eaf3 100%)
        `
    };

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl p-10 border border-white/50 shadow-2xl overflow-hidden"
                style={backgroundStyle}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 text-slate-800 text-3xl hover:text-blue-600 transition-colors"
                >
                    ✕
                </button>

                <h2 className="text-slate-900 text-3xl uppercase font-bold mb-8 tracking-tight">TAKE THE HELM</h2>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                    <div className="grid grid-cols-2 gap-6">
                        <input required className="bg-transparent border-b border-slate-400 py-2 text-slate-900 outline-none placeholder-slate-500 focus:border-blue-600" placeholder="First Name*" />
                        <input required className="bg-transparent border-b border-slate-400 py-2 text-slate-900 outline-none placeholder-slate-500 focus:border-blue-600" placeholder="Last Name*" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <input required className="bg-transparent border-b border-slate-400 py-2 text-slate-900 outline-none placeholder-slate-500 focus:border-blue-600" placeholder="E-mail*" />
                        <select className="bg-transparent border-b border-slate-400 py-2 text-slate-900 outline-none focus:border-blue-600">
                            <option value="">Country*</option>
                            <option value="usa">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ita">Italy</option>
                            <option value="ind">India</option>
                        </select>
                    </div>

                    <select className="bg-transparent border-b border-slate-400 py-2 w-full text-slate-900 outline-none focus:border-blue-600">
                        <option value="">Do you already own a Yacht?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <textarea className="w-full h-24 bg-white/30 border border-slate-300 text-slate-900 p-3 outline-none placeholder-slate-500 focus:border-blue-600" placeholder="Request"></textarea>

                    <div className="text-sm text-slate-700 flex items-center gap-3">
                        <input type="checkbox" required className="accent-blue-600" />
                        <label>I consent to receive information...*</label>
                    </div>

                    <button type="submit" className="w-full bg-slate-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-blue-600 transition-all">
                        SEND REQUEST
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
}