export default function SkillsCard() {
    const skills = [
        { name: 'Java', color: '#E10098', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'C++', color: '#E10098', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'HTML5', color: '#E34F26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', color: '#1572B6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', color: '#F7DF1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', color: '#3178C6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React', color: '#61DAFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', color: '#339933', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MongoDB', color: '#47A248', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', color: '#336791', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Git', color: '#F05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', color: '#181717', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Docker', color: '#2496ED', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'AWS', color: '#232F3E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Tailwind', color: '#06B6D4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Next.js', color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'GraphQL', color: '#E10098', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' }
    ];

    return (
        <div className="w-full max-w-7xl bg-white rounded-3xl p-10 shadow-sm relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-3">
                <img
                    src="https://skillicons.dev/icons?i=cpp,java,js,ts"
                    alt="Background pattern"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Skills Grid */}
                <div className="grid grid-cols-10 gap-2">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                            {/* Icon Container */}

                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-12 h-12 object-contain"
                                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                            />


                            {/* Skill Name */}
                            <span className="text-xs font-medium mt-1 text-gray-600 text-center leading-tight group-hover:text-black transition-colors duration-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                {/* <div className="flex justify-center mt-12">
                    <div className="text-center">
                        <span className="text-gray-400 text-sm uppercase tracking-wide">• Skills & Technologies</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}