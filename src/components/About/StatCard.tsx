const StatsCard = () => {
    return (
        // This is the single, large card container
        // Removed 'h-80' to let content define height, matching the image more closely
        <div className="bg-white rounded-4xl p-8 shadow-sm max-w-7xl relative mx-auto h-80">
            <div className="absolute scale-150 top-10 right-18 opacity-100 rotate-90">
                <img
                    src="https://assets-global.website-files.com/6526f09d3be13c204a126b74/653143017ae80eb6b1874f0a_bg-pattern-06.svg"
                    alt="Background pattern"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="grid grid-cols-2 gap-x-8 md:gap-x-10 gap-y-8 md:gap-y-18 justify-items-start">
                {/* Stat 1: Years of Experience */}
                <div className="flex flex-col">
                    <div className="flex items-baseline">
                        <span className="text-6xl font-medium text-black">12</span>
                        <span className="text-4xl text-gray-400 ml-1">+</span>
                    </div>
                    {/* Added text-sm uppercase tracking-wide for the label style */}
                    <span className="text-gray-400 text-sm  uppercase tracking-wide">YEARS OF EXPERIENCE</span>
                </div>

                {/* Stat 2: Unhappy Clients */}
                <div className="flex flex-col">
                    <div className="flex items-baseline">
                        <span className="text-6xl font-medium text-black">00</span>
                    </div>
                    <span className="text-gray-400 text-sm  uppercase tracking-wide">UNHAPPY CLIENTS</span>
                </div>

                {/* Stat 3: Recognitions */}
                <div className="flex flex-col">
                    <div className="flex items-baseline">
                        <span className="text-6xl font-medium text-black">08</span>
                    </div>
                    <span className="text-gray-400 text-sm uppercase tracking-wide">RECOGNITIONS</span>
                </div>

                {/* Stat 4: Projects Done */}
                <div className="flex flex-col">
                    <div className="flex items-baseline">
                        <span className="text-6xl font-medium text-black">60</span>
                        <span className="text-4xl text-gray-400 ml-1">+</span>
                    </div>
                    <span className="text-gray-400 text-sm uppercase tracking-wide">PROJECTS DONE</span>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;