import eye from "../assets/eye.svg";
import image from "../assets/image.png";
import star from "../assets/star.svg";

const Experience = () => {
  return (
    <>
      <div className="md:flex md:p-8 md:pt-28 lg:p-8">
        <div className="md:w-[50%]">
          <div>
            <img
              src={eye}
              className="h-32 z-40 relative top-14 left-16 md:left-0 lg:h-56 lg:left-14"
            />
            <div className="w-full h-16 bg-[#395cdb]"></div>
          </div>
          <div className="bg-[#ffbaba] pb-8 md:hidden">
            <h2 className="text-4xl text-[#3b3333] font-semibold px-4 pt-5 pb-2">
              The Nod Coding Experience
            </h2>
            <img src={image} className="p-5" />
          </div>
          <div className="bg-[#ffd37d] w-full hidden md:block">
            <img src={image} className="p-16" />
          </div>
        </div>
        <div className="md:w-[50%] hidden md:block">
          <div className="bg-[#ffbaba] min-w-full  px-7 md:h-48 flex justify-center items-center md:relative md:right-16 rounded-oneside lg:right-0 lg:top-[6rem]">
            <h2 className="text-4xl text-[#3b3333] font-semibold">
              The Nod Coding Experience
            </h2>
          </div>
          <div className="p-5 mt-16 flex gap-2 lg:mt-[20rem] lg:p-16 lg:justify-center">
            <div className="bg-[#ffbaba] w-10 h-4 lg:w-8 rounded mt-3 rotate-45"></div>
            <p className="flex justify-center text-[#3b3333] font-semibold text-2xl text-balance lg:text-3xl">
              Watch how this transformative learning experience will set you on
              a new path.
            </p>
          </div>
        </div>
      </div>
      <div className="w-16 relative bottom-8 left-40 md:w-28 md:bottom-[5.5rem] md:left-[20.5rem] lg:left-[36rem]">
        <img src={star} alt="" />
      </div>
    </>
  );
};
export default Experience;
