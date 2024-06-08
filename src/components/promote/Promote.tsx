
import author1 from "../../assets/author1.png"
import author2 from "../../assets/author2.png"
import author3 from "../../assets/author3.png"


export default function Promote() {
  return (
    <main className='w-full items-center justify-center font-poppins '>
      <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center md:gap-14 lg:gap-16 py-20 px-6'>

        <div>
            <p>____Get Started</p>
            <p className='text-5xl text-primary font-semibold leading-tight'>Promotes your business<br /> no matter what you do</p>
            <p className='leading-6'>Collaborate, plan projects and manage resources <br /> with powerful features that your whole team can use. <br />The latest news, tips and advice to help you run your<br /> business with less fuss</p>
        </div>

        <div className='flex flex-col lg:flex-row lg:px-32 gap-6 pt-4'>
           <div className='flex relative'>
           <img src={author1} alt="author1" className=' w-20 rounded-full absolute right-32 ' />
           <img src={author2} alt="author2" className=' w-20 rounded-full absolute right-20' />
           <img src={author3} alt="author3" className='w-20 rounded-full  right-10 absolute' />
           <button className='hidden lg:flex md:flex z-10 rounded-full bg-white px-4 py-4 text-black shadow-md '>2k+</button>
           </div>

           <div className='pt-20 md:pt-0 lg:pt-0'>
            <p>Join thousands of users <br />in using our platform!</p>
           </div>
        </div>

      </div>
    </main>
  )
}
