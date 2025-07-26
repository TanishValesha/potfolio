import React from 'react';
import { MoveRight } from 'lucide-react';

const GetInTouchCard = () => {
    return (
        <div className="bg-white rounded-full p-8 shadow-sm max-w-7xl mx-auto mt-6">
            <div className="flex items-center justify-center gap-4">
                <span className="text-gray-400 text-sm">GET IN TOUCH</span>
                <div className="px-6 py-3 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer">
                    <MoveRight size={16} className="text-gray-600" />
                </div>
            </div>
        </div>
    );
};

export default GetInTouchCard;