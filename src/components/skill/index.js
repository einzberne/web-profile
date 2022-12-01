import React from "react";
import SkillCate from "./skillCate";
import jsImg from "assets/img/skill/javascript.png";
import tsImg from "assets/img/skill/typescript.png";
import cSharpImg from "assets/img/skill/cSharp.png";
import htmlImg from "assets/img/skill/html.png";
import cssImg from "assets/img/skill/css.png";
import reactImg from "assets/img/skill/react.png";
import nextjsImg from "assets/img/skill/nextjs.png";
import vueImg from "assets/img/skill/vue.png";
import nodejsImg from "assets/img/skill/nodejs.png";
import netcoreImg from "assets/img/skill/netcore.png";
import gitImg from "assets/img/skill/git.png";
import dockerImg from "assets/img/skill/docker.png";
import kubernetesImg from "assets/img/skill/kubernetes.png";
import mssqlImg from "assets/img/skill/mssql.png";
import mysqlImg from "assets/img/skill/mysql.png";
import mariadbImg from "assets/img/skill/mariadb.png";
import mongodbImg from "assets/img/skill/mongodb.png";

const Skill = () => {
  const datas = [
    {
      title: "Programming Languages",
      icons: [jsImg, tsImg, cSharpImg, htmlImg, cssImg],
    },
    {
      title: "Frameworks",
      icons: [reactImg, nextjsImg, vueImg, nodejsImg, netcoreImg],
    },
    {
      title: "Platforms",
      icons: [gitImg, dockerImg, kubernetesImg],
    },
    {
      title: "Databases",
      icons: [mssqlImg, mysqlImg, mariadbImg, mongodbImg],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {datas.map((data, index) => (
        <SkillCate
          key={index}
          title={data.title}
          icons={data.icons}
        ></SkillCate>
      ))}
    </div>
  );
};

export default Skill;
