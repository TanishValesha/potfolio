import GetInTouchCard from '@/components/About/GetInTouchCard'
import MainCard from '@/components/About/MainCard'
import SkillsCard from '@/components/About/SkillsCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServiceCard from '@/components/Home/ServiceCard'
import WorkCard from '@/components/Home/WorkCard'
import { useState, useEffect, useRef } from 'react'

// Intersection Observer Hook
const useInView = (
    threshold = 0.1
): [React.RefObject<HTMLDivElement | null>, boolean] => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [ref, isInView];
};


// Animated Card Wrapper Component
const AnimatedCard = ({
    children,
    animationType = 'slideUp',
    delay = 0,
    className = '',
}: {
    children: React.ReactNode;
    animationType?: 'slideUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'popIn'; // Example of more specific type
    delay?: number;
    className?: string;
}) => {
    const [ref, isInView] = useInView(0.1)

    const getAnimationClasses = () => {
        const baseClasses = `transition-all duration-700 ease-out`

        if (!isInView) {
            switch (animationType) {
                case 'slideUp':
                    return `${baseClasses} translate-y-8 opacity-0`
                case 'slideLeft':
                    return `${baseClasses} translate-x-8 opacity-0`
                case 'slideRight':
                    return `${baseClasses} -translate-x-8 opacity-0`
                case 'popIn':
                    return `${baseClasses} scale-75 opacity-0`
                case 'fadeIn':
                    return `${baseClasses} opacity-0`
                default:
                    return `${baseClasses} translate-y-8 opacity-0`
            }
        }

        return `${baseClasses} translate-y-0 translate-x-0 scale-100 opacity-100`
    }

    return (
        <div
            ref={ref}
            className={`${getAnimationClasses()} ${className}`}
            style={{
                transitionDelay: isInView ? `${delay}ms` : '0ms',
                transitionDuration: '700ms'
            }}
        >
            {children}
        </div>
    )
}

const About = () => {
    return (
        <div className='bg-gray-100 w-screen h-screen p-8 overflow-auto'>
            <AnimatedCard animationType="fadeIn" delay={100}>
                <Header />
            </AnimatedCard>

            <div className='space-y-8'>
                {/* Main Card with Pop-in Animation */}
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-0 hover:scale-[1.02] duration-300">
                    <div className="col-span-16">
                        <AnimatedCard
                            animationType="popIn"
                            delay={200}
                        >
                            <MainCard />
                        </AnimatedCard>
                    </div>
                </div>

                {/* Get In Touch Card */}
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-0 hover:scale-[1.02] duration-300">
                    <div className="col-span-16">
                        <AnimatedCard
                            animationType="slideUp"
                            delay={300}
                        >
                            <GetInTouchCard />
                        </AnimatedCard>
                    </div>
                </div>

                {/* Skills Card */}
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-0 hover:scale-[1.02] duration-300">
                    <div className='col-span-16'>
                        <AnimatedCard
                            animationType="slideUp"
                            delay={400}
                        >
                            <SkillsCard />
                        </AnimatedCard>
                    </div>
                </div>

                {/* Work and Service Cards */}
                <div className='max-w-7xl mx-auto grid grid-cols-16 gap-6'>
                    <div className="col-span-8 hover:scale-[1.02] duration-300">
                        <AnimatedCard
                            animationType="slideRight"
                            delay={500}

                        >
                            <WorkCard />
                        </AnimatedCard>
                    </div>
                    <div className="col-span-8 hover:scale-[1.02] duration-300">
                        <AnimatedCard
                            animationType="slideLeft"
                            delay={600}

                        >
                            <ServiceCard />
                        </AnimatedCard>
                    </div>
                </div>
            </div>

            <AnimatedCard animationType="fadeIn" delay={700}>
                <Footer />
            </AnimatedCard>
        </div>
    )
}

export default About