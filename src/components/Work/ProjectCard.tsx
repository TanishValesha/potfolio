import React, { useState } from 'react';
import { MoveRight, ExternalLink, Github, Calendar, Users, Tag } from 'lucide-react';

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Sample project data - you can pass this as props
    const projectData = project || {
        id: 1,
        title: "Royal News Platform",
        category: "ROYAL",
        image: "https://cdn.prod.website-files.com/6526f09d3be13c204a126b7e/652a82bd161daabd6bafa61a_c678b66073bf188bc8_3000-p-1080.webp",
        description: "A modern newspaper platform built with cutting-edge technology to deliver news content in an engaging and accessible format.",
        longDescription: "This project involved creating a comprehensive news platform that serves thousands of daily readers. The platform features real-time content updates, personalized news feeds, and advanced search capabilities. We implemented a robust content management system that allows editors to publish and manage articles efficiently.",
        technologies: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
        duration: "6 months",
        team: "5 members",
        year: "2023",
        status: "Live",
        features: [
            "Real-time content updates",
            "Personalized news feeds",
            "Advanced search functionality",
            "Mobile-responsive design",
            "SEO optimized"
        ],
        links: {
            live: "https://example.com",
            github: "https://github.com/example"
        },
        metrics: {
            users: "10K+",
            performance: "98%",
            uptime: "99.9%"
        }
    };

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Project Card */}
            <div className="bg-white rounded-4xl p-8 shadow-sm relative overflow-hidden h-80 hover:opacity-100 cursor-pointer">
                {/* Full card background image */}
                <img
                    src={projectData.image}
                    alt={projectData.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 absolute inset-0"
                />

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500"></div>

                <div className="absolute inset-0 flex flex-col bottom-0 justify-end p-6 z-10">
                    <div className="flex justify-between items-center mt-8">
                        <span className="text-white text-xs uppercase tracking-wide font-medium">
                            • {projectData.category}
                        </span>
                        <div className="bg-black px-6 py-3 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                            <MoveRight size={16} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Popup Card */}
            {isHovered && (
                <div className="absolute left-3/4 top-1/2 transform -translate-y-1/2 w-80 h-96 z-50 animate-in slide-in-from-right-2 duration-300">
                    <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden h-full flex flex-col">
                        {/* Project Image */}
                        <div className="h-32 relative overflow-hidden">
                            <img
                                src={projectData.image}
                                alt={projectData.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 right-3">
                                <span className="bg-black bg-opacity-80 text-white text-xs font-medium px-2 py-1 rounded-full">
                                    {projectData.status}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-4 flex flex-col">
                            {/* Header */}
                            <div className="mb-3">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    {projectData.title}
                                </h3>
                                <div className="flex items-center space-x-3 text-xs text-gray-500">
                                    <div className="flex items-center">
                                        <Calendar size={12} className="mr-1" />
                                        <span>{projectData.year}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Users size={12} className="mr-1" />
                                        <span>{projectData.team}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-3">
                                <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                                    {projectData.longDescription}
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="mb-3 flex-1">
                                <h4 className="text-xs font-semibold text-gray-900 mb-2">Key Features</h4>
                                <ul className="space-y-1">
                                    {projectData.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div className="mb-3">
                                <h4 className="text-xs font-semibold text-gray-900 mb-2">Tech Stack</h4>
                                <div className="flex flex-wrap gap-1">
                                    {projectData.technologies.slice(0, 4).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded border"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="mt-auto">
                                <div className="flex space-x-2">
                                    <button className="flex-1 bg-black text-white px-3 py-2 rounded text-xs font-medium hover:bg-gray-800 transition-colors flex items-center justify-center">
                                        <ExternalLink size={12} className="mr-1" />
                                        Live Demo
                                    </button>
                                    <button className="flex-1 bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded text-xs font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                                        <Github size={12} className="mr-1" />
                                        Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Example usage with multiple cards
const ProjectShowcase = () => {
    const projects = [
        {
            id: 1,
            title: "Royal News Platform",
            category: "ROYAL",
            image: "https://cdn.prod.website-files.com/6526f09d3be13c204a126b7e/652a82bd161daabd6bafa61a_c678b66073bf188bc8_3000-p-1080.webp",
            description: "A modern newspaper platform built with cutting-edge technology.",
            longDescription: "This project involved creating a comprehensive news platform that serves thousands of daily readers. The platform features real-time content updates, personalized news feeds, and advanced search capabilities.",
            technologies: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
            duration: "6 months",
            team: "5 members",
            year: "2023",
            status: "Live",
            features: [
                "Real-time content updates",
                "Personalized news feeds",
                "Advanced search functionality",
                "Mobile-responsive design",
                "SEO optimized"
            ],
            metrics: {
                users: "10K+",
                performance: "98%",
                uptime: "99.9%"
            }
        },
        {
            id: 2,
            title: "E-Commerce Dashboard",
            category: "BUSINESS",
            image: "https://cdn.prod.website-files.com/6526f09d3be13c204a126b7e/652a82bd161daabd6bafa61a_c678b66073bf188bc8_3000-p-1080.webp",
            description: "Advanced analytics dashboard for e-commerce businesses.",
            longDescription: "Built a comprehensive analytics dashboard that helps e-commerce businesses track sales, inventory, and customer behavior. Features include real-time reporting, predictive analytics, and automated alerts.",
            technologies: ["Vue.js", "Python", "Django", "Redis", "Chart.js"],
            duration: "4 months",
            team: "3 members",
            year: "2022",
            status: "Live",
            features: [
                "Real-time sales tracking",
                "Inventory management",
                "Customer analytics",
                "Automated reporting",
                "Predictive insights"
            ],
            metrics: {
                users: "500+",
                performance: "95%",
                uptime: "99.8%"
            }
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-light mb-4 text-black">
                        Featured <span className="text-gray-400">Projects</span>
                    </h1>
                    <p className="text-gray-500 max-w-lg mx-auto">
                        Explore my latest work and the technologies behind them
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;