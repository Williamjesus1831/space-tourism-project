import NavBar from '../components/common/NavBar'

const Destination = () => {
  return (
    <main className='bg-destinationBgMobile md:bg-destinationBgTablet lg:bg-destinationBgDesktop bg-cover w-full h-[100vh] pt-4 md:pt-8 mx-auto font-Bellefair text-xl text-white'>
      <header>
        <NavBar actualPage={'destination'} />
      </header>
    </main>
  )
}

export default Destination