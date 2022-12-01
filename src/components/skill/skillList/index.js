import React from "react";

const skillList = (props) => {
  const { icons } = props;
  return icons.map((icon, index) => (
    <img key={index} className="w-32 pl-4 pt-12" src={icon} alt="skill.jpg"></img>
  ));
};

export default skillList;
