import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/Home/ProjectCard'
import Footer from '../components/Footer'
import GetInTouchCard from '../components/About/GetInTouchCard'

const Work = () => {
    return (
        <div className='bg-gray-100 w-screen h-screen p-8 overflow-auto font-sans'>
            <Header />
            <div className='text-center my-16 text-xl'>
                <h1 className='text-gray-400 tracking-wide font-semibold'><span className='text-black font-semibold'>Selected </span>Projects</h1>
            </div>
            <div className='space-y-5'>
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-6">
                    <div className="col-span-8">
                        <ProjectCard />
                    </div>
                    <div className="col-span-8">
                        <ProjectCard />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-6">
                    <div className="col-span-8">
                        <ProjectCard />
                    </div>
                    <div className="col-span-8">
                        <ProjectCard />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-6">
                    <div className="col-span-16">
                        <GetInTouchCard />
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Work