
import {  Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { CiSearch } from "react-icons/ci";


export default function Nav() {
  return (
    <main className='w-full  h-14 fixed z-20 bg-primary bg-blend-saturation'>
      <nav className='flex gap-40 items-center justify-center h-14'>
        <img src={logo} alt="logo"  className='w-32'/>
        <ul className='text-gray-200 flex gap-14'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/services"><li>Services</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/contacts"><li>Contact</li></Link>
        </ul>
        
        <div className='flex items-center justify-center gap-4'>
        <CiSearch size={24} className='text-white'/>
        <button className='bg-secondary text-gray-600 font-semibold px-6 py-3 rounded-md'>Get Started</button>
        </div>
      </nav>
    </main>
  )
}
