

export default function HeroDescription() {
  return (
    <main className=" bg-primary w-full flex mx-auto items-center justify-center py-14">
      <div className="mx-auto px-10 lg:px-0  gap-14 flex-col md:flex-row lg:flex-row flex items-center justify-center lg:pt-10">
        <div className="text-secondary flex flex-col gap-4 text-center ">
            <p className=" font-semibold"><br /> Web and App Development Agency</p>
            <p className="text-5xl font-semibold leading-tight">Empowering Your<br /> Digital Presence with<br/> Innovative Solutions</p>
        </div>
        {/* <div className="flex justify-end ">
            <p className="text-gray-200 md:pt-20 lg:pt-40">We're lively, not corporate. We have the energy and boldness of a startup<br/> and the expertise and pragmatism of a scale-up. All in one place.</p>
        </div> */}
      </div>
    </main>
  )
}
