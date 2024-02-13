import { CustomContainedButton } from "@/components";
import { FC } from "react";

export const About: FC = () => {
  return (
    <div className="flex flex-row gap-x-10 px-12">
      <img src="/About/About/Image.png" className="size-[40%]" alt="" />
      <div className="flex flex-col items-start">
        <label className="font-yellowtail text-2xl text-acapulco">
          About us
        </label>
        <label className="font-roboto text-4xl font-extrabold text-blue_dianne">
          We do Creative Things for Success
        </label>
        <p className="font-sans text-lg font-normal text-gray-600 mt-3">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry&apos;s standard dummy text ever since the
          1500s, when an unknown printer took a galley.
          <br />
          <br /> Simply dummy text of the printing and typesetting industry.
          Lorem had ceased to been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
        <div className="mt-10 flex w-full flex-row justify-between mb-14">
          <div className="flex flex-row items-center gap-3">
            <img src="/About/About/Tractor.png" />
            <div className=" font-roboto text-xl font-medium text-slate-700">
              Modern Agriculture
              <br />
              Equipment
              <br />
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <img src="/About/About/Chemical_Plant.png" />
            <div className=" font-roboto text-xl font-medium text-slate-700">
              No growth hormones are used
            </div>
          </div>
        </div>
        <CustomContainedButton backgroundColor="bg-blue_dianne" text="Explore More" textColor="text-white" circleIconColor="bg-slate_600"/>
      </div>
    </div>
  );
};
