import { FC } from "react";
import IconButton from "@mui/material/IconButton";
import { FaPlay } from "react-icons/fa";
const Videos: FC = () => {
  return (
    <div className="relative h-[530px] overflow-clip">
      <div className="absolute z-10 flex size-full pt-[5%]">
        <div className="flex flex-col items-center gap-10 px-[25%]">
          <div className="flex flex-col items-center gap-4">
            <label className=" font-yellowtail text-2xl font-normal text-acapulco">
              Organic Only
            </label>
            <label className="font-roboto text-3xl font-extrabold text-blue_dianne">
              Everyday Fresh & Clean
            </label>
            <label className="mt-[8px] text-center font-sans text-lg font-normal text-blue_dianne">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry&apos;s standard dummy text ever
              since the
            </label>
            <IconButton aria-label="" className="bg-acapulco">
              <FaPlay className="text-white m-3 size-4" />
            </IconButton>
          </div>
        </div>
      </div>
      <img src="Service/Videos/Background Image.png" className=" -translate-y-24" />
    </div>
  );
};
export { Videos };
