import { useState } from 'react'
import NavBar from '../components/common/NavBar'
import { Technologies } from "../mockData/technologiesMockData.json"

const technology = () => {
  interface technologiesInterface {
    name: string,
    image: string,
    imageMobile: string,
    description: string,
  }

  const [currentTechnologiesInfo, setCurrentTechnologiesInfo] = useState<technologiesInterface>(Technologies[0])

  function handleTechnologiesInfo(TechnologiesInfo:number) {
    setCurrentTechnologiesInfo(Technologies[TechnologiesInfo])
  }

  return (
    <main className='bg-technologyBgMobile md:bg-technologyBgTablet lg:bg-technologyBgDesktop bg-cover w-full min-h-screen pt-4 md:pt-8 mx-auto font-Bellefair text-xl text-white'>
      <header>
        <NavBar actualPage={'technology'} />
      </header>
      <section className='flex flex-col items-center mt-[50px] w-full h-full gap-8'  >
        <div className='flex justify-center w-full font-Barlow uppercase'>
          <span className='text-graycolor font-bold'>03</span>
          <h2 className='ml-5 tracking-[3.38px]'>SPACE LAUNCH 101</h2>
        </div>
        <div className='grid grid-cols-1 w-full lg:grid-cols-2 lg:pb-6 lg:gap-32'>
          <div className='lg:order-2'>
            <img className='w-full lg:hidden' src={currentTechnologiesInfo.imageMobile} alt="" />
            <img className='w-full hidden lg:block' src={currentTechnologiesInfo.image} alt="" />
          </div>
          <div className='flex flex-col px-4 items-center lg:order-1 lg:flex-row lg:gap-8'>
            <ul className='flex gap-4 mt-9 mb-7 lg:flex-col lg:justify-between'>
              <li onClick={()=>handleTechnologiesInfo(0)} className={`w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-[50%] border-2 flex justify-center items-center ${currentTechnologiesInfo.name === "LAUNCH VEHICLE"? "bg-white border-white text-primarycolor":"border-graycolor hover:border-white cursor-pointer"}`}>1</li>
              <li onClick={()=>handleTechnologiesInfo(1)} className={`w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-[50%] border-2 flex justify-center items-center ${currentTechnologiesInfo.name === "SPACEPORT"? "bg-white border-white text-primarycolor":"border-graycolor hover:border-white cursor-pointer"}`}>2</li>
              <li onClick={()=>handleTechnologiesInfo(2)} className={`w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-[50%] border-2 flex justify-center items-center ${currentTechnologiesInfo.name === "SPACE CAPSULE"? "bg-white border-white text-primarycolor":"border-graycolor hover:border-white cursor-pointer"}`}>3</li>
            </ul>
            <div className='text-center lg:text-left'>
              <h3 className='text-graycolor text-base uppercase lg:text-2xl'>THE TERMINOLOGY…</h3>
              <h1 className='text-2xl uppercase pt-1 pb-4 md:text-4xl lg:text-6xl'>{currentTechnologiesInfo.name}</h1>
              <p className='text-secondarycolor pb-4 md:max-w-[500px] lg:text-lg'>
                {currentTechnologiesInfo.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default technology