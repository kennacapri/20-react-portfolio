import React from "react";
import notetaker from "../assets/projects/notetaker.jpg";
import password from "../assets/projects/password.jpg";
import techblog from "../assets/projects/techblog.jpg";
import quiz from "../assets/projects/quiz.jpg";
import weather from "../assets/projects/weather.jpg";
import portfolio from "../assets/projects/portfolio.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen bg-[#DBC4A9] text-[#253031] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#0a8754] text-[#253031]">
            Work
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>

        {/* container */}
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
          {/* Grid item */}
          <div
            style={{
              backgroundImage: `url(${notetaker})`,
              backgroundSize: `100% 100%`,
            }}
            className="shadow-lg shadow-[#A27F67] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/*hover effect*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#253031] tracking-wider">
                Express Note Taker
              </span>
              <div className="pt-8 text-center">
                <a href="https://kenna-11-note-taker.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a8754] text-[#253031] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennacapri/11-Note-Taker">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a8754] text-[#253031] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${password})` }}
            className="shadow-lg shadow-[#A27F67] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/*hover effect*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#253031] tracking-wider">
                JavaScript Password Generator
              </span>
              <div className="pt-8 text-center">
                <a href="https://kennacapri.github.io/03-Challenge-Password/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a8754] text-[#253031] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennacapri/03-Challenge-Password">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a8754] text-[#253031] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${techblog})` }}
            className="shadow-lg shadow-[#A27F67] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/*hover effect*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#253031] tracking-wider">
                MVC Tech Blog
              </span>
              <div className="pt-8 text-center">
                <a href="https://technology-blog-for-nerds.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a8754] text-[#253031] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennacapri/14-MVC-techblog">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a8754] text-[#253031] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${quiz})` }}
            className="shadow-lg shadow-[#A27F67] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/*hover effect*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#253031] tracking-wider">
                API Code Quiz
              </span>
              <div className="pt-8 text-center">
                <a href="https://kennacapri.github.io/04-Challenge-CodeQuiz/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a8754] text-[#253031] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennacapri/04-Challenge-CodeQuiz">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a8754] text-[#253031] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${weather})` }}
            className="shadow-lg shadow-[#A27F67] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/*hover effect*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#253031] tracking-wider">
                Server-Side API Weather Dashboard
              </span>
              <div className="pt-8 text-center">
                <a href="https://kennacapri.github.io/06-challenge-weather/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a8754] text-[#253031] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennacapri/06-challenge-weather">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a8754] text-[#253031] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="shadow-lg shadow-[#A27F67] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/*hover effect*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#253031] tracking-wider">
                React Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a8754] text-[#253031] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennacapri/20-react-portfolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a8754] text-[#253031] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
