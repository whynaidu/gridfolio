'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className=" lg:h-20 w-full items-center  flex justify-center sticky top-0 backdrop-blur-md bg-[#212224]/30 rounded-b-xl px-72">
      <div className="  grid grid-cols-6 gap-4 w-full items ">
        <div className="  flex justify-center items-center">Logo</div>
        <div className=" col-start-2 col-span-4 items-center flex justify-center">
          <ul className="  flex justify-center space-x-16">
            <li>
              <Link
                className={`link ${pathname === '/' ? 'text-yellow-500	' : ''}`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === '/works' ? 'text-yellow-500	' : ''}`}
                href="/works"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === '/about' ? 'text-yellow-500	' : ''}`}
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === '/resume' ? 'text-yellow-500	' : ''}`}
                href="/resume"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
        <div className="  flex justify-end">
          <button
            type="button"
            className="rounded-full bg-[#fcfaf4] px-5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Link href="/contact"> Get in Touch</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
