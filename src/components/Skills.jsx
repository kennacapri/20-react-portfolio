import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#A27F67]">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#0a8754] text-[#253031] ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-center py-6">
          <div className="shadow-md shadow-[#DBC4A9] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#DBC4A9] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#DBC4A9] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-4"
              src={Javascript}
              alt="HTML icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#DBC4A9] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={Node} alt="HTML icon" />
            <p className="my-4">NODE</p>
          </div>
          <div className="shadow-md shadow-[#DBC4A9] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#DBC4A9] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
