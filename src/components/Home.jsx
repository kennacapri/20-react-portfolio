import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../assets/profile.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#A27F67]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-[#253031]">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-black">
              Kenna Fackrell
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#253031]">
              I'm a Full Stack Developer
            </h2>
            <p className="py-4 max-w-[700px]">
              I'm a passionate developer ready to grow and learn new skills.
            </p>
            <div>
              <Link to="projects" smooth={true} duration={500}>
                <button className="text-black bg-[#0a8754] border-none border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EBE9E9] ">
                  View Work
                  <HiArrowNarrowRight />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              className="profile-image"
              style={{
                backgroundImage: `url(${profile})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                borderRadius: `50%`,
                width: `300px`,
                height: `300px`,
                boxShadow: `0px 0px 10px rgba(0,0,0,0.5)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
