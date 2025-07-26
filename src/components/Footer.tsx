import { CopyrightIcon } from "lucide-react"

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16 flex justify-between items-center mb-10">
            <div className="flex text-2xl font-bold text-black">
                CA<span className="text-gray-400">ARD</span>
                <CopyrightIcon className="text-gray-400 w-4 h-4 ml-1" /> {/* Added ml-1 for spacing */}
            </div>
            <nav className="flex space-x-8">
                {/* --- HOME Link --- */}
                <div className="group relative"> {/* Added group and relative for positioning the dot */}
                    <a href="/" className="text-gray-400 text-[13px] uppercase tracking-wide group-hover:text-black transition-colors">Home</a>
                    {/* The dot */}
                    <span className="
                        absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    "></span>
                </div>

                {/* --- ABOUT Link --- */}
                <div className="group relative">
                    <a href="/about" className="text-gray-400 text-[13px] uppercase tracking-wide group-hover:text-black transition-colors">About</a>
                    <span className="
                        absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    "></span>
                </div>

                {/* --- WORK Link --- */}
                <div className="group relative">
                    <a href="/work" className="text-gray-400 text-[13px] uppercase tracking-wide group-hover:text-black transition-colors">Work</a>
                    <span className="
                        absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    "></span>
                </div>

                {/* --- SERVICE Link --- */}
                <div className="group relative">
                    <a href="/service" className="text-gray-400 text-[13px] uppercase tracking-wide group-hover:text-black transition-colors">Service</a>
                    <span className="
                        absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    "></span>
                </div>

                {/* --- CONTACT Link --- */}
                <div className="group relative">
                    <a href="/contact" className="text-gray-400 text-[13px] uppercase tracking-wide group-hover:text-black transition-colors">Contact</a>
                    <span className="
                        absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    "></span>
                </div>
            </nav>
            <div className="text-gray-400 text-[13px] uppercase tracking-wide">Portfolio</div>
        </div>
    )
}

export default Footer