import { FC } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdCart } from "react-icons/io";
import style from "./main.module.scss";
import { Button, IconButton } from "@mui/material";

const Nav: FC = () => {
  return (
    <div className={style.nav}>
      <div className={style.content}>
        <div className={style.logo}>
          <img className="w-[30%] mr-1" src="/Nav/Logo.png" />
          <label className="font-roboto text-lg font-bold text-blue_dianne">
            Organick
          </label>
        </div>
        <div className={style.menu}>
          <Button variant="text" className="capitalize text-blue_dianne font-roboto font-bold text-xl">Home</Button>
          <Button variant="text" className="capitalize text-blue_dianne font-roboto font-bold text-xl">About</Button>
          <Button variant="text" className="capitalize text-blue_dianne font-roboto font-bold text-xl">Pages</Button>
          <Button variant="text" className="capitalize text-blue_dianne font-roboto font-bold text-xl">Shop</Button>
          <Button variant="text" className="capitalize text-blue_dianne font-roboto font-bold text-xl">News</Button>
        </div>
        <div className={style.search}>
          <input className="bg-transparent p-2 text-black_coral_pearl outline-none"></input>
          <IconButton className="text-white my-[5px] rounded-full bg-acapulco p-2 size-fit flex items-center justify-center">
            <HiMagnifyingGlass className="size-6"></HiMagnifyingGlass>
          </IconButton>
        </div>
        <div className={style.cart}>
          <IconButton className="text-white my-[5px] rounded-full bg-blue_dianne p-2 size-fit flex items-center justify-center">
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
