import { FC } from "react";

const ContentOne: FC = () => {
  return (
    <div className="flex flex-row gap-6">
      <img src="Contact/ContentOne/image.jpg" alt="" className="rounded-3xl" />
      <div className="flex-col">
      <label className="text-blue_dianne text-3xl font-extrabold font-roboto">We&apos;d love to talk about how we can work together.</label>
      <label className=" text-black_coral_pearl text-base font-normal font-sans">Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br/>been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley.
      </label>
      <div className="flex flex-col"></div>
      </div>
  
    </div>
  );
};
export { ContentOne };
