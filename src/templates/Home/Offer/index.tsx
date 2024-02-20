import { FC, Fragment } from "react";
import style from "./main.module.scss";
import { CustomContainedButton, ProductCard } from "@/components";
import { ProductCardModel } from "@/models";
interface Props {
  data: ProductCardModel[];
}
const Offer: FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-start justify-center bg-blue_dianne px-[70px] py-[25px] xl:px-[130px] xl:py-[50px]">
      <div className="flex w-full flex-row items-end justify-between">
        <div className="felx flex-row">
          <div className="w-28 font-yellowtail text-3xl font-normal text-acapulco">
            Offer
          </div>
          <div className="font-roboto text-4xl font-extrabold text-white">
            We Offer Organic For You
          </div>
        </div>
        <CustomContainedButton
          text="View All Product"
          textColor="text-blue_dianne"
          backgroundColor="bg-sunset_pearl"
          circleIconColor="bg-blue_dianne"
        />
      </div>
      <div className="mt-[25px] grid w-full grid-cols-2 gap-4 px-[15%] xl:grid-cols-4 xl:px-0">
        {props.data.map((value, index) => (
          <Fragment key={index}>
            <ProductCard {...value} key={index} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default Offer;
