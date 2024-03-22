import Link from 'next/link';
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
          <div className="bg-[#333639] h-max text-4xl items-center rounded-3xl p-8 space-y-2">
            <Link href="https://github.com/whynaidu">
              <div className="flex space-y-8 items-center leading-none hover:text-yellow-500">
                <div className="flex space-x-4">
                  <FaGithub size={40} />
                  <p>Github </p>
                </div>
                <div className=" flex justify-end w-full">
                  <TbCircleArrowUpRightFilled />
                </div>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/whynaidu/">
              <div className="flex space-y-8 items-center leading-none hover:text-yellow-500 ">
                <div className="flex space-x-4">
                  <CiLinkedin size={40} />

                  <p>Linkedin </p>
                </div>
                <div className=" flex justify-end w-full">
                  <TbCircleArrowUpRightFilled />
                </div>
              </div>
            </Link>
            <Link href="https://twitter.com/whynaidu">
              <div className="flex space-y-8 items-center leading-none hover:text-yellow-500">
                <div className="flex space-x-4">
                  <CiTwitter size={40} />
                  <p>Twitter </p>
                </div>
                <div className=" flex justify-end w-full">
                  <TbCircleArrowUpRightFilled />
                </div>
              </div>
            </Link>
            <Link href="https://www.instagram.com/whynaidu/">
              <div className="border flex space-y-8 leading-none ">
                <div className="flex space-x-4 border">
                  <FaInstagram size={40} />
                  <p>Instagram </p>
                </div>
                <div className="border flex justify-end w-full hover:text-red-500 ">
                  <TbCircleArrowUpRightFilled />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className=" col-span-2 w-full grid grid-row-3 gap-4 rounded-3xl  ">
          sdfg
        </div>
      </div>
    </div>
  );
};
