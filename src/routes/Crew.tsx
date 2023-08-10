import NavBar from '../components/common/NavBar'
import photo from '../assets/images/crew/image-douglas-hurley.webp'

const Crew = () => {
  return (
    <main className='bg-crewBgMobile md:bg-crewBgTablet lg:bg-crewBgDesktop bg-cover w-full min-h-screen pt-4 md:pt-8 mx-auto font-Bellefair text-xl text-white'>
      <header>
        <NavBar actualPage={'crew'} />
      </header>
      <section className='flex flex-col place-items-center px-4 mt-[50px] w-full h-full gap-8'>
        <div className='flex justify-center w-full font-Barlow uppercase lg:justify-start'>
          <span className='text-graycolor font-bold'>02</span>
          <h2 className='ml-5 tracking-[3.38px]'>Meet your crew</h2>
        </div>
        <div className='flex flex-col items-center md:flex-col-revers justify-between lg:flex-row-reverse lg:gap-20 lg:flex-grow'>
          <div>
            <img className='w-[300px] md:w-[450px] lg:w-full' src={photo} alt="" />
          </div>
          <div className='flex flex-col py-4 md:flex-col-reverse md:w-[450px] lg:w-full'>
            <ul className='flex gap-4 justify-center my-8 lg:justify-start'>
              <li className='w-3 h-3 bg-graycolor rounded-[50%]'></li>
              <li className='w-3 h-3 bg-graycolor rounded-[50%]'></li>
              <li className='w-3 h-3 bg-graycolor rounded-[50%]'></li>
              <li className='w-3 h-3 bg-graycolor rounded-[50%]'></li>
            </ul>
            <div className='text-center lg:text-left lg:w-[600px]'>
              <h2 className=' text-graycolor text-base uppercase'>commander</h2>
              <h1 className='text-2xl uppercase pb-4 lg:text-6xl'>Douglas hurley</h1>
              <p className='text-secondarycolor'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Crew