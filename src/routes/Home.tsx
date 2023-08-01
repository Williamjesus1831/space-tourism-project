import React from 'react'
import NavBar from '../components/common/NavBar'

const Home = () => {
  return (
    <main className='bg-homeBgMobile md:bg-homeBgTablet lg:bg-homeBgDesktop bg-cover w-full h-[100vh] pt-4 md:pt-8 mx-auto font-Bellefair text-xl text-white'>
      <header>
        <NavBar actualPage={'home'} />
      </header>
    </main>
  )
}

export default Home