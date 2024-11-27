import C from "../assets/C.svg";
import O from "../assets/O.svg";
import D from "../assets/D.svg";
import I from "../assets/I.svg";
import N from "../assets/N.svg";
import G from "../assets/G.svg";
import bootcamp from "../assets/bootcamp.svg";
import handle from "../assets/handle.svg";
const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-end px-4 mt-24 w-full h-[21rem] lg:h-[19rem]">
        <div className="relative z-10 left-8 top-20 md:top-28 md:left-28 lg:top-52 lg:left-44">
          <img src={C} className="h-28 relative top-8 right-6 z-10 md:right-10 md:top-7 md:h-32 lg:h-48 lg:right-20" />
          <img src={handle} className="h-72 z-30 relative lg:h-[20rem]" />
        </div>
        <div className="relative z-10 left-8 top-20 md:top-28 md:left-24 lg:top-52 lg:left-40">
          <img src={O} className="h-28 relative top-8 right-6 z-10 md:right-10 md:top-4 md:h-32 lg:h-48 lg:right-20" />
          <img src={handle} className="h-[18rem] z-30 relative lg:h-[20rem]" />
        </div>
        <div className="relative z-10 left-8 top-20 md:top-28 md:left-20 lg:top-52 lg:left-32">
          <img src={D} className="h-28 relative top-8 right-6 z-10 md:h-32 md:right-10 md:top-4 lg:h-48 lg:right-16" />
          <img src={handle} className="h-[18rem] z-30 relative lg:h-[20rem]" />
        </div>
        <div className="relative z-10 left-4 top-20 md:top-28 md:left-12 lg:top-52 lg:left-16">
          <img src={I} className="h-28 relative top-8 right-1 z-10 md:h-32 md:top-4 md:right-4 lg:h-48 lg:right-5" />
          <img src={handle} className="h-[18rem] z-30 relative lg:h-[20rem]" />
        </div>
        <div className="relative z-10 left-10 top-20 md:top-24 md:left-16 lg:top-48 lg:left-24">
          <img src={N} className="h-40 relative top-[4.5rem] right-6 z-10 md:h-44 md:right-12 lg:h-52 lg:right-16 lg:top-20" />
          <img src={handle} className="h-[18rem] z-30 relative lg:h-[20rem]" />
        </div>
        <div className="relative z-10 top-16 left-4 md:top-20 md:left-1 lg:top-48 lg:left-8">
          <img src={G} className="h-40 relative top-12 right-6 z-10 md:h-44 md:right-16 md:top-6 lg:h-52 lg:right-20" />
          <img src={handle} className="h-[18rem] z-30 relative lg:h-[20rem]" />
        </div>
      </div>
      <div className="relative w-52 left-20 bottom-32 bg-[#fdfaf5] md:w-80 md:bottom-24 md:left-52 lg:w-48 lg:bottom-8 lg:left-[44rem]">
        <img src={bootcamp} />
      </div>
      <div className="bg-white lg:hidden relative z-40 px-8 flex flex-col pt-4">
        <h1 className="text-[#3b3333] font-semibold text-4xl text-start w-[70%] md:text-6xl md:w-[55%]">
          10 weeks to start a new career in Tech
        </h1>
        <p className="py-4 text-gray-500 font-medium md:w-[70%]">
          Unlock the door to the future with hands-on skills in Python, the most
          user-friendly and versatile programming language. Build projects in
          Data Analytics, Machine Learning, and Generative AI. Take your first
          step to make a change and apply today.
        </p>
      </div>
      <div className="bg-white hidden relative z-40 px-10 lg:flex pt-6 min-w-full justify-between h-[10.5rem]">
        <div className="w-[50%] h-full">
        <h1 className="text-[#3b3333] font-semibold text-8xl">
          10 weeks 
        </h1>
        </div>
        <div className="w-[50%]">
        <p className="font-semibold text-[#3b3333]">To start a new career in Tech</p>
        <p className=" text-gray-500 font-medium pt-1">
          Unlock the door to the future with hands-on skills in Python, the most
          user-friendly and versatile programming language. Build projects in
          Data Analytics, Machine Learning, and Generative AI. Take your first
          step to make a change and apply today.
        </p>
        </div>
      </div>
    </>
  );
};
export default Hero;
