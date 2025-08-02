import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function ExperienceTimeline() {
    const experiences = [
        {
            id: 1,
            title: "Software Developer Intern",
            company: "100X Space Investments Technologies (Wealthnomic)",
            location: "San Francisco, CA",
            startYear: "2022",
            endYear: "Present",
            description: "Leading development of scalable web applications and mentoring junior developers.",
            technologies: ["React", "Node.js", "AWS", "Docker"],
            current: true
        },
        {
            id: 2,
            title: "Full Stack Developer",
            company: "Digital Solutions Ltd",
            location: "New York, NY",
            startYear: "2020",
            endYear: "2022",
            description: "Built responsive applications and integrated payment systems for multiple clients.",
            technologies: ["Vue.js", "Python", "Django", "MySQL"],
            current: false
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className='text-center my-16 text-xl'>
                    <h1 className='text-gray-400 tracking-wide font-semibold'><span className='text-black font-semibold'>Work </span>Experience</h1>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-7 top-0 bottom-0 w-px bg-gray-300"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="relative pl-32">
                                {/* Timeline Dot */}
                                <div className="absolute left-4 top-6 w-6 h-6 bg-white border-2 border-gray-900 rounded-full z-10">
                                    {exp.current && (
                                        <div className="absolute inset-1 bg-gray-900 rounded-full"></div>
                                    )}
                                </div>

                                {/* Year Badge */}
                                <div className="absolute left-12 top-6 transform -translate-y-1/2">
                                    <div className="bg-gray-900 text-white text-md font-medium px-2 py-1 rounded">
                                        {exp.startYear}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-1">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center text-gray-600 text-sm mb-2">
                                                <Briefcase size={14} className="mr-1.5" />
                                                <span className="font-medium">{exp.company}</span>
                                            </div>
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <MapPin size={14} className="mr-1.5" />
                                                <span>{exp.location}</span>
                                                <span className="mx-2 text-gray-300">•</span>
                                                <Calendar size={14} className="mr-1.5" />
                                                <span>{exp.startYear} - {exp.endYear}</span>
                                            </div>
                                        </div>
                                        {exp.current && (
                                            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                                                Current
                                            </span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gray-50 text-gray-700 text-xs px-2 py-1 rounded-md border"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Timeline End */}
                    <div className="relative pl-16 mt-12">
                        <div className="absolute left-4 top-0 w-4 h-4 bg-gray-200 rounded-full border-2 border-gray-300"></div>
                        <div className="text-center py-4">
                            <div className="inline-flex items-center px-4 py-2 bg-white rounded-lg border border-gray-200 text-black text-sm">
                                <span>Journey continues...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}