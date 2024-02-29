import { FC } from "react";
import style from "./main.module.scss";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ProductCardModel } from "@/models";
import { CustomContainedButton, ProductCard } from "@/components";
import Carousel from "react-material-ui-carousel";
interface Props {
  data: ProductCardModel[][];
  onLoadigMore: () => void;
  onProductCard: () => void;
}
const Shop: FC<Props> = (props) => {
  return (
    <div id={style.main}>
      <div className="flex flex-col items-center">
        <label className="font-Yellowtail text-2xl font-normal text-acapulco">
          Categories
        </label>
        <label className="font-roboto text-[25px] font-extrabold text-blue_dianne">
          Our Products
        </label>
        <div className="mt-[40px] flex w-full">
          <Carousel
            className="w-full pb-16 text-2xl xl:mx-[5%]"
            navButtonsAlwaysVisible={true}
            indicators={false}
            swipe={true}
            cycleNavigation={false}
            navButtonsProps={{
              style: {
                backgroundColor: "transparent",
                backgroundClip: "text",
                opacity: "1",
                color: "black",
              },
            }}
          >
            {props.data.map((val, index) => (
              <div
                className="grid w-full grid-cols-4 gap-5 px-[4%]"
                key={index}
              >
                {val.map((val, indexImg) => (
                  <ProductCard
                    {...val}
                    key={indexImg}
                    onTap={props.onProductCard}
                  />
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
          onClick={props.onLoadigMore}
        />
      </div>
    </div>
  );
};

export default Shop;
