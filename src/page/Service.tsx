// import Header from '@/components/Header'
// import { Check } from 'lucide-react'
// import { useState, useEffect, useRef } from 'react'

// // Intersection Observer Hook
// const useInView = (threshold = 0.1) => {
//     const [isInView, setIsInView] = useState(false)
//     const ref = useRef(null)

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsInView(true)
//                 }
//             },
//             { threshold }
//         )

//         const currentRef = ref.current
//         if (currentRef) {
//             observer.observe(currentRef)
//         }

//         return () => {
//             if (currentRef) {
//                 observer.unobserve(currentRef)
//             }
//         }
//     }, [threshold])

//     return [ref, isInView]
// }

// // Animated Card Wrapper
// const AnimatedCard = ({
//     children,
//     animationType = 'slideUp',
//     delay = 0,
//     shimmerEffect = false
// }) => {
//     const [ref, isInView] = useInView(0.1)

//     const getAnimationClasses = () => {
//         const baseClasses = `transition-all duration-700 ease-out`

//         if (!isInView) {
//             switch (animationType) {
//                 case 'slideUp':
//                     return `${baseClasses} translate-y-8 opacity-0`
//                 case 'slideLeft':
//                     return `${baseClasses} translate-x-8 opacity-0`
//                 case 'slideRight':
//                     return `${baseClasses} -translate-x-8 opacity-0`
//                 case 'fadeIn':
//                     return `${baseClasses} opacity-0`
//                 default:
//                     return `${baseClasses} translate-y-8 opacity-0`
//             }
//         }

//         return `${baseClasses} translate-y-0 translate-x-0 opacity-100 hover:shadow-xl hover:scale-[1.02]`
//     }

//     const shimmerClasses = shimmerEffect ? 'group relative overflow-hidden' : ''

//     return (
//         <div
//             ref={ref}
//             className={`${getAnimationClasses()} ${shimmerClasses}`}
//             style={{
//                 transitionDelay: isInView ? `${delay}ms` : '0ms',
//                 transitionDuration: '700ms'
//             }}
//         >
//             {shimmerEffect && (
//                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out">
//                     <div className="h-full w-2 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-sm"></div>
//                 </div>
//             )}
//             {children}
//         </div>
//     )
// }

// // Header Component
// // const Header = () => (
// //     <div className="text-center mb-16">
// //         <div className="inline-flex items-center gap-1 mb-6">
// //             <span className="text-sm font-medium tracking-wider text-gray-400">CA</span>
// //             <span className="text-sm font-medium tracking-wider text-gray-600">ARD</span>
// //             <span className="text-xs text-gray-400">©</span>
// //         </div>

// //         <h1 className="text-6xl font-bold text-gray-900 mb-6">
// //             Services
// //         </h1>

// //         <p className="text-lg font-normal text-gray-500 max-w-2xl mx-auto leading-relaxed">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// //             <br />
// //             Suspendisse varius enim in eros elementum tristique.
// //         </p>
// //     </div>
// // )

// interface FeatureProps {
//     text: string;
//     delay: number
// }

// // Service Feature Item
// const ServiceFeature = ({ text, delay = 0 }: FeatureProps) => {
//     const [ref, isInView] = useInView(0.1)

//     return (
//         <div
//             ref={ref}
//             className={`flex items-center gap-3 transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
//                 }`}
//             style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
//         >
//             <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
//                 <Check size={12} className="text-gray-400" />
//             </div>
//             <span className="font-normal text-gray-600 text-sm">
//                 {text}
//             </span>
//         </div>
//     )
// }

// // Service Card Component
// const ServiceCard = ({
//     icon,
//     title,
//     description,
//     features,
//     buttonText = "Learn more",
//     animationType = 'slideUp',
//     delay = 0
// }) => (
//     <AnimatedCard
//         animationType={animationType}
//         delay={delay}
//         shimmerEffect={true}
//     >
//         <div className="bg-white rounded-3xl p-8 shadow-sm h-full flex flex-col">
//             {/* Icon */}
//             <div className="mb-8">
//                 <div className="text-4xl font-bold text-black">
//                     {icon}
//                 </div>
//             </div>

//             {/* Content */}
//             <div className="flex-grow">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                     {title}
//                 </h3>

//                 <p className="font-normal text-gray-600 mb-8 leading-relaxed">
//                     {description}
//                 </p>

//                 {/* Features List */}
//                 <div className="space-y-4 mb-8">
//                     {features.map((feature, index) => (
//                         <ServiceFeature
//                             key={index}
//                             text={feature}
//                             delay={delay + (index * 100)}
//                         />
//                     ))}
//                 </div>
//             </div>

//             {/* Button */}
//             <button className="w-full bg-black text-white py-4 px-6 rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]">
//                 {buttonText}
//             </button>
//         </div>
//     </AnimatedCard>
// )

// // Main Services Page
// const ServicesPage = () => {
//     const services = [
//         {
//             icon: "⧗",
//             title: "Typography",
//             description: "A typography service involves various aspects related to the design and manipulation of text and fonts that represent a company or brand.",
//             features: [
//                 "Font Selection",
//                 "Typeface Licensing",
//                 "Typography Research",
//                 "Custom Typography",
//                 "Typeface Pairing"
//             ],
//             animationType: "slideRight",
//             delay: 200
//         },
//         {
//             icon: "⧨",
//             title: "Logo Design",
//             description: "Logo design services involve creating a unique and visually appealing logo that represents a company, brand or organization.",
//             features: [
//                 "Logo Variations",
//                 "Color Palette",
//                 "Iconography",
//                 "Mockups",
//                 "Brand Guidelines"
//             ],
//             animationType: "slideLeft",
//             delay: 400
//         }
//     ]

//     return (
//         <div className="min-h-screen w-screen py-20 px-8 bg-gray-50">
//             <div className="max-w-6xl mx-auto">
//                 {/* Animated Header */}
//                 <AnimatedCard animationType="fadeIn" delay={100}>
//                     <Header />
//                 </AnimatedCard>

//                 <div className='text-center mb-16'>
//                     <h1 className="text-6xl font-bold text-gray-900 mb-6">
//                         Services
//                     </h1>

//                     <p className="text-lg font-normal text-gray-500 max-w-2xl mx-auto leading-relaxed">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         <br />
//                         Suspendisse varius enim in eros elementum tristique.
//                     </p>
//                 </div>

//                 {/* Services Grid */}
//                 <div className="grid lg:grid-cols-2 gap-8">
//                     {services.map((service, index) => (
//                         <ServiceCard key={index} {...service} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ServicesPage