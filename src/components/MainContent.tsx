import Image from 'next/image';
import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import { TbCaptureFilled } from 'react-icons/tb';

export const MainContent = () => {
  return (
    <div className="h-dvh  w-full flex justify-center py-16 ">
      <div className="grid grid-rows-3 w-full gap-5">
        <div className="w-full grid grid-cols-4 gap-5">
          <div className="col-span-2 h-full w-full rounded-3xl bg-[#333639] p-7 flex items-center">
            <div className=" grid grid-rows-2 w-full gap-4">
              <div className="w-full  flex items-center">
                <RxAvatar size={90} className="text-yellow-500" />

                {/* <Image
                className="border rounded-full"
                src="/vercel.svg"
                width={100}
                height={100}
                alt="Picture of the author"
              /> */}
              </div>
              <div className="w-full space-y-3">
                <p className="text-4xl text-yellow-500 font-semibold w-10/12">
                  Hey, I'm Vedant 👋
                </p>
                <p className="text-2=xl  ">
                  A junior web developer at revolution ✨
                </p>
              </div>
            </div>
          </div>
          <div className=" flex items-end  w-full  rounded-3xl  bg-[#333639] px-8 py-6">
            <div className=" grid grid-rows-2 w-full gap-4 items-end">
              <div className="w-full flex items-end">
                <RxAvatar size={90} className="text-yellow-500" />

                {/* <Image
                className="border rounded-full"
                src="/vercel.svg"
                width={100}
                height={100}
                alt="Picture of the author"
              /> */}
              </div>
              <div className="w-full">
                <p className="text-sm  ">Learn More About Me ✨</p>
                <p className="text-2xl  font-semibold w-10/12">See my resume</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-3xl  bg-[#333639] ">
          <div className='space-y-6 w-full flex-row items-end '>
            <div className=' flex justify-center'>
            <Image
              className=" h-fit"
              src="/do31oaAtkDwCoMhdpNZ4tjjnkUA.webp"
              width={230}
              height={300}
              alt="Picture of the author"
            />
            </div>
             <div className="w-full flex-row items-end px-5">
                <p className="text-sm  ">Learn More About Me ✨</p>
                <p className="text-2xl font-semibold w-10/12">See my resume</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-5">
        <div className="flex rounded-3xl  bg-[#333639] ">
          <div className='space-y-6 w-full flex-row items-end '>
            <div className=' flex justify-center'>
            <Image
              className=" h-fit   px-3"
              src="/Of3oRqalrkVoAmSExsvzcifwsU.webp"
              width={230}
              height={300}
              alt="Picture of the author"
            />

            </div>
             <div className="w-full flex-row items-end px-5">
                <p className="text-sm  ">Learn More About Me ✨</p>
                <p className="text-2xl font-semibold w-10/12">See my resume</p>
              </div>
            </div>
          </div>
          <div className=" flex items-center  w-full  justify-center rounded-3xl  bg-[#333639]">
            <FaTwitter size={150} className="text-yellow-500" />
          </div>
          <div className="flex justify-center items-center rounded-3xl col-span-2  bg-[#333639]">
            <div className='grid grid-row-2 w-full h-full'>
              <div className='border h-min'>
              <Image
              className="border w-full h-2/3"
              src="/IW8FXvWXRiE8xCmrZwzMT0Mtr2s.webp"
              width={230}
              height={300}
              alt="Picture of the author"
            />
              </div>
                <div className='border h-full'>
                <div className="w-full flex-row items-end px-5">
                  <p className="text-sm  ">Learn More About Me ✨</p>
                  <p className="text-xl font-semibold w-10/12">See my resume</p>
                </div>
                  
                </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-5 ">
          <div className="flex items-end justify-center rounded-3xl bg-[#333639] h-full	p-8">
            <div className="w-full space-y-4">
              <p className="text-2xl  ">Let's work together ✨</p>
              <p className="text-4xl text-yellow-500 font-semibold w-10/12">
                Get in touch now
              </p>
            </div>
          </div>
          <div className=" flex items-center  w-full  justify-center rounded-3xl  bg-[#333639]">
            <FaTwitter size={100} className="border" />
          </div>
        </div>
      </div>
    </div>
  );
};
