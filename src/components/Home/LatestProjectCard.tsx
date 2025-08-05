import { MoveRight } from 'lucide-react';

const LatestProjectCard = () => {
    return (
        <a href="/work">
            <div className="bg-white rounded-4xl p-6 shadow-sm relative overflow-hidden h-80">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-100">
                    <img
                        src="https://assets-global.website-files.com/6526f09d3be13c204a126b74/653143017ae80eb6b1874f0a_bg-pattern-06.svg"
                        alt="Background pattern"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className='gap-3'>
                        <h2 className="text-4xl font-medium text-black">See my latest</h2>
                        <h3 className="text-4xl font-medium text-gray-400">work</h3>
                    </div>

                    <div className="flex justify-between items-center mt-8">
                        <span className="text-gray-400 text-xs uppercase tracking-wide">• ALL PROJECTS</span>
                        <div className="px-6 py-3 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer">
                            <MoveRight size={16} className="text-gray-600" />
                        </div>
                    </div>
                </div>


            </div>
        </a>
    );
}

export default LatestProjectCard