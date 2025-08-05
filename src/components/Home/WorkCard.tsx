import { MoveRight } from "lucide-react";

const WorkCard = () => {
    return (
        <a href="/contact">
            <div className="bg-white rounded-4xl p-8 shadow-sm relative overflow-hidden h-80">
                {/* Background Pattern */}
                <div className="absolute left-0 inset-0 opacity-100">
                    <img
                        src="https://cdn.prod.website-files.com/6526f09d3be13c204a126b74/65317b70405246945c025746_bg-pattern-03.svg"
                        alt="Background pattern"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className='flex gap-3'>
                        <h2 className="text-5xl font-medium text-black mb-3">Let's work</h2>
                        <h3 className="text-5xl font-light text-gray-400">together</h3>
                    </div>

                    <div className="flex justify-between items-center mt-8">
                        <span className="text-gray-400 text-xs uppercase tracking-wide">• GET IN TOUCH</span>
                        <div className="px-6 py-3 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer">
                            <MoveRight size={16} className="text-gray-600" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default WorkCard