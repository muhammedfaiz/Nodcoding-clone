import { motion, useAnimationControls } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const RunningLine = () => {
  const controls = useAnimationControls();
  const containerRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  const items = [...Array(5)].map((_, index) => (
    <div key={index} className="flex items-center gap-5" ref={(el) => {
      if (el && !itemWidth) {
        setItemWidth(el.offsetWidth);
      }
    }}>
      <h1 className="text-5xl md:text-[6rem] text-[#3b3333] font-semibold">Graduate Success Stories</h1>
      <div className="border-8 md:border-[.8rem] border-[#40c3a4] w-8 h-8 md:w-12 md:h-12 rotate-45 rounded-lg"></div>
    </div>
  ));

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const totalWidth = itemWidth * items.length;
    const animationDuration = (totalWidth / containerWidth) * 5; 

    if (containerWidth > 0 && itemWidth > 0) { 
      controls.start({
        x: `-${totalWidth}px`,
        transition: {
          repeat: Infinity,
          duration: animationDuration,
          ease: "linear",
        },
      });
    }
  }, [controls, items, itemWidth, containerRef]);

  return (
    <div className="relative w-full overflow-hidden flex items-center my-20 py-5" ref={containerRef}>
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        style={{ width: `${itemWidth * items.length}px` }}
        animate={controls}
      >
        {items}
        {items.slice(0, 1)}
      </motion.div>
    </div>
  );
};

export default RunningLine;