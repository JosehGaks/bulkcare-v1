"use client";
import { cn } from "@/lib/utils";
import SectionTitle from "../Common/SectionTitle";
import Marquee from "../Testimonials/Marquee";
import { clientsData } from "./clientsData";
import { Sparkles } from "../ui/sparkles";
import Image from "next/image";

const Logo = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className={cn('h-12 w-12 cursor-pointer')}>
      <Image src={img} alt={name} width={150} height={150}/>
    </div>
  )
}
function Clients() {
  return (
    <>
      <div className="overflow-hidden bg-black pt-20">
        <div className="container mx-auto mt-32 w-screen">
          <div className="text-center text-3xl text-white">
            <span className="text-indigo-200">Trusted by experts.</span>

            <br />

            <span>Used by the leaders.</span>
          </div>
          <div className="mt-14 flex w-full">
          <Marquee className="[--gap:3rem]">
          {clientsData.map(({title,logo}, idx) => (
            <Logo name={title} img={logo} key={idx}/>
          ))}
        </Marquee>
          </div>
        </div>
        <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_80%)] before:opacity-100 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div>

          <Sparkles
            density={800}
            speed={1}
            size={1.1}
            color="#FFFFFF"
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
      </div>
    </>
  )
}

export default Clients
