import React from "react";
import WorkImg from '../assets/WorkImg.jpg'
// import WorkImg2 from '../assets/WorkImg2.jpg'
// import WorkImg3 from '../assets/WorkImg3.jpg'
// import WorkImg4 from '../assets/WorkImg4.jpg'
// import WorkImg5 from '../assets/WorkImg5.jpg'
// import WorkImg6 from '../assets/WorkImg6.jpg'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen bg-[#DBC4A9] text-[#253031] '>
       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#0a8754] text-[#253031]'>Work</p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='shadow-lg shadow-[#A27F67] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/*hover effect*/}
            <div>
              <span>

              </span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
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
