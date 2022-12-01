import React from "react";
import SkillList from "components/skill/skillList";

const SkillCate = ({ title, icons }) => {
  return (
    <>
      <div className="outer-shadow p-8">
        <p className="text-3xl">{title}</p>
        <div className="flex flex-wrap">
          <SkillList icons={icons}></SkillList>
        </div>
      </div>
    </>
  );
};

export default SkillCate;
