import { FC } from "react";
import style from "./main.module.scss";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CustomContainedButton, CustomOutlinedButton } from "@/components";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
const Blog: FC = () => {
  return (
    <div id={style.main}>
      <div className="flex flex-col gap-y-[24px]">
        <div className="flex flex-row items-end justify-between">
          <div className="flex flex-col">
            <label className="font-yellowtail text-2xl font-normal text-acapulco">
              News
            </label>
            <label className="font-robto w-[70%] text-3xl font-extrabold text-blue_dianne">
              Discover weekly content about organic food, & more
            </label>
          </div>
          <CustomOutlinedButton text="More new" />
        </div>
        <div className="flex flex-row gap-x-16">
          <div className="relative overflow-clip">
            <div className="absolute z-0 flex size-full flex-col px-5 pt-[23px]">
              <label className="flex size-[80px] items-center justify-center rounded-full bg-white text-center font-roboto text-2xl font-bold text-blue_dianne">
                25
                <br />
                Nov
              </label>
              <div className="mb-10 mt-auto flex flex-col justify-start gap-3.5 rounded-3xl bg-white px-7 pb-7 pt-5 shadow-2xl">
                <div className="flex flex-row items-center">
                  <PersonIcon className="size-5 text-sunset_pearl" />
                  <label className="font-roboto text-base font-normal text-blue_dianne">
                    By Rachi Card
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="font-roboto text-xl font-extrabold text-blue_dianne">
                    The Benefits of Vitamin D & How to Get It
                  </label>
                  <label className="font-sans text-lg font-normal text-black_coral_pearl">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </label>
                </div>
                <CustomContainedButton
                  text="Read more"
                  circleIconColor="bg-blue_dianne"
                  textColor="text-blue_dianne"
                  backgroundColor="bg-sunset_pearl"
                />
              </div>
            </div>
            <img
            alt=""
              src="/Home/Blog/image_1.png"
              className="mb-20 w-full rounded-3xl"
            />
          </div>
          <div className="relative overflow-clip">
            <div className="absolute z-0 flex size-full flex-col px-5 pt-[23px]">
              <label className="flex size-[80px] items-center justify-center rounded-full bg-white text-center font-roboto text-2xl font-bold text-blue_dianne">
                25
                <br />
                Nov
              </label>
              <div className="mb-10 mt-auto flex flex-col justify-start gap-3.5 rounded-3xl bg-white px-7 pb-7 pt-5 shadow-2xl">
                <div className="flex flex-row items-center">
                  <PersonIcon className="size-5 text-sunset_pearl" />
                  <label className="font-roboto text-base font-normal text-blue_dianne">
                    By Rachi Card
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="font-roboto text-xl font-extrabold text-blue_dianne">
                    The Benefits of Vitamin D & How to Get It
                  </label>
                  <label className="font-sans text-lg font-normal text-black_coral_pearl">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </label>
                </div>
                <CustomContainedButton
                  text="Read more"
                  circleIconColor="bg-blue_dianne"
                  textColor="text-blue_dianne"
                  backgroundColor="bg-sunset_pearl"
                />
              </div>
            </div>
            <img
            alt=""
              src="/Home/Blog/image_2.png"
              className="mb-20 w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;