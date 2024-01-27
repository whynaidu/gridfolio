import React from 'react';

export const About = () => {
  return (
    <div className="  h-lvh  w-full flex justify-center py-16">
      <div className=" grid grid-row-2 w-full gap-4">
        <div className=" w-full grid grid-cols-3 gap-4">
          <div className="flex items-center justify-center rounded-3xl bg-[#333639] transition duration-0 hover:ease-in-out col-span-2">
            1
          </div>
          <div className="flex items-center justify-center rounded-3xl bg-[#333639] transition duration-0 hover:ease-in-out">
            2
          </div>
        </div>
        <div className="  w-full grid grid-cols-2 gap-4">
          <div className="bg-[#333639] flex items-center  w-full  justify-center rounded-3xl  ">
            1
          </div>
          <div className="bg-[#333639] flex items-center  w-full  xl:justify-center rounded-3xl  ">
            2
          </div>
        </div>
        <div className="  w-full grid grid-cols-4 gap-4">
          <div className="bg-[#333639]  flex items-center  w-full  justify-center rounded-3xl  ">
            1
          </div>
          <div className="bg-[#333639]  flex items-center  w-full  xl:justify-center rounded-3xl col-span-2 ">
            2
          </div>
          <div className="bg-[#333639]  flex items-center  w-full  xl:justify-center rounded-3xl  ">
            2
          </div>
        </div>
      </div>
    </div>
  );
};
