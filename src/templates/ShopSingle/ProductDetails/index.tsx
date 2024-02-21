import { CustomContainedButton } from "@/components";
import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import { FaStar } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import style from "./main.module.scss";
const ProductDetails: FC = () => {
  return (
    <div className="flex flex-row items-center gap-x-10" id={style.main}>
      <div className="relative rounded-3xl bg-alabaster p-4 w-[80%]">
        <label className="absolute z-10 h-8 w-20 rounded-lg bg-blue_dianne px-3 pb-1.5 pt-1 text-center font-sans text-base font-semibold text-white">
          Millets
        </label>
        <img src="ShopSingle/ProductDetails/image.png" className="w-full" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label className="font-roboto text-3xl font-semibold text-blue_dianne">
            Health Pistachios
          </label>
          <div className="flex flex-row px-3">
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
          <div className="flex flex-row items-center gap-2">
            <s className="text-center font-sans text-base font-semibold text-zinc-400">
              $20.00
            </s>
            <label className="text-center font-sans text-xl font-bold text-blue_dianne">
              $13.00
            </label>
          </div>
        </div>
        <label className="font-sans text-base font-normal text-gray-600">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry&apos;s standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </label>
        <div className="flex flex-row items-center gap-4">
          <label className="font-roboto text-lg font-bold text-blue_dianne">
            Quantity :
          </label>
          <input
            className="h-16 w-32 rounded-xl border-2 border-blue_dianne px-3 py-7 text-center font-roboto text-xl text-blue_dianne outline-none"
            type="number"
            min={1}
            max={20}
            defaultValue={1}
          />
          <CustomContainedButton
            text="Add to cart"
            textColor="text-white"
            circleIconColor="bg-slate-600"
            backgroundColor="bg-blue_dianne"
          />
        </div>
      </div>
    </div>
  );
};
export { ProductDetails };
