import React, { useState } from "react";
import profileImg from "assets/img/profile.jpg";
import Style from "./style";
import TabProfile from "components/tabProfile";
import Skill from "components/skill";
import Experience from "components/experience";
import Education from "components/education";

const Home = () => {
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
    return year + " years and " + month + " months";
  };
  return (
    <Style>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="text-left">
            <p className="text-5xl">Hello, I'm Thamatis</p>
            <p className="text-5xl">Software Engineer</p>
            <br />
            <p className="text-xl text-gray-300">
              I have experience working with web development for {dateDiff()}.
              My official skill is frontend based on React. However, I have
              developed websites with vue.js and node.js too. In my free time, I
              spend the most time learning a new skill which is useful for
              working and I was over the moon when I developed myself more than
              ever.
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
        <div className="about-tabs">
          <TabProfile obj={obj} SetObj={SetObj}></TabProfile>
        </div>
        <div>
          {obj.activeLink === "skill" ? <Skill></Skill> : <></>}
          {obj.activeLink === "experience" ? <Experience></Experience> : <></>}
          {obj.activeLink === "education" ? <Education></Education> : <></>}
        </div>
      </div>
    </Style>
  );
};

export default Home;
