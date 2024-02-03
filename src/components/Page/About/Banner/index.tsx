import { FC } from "react";

export const Banner: FC = () => {
  return (
    <div className="relative flex h-fit overflow-clip h-52">
      <img className="object-cover w-full" src="/About/Banner/Banner.png" />
      <div className="z-1 absolute flex size-full items-center justify-center">
        <label
          htmlFor=""
          className=" font-roboto text-[40px] font-bold text-blue_dianne"
        >
          About
        </label>
      </div>
    </div>
  );
};
