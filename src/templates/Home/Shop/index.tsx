import { FC } from "react";
import style from "./main.module.scss";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ProductCardModel } from "@/models";
import { CustomContainedButton, ProductCard } from "@/components";
import Carousel from "react-material-ui-carousel";
interface Props {
  data: ProductCardModel[][];
}
const Shop: FC<Props> = ({ data }) => {
  return (
    <div id={style.main}>
      <div className="flex flex-col items-center">
        <div className="font-Yellowtail text-2xl font-normal text-acapulco">
          Categories{" "}
        </div>
        <div className="font-roboto text-[25px] font-extrabold text-blue_dianne">
          Our Products
        </div>
        <div className="mt-[40px] flex w-full">
          <Carousel
            className="w-full text-2xl pb-16 xl:mx-[5%]"
            navButtonsAlwaysVisible={true}
            indicators={false}
            swipe={true}
            cycleNavigation={false}
            navButtonsProps={{
              style: {
                backgroundColor:"transparent",
                backgroundClip:"text",
                opacity:"1",
                color:"black",
              },
            }}
          >
            {data.map((val, index) => (
              <div
                className="grid w-full grid-cols-4 gap-5 px-[4%]"
                key={index}
              >
                {val.map((val, indexImg) => (
                  <ProductCard {...val} key={indexImg} />
                ))}
              </div>
            ))}
          </Carousel>
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

export default Shop;
