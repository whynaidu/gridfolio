import Link from 'next/link';
import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className=" lg:h-60	 items-center w-full grid">
      <div className="  w-full h-full grid grid-cols-7 p-2 gap-2">
        <div className=" ] col-span-3 flex justify-end items-center px-6">
          LOGO
        </div>
        <div className="col-span-3 flex justify-start items-center ">
          <ul className="flex justify-center space-x-10 items-center mx-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/works">Works</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full h-full flex justify-center items-center text-4xl  space-x-8">
        <Link href="https://github.com/whynaidu">
          {' '}
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/whynaidu/">
          {' '}
          <CiLinkedin />{' '}
        </Link>
        <Link href="https://twitter.com/whynaidu">
          {' '}
          <CiTwitter />{' '}
        </Link>
        <Link href="https://www.instagram.com/whynaidu/">
          {' '}
          <FaInstagram />{' '}
        </Link>
      </div>
      <div className=" w-full h-full flex justify-center items-center">
        <h1>Made With &#129505; by Vedant Naidu</h1>
      </div>
    </div>
  );
};
