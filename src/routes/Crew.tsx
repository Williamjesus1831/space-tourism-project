import NavBar from '../components/common/NavBar'

const Crew = () => {
  return (
    <main className='bg-crewBgMobile md:bg-crewBgTablet lg:bg-crewBgDesktop bg-cover w-full h-[100vh] pt-4 md:pt-8 mx-auto font-Bellefair text-xl text-white'>
      <header>
        <NavBar actualPage={'crew'} />
      </header>
    </main>
  )
}

export default Crew