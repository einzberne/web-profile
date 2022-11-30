import React, { useState } from "react";
import profileImg from "assets/img/profile.jpg";

export const Home = () => {
  const [obj, SetObj] = useState({
    datas: ["skill", "experience", "education"],
    activeLink: "skill",
  });

  const dateDiff = () => {
    const d1 = new Date("2019-08-01");
    const d2 = new Date();
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();

    const year = Math.floor(months / 12);
    const month = months % 12;
    return year + " years " + month + " months";
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="text-left">
          <p className="text-5xl">Hello, I'm Thamatis</p>
          <p className="text-5xl">I am a Software Engineer</p>
          <br />
          <p className="text-xl text-gray-300">
            {dateDiff()}
          </p>
          <div className="btn-shadow px-6 py-2 text-rose-300 cursor-pointer rounded-3xl inline-block mt-8">
            Download My Resume!
          </div>
        </div>
        <div className="home-img m-auto">
          <div className="img-box inner-shadow">
            <img
              src={profileImg}
              className="outer-shadow profileImg"
              alt="profile"
            />
          </div>
        </div>
      </div>
      {/* <div className="about-tabs">
        <TabProfile obj={obj} SetObj={SetObj}></TabProfile>
      </div>
      <div>
        {obj.activeLink === "skill" ? <Skill></Skill> : <></>}
        {obj.activeLink === "experience" ? <Experience></Experience> : <></>}
        {obj.activeLink === "education" ? <Education></Education> : <></>}
      </div> */}
    </div>
  );
};
