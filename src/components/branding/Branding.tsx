import React from 'react'
import brand from "../../assets/brand.png"
import { FaAngleDoubleRight } from "react-icons/fa";



export default function Branding() {
  return (
    <main className='py-20 flex items-center justify-center font-poppins bg-secondary'>
      <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10 lg:gap-32 md:gap-28 px-6'>
         <div>
            <img src={brand} alt="brand" className='w-[25rem] lg:w-[35rem] md:[35rem] rounded-t-full' />
         </div>
         <div className='flex items-start justify-start flex-col gap-4'>
            <button className='bg-primary text-secondary font-semibold text-sm px-4 py-3 rounded-md'>Branding</button>
                
            <p className='text-4xl font-semibold text-primary'>Elevate Your Brand <br />with Customized  Web and App <br /> Development Solutions</p>
            <p>Building your branding website is crucial for establishing<br /> a strong online presence.  Whether you're a budding<br /> entrepreneur, a seasoned professional, or a growing business,<br /> your website serves as the cornerstone of your digital identity.</p>
            <div className='flex  items-start justify-center gap-4 '>
               <div className='flex flex-col items-start justify-center gap-4'>
               <p className='flex items-center justify-center gap-4'>< button className='bg-primary text-secondary  rounded-full px-6 py-4 text-bold ' >1</ button >E-commerce Branding</p>
                <p className='gap-4 flex items-center justify-center'>< button className='bg-primary text-secondary  rounded-full px-6 py-4 text-bold '  >2</ button >Restaurant Branding</p>
                <p className='gap-4 flex items-center justify-center'>< button className='bg-primary text-secondary  rounded-full px-6 py-4 text-bold ' >3</ button >Healthcare Branding</p>
               </div>
               <div className='flex flex-col items-start justify-center gap-4'>
               <p className='gap-4 flex items-center justify-center'>< button className='bg-primary text-secondary  rounded-full px-6 py-4 text-bold' >4</ button >Fashion Branding</p>
                <p className='gap-4 flex items-center justify-center'>< button className='bg-primary text-secondary  rounded-full px-6 py-4 text-bold ' >5</button>Technology Branding</p>
               </div>
            </div>
         </div>
      </div>
    </main>
  )
}
