import { FC } from "react";
import style from "./main.module.scss";
import { CustomContainedButton } from "@/components";
import Image  from "next/image";
const About: FC = () => {
  return (
    <div id={style.main} className="bg-alabaster">
      <img alt="" src="/Home/About/image.png" className="size-[30%]"/>
      <div className="flex flex-col justify-center">
        <div className="font-yellowtail text-2xl font-normal text-acapulco">
          About Us
        </div>
        <div className="font-roboto text-xl font-extrabold text-blue_dianne">
          We Believe in Working
          <br />
          Accredited Farmers
        </div>
        <div className="font-['Open Sans'] text-lg font-normal text-black_coral_pearl">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to <br />
          been the industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley.
        </div>
        <div className="mb-[15px] mt-[23px] flex flex-row gap-x-5 items-center">
          <img
            src="/Home/About/content_1.svg"
            className="rounded-[20px] bg-white p-5"
            alt=""
          />
          <div className="flex flex-col">
            <div className="font-roboto text-xl font-extrabold text-blue_dianne">
              Organic Foods Only
            </div>
            <div className="font-['Open Sans'] text-base font-normal text-black_coral_pearl">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </div>
          </div>
        </div>
        <div className="mb-[23px] flex flex-row gap-x-5 items-center">
          <img
            src="/Home/About/content_2.svg"
            className="rounded-[20px] bg-white p-5"
            alt=""
          />
          <div className="flex flex-col">
            <div className="font-roboto text-xl font-extrabold text-blue_dianne">
              Quality Standards
            </div>
            <div className="font-['Open Sans'] text-base font-normal text-black_coral_pearl">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </div>
          </div>
        </div>
        <CustomContainedButton
          text="Shop Now"
          textColor=""
          circleIconColor="bg-slate_600"
          backgroundColor="bg-blue_dianne"
        />
      </div>
    </div>
  );
};
export default About ;
