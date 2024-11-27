import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";
import eye from "../assets/eye.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const getWidthValues = () => {
    if (screenWidth > 640) return ["-100%", "1px", "50%"];
    return ["-100%", "1px", "100%"];
  };
  return (
    <>
      <nav className="bg-white mx-5 lg:mx-8 flex justify-between items-center rounded-full z-50 sticky top-5">
        <img src={logo} alt="logo" className="py-3 px-8 h-12" />
        <div
          className={`lg:hidden w-14 h-14 flex flex-col items-center justify-center rounded-full cursor-pointer ${
            isOpen ? "bg-[#3658d3]" : "bg-[#70a2e1]"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-6 bg-white h-1 rounded my-1 duration-150 ${
              isOpen && "transform rotate-45 translate-y-1.5"
            }`}
          ></div>
          <div
            className={`w-6 bg-white h-1 rounded my-1 duration-150 ${
              isOpen && "transform -rotate-45 -translate-y-1.5"
            }`}
          ></div>
        </div>

        <ul className="hidden lg:flex justify-evenly items-center gap-12 font-semibold cursor-pointer">
          <li className="text-[#3b3333]">Bootcamp</li>
          <li className="text-[#3b3333]">B2B Courses</li>
          <li className="text-[#3b3333]">Contact</li>
          <li className="relative overflow-hidden px-8 py-3 bg-[#70a2e1] text-white rounded-3xl cursor-pointer">
            <span className="relative z-10">Apply now</span>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <motion.div
          initial={{
            width: "1px",
            height: "1px",
            opacity: 0,
          }}
          animate={{
            width: getWidthValues(),
            height: ["0px", "100%", "100%"],
            opacity: 1,
            transformOrigin: "top right",
          }}
          exit={{
            width: "1px",
            height: ["90%", "50%", "10%"],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            times: [0, 1],
          }}
          className={`bg-[#70a2e1] mx-3 mt-4 flex flex-col rounded-3xl w-2 md:relative left-[21rem]`}
        >
          <div className="pt-8 mb-20 lg:hidden">
            <ul className="flex flex-col gap-5 px-3 py-2 ml-5">
              <motion.li
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="text-gray-700 font-semibold text-4xl"
              >
                Home
              </motion.li>
              <motion.li
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="text-gray-700 font-semibold text-4xl"
              >
                Bootcamp
              </motion.li>
              <motion.li
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="text-gray-700 font-semibold text-4xl"
              >
                B2B Courses
              </motion.li>
              <motion.li
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="text-white font-semibold text-4xl"
              >
                Apply now
              </motion.li>
            </ul>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="flex items-center px-8 my-8 gap-5"
            >
              <img src={linkedin} alt="linkedin" />
              <img src={youtube} alt="youtube" />
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="flex lg:hidden"
          >
            <div className="bg-[#4565d9] h-20 w-full rounded-b-3xl">
              <img
                src={eye}
                alt="eye"
                className="relative -top-16 -right-8 h-36"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
export default Navbar;
