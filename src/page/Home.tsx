import AboutMeCard from '../components/Home/AboutMeCard_Home'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LatestProjectCard from '../components/Home/LatestProjectCard'
import MediumCard from '../components/Home/MediumCard'
import ProfileCard from '../components/Home/ProfileCard'
import ProjectCard from '../components/Home/ProjectCard'
import ServiceCard from '../components/Home/ServiceCard'
import WorkCard from '../components/Home/WorkCard'

const Home = () => {
    return (
        <div className='bg-gray-100 w-screen h-screen p-8 overflow-auto font-sans'>
            <Header />
            <div className='space-y-5'>
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-6">
                    <div className="col-span-6">
                        <MediumCard />
                    </div>
                    <div className="col-span-4">
                        <ProfileCard />
                    </div>
                    <div className="col-span-6">
                        <AboutMeCard />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-6">
                    <div className="col-span-6">
                        <ProjectCard />
                    </div>
                    <div className="col-span-6">
                        <ProjectCard />
                    </div>
                    <div className="col-span-4">
                        <LatestProjectCard />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-6">
                    <div className="col-span-8">
                        <WorkCard />
                    </div>
                    <div className="col-span-8">
                        <ServiceCard />
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Home