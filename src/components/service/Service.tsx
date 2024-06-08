import React from "react";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import connected from "../../assets/connected.png"
import wedo from "../../assets/wedo.png"
import web from "../../assets/web.png"

export default function Service() {
    const colors = ["bg-tertiary", "bg-quaternary"]
  const datas = [
    {
      img: web,
      title: "Website development",
      description:
        "We specialize in crafting bespoke websites that seamlessly blend creativity with functionality, ensuring your online presence stands out in today's competitive landscape.",
    },
    {
      img: web,
      title: "App development",
      description:
        "As a premier app development company, we specialize  in translating your ideas into dynamic mobile applications that captivate audiences and drive business growth.",
    },
    {
      img: connected,
      title: "Collaborative to the core",
      description:
        "Your site is not complete with only landings. Get essential inner pages using our ready demos.",
    },
    {
      img: wedo,
      title: "Unlimited ways to work",
      description:
        "Your site is not complete with only landings. Get essential inner pages using our ready demos.",
    },
  ];
  return (
    <main className="w-full min-h-screen lg:py-32 md:py-40 font-poppins ">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center text-center gap-4 ">
          <p className="text-primary text-5xl font-semibold">What we offer</p>
          <p className="text-xl">
            What makes us different from others? We give holistic solutions
            <br /> with strategy, design & technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 py-6">
          {datas.map(({ img, title, description, } ,index) => (
            <div key={title} className="flex flex-col border gap-6 rounded-2xl">
              <div className={`flex gap-4 items-center justify-start border p-4 bg-primary text-secondary rounded-2xl`}>
               <img src={img} className="w-12" />
                <p className="text-2xl text-secondary font-semibold">{title}</p>
              </div>
              <p className="max-w-md px-6 pb-4">{description}</p>
              <div className="flex gap-4 items-center justify-start px-6"><button className="flex items-center justify-start gap-4">
                Learn more <FaArrowRight />
              </button></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
