// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import FormModal from "./FormModal";

// export default function RequestInfo() {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     return (
//         <section className="relative w-full overflow-hidden bg-black py-28 px-[6%]">
//             {/* Backgrounds - Exactly as you provided */}
//             <div className="absolute inset-0 z-0 overflow-hidden">
//                 <div className="absolute inset-0 bg-black" />
//                 <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 85% 80% at 75% 105%, rgba(170,0,30,0.60) 0%, rgba(120,0,20,0.42) 18%, rgba(70,0,12,0.22) 38%, rgba(20,0,5,0.08) 58%, transparent 76%)` }} />
//                 <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 120% 90% at 50% 110%, rgba(90,0,18,0.28) 0%, rgba(35,0,10,0.12) 45%, transparent 75%)` }} />
//                 <div className="absolute inset-0" style={{ background: `linear-gradient(to top, #2a050d 10%, #180207 25%, #090102 42%, rgba(0,0,0,0.96) 75%, #000 70%)` }} />
//                 <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.45) 100%)" }} />
//             </div>

//             {/* Content */}
//             <div className="relative z-10 mx-auto max-w-[900px] text-center">
//                 <h2 className="text-white uppercase italic font-black tracking-tight text-[32px] md:text-[42px] leading-none">
//                     REQUEST INFORMATION
//                 </h2>
//                 <p className="mt-5 text-white/85 text-[16px] md:text-[18px] font-light">
//                     Receive information on our yachts and services
//                 </p>

//                 {/* Button Functionality Added */}
//                 <button
//                     onClick={() => setIsModalOpen(true)}
//                     className="mt-8 bg-[#d60018] hover:bg-white hover:text-black transition-all duration-500 px-7 py-2 uppercase font-bold tracking-[0.22em] text-black"
//                 >
//                     FILL OUT THE FORM
//                 </button>
//             </div>

//             {/* Modal Logic */}
//             <AnimatePresence>
//                 {isModalOpen && <FormModal onClose={() => setIsModalOpen(false)} />}
//             </AnimatePresence>
//         </section>
//     );
// }



import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FormModal from "./FormModal";

export default function RequestInfo() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative w-full overflow-hidden bg-black py-28 px-[6%]">
            {/* Backgrounds - Your original code preserved */}
            <div className="absolute inset-0 z-0 overflow-hidden">
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
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-[900px] text-center">
                <h2 className="text-white uppercase italic font-black tracking-tight text-[32px] md:text-[42px] leading-none">
                    REQUEST INFORMATION
                </h2>
                <p className="mt-5 text-white/85 text-[16px] md:text-[18px] font-light">
                    Receive information on our yachts and services
                </p>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-8 bg-[#d60018] hover:bg-white hover:text-black transition-all duration-500 px-7 py-2 uppercase font-bold tracking-[0.22em] text-black"
                >
                    FILL OUT THE FORM
                </button>
            </div>

            <AnimatePresence>
                {isModalOpen && <FormModal onClose={() => setIsModalOpen(false)} />}
            </AnimatePresence>
        </section>
    );
}