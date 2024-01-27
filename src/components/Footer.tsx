import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="lg:h-60	 items-center w-full grid">
      <div className="w-full h-full grid grid-cols-5 p-2 gap-2">
        <div className="  col-span-2 flex justify-end items-center px-6">
          LOGO
        </div>
        <div className="col-span-3 flex justify-start items-center ">
          <ul className="flex justify-center space-x-10 items-center mx-6">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className=" w-full h-full flex justify-center items-center text-4xl  space-x-8">
        <FaGithub />
        <CiLinkedin />
        <CiTwitter />
        <FaInstagram />
      </div>
      <div className=" w-full h-full flex justify-center items-center">
        <h1>Made With &#129505; by Vedant Naidu</h1>
      </div>
    </div>
  );
};
