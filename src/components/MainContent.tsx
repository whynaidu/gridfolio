import React from 'react';

export const MainContent = () => {
  return (
    <div className="h-dvh w-full flex justify-center py-16">
      <div className=" grid grid-cols-2 w-full gap-4">
        <div className=" w-full grid grid-row-3 gap-4">
          <div className="flex items-center justify-center rounded-3xl bg-[#333639]">
            1
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className=" flex items-center  w-full  justify-center rounded-3xl  bg-[#333639]">
              2
            </div>
            <div className=" flex items-center  w-full  xl:justify-center rounded-3xl  bg-[#333639]">
              3
            </div>
          </div>
          <div className=" flex items-center justify-center rounded-3xl bg-[#333639]">
            4
          </div>
        </div>
        <div className=" w-full grid grid-row-3 gap-4">
          <div className=" grid grid-cols-2 gap-4">
            <div className="bg-[#333639] flex items-center  w-full  justify-center rounded-3xl  ">
              2
            </div>
            <div className="bg-[#333639] flex items-center  w-full  xl:justify-center rounded-3xl  ">
              3
            </div>
          </div>
          <div className=" grid grid-row gap-2">
            <div className="bg-[#333639] flex items-center  w-full  justify-center  rounded-3xl">
              2
            </div>
          </div>
          <div className="bg-[#333639] flex items-center justify-center rounded-3xl ">
            3
          </div>
        </div>
      </div>
    </div>
  );
};
