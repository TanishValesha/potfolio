import { useState } from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function ContactCard() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [showValidation, setShowValidation] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (!formData.message.trim()) {
            setShowValidation(true);
            return;
        }
        setShowValidation(false);
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <div className="bg-white flex items-baseline justify-center p-4 mt-20 relative">
            {/* <div className="absolute inset-0 opacity-100">
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
            </div> */}
            <div className="w-full max-w-6xl absolute">
                {/* Contact Form Card */}
                <div className="max-w-lg mx-auto relative">
                    <div className="absolute top-0 right-0 opacity-100 pointer-events-none">
                        <img
                            src="https://assets-global.website-files.com/6526f09d3be13c204a126b74/653143017ae80eb6b1874f0a_bg-pattern-06.svg"
                            alt="Background pattern"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 opacity-100 pointer-events-none">
                        <img
                            src="https://assets-global.website-files.com/6526f09d3be13c204a126b74/653143017ae80eb6b1874f0a_bg-pattern-06.svg"
                            alt="Background pattern"
                            className="w-full h-full object-cover -rotate-180"
                        />
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                                <svg className="w-4 h-4 text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                </svg>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                                <Instagram size={16} className="text-gray-600" />
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                                <Mail size={16} className="text-gray-600" />
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                                <Linkedin size={16} className="text-gray-600" />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="space-y-4 mt-10">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent placeholder-gray-400"
                                />
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent placeholder-gray-400 resize-none"
                                />
                                {showValidation && !formData.message.trim() && (
                                    <div className="absolute bottom-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
                                        Please fill out this field.
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium mb-14"
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}