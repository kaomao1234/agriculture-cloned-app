import { Button, TextField } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
export const Newslatteer: FC = () => {
  return (
    <div className="relative mx-[15%] my-[5%] overflow-clip rounded-3xl ">
      <div className="absolute z-0 flex size-full items-center justify-center">
        <div className="flex w-full flex-row justify-between px-6">
          <div className="font-roboto text-3xl font-extrabold text-white">
            Subscribe to
            <br />
            our Newsletter
            <br />
          </div>
          <div className="flex flex-row gap-2">
            <input
              id="outlined-basic"
              placeholder="Your Email Address"
              className="h-fit rounded-2xl bg-white px-6 py-7 font-roboto text-lg text-black_coral_pearl outline-none"
            />
            <Button
              variant="contained"
              className="rounded-2xl bg-blue_dianne px-12 py-7 font-roboto text-xl font-bold capitalize hover:bg-blue_dianne"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <img alt="" src="/Newslatteer/Photo.jpg"className="" />
    </div>
  );
};
