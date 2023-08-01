import { useState } from 'react'
import logo from "../../assets/images/shared/logo.svg"
import iconHamburger from "../../assets/images/shared/icon-hamburger.svg"
import iconClose from "../../assets/images/shared/icon-close.svg"
import { Link } from 'react-router-dom'

const NavBar: React.FC<{ actualPage: string }> = ({ actualPage }) => {
  const [mobileMenuState, setMobileMenuState] = useState<boolean>(false)

  function handleMobileMenu(): void {
    return setMobileMenuState(!mobileMenuState)
  }

  return (
    <nav className='relative w-full flex justify-between items-center pl-4 font-Barlow'>
      <div className='hidden md:block absolute h-[1px] bg-graycolor w-[90%] right-[0] '></div>
      <div className='cursor-pointer'>
        <Link to={"/"}>
          <img src={logo} width={48} alt="logo Icon" />
        </Link>
      </div>
      <ul className='hidden md:flex w-[70%] max-w-[1024px] justify-center gap-[50px] bg-white bg-opacity-5 backdrop-blur-[1.5rem]'>
        <li className={`py-[39px] cursor-pointer border-white ${actualPage === "home" ? "border-b-[3px]" : ""}`}>
          <Link to={"/"} className='tracking-[2.7px] uppercase'><span className='inline-block md:hidden lg:inline-block font-bold mr-[11px]'>00</span>Home</Link>
        </li>
        <li className={`py-[39px] cursor-pointer border-white ${actualPage === "destination" ? "border-b-[3px]" : ""}`}>
          <Link to={"/destination"} className='tracking-[2.7px] uppercase'><span className='inline-block md:hidden lg:inline-block font-bold mr-[11px]'>01</span>Destination</Link>
        </li>
        <li className={`py-[39px] cursor-pointer border-white ${actualPage === "crew" ? "border-b-[3px]" : ""}`}>
          <Link to={"/crew"} className='tracking-[2.7px] uppercase'><span className='inline-block md:hidden lg:inline-block font-bold mr-[11px]'>02</span>Crew</Link>
        </li>
        <li className={`py-[39px] cursor-pointer border-white ${actualPage === "technology" ? "border-b-[3px]" : ""}`}>
          <Link to={"/technology"} className='tracking-[2.7px] uppercase'><span className='inline-block md:hidden lg:inline-block font-bold mr-[11px]'>03</span>Technology</Link>
        </li>
      </ul>
      <div className='block md:hidden mr-4 z-10' onClick={handleMobileMenu}>
        <img src={mobileMenuState ? iconClose : iconHamburger} alt="open menu" width={24} />
      </div>
      <div className={`bg-white bg-opacity-5 backdrop-blur-[1.5rem] pl-8 pt-[120px] right-0 top-0 h-full w-[60%] ${mobileMenuState ? "fixed  ease-in-out duration-500" : "fixed right-[-100%] ease-in duration-200"}`}>
        <ul className='flex flex-col gap-8'>
          <li className={`border-white ${actualPage === "home" ? "border--[4px] border-r" : ""}`}>
            <Link to={"/"} className='tracking-[2.7px] uppercase'><span className='inline-block md:hidden lg:inline-block font-bold mr-[11px]'>00</span>Home</Link>
          </li>
          <li className={`border-white ${actualPage === "destination" ? "border--[4px] border-r" : ""}`}>
            <Link to={"/destination"} className='tracking-[2.7px] uppercase'><span className='inline-block md:hidden lg:inline-block font-bold mr-[11px]'>01</span>Destination</Link>
          </li>
          <li className={`border-white ${actualPage === "crew" ? "border--[4px] border-r" : ""}`}>
            <Link to={"/crew"} className='tracking-[2.7px] uppercase'><span className='inline-block md:hidden lg:inline-block font-bold mr-[11px]'>02</span>Crew</Link>
          </li>
          <li className={`border-white ${actualPage === "technology" ? "border--[4px] border-r" : ""}`}>
            <Link to={"/technology"} className='tracking-[2.7px] uppercase'><span className='inline-block md:hidden lg:inline-block font-bold mr-[11px]'>03</span>Technology</Link>
          </li>
        </ul>
      </div>
    </nav >
  )
}

export default NavBar