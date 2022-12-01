import React from "react";
import Style from "./style";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <Style>
      <div>
        <div className="timeline">
          <div className="row">
            <div className="timeline-item">
              <div className="timeline-item-inner outer-shadow">
                <FaGraduationCap
                  className="icon text-rose-300"
                  style={{ padding: "6px" }}
                />
                <span className="text-rose-300">2014 - 2018</span>
                <p className="text-xl">Bachelor of Mechanical Engineering</p>
                <i>King Mongkut's Institute of Technology Ladkrabang</i>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item-inner outer-shadow text-left">
                <FaGraduationCap
                  className="icon text-rose-300"
                  style={{ padding: "6px" }}
                />
                <span className="text-rose-300">2010 - 2013</span>
                <p className="text-xl">High School</p>
                <i>Lasalle College</i>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item-inner outer-shadow">
                <FaGraduationCap
                  className="icon text-rose-300"
                  style={{ padding: "6px" }}
                />
                <span className="text-rose-300">2007 - 2010</span>
                <p className="text-xl">Middle School</p>
                <i>Lasalle College</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default Education;
