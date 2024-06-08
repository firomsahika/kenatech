import hero from "../../../assets/hero.png"
import flexible from "../../../assets/flexible.png"
import connected from "../../../assets/connected.png"

export default function HeroImage() {
  const datas = [
    {
      img: connected,
      title: "Connected",
      description:"We come together wherever we are – across time zones, regions, offices and screens. You will receive support from your teammates anytime and anywhere."
    },
    {
      img: flexible,
      title: "Flexible",
      description:"We believe in your freedom to work when and how you work best, to help us all thrive. Only freedom and independent work can bring out the best in you."
    },
  ]

  return (
    <main className='bg-primary w-full h-screen flex items-start justify-center lg:py-14 md:py-6 py-4'>
      <div className='relative flex flex-col  justify-center  items-start   mx-auto'>

        <div className='flex flex-col gap-10   items-center justify-center  '>
            <img src={hero} alt="hero-img"
            className='w-[95%] lg:w-[85%] rounded-3xl'
            />
            <div className="lg:absolute md:absolute   md:bottom-6 lg:bottom-6 md:right-32 lg:right-32 grid grid-cols-1 lg:grid-cols-2  gap-4  px-4 lg:px-0">
              {
                datas.map(({img,title,description})=>(
                  <div key={title} className=" bottom-20  md:w-60 lg:w-60 bg-white gap-4 p-4  rounded-md ">
                    <img src={img} className="bg-teal-100 p-2 w-16"/>
                    <p className="text-md font-semibold " >{title}</p>
                    <p className="text-xs">{description}</p>
                  </div>
                ))
              }
            </div>
        </div>

        <div className="flex items-start justify-start gap-10 py-4 px-28">
        
            <p className='hidden md:flex lg:flex text-gray-200 py-6'>We're lively, not corporate. We have the energy and<br/> boldness of a startup and the expertise and<br/> pragmatism of a scale-up. All in one place.</p>

            
      
         <div>

         </div>
        </div>
      </div>
    </main>
  )
}
