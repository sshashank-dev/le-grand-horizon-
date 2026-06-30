import { useState } from "react";
import { motion } from 'framer-motion';
import Footer from "../components/Footer";

const TIER_DATA = [
    { name: "SILVER", perks: ["Preferred marina access", "Seasonal maintenance checks", "Member-only newsletters"] },
    { name: "GOLD", perks: ["Priority global docking", "24/7 dedicated concierge", "Annual regatta invitations"] },
    { name: "DIAMOND", perks: ["Unlimited fleet access", "Custom vessel engineering", "Private captain and security"] }
];

export default function Membership({ onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', tier: 'SILVER' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you handle your API submission
        console.log("Application Data:", formData);
        alert(`Application submitted for ${formData.tier} Tier.`);
    };

    return (
        // Changed to relative to allow natural document flow and scrolling
        <div className="relative w-full bg-black text-white pt-24 min-h-screen">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="pb-20"
            >
                {/* Header Section */}
                <div className="relative w-full h-[400px] flex flex-col justify-center items-center px-8 overflow-hidden">
                    {/* Base Background */}
                    <div className="absolute inset-0 bg-black" />

                    {/* High-Intensity Oceanic Glow */}
                    <div className="absolute inset-0" style={{
                        background: `radial-gradient(ellipse 95% 90% at 75% 100%, rgba(0, 120, 255, 0.75) 0%, rgba(0, 60, 180, 0.55) 25%, rgba(40, 0, 120, 0.35) 50%, rgba(10, 0, 30, 0.15) 75%, transparent 90%)`
                    }} />

                    {/* Secondary Vibrant Purple/Blue Depth */}
                    <div className="absolute inset-0" style={{
                        background: `radial-gradient(ellipse 140% 110% at 50% 115%, rgba(100, 30, 200, 0.45) 0%, rgba(30, 0, 80, 0.25) 45%, transparent 80%)`
                    }} />

                    {/* Base Ocean Floor Gradient */}
                    <div className="absolute inset-0" style={{
                        background: `linear-gradient(to top, #081230 0%, #030612 30%, transparent 65%)`
                    }} />

                    {/* Depth Vignette */}
                    <div className="absolute inset-0" style={{
                        background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,.3) 100%)"
                    }} />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-center items-center">
                        <div className="mb-6">
                            <button
                                onClick={() => window.location.href = '/'}
                                className="text-[10px] tracking-[0.2em] text-white/60 uppercase hover:text-white transition-colors"
                            >
                                Home /   MEMBERSHIP
                            </button>
                        </div>
                        <h1 className="text-6xl md:text-8xl tracking-tighter text-center text-white">
                            MEMBERSHIP
                        </h1>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-8 py-20">
                    <h2 className="text-lg font-light text-center mb-16 tracking-[0.2em] uppercase text-white/50">
                        Select Your Tier
                    </h2>

                    {/* Tier Selection Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {TIER_DATA.map((t) => (
                            <button
                                key={t.name}
                                onClick={() => setFormData({ ...formData, tier: t.name })}
                                className={`border p-8 text-left transition-all duration-300 ${formData.tier === t.name
                                    ? 'border-blue-700 bg-blue-600/10'
                                    : 'border-white/20 bg-neutral-900/20 hover:border-white/50'
                                    }`}
                            >
                                <h3 className="text-xl font-bold tracking-widest uppercase mb-4">{t.name}</h3>
                                <ul className="space-y-3 mb-8">
                                    {t.perks.map((p, i) => (
                                        <li key={i} className="text-[10px] uppercase text-white/50 tracking-[0.1em] flex items-center">
                                            <span className="w-1 h-1 border-blue-700 mr-2" /> {p}
                                        </li>
                                    ))}
                                </ul>
                            </button>
                        ))}
                    </div>

                    {/* Application Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-xl mx-auto space-y-8 border-t border-white/10 pt-20"
                    >
                        <input
                            required
                            placeholder="Full Name*"
                            className="bg-transparent border-b border-white/30 py-4 w-full focus:border-red-600 outline-none transition-colors"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            value={formData.name}
                        />
                        <input
                            required
                            type="email"
                            placeholder="E-mail*"
                            className="bg-transparent border-b border-white/30 py-4 w-full focus:border-red-600 outline-none transition-colors"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            value={formData.email}
                        />

                        <button
                            type="submit"
                            className="w-full bg-red-600 py-5 text-black font-bold tracking-widest text-xs hover:bg-red-700 transition-colors uppercase"
                        >
                            Submit Application for {formData.tier} Tier
                        </button>
                    </form>
                </div>

                <Footer />
            </motion.div>
        </div>
    );
}