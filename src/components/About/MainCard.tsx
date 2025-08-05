
import {
    Github,
    Instagram,
    Linkedin,
    Mail,
} from 'lucide-react';

const MainCard = () => {
    const animationStyles = `
        @keyframes very-slow-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .profile-image-wrapper {
            position: relative;
            width: 160px; 
            height: 160px;
            overflow: visible;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%; 
        }

        .profile-actual-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }

        .circle-text-svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 160px;
            height: 160px; 
            transform-origin: center center;
            animation: very-slow-spin 40s linear infinite; 
            
        }
    `;
    return (
        <div className="bg-white w-full rounded-4xl p-8 lg:p-12 shadow-sm max-w-7xl mx-auto mt-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-100">
                <img
                    src="https://cdn.prod.website-files.com/6526f09d3be13c204a126b74/65317b70405246945c025746_bg-pattern-03.svg"
                    alt="Background pattern"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 opacity-100 -rotate-180">
                <img
                    src="https://cdn.prod.website-files.com/6526f09d3be13c204a126b74/65317b70405246945c025746_bg-pattern-03.svg"
                    alt="Background pattern"
                    className="w-full h-full object-cover"
                />
            </div>
            <style>{animationStyles}</style>
            <div className="flex justify-center items-center h-full mb-6">
                <div className="relative profile-image-wrapper">
                    <img
                        src="/pp.jpg"
                        loading="lazy"
                        alt="Profile Image for Caard Webflow Template"
                        className="rounded-full w-40 profile-actual-image"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/6526f09d3be13c204a126b74/652702ee30e4980d34ff1176_circle-text.svg"
                        loading="lazy"
                        alt="Decorative Circle Text for Caard Webflow Template"
                        className="scale-130 circle-text-svg"
                    />
                </div>
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 lg:px-16 py-8">
                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl font-medium text-black mb-6 leading-tight">
                    I'm Tanish, a full stack developer <br />
                    <span className="text-gray-400 font-light">based in Pune.</span>
                </h1>

                {/* Descriptive Paragraph */}
                <p className="text-gray-400 text-justify text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
                    Passionate about building interactive, scalable, and user-focused web apps.
                    Experienced in modern tech stacks including React, Next.js, TailwindCSS,
                    ShadCN, Redux Toolkit, Node.js, Redis, and PostgreSQL, SQL.
                    Always exploring innovative solutions and pushing boundaries in web development.
                </p>

                {/* Social Media Icons */}
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
};

export default MainCard;