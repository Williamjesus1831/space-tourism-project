import NavBar from '../components/common/NavBar'

const technology = () => {
  return (
    <main className='bg-technologyBgMobile md:bg-technologyBgTablet lg:bg-technologyBgDesktop bg-cover w-full h-[100vh] pt-4 md:pt-8 mx-auto font-Bellefair text-xl text-white'>
      <header>
        <NavBar actualPage={'technology'} />
      </header>
    </main>
  )
}

export default technology