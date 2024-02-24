import PortfolioPage from "@/pages/Portfolio";
import { FC, useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import { IoIosArrowForward } from "react-icons/io";

interface PortfolioItemProps {
  label: string;
  type: string;
  image: string;
  onTap?: () => void;
}

const PortfolioItem: FC<PortfolioItemProps> = (props) => {
  return (
    <div className="flex size-full flex-col justify-start">
      <div
        className="group flex items-center justify-center overflow-clip rounded-2xl p-3 bg-cover"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <div className="relative flex items-center justify-center overflow-hidden rounded-2xl opacity-0 duration-200 group-hover:opacity-100">
          <IconButton
            aria-label=""
            onClick={props.onTap}
            className="absolute z-10 m-3 bg-acapulco text-white"
          >
            <IoIosArrowForward />
          </IconButton>
          <div className="bg-white opacity-80">
            <img src={props.image} className="opacity-0" />
          </div>
        </div>
      </div>
      <label className="mt-5 font-roboto text-xl font-extrabold text-blue_dianne">
        {props.label}
      </label>
      <div className=" font-yellowtail text-lg font-normal text-acapulco">
        {props.type}
      </div>
    </div>
  );
};

const Portfolio: FC<{
  portFolioItemData: PortfolioItemProps[];
}> = (props) => {
  return (
    <div className="mt-[60px] grid grid-cols-3 gap-x-5 gap-y-10 px-[15%] 2xl:px-[20%]">
      {props.portFolioItemData.map((val, index) => (
        <PortfolioItem key={index} {...val} />
      ))}
    </div>
  );
};

export { Portfolio };
