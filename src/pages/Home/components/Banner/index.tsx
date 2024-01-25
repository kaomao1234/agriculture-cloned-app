import { Button } from "@mui/material";
import { FC } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import style from "./main.module.scss";
import { CustomContainedButton } from "@/components";

const Banner: FC = () => {
  return (
    <div id={style.main}>
      <div className="absolute z-0 size-full overflow-clip">
        <div className="relative -translate-y-[100px]">
          <img src={"/Home/Banner/image.png"} id={style.image} alt={""}></img>
          <img
            id={style.background}
            src={"/Home/Banner/Background.png"}
            alt={""}
          ></img>
        </div>
      </div>
      <div className="z-1 absolute flex size-full flex-col pl-44 pt-28">
        <div className="relative font-yellowtail text-2xl text-acapulco">
          100% Natural Food
        </div>
        <div className="relative mt-2 w-[530px] max-w-full text-5xl font-extrabold text-blue_dianne max-md:text-4x mb-[23px]">
          Choose the best <br />
          healthier way
          <br />
          of life
        </div>
        <CustomContainedButton
          textColor="text-blue_dianne"
          circleIconColor="bg-blue_dianne"
          backgroundColor="bg-sunset_pearl"
          text="Explore Now"
        />
      
      </div>
    </div>
  );
};

export { Banner };
