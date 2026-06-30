
export default function SideButton({ onMenuClick }) {
    return (
        <button
            onClick={onMenuClick}
            className="fixed top-5 right-2 z-[60] flex items-center gap-4 px-8 py-3 rounded-full 
            border border-white/30 hover:border-white text-white 
            transition-all duration-500 hover:bg-white hover:text-black group"
        >
            <span className="text-[9px] uppercase tracking-[0.3em] font-medium transition-colors">
                Menu
            </span>

            <div className="flex flex-col gap-1.5">
                <div className="w-5 h-[0.5px] bg-white group-hover:bg-black transition-colors rounded-full" />
                <div className="w-3 h-[0.5px] bg-white group-hover:bg-black transition-all duration-300 rounded-full" />
            </div>
        </button>
    ); // <-- Make sure this is here
} // <-- And this is the final closing brace for the function}