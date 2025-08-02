import { Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Service() {
    const typographyServices = [
        "Font Selection",
        "Typeface Licensing",
        "Typography Research",
        "Custom Typography",
        "Typeface Pairing"
    ];

    const logoServices = [
        "Logo Variations",
        "Color Palette",
        "Iconography",
        "Mockups",
        "Brand Guidelines"
    ];

    return (
        <div className="min-h-screen bg-gray-100 w-screen p-8">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-8">
                {/* Page Title */}
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-bold text-black mb-6">Services</h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Typography Card */}
                    <div className="bg-white rounded-3xl p-12 shadow-sm relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute top-0 -rotate-90 inset-10 opacity-100">
                            <img
                                src="https://assets-global.website-files.com/6526f09d3be13c204a126b74/653143017ae80eb6b1874f0a_bg-pattern-06.svg"
                                alt="Background pattern"
                                className="w-full h-full object-cover -rotate-180"
                            />
                        </div>
                        {/* Content */}
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="mb-8">
                                <div className="w-16 h-16 flex items-center justify-center">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-black">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16 12C16 10.8954 16.8954 10 18 10H30C31.1046 10 32 10.8954 32 12V16C32 17.1046 31.1046 18 30 18H18C16.8954 18 16 17.1046 16 16V12ZM18 12V16H30V12H18Z" fill="currentColor" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16 30C16 28.8954 16.8954 28 18 28H30C31.1046 28 32 28.8954 32 30V36C32 37.1046 31.1046 38 30 38H18C16.8954 38 16 37.1046 16 36V30ZM18 30V36H30V30H18Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl font-bold text-black mb-6">Typography</h2>

                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed mb-8">
                                A typography service involves various aspects related to the design and manipulation of text and fonts that represent a company or brand.
                            </p>

                            {/* Service List */}
                            <div className="space-y-4 mb-12">
                                {typographyServices.map((service, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                                            <Check size={12} className="text-gray-400" />
                                        </div>
                                        <span className="text-gray-400 text-sm">{service}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Learn More Button */}
                            <button className="w-full bg-black text-white py-4 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300">
                                Learn more
                            </button>
                        </div>
                    </div>

                    {/* Logo Design Card */}
                    <div className="bg-white rounded-3xl p-12 shadow-sm relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-3">
                            <img
                                src="https://cdn.prod.website-files.com/6526f09d3be13c204a126b74/65317b70405246945c025746_bg-pattern-03.svg"
                                alt="Background pattern"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="mb-8">
                                <div className="w-16 h-16 flex items-center justify-center">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-black">
                                        <path d="M12 12L24 6L36 12V24L24 42L12 24V12Z" fill="currentColor" />
                                        <path d="M24 18L30 15V21L24 24L18 21V15L24 18Z" fill="white" />
                                    </svg>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl font-bold text-black mb-6">Logo Design</h2>

                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed mb-8">
                                Logo design services involve creating a unique and visually appealing logo that represents a company, brand or organization.
                            </p>

                            {/* Service List */}
                            <div className="space-y-4 mb-12">
                                {logoServices.map((service, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                                            <Check size={12} className="text-gray-400" />
                                        </div>
                                        <span className="text-gray-400 text-sm">{service}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Learn More Button */}
                            <button className="w-full bg-black text-white py-4 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}