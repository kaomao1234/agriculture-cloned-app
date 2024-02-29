import { FC, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdCart } from "react-icons/io";
import style from "./main.module.scss";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const Nav: FC = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const pages = [
    "About",
    "Blog",
    "BlogSingle",
    "Changelog",
    "Contact",
    "Licenses",
    "PasswordProtect",
    "Portfolio",
    "PortfolioSingle",
    "Service",
    "ServiceSingle",
    "Shop",
    "ShopSingle",
    "Team",
  ];
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickToHomePage = () => {
    router.push({
      pathname: "/Home",
    });
  };
  const clickToAboutPage = () => {
    router.push({
      pathname: "/About",
    });
  };
  const clickToShopPage = () => {
    router.push({
      pathname: "/Shop",
    });
  };
  const handlePage = (pathname: string) => {
    router.push({
      pathname: `/${pathname}`,
    });
    handleClose();
  };
  return (
    <div className="fixed z-10 flex h-[100px] w-full flex-row bg-white px-5 py-3 shadow">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex w-[150px] flex-row items-center gap-2">
          <img className=" size-[20%]" src="/Nav/Logo.png" alt="" />
          <label className="font-roboto text-lg font-bold text-blue_dianne">
            Organick
          </label>
        </div>
        <div className="mr-5 flex flex-row gap-x-5">
          <Button
            variant="text"
            className="font-roboto text-lg font-bold capitalize text-blue_dianne "
            onClick={clickToHomePage}
          >
            Home
          </Button>
          <Button
            variant="text"
            className="font-roboto text-lg font-bold capitalize text-blue_dianne"
            onClick={clickToAboutPage}
          >
            About
          </Button>
          <Button
            variant="text"
            className="font-roboto text-lg font-bold capitalize text-blue_dianne"
            onClick={handleClick}
          >
            Pages
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {pages.map((val, index) => {
              const handlePageWrapper = () => {
                handlePage(val);
              };
              return (
                <MenuItem key={index} onClick={handlePageWrapper}>
                  {val}
                </MenuItem>
              );
            })}
          </Menu>
          <Button
            variant="text"
            className="font-roboto text-lg font-bold capitalize text-blue_dianne"
          >
            Projects
          </Button>
          <Button
            variant="text"
            className="font-roboto text-lg font-bold capitalize text-blue_dianne"
            onClick={clickToShopPage}
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
        <div className="flex flex-row items-center gap-x-3 rounded-[33px] border-2 border-neutral-200 px-2">
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
