import { Fragment, useState } from "react";
import { dataNavbar } from "@data/dummyData";
import ellipse from "/images/ellipse.svg";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const containerNavbar = {
    hidden: { opacity: 1, top: -500 },
    visible: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.8
      },
    },
  };

  return (
    <Fragment>
      <img src={ellipse} alt="ellipse vickyadrii" className="absolute top-0" />
      <motion.nav
        className="flex justify-center top-0 fixed left-1/2 -translate-x-1/2 m-5"
        variants={containerNavbar}
        initial="hidden"
        animate="visible"
      >
        <motion.ul  className="flex items-center gap-24 px-20 py-5 bg-white/70 drop-shadow-sm hover:drop-shadow-lg transition-all duration-200 rounded-full">
          {dataNavbar.map(({ id, navigate, navigate_url }) => (
            <li
              key={id}
              className="text-primary opacity-30 hover:opacity-80 font-semibold cursor-pointer"
            >
              {navigate}
            </li>
          ))}
        </motion.ul>
      </motion.nav>
    </Fragment>
  );
};

export default Navbar;
