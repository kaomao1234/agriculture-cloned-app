import { FC } from "react";
import style from "./main.module.scss";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ProductCardModel } from "@/models";
import { CustomContainedButton, ProductCard } from "@/components";
interface Props {
  productItem: ProductCardModel[];
}
const Shop: FC<Props> = ({ productItem }) => {
  return (
    <div id={style.main}>
      <div className="flex flex-col items-center">
        <div className="font-Yellowtail text-2xl font-normal text-acapulco">
          Categories{" "}
        </div>
        <div className="font-roboto text-[25px] font-extrabold text-blue_dianne">
          Our Products
        </div>
        <div className="mb-[60px] mt-[40px] grid grid-cols-4 gap-5">
          {productItem.map((val, index) => {
            return (
              <ProductCard
                {...val}
                imageSrc={`Home/Shop/image_${index + 1}.png`}
                key={index}
              />
            );
          })}
        </div>
        <CustomContainedButton
          text="Loading More"
          textColor=""
          circleIconColor="bg-slate_600"
          backgroundColor="bg-blue_dianne"
        />
      
      </div>
    </div>
  );
};

export { Shop };
