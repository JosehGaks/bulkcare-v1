import Link from "next/link";
import Channels from "./Channels";

const CallToAction = () => {
  return (
<section className="py-18 bg-transparent pb-0 pt-0 lg:py-20 lg:pb-0 lg:pt-0">
  <div className="container mx-auto z-10 sm:px-0 relative">
    <div className="max-w-[760px] w-fit space-y-6 lg:space-y-10 mx-auto">
      <div className="relative">
        <h1 className="relative text-5xl font-light xl:leading-none leading-tight mx-auto sm:leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-center">
          <span className="inline">The future of your industry </span>
          <span className="highlight text-gradient-2023">starts here.</span>
        </h1>
      </div>
      <div className="justify-center lg:pt-4 flex items-center gap-x-6">
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Get Started
      </button>
      </div>
    </div>
  </div>
</section>

  );
};

export default CallToAction;
