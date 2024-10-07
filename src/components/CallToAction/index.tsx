import Link from "next/link";
import Channels from "./Channels";
import GetStarted from "../Common/GetStarted";

const CallToAction = () => {
  return (
<section className="py-18 bg-transparent pb-0 pt-0 lg:py-20 lg:pb-0 lg:pt-0 relative">
<div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 object-cover w-full h-full transform scale-y-[-1] opacity-70 pointer-events-none"
          >
            <source
              src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
  <div className="container mx-auto z-10 sm:px-0 relative p-4">
    <div className="max-w-[760px] w-fit space-y-6 lg:space-y-10 mx-auto">
      <div className="relative">
      <h2 className="text-4xl text-center tracking-tighter font-geist  bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent   mx-auto md:text-6xl">
              The future of your industry {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">
                starts here.
              </span>
      </h2>
      </div>
      <div className="justify-center lg:pt-4 flex items-center gap-x-6">
      <GetStarted />
      </div>
    </div>
  </div>
</section>

  );
};

export default CallToAction;
