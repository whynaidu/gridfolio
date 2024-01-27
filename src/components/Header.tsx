import React from 'react';

export const Header = () => {
  return (
    <div className=" lg:h-20 items-center w-full flex justify-center">
      <div className="  grid grid-cols-6 gap-4 w-full items">
        <div className="  flex justify-center items-center">Logo</div>
        <div className=" col-start-2 col-span-4 items-center flex justify-center">
          <ul className="  flex justify-center space-x-16">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="  flex justify-end">
          <button
            type="button"
            className="rounded-full bg-[#fcfaf4] px-5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};
