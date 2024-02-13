import { Button } from "@mui/material";
import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import style from "./main.module.scss";
import { CustomContainedButton } from "@/components";
import { platform } from "os";
interface size {
  width: number;
  height: number;
}
const Banner: FC = () => {
  const [size, setSize] = useState<size | null>(null);
  const [platformSize, setPlatFormSize] = useState<size | null>(null);

  useLayoutEffect(() => {
    const img = new Image();
    img.onload = () => {
      setSize((prev) => {
        return {
          height: img.height,
          width: img.width,
        };
      });
      console.log(size);
    };
    img.src = "/Home/Banner/Background.png";
    const handleResize = () => {
      setPlatFormSize((prev) => ({
        height: window.innerHeight,
        width: window.innerWidth,
      }));
      
      
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative">
      <div className="overflow-clip h-[450px] ">
        <div
          className="`relative "
          style={{
            maxWidth: `${size?.width}px`,
            width: `${platformSize?.width}px`,
            // height: `${platformSize?.height}px`,
          }}
        >
          <img
            src={"/Home/Banner/Background.png"}
            alt={""}
            className=" absolute z-10 size-full object-cover"
          />
          <img
            src={"/Home/Banner/image.png"}
            alt={""}
            className="absolute z-0 h-full w-full object-cover"
          />
        </div>
      </div>
      {/* <div className="z-1 absolute flex size-full flex-col pt-28">
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
      
      </div> */}
    </div>
  );
};

export default Banner;
