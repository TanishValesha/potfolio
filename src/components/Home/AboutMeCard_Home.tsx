import { MoveRight } from "lucide-react";

export default function AboutMeCard() {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden h-80">
            {/* Background Pattern */}
            <div className="absolute text-center left-10 bottom-1 opacity-100">
                <img
                    src="https://assets-global.website-files.com/6526f09d3be13c204a126b74/653143017ae80eb6b1874f0a_bg-pattern-06.svg"
                    alt="Background pattern"
                    className="w-full h-full object-cover -rotate-180"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <span className='text-gray-400 text-2xl'>✺</span>
                    <p className="text-gray-400 text-xl">I'm Lukas, a Digital Designer with a passion for bringing ideas to life through visual storytelling.</p>
                </div>

                <div className="flex justify-between items-center mt-8">
                    <span className="text-gray-400 text-xs uppercase tracking-wide">• ABOUT ME</span>
                    <div className="px-6 py-3 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer">
                        <MoveRight size={16} className="text-gray-600" />
                    </div>
                </div>
            </div>
        </div>
    );
}