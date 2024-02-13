import { FC } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdCart } from "react-icons/io";
import style from "./main.module.scss";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";

const Nav: FC = () => {
  return (
    <div className="flex w-full flex-row bg-white py-3 px-5">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center gap-2 w-[150px]">
          <img className=" size-[20%]" src="/Nav/Logo.png" alt="" />
          <label className="font-roboto text-lg font-bold text-blue_dianne">
            Organick
          </label>
        </div>
        <div className="flex flex-row gap-x-5 mr-5">
          <Button
            variant="text"
            className="font-roboto text-lg font-bold capitalize text-blue_dianne "
          >
            Home
          </Button>
          <Button
            variant="text"
            className="font-roboto text-lg font-bold capitalize text-blue_dianne"
          >
            About
          </Button>
          <Button
            variant="text"
            className="font-roboto text-lg font-bold capitalize text-blue_dianne"
          >
            Pages
          </Button>
          <Button
            variant="text"
            className="font-roboto text-lg font-bold capitalize text-blue_dianne"
          >
            Shop
          </Button>
          <Button
            variant="text"
            className="font-roboto text-lg font-bold capitalize text-blue_dianne"
          >
            News
          </Button>
        </div>
        <div className="flex w-fit flex-row items-center justify-center rounded-[36px] bg-slate-200 px-1">
          <input className="bg-transparent p-3 text-black_coral_pearl outline-none"></input>
          <IconButton className="my-[5px] flex size-fit items-center justify-center rounded-full bg-acapulco p-2 text-white">
            <HiMagnifyingGlass className="size-6"></HiMagnifyingGlass>
          </IconButton>
        </div>
        <div className="flex flex-row rounded-[33px] items-center border-neutral-200 border-2 gap-x-3 px-2">
          <IconButton className="my-[5px] flex size-fit items-center justify-center rounded-full bg-blue_dianne p-2 text-white">
            <IoMdCart className="size-5"></IoMdCart>
          </IconButton>
          <label className="font-roboto text-base font-semibold text-blue_dianne">
            Cart(0)
          </label>
        </div>
      </div>
    </div>
  );
};

export { Nav };
