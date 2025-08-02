import Header from '../components/Header'
import Footer from '../components/Footer'
import MainCard from '../components/About/MainCard'
import GetInTouchCard from '../components/About/GetInTouchCard'
import StatsCard from '../components/About/StatCard'
import WorkCard from '../components/Home/WorkCard'
import ServiceCard from '../components/Home/ServiceCard'
import SkillsCard from '../components/About/SkillsCard'

const About = () => {
    return (
        <div className='bg-gray-100 w-screen h-screen p-8 overflow-auto'>
            <Header />
            <div className='space-y-5'>
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-0">
                    <div className="col-span-16">
                        <MainCard />
                    </div>
                    <div className="col-span-16">
                        <GetInTouchCard />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-0">
                    <div className='col-span-16'>
                        <StatsCard />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-0">

                    <div className='col-span-16'>
                        <SkillsCard />
                    </div>

                </div>
                <div className='max-w-7xl mx-auto grid grid-cols-16 gap-6'>
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

export default About