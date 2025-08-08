
import { motion, type Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import AboutMeCard from '../components/Home/AboutMeCard_Home'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LatestProjectCard from '../components/Home/LatestProjectCard'
import MediumCard from '../components/Home/MediumCard'
import ProfileCard from '../components/Home/ProfileCard'
import ProjectCard from '../components/Home/ProjectCard'
import ServiceCard from '../components/Home/ServiceCard'
import WorkCard from '../components/Home/WorkCard'

// Animation variants
// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const slideInFromLeft = {
    hidden: {
        opacity: 0,
        x: -100,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] as const // <-- And here
        }
    }
}

const slideInFromRight = {
    hidden: {
        opacity: 0,
        x: 100,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] as const // <-- And here
        }
    }
}

const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 1
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] as const // <-- And here
        }
    }
}

const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        rotate: -5
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] as const // <-- And here
        }
    }
}

interface AnimatedCardProps {
    children: React.ReactNode; // This is the key fix for the 'children' error
    variant?: Variants; // Use the Framer Motion Variants type
    delay?: number;
    className?: string;
}

// Reusable AnimatedCard component
const AnimatedCard = ({ children, variant, delay = 0, className = "" }: AnimatedCardProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            variants={variant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay }}
            className={className}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.div>
    )
}

const AnimatedOnView = ({ children, variant, className = "" }: AnimatedCardProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    return (
        <motion.div
            ref={ref}
            variants={variant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    )
}

const Home = () => {
    return (
        <div className='bg-gray-100 w-screen min-h-screen p-8 overflow-auto font-sans'>
            {/* Animated Header */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Header />
            </motion.div>

            <div className='space-y-5 mb-8'>
                {/* First Row - Staggered Animation */}
                <motion.div
                    className="max-w-7xl mx-auto grid grid-cols-16 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatedCard
                        variant={slideInFromLeft}
                        delay={0.1}
                        className="col-span-6"
                    >
                        <MediumCard />
                    </AnimatedCard>

                    <AnimatedCard
                        variant={scaleIn}
                        delay={0.3}
                        className="col-span-4"
                    >
                        <ProfileCard />
                    </AnimatedCard>

                    <AnimatedCard
                        variant={slideInFromRight}
                        delay={0.5}
                        className="col-span-6"
                    >
                        <AboutMeCard />
                    </AnimatedCard>
                </motion.div>

                {/* Second Row - On Scroll Animation */}
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-6">
                    <AnimatedCard
                        variant={fadeInUp}
                        className="col-span-6"
                    >
                        <ProjectCard />
                    </AnimatedCard>

                    <AnimatedCard
                        variant={fadeInUp}
                        delay={0.2}
                        className="col-span-6"
                    >
                        <ProjectCard />
                    </AnimatedCard>

                    <AnimatedCard
                        variant={scaleIn}
                        delay={0.4}
                        className="col-span-4"
                    >
                        <LatestProjectCard />
                    </AnimatedCard>
                </div>

                {/* Third Row - On Scroll Animation */}
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-6">
                    <AnimatedCard
                        variant={slideInFromLeft}
                        className="col-span-8"
                    >
                        <WorkCard />
                    </AnimatedCard>

                    <AnimatedCard
                        variant={slideInFromRight}
                        delay={0.2}
                        className="col-span-8"
                    >
                        <ServiceCard />
                    </AnimatedCard>
                </div>
            </div>

            {/* Animated Footer */}
            <AnimatedOnView variant={fadeInUp}>
                <Footer />
            </AnimatedOnView>
        </div>
    )
}

export default Home