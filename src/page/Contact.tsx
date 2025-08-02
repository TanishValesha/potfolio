import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactCard from '../components/Contact/FormCard'
import { WorldMapDemo } from '../components/Contact/WorldMap'

const Contact = () => {
    return (
        <div className='bg-white w-screen h-screen p-8 overflow-x-hidden'>
            <Header />
            <div>
                <div className="max-w-7xl mx-auto grid grid-cols-16 gap-6">
                    <div className='col-span-8'>
                        <ContactCard />
                    </div>
                    <div className='col-span-8'>
                        <WorldMapDemo />
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Contact;