import { useState } from "react"
import NavBar from '../components/common/NavBar'

import { destinationData } from "../destinationMockData.json"

const Destination = () => {
  interface destinationInfo {
    destination: string;
    image: string;
    description: string;
    distance: string;
    travelTime: string;
  }
  const [isDestinationChanging, setIsDestinationChanging] = useState(false);
  const [currentDestination, setCurrentDestination] = useState<destinationInfo>(destinationData[0])

  function handleDestination(destination: string): void {
    if (destination === currentDestination.destination) {
      return
    } else {
      const newDestination = destinationData.filter(dest => dest.destination === destination)

      setIsDestinationChanging(true)

      setTimeout(() => {
        setCurrentDestination(newDestination[0])
        setIsDestinationChanging(false);
      }, 500);
    }
  }

  return (
    <main className='bg-destinationBgMobile md:bg-destinationBgTablet lg:bg-destinationBgDesktop bg-cover w-full min-h-screen pt-4 md:pt-8 mx-auto font-Bellefair text-xl text-white'>
      <header>
        <NavBar actualPage={'destination'} />
      </header>
      <section className={`flex flex-col px-4 mt-[50px] w-full h-full gap-16 lg:mt-[100px]`}>
        <div className='flex w-full font-Barlow uppercase'>
          <span className='text-graycolor font-bold text-left'>01</span>
          <h2 className='hidden ml-5 md:block tracking-[3.38px]'>Pick your destination</h2>
        </div>
        <div className='grid grid-cols-1 place-items-center gap-6 lg:grid-cols-2'>
          <div className={`transition-opacity duration-300 ${isDestinationChanging ? 'opacity-0' : 'opacity-100'}`}>
            <img className='max-w-[300px]' src={currentDestination.image} alt="" />
          </div>
          <div className="lg:justify-self-start">
            <ul className='flex gap-5 justify-center uppercase font-Barlow text-graycolor lg:justify-start'>
              <li onClick={() => handleDestination("Moon")} className={`cursor-pointer ${currentDestination.destination === "Moon" ? "border-b-4 text-white" : ""}`}>Moon</li>
              <li onClick={() => handleDestination("Mars")} className={`cursor-pointer ${currentDestination.destination === "Mars" ? "border-b-4 text-white" : ""}`}>Mars</li>
              <li onClick={() => handleDestination("Europa")} className={`cursor-pointer ${currentDestination.destination === "Europa" ? "border-b-4 text-white" : ""}`}>Europa</li>
              <li onClick={() => handleDestination("Titan")} className={`cursor-pointer ${currentDestination.destination === "Titan" ? "border-b-4 text-white" : ""}`}>Titan</li>
            </ul>
            <div className={`text-center lg:text-left max-w-[600px] transition-opacity duration-300 ${isDestinationChanging ? 'opacity-0' : 'opacity-100'}`}>
              <h1 className='uppercase my-5 text-6xl lg:text-8xl'>{currentDestination.destination}</h1>
              <p className='text-secondarycolor'>
                {currentDestination.description}
              </p>
              <div className='border-t border-graycolor py-8 mt-5 flex flex-col justify-center items-center gap-8 md:flex-row lg:justify-start lg:'>
                <div>
                  <h3 className='uppercase text-sm text-secondarycolor font-Barlow tracking-[2.36px] mb-4'>AVG. DISTANCE</h3>
                  <p className='text-3xl uppercase'>{currentDestination.distance}</p>
                </div>
                <div>
                  <h3 className='uppercase text-sm text-secondarycolor font-Barlow tracking-[2.36px] mb-4'>Est. travel time</h3>
                  <p className='text-3xl uppercase'>{currentDestination.travelTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Destination