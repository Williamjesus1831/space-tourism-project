import { useState } from 'react'
import NavBar from '../components/common/NavBar'
import { CrewData } from "../mockData/crewMockData.json"

const Crew = () => {
  interface crewInterface {
    role: string,
    name: string,
    description: string,
    image: string,
  }
  const [currentCrewInfo, setCurrentCrewInfo] = useState<crewInterface>(CrewData[0])

  function handleCrewInfo(crewInfo:number) {
    setCurrentCrewInfo(CrewData[crewInfo])
  }

  return (
    <main className='bg-crewBgMobile md:bg-crewBgTablet lg:bg-crewBgDesktop bg-cover w-full min-h-screen pt-4 md:pt-8 mx-auto font-Bellefair text-xl text-white'>
      <header>
        <NavBar actualPage={'crew'} />
      </header>
      <section className='flex flex-col place-items-center px-4 mt-[50px] w-full h-full gap-8'>
        <div className='flex justify-center w-full font-Barlow uppercase'>
          <span className='text-graycolor font-bold'>02</span>
          <h2 className='ml-5 tracking-[3.38px]'>Meet your crew</h2>
        </div>
        <div className='flex flex-col items-center md:flex-col-revers justify- lg:flex-row-reverse lg:gap-20 lg:grid lg:grid-cols-2 lg:w-full lg:place-items-center lg:justify-items-center'>
          <div className='lg:order-2'>
            <img className='w-[300px] md:w-[450px] lg:w-full lg:h-[700px]' src={currentCrewInfo.image} alt="" />
          </div>
          <div className='flex flex-col py-4 md:flex-col-reverse md:w-[450px] lg:w-full lg:order-1'>
            <ul className='flex gap-4 justify-center my-8 lg:justify-start'>
              <li onClick={()=>handleCrewInfo(0)} className={`w-3 h-3 cursor-pointer rounded-[50%] hover:bg-graycolor ${currentCrewInfo.name.includes("Douglas")? "bg-white": "bg-gray-700"} `}></li>
              <li onClick={()=>handleCrewInfo(1)} className={`w-3 h-3 cursor-pointer rounded-[50%] hover:bg-graycolor ${currentCrewInfo.name.includes("Mark")? "bg-white": "bg-gray-700"} `}></li>
              <li onClick={()=>handleCrewInfo(2)} className={`w-3 h-3 cursor-pointer rounded-[50%] hover:bg-graycolor ${currentCrewInfo.name.includes("Victor")? "bg-white": "bg-gray-700"} `}></li>
              <li onClick={()=>handleCrewInfo(3)} className={`w-3 h-3 cursor-pointer rounded-[50%] hover:bg-graycolor ${currentCrewInfo.name.includes("Anousheh")? "bg-white": "bg-gray-700"} `}></li>
            </ul>
            <div className='text-center lg:text-left lg:w-auto'>
              <h2 className='text-graycolor text-base uppercase lg:text-3xl'>{currentCrewInfo.role}</h2>
              <h1 className='text-2xl uppercase py-4 lg:text-6xl'>{currentCrewInfo.name}</h1>
              <p className='text-secondarycolor'>{currentCrewInfo.description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Crew