export default function Experience() {
    return (
        // 1. Set the background of the whole section to white
        <section className="relative w-full h-[100vh] bg-[#cecece] p-9">

            {/* 2. The container for the video gets the rounded corners and overflow hidden */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden">

                {/* Background Video */}
                <video
                    src="/videos/experience-bg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                {/* Section Content */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-[6%]">
                    <span className="text-[10px] uppercase tracking-[0.45em] text-white/70 mb-4 block">
                        The Experience
                    </span>
                    <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] mb-8 text-center">
                        Redefining Life<br />At Sea.
                    </h2>

                </div>
            </div>
        </section>
    );
}