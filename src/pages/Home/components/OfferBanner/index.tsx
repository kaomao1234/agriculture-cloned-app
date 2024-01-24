import { FC } from "react";
import style from "./main.module.scss";
import { Avatar, Button, ImageListItem } from "@mui/material";
const OfferBanner: FC = () => {
  return (
    <div id={style.main}>
      <div className="relative flex size-fit overflow-clip rounded-[30px]">
        <Button
          className="absolute z-10 flex size-full flex-col items-start justify-start bg-transparent p-4 hover:bg-transparent"
          variant="contained"
        >
          <div className="text-white font-yellowtail text-2xl font-normal">
            Natural!!
          </div>
          <div className="text-white font-roboto text-[18px] font-extrabold">
            Get Garden
            <br />
            Fresh Fruits
          </div>
        </Button>
        <img src="/Home/OfferBanner/image_1.jpg" alt="" />
      </div>
      <div className="relative flex size-fit overflow-clip rounded-[30px]">
        <Button
          className="absolute z-10 flex size-full flex-col items-start justify-start bg-transparent p-4 hover:bg-transparent"
          variant="contained"
        >
          <div className="font-yellowtail text-xl font-normal text-acapulco">
            Offer!!
          </div>
          <div className="font-roboto text-[18px] font-extrabold text-blue_dianne">
            Get 10% off
            <br />
            on Vegetables
          </div>
        </Button>
        <img src="/Home/OfferBanner/image_2.jpg" alt="" />
      </div>
    </div>
  );
};
export { OfferBanner };
