import NavBar from '../components/common/NavBar'
import moonImage from "../assets/images/destination/image-moon.webp"

const Destination = () => {
  return (
    <main className='bg-destinationBgMobile md:bg-destinationBgTablet lg:bg-destinationBgDesktop bg-cover w-full min-h-screen pt-4 md:pt-8 mx-auto font-Bellefair text-xl text-white'>
      <header>
        <NavBar actualPage={'destination'} />
      </header>
      <section className={`flex flex-col px-4 mt-[50px] w-full h-full gap-16  lg:mt-[100px]}`}>
        <div className='flex w-full font-Barlow uppercase'>
          <span className='text-graycolor font-bold text-left'>01</span>
          <h2 className='hidden ml-5 md:block tracking-[3.38px]'>Pick your destination</h2>
        </div>
        <div className='grid grid-cols-1 place-items-center gap-6 lg:grid-cols-2'>
          <div>
            <img className='max-w-[300px]' src={moonImage} alt="" />
          </div>
          <div>
            <ul className='flex gap-5 justify-center uppercase font-Barlow text-graycolor lg:justify-start'>
              <li>Moon</li>
              <li>Mars</li>
              <li>Europa</li>
              <li>Titan</li>
            </ul>
            <div className='text-center lg:text-left'>
              <h1 className='uppercase my-5 text-6xl lg:text-8xl'>Moon</h1>
              <p className='text-secondarycolor'>
                See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
              </p>
              <div className='border-t border-graycolor py-8 mt-5 flex flex-col justify-center items-center gap-8 md:flex-row lg:justify-start lg:'>
                <div>
                  <h3 className='uppercase text-sm text-secondarycolor font-Barlow tracking-[2.36px] mb-4'>AVG. DISTANCE</h3>
                  <p className='text-3xl uppercase'>384,400 km</p>
                </div>
                <div>
                  <h3 className='uppercase text-sm text-secondarycolor font-Barlow tracking-[2.36px] mb-4'>Est. travel time</h3>
                  <p className='text-3xl uppercase'>3 days</p>
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