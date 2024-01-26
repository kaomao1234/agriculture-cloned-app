import { FC } from "react";
import style from "./main.module.scss";
import { Avatar, Button, ImageListItem } from "@mui/material";
import Image from "next/image";
const OfferBanner: FC = () => {
  return (
    <div id={style.main}>
      <div className="relative flex size-fit overflow-clip rounded-[30px]">
        <Button
          className="absolute z-10 flex size-full flex-col items-start justify-start bg-transparent p-4 hover:bg-transparent"
          variant="contained"
        >
          <label className="text-white font-yellowtail text-2xl font-normal">
            Natural!!
          </label>
          <label className="text-white font-roboto text-[18px] font-extrabold text-left">
            Get Garden
            <br />
            Fresh Fruits
          </label>
        </Button>
        <Image src="/Home/OfferBanner/image_1.jpg" alt="" />
      </div>
      <div className="relative flex size-fit overflow-clip rounded-[30px]">
        <Button
          className="absolute z-10 flex size-full flex-col items-start justify-start bg-transparent p-4 hover:bg-transparent"
          variant="contained"
        >
          <label className="font-yellowtail text-xl font-normal text-acapulco">
            Offer!!
          </label>
          <label className="font-roboto text-[18px] font-extrabold text-blue_dianne text-left">
            Get 10% off
            <br />
            on Vegetables
          </label>
        </Button>
        <Image src="/Home/OfferBanner/image_2.jpg" alt="" />
      </div>
    </div>
  );
};
export { OfferBanner };
