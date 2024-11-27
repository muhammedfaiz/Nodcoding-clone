import progressLine from "../assets/progress-line.svg";
import progressLine2 from "../assets/progress-line2.svg";
import progressLine3 from "../assets/progress-line3.svg";
import courseReport from "../assets/course-report.svg";
import careerKarma from "../assets/career-karma.svg";
import switchup from "../assets/switchup.svg";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <div>
      <h2 className="text-6xl md:text-[10rem] lg:text-[12rem] font-semibold py-7 md:pb-4 px-7 text-[#3b3333]">
        Reviews
      </h2>
      <div className="mb-4 flex flex-col">
        <div className="flex gap-2 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-[50%]"
          >
            <img src={progressLine} className="" />
          </motion.div>
          <div className="w-[50%] relative lg:left-10">
            <img
              src={courseReport}
              className="w-[5rem] md:w-[10rem] lg:w-[8rem]"
            />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className="w-[50%] relative right-6 md:right-10 lg:right-20"
          >
            <img src={progressLine2} className="" />
          </motion.div>
          <div className="w-[50%] relative right-4 lg:right-0">
            <img
              src={careerKarma}
              className="w-[5rem] md:w-[10rem] lg:w-[8rem]"
            />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            className="w-[50%] relative right-10 md:right-20 lg:right-36"
          >
            <img src={progressLine3} className="" />
          </motion.div>
          <div className="w-[50%] relative right-8">
            <img src={switchup} className="w-[5rem] md:w-[12rem] lg:w-[8rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
