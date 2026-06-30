import { useRef } from "react";
import { motion } from 'framer-motion';
import SmoothScroll from "../components/SmoothScroll";
import Footer from "../components/Footer";
import RequestInfo from "../components/RequestInfo";

export default function Service() {
    const scrollRef = useRef(null);

    return (
        <div ref={scrollRef} className="w-full h-screen overflow-y-auto bg-black text-white">
            <SmoothScroll wrapperRef={scrollRef} />

            {/* Ocean-Styled Header */}
            {/* Added !bg-black to override any external red styling */}
            <div className="relative w-full h-[400px] flex flex-col justify-center items-center px-8 overflow-hidden !bg-black">

                {/* Oceanic Glow Layers */}
                <div className="absolute inset-0" style={{
                    background: `radial-gradient(ellipse 95% 90% at 75% 100%, rgba(0, 120, 255, 0.75) 0%, rgba(0, 60, 180, 0.55) 25%, rgba(40, 0, 120, 0.35) 50%, rgba(10, 0, 30, 0.15) 75%, transparent 90%)`
                }} />
                <div className="absolute inset-0" style={{
                    background: `radial-gradient(ellipse 140% 110% at 50% 115%, rgba(100, 30, 200, 0.45) 0%, rgba(30, 0, 80, 0.25) 45%, transparent 80%)`
                }} />
                <div className="absolute inset-0" style={{
                    background: `linear-gradient(to top, #081230 0%, #030612 30%, transparent 65%)`
                }} />
                <div className="absolute inset-0" style={{
                    background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,.3) 100%)"
                }} />

                {/* Content */}
                <h1 className="relative z-10 text-6xl md:text-8xl tracking-tighter text-center text-white uppercase font-light">
                    Service & Support
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-20">
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Our support service is designed to offer clients a consistently smooth and
                        worry-free boating experience. We ensure dedicated assistance that reflects
                        the same care provided during the construction of your vessel.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="border border-blue-700  p-10 bg-neutral-900/20">
                        <h2 className="text-xl font-bold tracking-[0.2em] mb-6 border-l-2 border-blue-700  pl-6 uppercase">
                            Constant Assistance
                        </h2>
                        <p className="text-neutral-300 leading-relaxed">
                            The presence of the shipyard remains tangible long after delivery. Our
                            support team is active and ready to intervene globally within 24 hours.
                            We do not believe in temporary fixes; we focus on long-lasting solutions
                            to ensure maximum reliability and safety on every voyage.
                        </p>
                    </div>

                    <div className="border border-blue-700 p-10 bg-neutral-900/20">
                        <h2 className="text-xl font-bold tracking-[0.2em] mb-6 border-l-2  border-blue-700  pl-6 uppercase">
                            A Problem-Solving Mindset
                        </h2>
                        <p className="text-neutral-300 leading-relaxed">
                            Every technical challenge is an opportunity to refine our engineering.
                            Our mindset is rooted in proactive anticipation, ensuring that potential
                            issues are addressed before they impact your experience. We work
                            tirelessly to maintain the integrity and peak performance of your yacht.
                        </p>
                    </div>
                </div>
            </div>
            <RequestInfo />

            <Footer />
        </div>
    );
}