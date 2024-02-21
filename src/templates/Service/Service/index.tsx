import { CustomOutlinedButton } from "@/components";
import { FC } from "react";

const Service: FC = () => {
  return (
    <div className="flex w-full flex-col items-center bg-alabaster">
      <div className="flex flex-col w-fit">
        <div className="font-yellowtail text-2xl font-normal text-acapulco">
          What we Grow
        </div>
        <div className="font-roboto text-3xl font-extrabold text-blue_dianne">
          Better Agriculture for
          <br /> Better Future
        </div>
      </div>
      <div className="grid grid-cols-3"></div>
      <CustomOutlinedButton text="Explore More" />
    </div>
  );
};

export { Service };
