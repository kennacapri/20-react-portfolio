import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#A27F67] text-[#253031] p-4 flex justify-center items-center"
    >
      <form
        method="POST"
        action="https://getform.io/f/5e9560f0-e3b5-495b-a6b8-ee9fc081e0a7"
        className="flex flex-col max-w-[600px] w-full h-full justify-center "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#0a8754] text-[#253031]">
            Contact
          </p>
          <div>
            <br></br>
          </div>
          <p className="text-[#253031]">
            Submit the form below or shoot me an email - kennac28@gmail.com
          </p>
        </div>
        <input
          className="bg-[#DBC4A9]"
          type="text"
          placeholder=" Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#DBC4A9]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#DBC4A9]"
          p-2
          name="message"
          rows="10"
          placeholder=" Message"
        ></textarea>
        <button className="text-[#253031] border-2 hover:bg-[#0a8754] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate!
        </button>
      </form>
    </div>
  );
};

export default Contact;
