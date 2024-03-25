import React from 'react';

export const BannerText = (props: any) => {
  return (
    <div className=" flex justify-center">
      <p className="lg:text-[280px] text-[#494C50] font-semibold leading-none	">
        {props.title}
      </p>
    </div>
  );
};
