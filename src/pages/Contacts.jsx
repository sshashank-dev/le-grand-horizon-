import { useRef } from "react";
import { motion } from 'framer-motion';
import SmoothScroll from "../components/SmoothScroll";
import Footer from "../components/Footer";

export default function Contacts() {
    const scrollRef = useRef(null);

    return (
        <div ref={scrollRef} className="w-full h-screen overflow-y-auto bg-black text-white">
            <SmoothScroll wrapperRef={scrollRef} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Header Section: Gradient effect */}
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
                                Home / Contacts
                            </button>
                        </div>
                        <h1 className="text-6xl md:text-8xl tracking-tighter text-center text-white">
                            CONTACTS
                        </h1>
                    </div>
                </div>

                {/* Form Section */}
                <div className="max-w-3xl mx-auto px-8 py-20">
                    <h2 className="text-2xl font-serif font-light text-center mb-12">
                        CONTACT US
                    </h2>
                    <p className="text-center text-gray-400 mb-12">
                        For any other request, please fill out the form below and our team will get back to you shortly.
                    </p>

                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-8">
                            <input type="text" placeholder="First Name*" className="bg-transparent border-b border-white/30 py-3 w-full focus:outline-none focus:border-white transition-colors" />
                            <input type="text" placeholder="Last Name*" className="bg-transparent border-b border-white/30 py-3 w-full focus:outline-none focus:border-white transition-colors" />
                        </div>
                        <input type="text" placeholder="Phone Number" className="bg-transparent border-b border-white/30 py-3 w-full focus:outline-none focus:border-white transition-colors" />
                        <input type="email" placeholder="E-mail*" className="bg-transparent border-b border-white/30 py-3 w-full focus:outline-none focus:border-white transition-colors" />
                        <select className="bg-transparent border-b border-white/30 py-3 w-full focus:outline-none text-gray-400 transition-colors">
                            <option>Inquiry type*</option>
                        </select>
                        <textarea placeholder="Request" className="bg-transparent border-b border-white/30 py-3 w-full h-32 focus:outline-none focus:border-white transition-colors"></textarea>
                        <div className="flex items-center gap-4">
                            <input type="checkbox" className="accent-red-500" />
                            <span className="text-sm">Email</span>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <button className="bg-red-600 px-12 py-4 text-black font-bold tracking-widest text-sm hover:bg-red-700 transition-colors">
                            SEND REQUEST
                        </button>
                    </div>
                </div>
                <div className="text-center space-y-2 border-t border-white/10 pt-16 pb-20 px-8">
                    <h3 className="text-2xl font-light mb-6">LEGAL INFORMATION</h3>
                    <p className="text-sm text-gray-400">Next Yacht Group S.r.l.</p>
                    <p className="text-sm text-gray-400">P.IVA / C.F 02466190465</p>
                    <p className="text-sm text-gray-400">REA LU-227968</p>
                    <p className="text-sm text-gray-400">Share Capital Int. Versato € 27.000.000,00</p>
                    <p className="text-sm text-gray-400">PEC nextyachtgroup@legalmail.it</p>
                    <p className="text-sm text-gray-400">SDI M5UXCR1</p>
                </div>

                {/* Footer Component */}
                <Footer />
            </motion.div>
        </div>
    );
}