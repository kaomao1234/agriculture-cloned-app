import { FC, useState } from "react";
import style from "./main.module.scss";
import { Avatar, useTheme } from "@mui/material";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
const Counter: FC = () => {
  const details: Record<string, string>[] = [
    {
      unit: "100%",
      text: "Organic",
    },
    {
      unit: "285",
      text: "Active Product",
    },
    {
      unit: "350+",
      text: "Organic Orchads",
    },
    {
      unit: "25+",
      text: "Year of farm",
    },
  ];
  return (
    <div id={style.main}>
      <div className="mb-auto flex size-full flex-col">
        <div className="flex flex-col items-center">
          <label className="font-Yellowtail text-3xl font-normal text-acapulco">
            Testimonial
          </label>
          <label className="font-roboto text-[30px] font-extrabold text-blue_dianne">
            What Our Customer Saying?
          </label>
          <div className="mt-[30px] flex flex-col items-center">
            <Avatar src="/Home/Counter/avatar.jpg" className="size-[100px]" />
            <div className="mt-3 flex flex-row">
              {Array(5)
                .fill(0)
                .map((val, index) => {
                  return (
                    <FaStar
                      className="size-[17px] text-sunset_pearl"
                      key={index}
                    />
                  );
                })}
            </div>
            <label className="text-center text-black_coral_pearl">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </label>
            <div className="mt-5 flex size-fit flex-col items-center">
              <div className="font-roboto text-[20px] font-semibold text-blue_dianne">
                Sara Taylor
              </div>
              <div className="font-sans text-[18px] font-normal text-black_coral_pearl">
                Consumer
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[3%] flex flex-row justify-around">
          {details.map((value, index) => (
            <div key={index} className="flex flex-col items-center justify-center rounded-full border-4 border-acapulco">
              <div className="m-1 flex size-28 xl:size-36 flex-col items-center justify-center rounded-full bg-alto p-2">
                <div className="font-roboto text-[20px] xl:text-[25px] font-extrabold text-blue_dianne">
                  {value.unit}
                </div>
                <div className="font-sans text-base font-semibold text-blue_dianne text-center">
                  {value.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
      alt=""
        src="/Home/Counter/Photo.png"
        className="absolute left-[-30%] top-0 z-0 w-[46%] scale-[-1] bg-[#FCFCFC]"
      />
      <img alt=""
        src="/Home/Counter/Photo.png"
        className="absolute right-[-30%] top-0 z-0 w-[46%] bg-[#FCFCFC]"
      />
    </div>
  );
};
export default Counter ;
