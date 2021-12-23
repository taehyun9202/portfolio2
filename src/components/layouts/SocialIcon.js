import React from "react";
import { NavLink } from "react-router-dom";

const SocialIcon = ({
  Icon,
  width = 25,
  height = 25,
  fill = "currentColor",
  link,
}) => {
  return (
    <div>
      <a
        style={{ color: "inherit" }}
        target="_blank"
        rel="noreferrer"
        href={link}
      >
        <Icon width={width} height={height} fill={fill} />
      </a>
    </div>
  );
};

export default SocialIcon;
