import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { TbCircleArrowUpRightFilled } from 'react-icons/tb';

export const Resume = () => {
  return (
    <div className=" h-lvh  w-full flex justify-center py-16">
      <div className="grid grid-cols-3 w-full gap-4">
        <div className=" w-full grid grid-row-3 gap-4">
          <div className="bg-[#333639] flex items-center justify-center rounded-3xl ">
            4
          </div>
          <div className="bg-[#333639] h-max text-4xl items-center justify-start rounded-3xl p-8 space-y-2">
            <div className="flex space-x-4 items-center leading-none ">
              <FaGithub size={70} />
              <p>Github </p>
              <div className=" flex justify-end w-full">
                <TbCircleArrowUpRightFilled />
              </div>
            </div>
            <div className="flex space-x-4 items-center leading-none ">
              <CiLinkedin size={70} />

              <p>Linkedin </p>
              <div className=" flex justify-end w-full">
                <TbCircleArrowUpRightFilled />
              </div>
            </div>
            <div className="flex space-x-4 items-center leading-none ">
              <CiTwitter size={70} />
              <p>Twitter </p>
              <div className=" flex justify-end w-full">
                <TbCircleArrowUpRightFilled />
              </div>
            </div>
            <div className="flex space-x-4 items-center leading-none ">
              <FaInstagram size={70} />
              <p>Instagram </p>
              <div className=" flex justify-end w-full">
                <TbCircleArrowUpRightFilled />
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-2 w-full grid grid-row-3 gap-4 rounded-3xl  ">
          sdfg
        </div>
      </div>
    </div>
  );
};
