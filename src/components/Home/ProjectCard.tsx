import { MoveRight } from 'lucide-react'

const ProjectCard = () => {
    return (
        <div className="bg-white rounded-4xl p-8 shadow-sm relative overflow-hidden h-80 duration-300 group">
            {/* Full card background image */}
            <img
                src="https://cdn.prod.website-files.com/6526f09d3be13c204a126b7e/652a82bd161daabd6bafa61a_c678b66073bf188bc8_3000-p-1080.webp"
                alt="Free Newspaper Project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 absolute inset-0"
            />

            <div className="absolute inset-0 flex flex-col bottom-0 justify-end p-6">
                <div className="flex justify-between items-center mt-8">
                    <span className="text-black text-xs uppercase tracking-wide">• ROYAL</span>
                    <div className="bg-black px-6 py-3 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer group/arrow">
                        <MoveRight
                            size={16}
                            className="text-white transition-transform duration-300 ease-in-out group-hover/arrow:translate-x-1 group-hover/arrow:animate-pulse"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard