
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactCard from '../components/Contact/FormCard'
import { WorldMapDemo } from '../components/Contact/WorldMap'

const Contact = () => {
    return (
        <div className='bg-white w-screen h-full p-8 overflow-x-hidden'>
            <Header />
            <div>
                <div className="text-center mt-24">
                    <h1 className="text-5xl md:text-6xl font-light mb-4 text-black">
                        Get in <span className="text-gray-400">touch</span>
                    </h1>

                    <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br />
                        Suspendisse varius enim in eros elementum tristique.
                    </p>
                </div>
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