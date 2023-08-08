import { Link } from 'react-router-dom'
import NavBar from '../components/common/NavBar'

const Home = () => {
  return (
    <main className='bg-homeBgMobile md:bg-homeBgTablet lg:bg-homeBgDesktop bg-cover w-full min-h-screen lg:pt-8 mx-auto font-Bellefair text-xl text-white'>
      <header>
        <NavBar actualPage={'home'} />
      </header>
      <section className='grid grid-cols-1 p-4 mt-[100px] w-auto justify-items-center place-items-center gap-10 lg:grid-cols-2 lg:mt-[100px]'>
        <div className='flex flex-col gap-4 max-w-[450px]'>
          <div className='mx-auto flex flex-col items-center gap-4 lg:items-start'>
            <span className='font-Barlow font-normal text-secondarycolor tracking-[4.72px]'>SO, YOU WANT TO TRAVEL TO</span>
            <h1 className='text-8xl md:text-[150px]'>
              SPACE
            </h1>
          </div>
          <div>
            <p className='text-secondarycolor text-center text-sm lg:text-xl lg:text-left'>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
        </div>
        <div className='mx-auto realative flex justify-center items-center'>
          <div className='lg:button-bg'>
            <Link to={"/destination"} className='home-button'>
              Explore
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home