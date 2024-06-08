import social from "../../assets/peoples.png"
import cross from "../../assets/projectdone.png"

export default function Grow() {
  return (
    <main className='flex items-center justify-center '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:px-16 md:px-10 px-6'>

         <div className='gap-4 pr-6'>
            <p className="text-2xl ">How it work</p>
            <p className='text-5xl text-primary font-bold py-4'>Grow your online business now</p>
            <p>Discover powerful features to boost your productivity. You are always welcome to visit our digital den. Professional in their craft! All products were super amazing with strong attention to details, components, and overall vibe.</p>
         </div>

         <div className="border w-96 h-96 p-6 rounded-md mr-6">
             <img src={cross} alt="crossplatform" className="p-3 shadow-md rounded-md" />
             <p className="py-4 text-primary text-3xl font-semibold">Cross Platform</p>
             <p className="flex items-center justify-center">Discover powerful features to boost your productivity. You are always welcome to visit our digital den. Professional in their craft! All products were super amazing with strong attention to details, components.</p>
         </div>
        
         <div className="border p-6 h-96 rounded-md w-96">
             <img src={social} alt="crossplatform"
             className="p-3 shadow-md rounded-md"
             />
             <p className="py-4 text-primary text-3xl font-semibold">Soical media</p>
             <p className="flex items-center justify-center">Discover powerful features to boost your productivity. You are always welcome to visit our digital den. Professional in their craft! All products were super amazing with strong attention to details, components, and overall vibe.</p>
         </div>

      </div>
    </main>
  )
}
