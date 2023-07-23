import { motion } from "framer-motion";
import burstBloadIcons from "/icons/burst-bloat.svg";

const BurstBload: React.FC = () => {
  return (
    <div style={{ overflow: "scroll" }}>
      <motion.img
        src={burstBloadIcons}
        alt="about shape vickyadrii"
        className="absolute -z-10 top-0 md:right-4 right-5 md:w-auto w-6"
      />
    </div>
  );
};

export default BurstBload;
