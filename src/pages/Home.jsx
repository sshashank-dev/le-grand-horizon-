



import { useRef } from "react";
import Hero from "../components/Hero";
import OctaneShowcase from "../components/OctaneShowcase";
import SmoothScroll from "../components/SmoothScroll";
import YachtGallery from "../components/YachtGallery";
import Footer from "../components/Footer";
import RequestInfo from "../components/RequestInfo";
import Experience from "../components/Experience";


export default function Home() {
    const scrollRef = useRef(null);
    return (
        <div ref={scrollRef} className="w-full h-full overflow-y-auto bg-black">
            <SmoothScroll wrapperRef={scrollRef} />
            <div>
                <Hero />
                <OctaneShowcase scrollContainerRef={scrollRef} />
                <YachtGallery />
                <Experience />
                <RequestInfo />
                <Footer />
            </div>
        </div>
    );
}