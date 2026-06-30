


export default function BrandSection() {
    return (
        <section
            data-testid="brand-section"
            className="relative w-full h-screen snap-start overflow-hidden bg-black"
        >
            {/* Top fade for nav blending */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

            {/* Background ocean video */}
            <video
                src="/videos/yacht-hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Subtle dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/30 z-[1]" />

            {/* Hero copy */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-300 mb-6">
                    The Pinnacle of Engineering
                </h2>
                <h1 className="text-5xl md:text-8xl font-serif italic text-white leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                    Octane Luxury
                </h1>
                <div className="mt-12 w-16 h-[1px] bg-white/50" />
            </div>
        </section>
    );
}