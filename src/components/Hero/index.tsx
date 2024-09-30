import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Sparkles } from '@/components/ui/sparkles'
 
function index() {
  return (
    <>
      <main className=" h-screen  w-full  overflow-hidden bg-black text-white ">
        <section className="container mx-auto relative h-[90vh] mt-4 border border-white/10 w-full overflow-hidden rounded-2xl">
          <article className="grid gap-4 text-center relative z-10 pt-10">
            <span className="inline-block xl:text-base text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
              Early Access
            </span>
            <h1 className="2xl:text-6xl  xl:text-5xl text-5xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
              Become an Animation Expert <br /> Easily at Our Academy
            </h1>
            <span>
              Our expert-led courses are perfect for all skill levels. Gain{' '}
              <br />
              hands-on experience and create stunning animations <br /> effortlessly.
              Join us today!
            </span>
            <button className="border border-blue-400 w-fit p-2 px-4 rounded-md bg-blue-900/40 hover:bg-blue-900/60  backdrop-blur-2xl mx-auto text-white">
              Take The Course
            </button>
          </article>
 
          <div className="absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute">
            <Sparkles
              density={1800}
              speed={1.2}
              color="#48b6ff"
              direction="top"
              className="absolute inset-x-0 bottom-0 h-full w-full "
            />
          </div>
        </section>
      </main>
    </>
  )
}
 
export default index

export const Hero = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto relative mt-4 border border-white/10 w-full overflow-hidden rounded-2xl">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="relative z-10 flex gap-4 flex-col">
          <div>
            <Badge variant="outline">We&apos;re live!</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              This is the start of something!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight max-w-md text-left">
            We are a customer-centric, digitally empowered outsourcing partner, specializing in providing People-as-a-Service solutions to high-growth, innovative, and tech-forward companies.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="rounded-md aspect-rect">
          <img
            src="/images/hero/customer_care.png"
            alt="hero"
            className="rounded-md object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute">
            <Sparkles
              density={1800}
              speed={1.2}
              color="#48b6ff"
              direction="top"
              className="absolute inset-x-0 bottom-0 h-full w-full "
            />
          </div>
    </div>
  </div>
);