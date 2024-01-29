import React from 'react';
import { CiLinkedin, CiTwitter } from 'react-icons/ci';
import { FaGithub, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div className=" w-full flex justify-center py-16">
      <div className="grid grid-row-2 w-full gap-16">
        <div className=" w-full grid grid-cols-5 gap-4">
          <div className=" col-span-2 rounded-3xl">
            <div className="grid grid-rows-3 h-min">
              <div className="">
                <p className="text-5xl mb-8 ">Get in Touch ✨</p>
                <p className="text-2xl w-10/12">
                  I’m always open to collaborate on a project or hear about an
                  opportunity!{' '}
                </p>
              </div>
              <div className=" flex items-center">
                <p className=" text-xl w-1/2">
                  JUST WANT TO EMAIL ME? hello@andrew.com
                </p>
              </div>
              <div className=" flex items-end text-5xl space-x-14 ">
                <FaGithub />
                <CiLinkedin />
                <CiTwitter />
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className=" flex items-center  w-full  justify-center rounded-3xl  bg-[#333639] p-8 col-span-3">
            <form action="" className="w-full h-fit space-y-6">
              <div className=" space-y-2  w-full  h-fit ">
               
                <input
                  className="flex h-10 w-full rounded-md  bg-[#4D555B] px-3 py-7 text-xl placeholder:text-gray-400 focus:outline-none   disabled:cursor-not-allowed disabled:opacity-50 dark: dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  id="first_name"
                  placeholder="First Name"
                />
              </div>
              <div className=" space-y-2  w-full  h-fit">
             
                <input
                  className="flex h-10 w-full rounded-md   bg-[#4D555B] px-3 py-7 text-xl placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark: dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="space-y-2  w-full  h-fit">

                <textarea
                  className="flex h-fit w-full rounded-md p-4  bg-[#4D555B] px-3 py-2 text-xl placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark: dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  id="message"
                  placeholder="Leave us a message"
                  rows={7}
                  style={{ resize: 'none' }}
                  />
              </div>

              <button
                type="button"
                className="w-full rounded-md bg-[#ffc552] px-3 py-4 hover:opacity-80 text-sm font-semibold text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black my-5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="h-96 w-full grid grid-cols-3 gap-6">
          <div className="bg-[#333639]  flex items-center  w-full  justify-center rounded-3xl  ">
            <div className="grid grid-row-2 h-full w-full p-8">
              <div className=" w-full">sdf</div>
              <div className=" w-full">sfdg</div>
            </div>
          </div>
          <div className="bg-[#333639] flex items-center  w-full  xl:justify-center rounded-3xl  ">
            <div className="grid grid-row-2 h-full w-full p-8">
              <div className=" w-full">sdf</div>
              <div className=" w-full">sfdg</div>
            </div>
          </div>
          <div className="bg-[#333639] flex items-center  w-full  justify-center  rounded-3xl">
            <div className="grid grid-row-2 h-full w-full p-8">
              <div className=" w-full">sdf</div>
              <div className=" w-full">sfdg</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
