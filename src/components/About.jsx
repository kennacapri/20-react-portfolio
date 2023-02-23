import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#DBC4A9] text-[#253031]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#0a8754]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p> Hi. I'm Kenna. Welcome to my portfolio!</p>
          </div>
          <div>
            <p>
              {" "}
              My passion lies in developing top-notch software that enhances the
              quality of life for those in my community. With expertise in
              crafting software for a diverse range of clients, including
              individuals and small businesses, imagine having a software expert
              at your beck and call. What possibilities would open up for you?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
