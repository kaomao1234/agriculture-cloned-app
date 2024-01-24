import { FC } from "react";
import style from "./main.module.scss";
import { CustomGeneralButton, ProductCard } from "@/components";
import { ProductCardModel } from "@/models";
interface Props {
  data: ProductCardModel[];
}
export const Offer: FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-start justify-center bg-blue_dianne px-[130px] py-[100px]">
      <div className="flex w-full flex-row justify-between">
        <div className="felx flex-row">
          <div className="w-28 font-yellowtail text-3xl font-normal text-acapulco">
            Offer
          </div>
          <div className="font-roboto text-4xl font-extrabold text-white">
            We Offer Organic For You
          </div>
        </div>
        <CustomGeneralButton
          text="View All Product"
          textColor="text-blue_dianne"
          backgroundColor="bg-sunset_pearl"
          circleIconColor="bg-blue_dianne"
        />
      </div>
      <div className="mt-[25px] grid w-full grid-cols-4 gap-x-5">
        {props.data.map((value, index) => (
          <ProductCard {...value} />
        ))}
      </div>
    </div>
  );
};
