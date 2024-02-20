import { FC } from "react";
import style from "./main.module.scss";
import Image from "next/image";
const WhoWeAre: FC = () => {
  return (
    <div id={style.main}>
      <div className="absolute z-10 flex size-full flex-col items-center justify-center">
        <div className="lg:ml-[45%] flex size-fit flex-col gap-y-[35px] lg:rounded-s-[5%] rounded-[5%] m-4 bg-white p-10">
          <div className="flex flex-col">
            <label className="font-yellowtail text-2xl font-normal text-acapulco">
              Eco Friendly
            </label>
            <label className="font-roboto text-3xl font-extrabold text-blue_dianne">
              Econis is a Friendly
              <br />
              Organic Store
            </label>
          </div>
          <div className="flex flex-col">
            <label className="font-roboto text-xl font-medium text-blue_dianne">
              Start with Our Company First
            </label>
            <label className="font-sans text-lg font-normal text-black_coral_pearl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </label>
          </div>
          <div className="flex flex-col">
            <label className="font-roboto text-xl font-medium text-blue_dianne">
              Learn How to Grow Yourself
            </label>
            <label className="font-sans text-lg font-normal text-black_coral_pearl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </label>
          </div>
          <div className="flex flex-col">
            <label className="font-roboto text-xl font-medium text-blue_dianne">
              Farming Strategies of Today
            </label>
            <label className="font-sans text-lg font-normal text-black_coral_pearl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </label>
          </div>
        </div>
      </div>
      <img
      alt=""
        src="/Home/WhoWeAre/background.jpg"
        className="absolute z-0 w-full lg:w-[50%] translate-y-[-12rem] flex-shrink-0"
      />
    </div>
  );
};

export default WhoWeAre ;
