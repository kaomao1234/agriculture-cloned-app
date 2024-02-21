import { FC } from "react";
import Button from "@mui/material/Button";

const ProductInfomation: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex w-fit flex-row gap-5">
        <Button
          variant="contained"
          className="rounded-2xl bg-blue_dianne px-14 py-5 text-center font-sans text-xl font-bold capitalize"
        >
          Production Description
        </Button>
        <Button
          variant="contained"
          className="rounded-2xl bg-alabaster px-14 py-5 text-center font-sans text-xl font-bold capitalize text-blue_dianne"
        >
          Additional Info
        </Button>
      </div>
      <div className="text-center font-roboto text-lg font-normal leading-7 text-gray-600">
        Welcome to the world of natural and organic. Here you can discover the
        bounty of nature. We have grown on the principles of health, ecology,
        and care. We aim to give our customers a healthy chemical-free meal for
        perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as
        glucose and fructose — make up 70% and 80% of the carbs in raw.
      </div>
    </div>
  );
};
export { ProductInfomation };
