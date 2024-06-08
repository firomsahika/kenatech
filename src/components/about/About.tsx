import React from 'react'
import followers from "../../assets/followers.png"
import happyclients from "../../assets/happyclient.png";
import projectdone from "../../assets/projectdone.png";
import globalbranch from "../../assets/globalbranch.png";
import conference from "../../assets/conference.png"

export default function About() {
    const datas = [
        {
           img: followers,
           numbers:"406k",
           title:"Social followers"
        },
       
         {
            img: happyclients,
            numbers:"25k",
            title:"Happy Clients"
         },
         {
            img: projectdone,
            numbers:"756 +",
            title:"Projects done"
         },
         {
            img: globalbranch,
            numbers:"100+",
            title:"Global Branch"
         },
         {
            img: conference,
            numbers:"240+",
            title:"Conference"
         },
         
    ]
  return (
    <main className='w-full min-h-screen bg-secondary  font-poppins py-20'>
        <div className='flex flex-col items-center justify-center gap-20 lg:py-14 '>
            <div className='flex flex-col items-center justify-center text-center gap-4 '>
                 <button className='bg-primary px-6 py-3 text-secondary rounded-md'>Who we are</button>
                <p className='text-5xl py-3 font-semibold text-primary text-center'>We are a digital agency that<br/> tackles all your online challenges.</p>
                <p>Accessible to all, our web and app development solutions foster seamless <br/> interaction, information access, and informed decision-making.</p>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row gap-6 md:gap-24 lg:gap-32 rounded-2xl border px-20 items-center justify-center shadow-xl bg-white py-10  '>
                {
                    datas.map(({img, title, numbers}) =>(
                        <div className='flex flex-col items-center justify-center gap-6'>
                            <div className='bg-teal-100 items-center justify-center p-3 rounded-md'>
                            <img src={img} alt="image" className='w-8  ' />
                            </div>
                            <p className='text-5xl font-semibold text-primary'>{numbers}</p>
                            <p>{title}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    </main>
  )
}
