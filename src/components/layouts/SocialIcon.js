import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const SocialIcon = ({
  Icon,
  width = 25,
  height = 25,
  fill = "currentColor",
  link,
  delay,
}) => {
  return (
    <motion.div
      initial={{ transform: "scale(0)" }}
      animate={{ scale: [0, 1, 1.5, 1] }}
      transition={{ type: "spring", duration: 1, delay: 1 + delay }}
    >
      <a
        style={{ color: "inherit" }}
        target="_blank"
        rel="noreferrer"
        href={link}
      >
        <Icon width={width} height={height} fill={fill} />
      </a>
    </motion.div>
  );
};

export default SocialIcon;
