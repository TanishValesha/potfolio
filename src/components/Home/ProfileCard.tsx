const ProfileCard = () => {
    const animationStyles = `
        @keyframes very-slow-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .profile-image-wrapper {
            position: relative;
            width: 160px; 
            height: 160px;
            overflow: visible;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%; 
        }

        .profile-actual-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }

        .circle-text-svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 160px;
            height: 160px; 
            transform-origin: center center;
            animation: very-slow-spin 40s linear infinite; 
            
        }
    `;

    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm h-80 flex flex-col justify-between">
            <style>{animationStyles}</style>
            <div className="flex justify-center items-center h-full mb-6">
                <div className="relative profile-image-wrapper">
                    <img
                        src="./pp.jpg"
                        loading="lazy"
                        alt="Profile Image for Caard Webflow Template"
                        className="rounded-full w-40 profile-actual-image"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/6526f09d3be13c204a126b74/652702ee30e4980d34ff1176_circle-text.svg"
                        loading="lazy"
                        alt="Decorative Circle Text for Caard Webflow Template"
                        className="scale-130 circle-text-svg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;