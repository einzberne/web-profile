import React from "react";

const TabProfile = (props) => {
  const { obj, SetObj } = props;

  const handleClick = (data) => {
    SetObj((prev) => {
      return {
        ...prev,
        activeLink: data,
      };
    });
  };

  return obj.datas.map((data, index) => {
    return (
      <span
        key={index}
        className={
          "tab-item " +
          (data === obj.activeLink ? "active outer-shadow text-rose-300" : "")
        }
        onClick={() => handleClick(data)}
      >
        {data}
      </span>
    );
  });
};

export default TabProfile;
