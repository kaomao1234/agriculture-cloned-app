import { FC } from "react";
import style from "./main.module.scss";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CustomContainedButton } from "@/components";
const About: FC = () => {
  return (
    <div id={style.main} className="bg-alabaster">
      <img src="/Home/About/image.png" className="size-[40%]"></img>
      <div className="flex flex-col justify-center">
        <div className="font-yellowtail text-3xl font-normal text-acapulco">
          About Us
        </div>
        <div className="font-roboto text-[30px] font-extrabold text-blue_dianne">
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
        <div className="mb-[15px] mt-[23px] flex flex-row gap-x-5">
          <img
            src="/Home/About/content_1.svg"
            className="rounded-[20px] bg-white p-5"
            alt=""
          />
          <div className="flex flex-col">
            <div className="font-roboto text-[20px] font-extrabold text-blue_dianne">
              Organic Foods Only
            </div>
            <div className="font-['Open Sans'] text-base font-normal text-black_coral_pearl">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </div>
          </div>
        </div>
        <div className="mb-[23px] flex flex-row gap-x-5">
          <img
            src="/Home/About/content_2.svg"
            className="rounded-[20px] bg-white p-5"
            alt=""
          />
          <div className="flex flex-col">
            <div className="font-roboto text-[20px] font-extrabold text-blue_dianne">
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
export { About };
