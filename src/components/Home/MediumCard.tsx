import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export default function MediumCard() {
    return (
        <div className="bg-white rounded-4xl p-8 shadow-sm relative overflow-hidden h-80">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-100">
                <img
                    src="https://cdn.prod.website-files.com/6526f09d3be13c204a126b74/65317b70405246945c025746_bg-pattern-03.svg"
                    alt="Background pattern"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div className='gap-3'>
                    <h2 className="text-6xl font-medium text-black mb-3">Full Stack</h2>
                    <h3 className="text-6xl font-light text-gray-400">Developer</h3>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4">
                    <a
                        href="https://x.com/tanish_valesha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <svg className="w-4 h-4 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                        </svg>
                    </a>
                    <a
                        href="https://instagram.com/tanishvalesha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <Instagram size={16} className="text-gray-600" />
                    </a>
                    <a
                        href="mailto:tanishsvalesha@gmail.com"
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <Mail size={16} className="text-gray-600" />
                    </a>
                    <a
                        href="https://linkedin.com/in/tanish-valesha-40a7751b0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <Linkedin size={16} className="text-gray-600" />
                    </a>
                    <a
                        href="https://github.com/tanishvalesha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <Github size={16} className="text-gray-600" />
                    </a>
                </div>
            </div>
        </div>
    );
}