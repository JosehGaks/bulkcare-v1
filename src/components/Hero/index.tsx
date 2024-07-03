import Image from "next/image";
import Link from "next/link";
import styles from "./style";
import GetStarted from "./GetStarted";

const Hero = () => {
  const pink_gradiant = 'bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]'
  const white_gradiant = 'bg-white bg-opacity-60 filter blur-[750px]'
  const blue_gradiant = 'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]'
  const bg_discount_gradient = 'bg-gradient-to-tr from-gray-700 to-indigo-900'
  const text_gradient = ' bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text'

  return (
    <>
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} container`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          {/* <div className={`flex flex-row items-center py-[6px] px-4 ${bg_discount_gradient} rounded-[10px] mb-2`}>
            <img src={'https://i.imgur.com/5BZrGDw.png'} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div> */}

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black dark:text-white ss:leading-[100.8px] leading-[75px]">
            We handle your<br className="sm:block hidden" />{" "}
              <span className={`${text_gradient}`}>customers</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black dark:text-white ss:leading-[100.8px] leading-[75px] w-full">
          so you can handle your business.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black dark:text-white`}>
          Enhance your customer experience with our reliable and efficient customer support solutions. Focus on your core business while we take care of your customers
          </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          {/* <img src={'https://i.imgur.com/8RJDGMU.png'} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
          <Image src={'/images/hero/bulk_customer_care.webp'} alt="discount" width={1000} height={1000} className="w-[100%] h-[100%] relative z-[5] rounded-xl shadow-2xl" />

          {/* gradient start */}
          <div className={`absolute z-[0] w-[40%] h-[35%] top-0 ${pink_gradiant} `} />
          <div className={`absolute z-[1] w-[80%] h-[80%] rounded-full ${white_gradiant} bottom-40`} />
          <div className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 ${blue_gradiant}`} />
          {/* gradient end */}
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </section>
    </>

  );
};

export default Hero;
