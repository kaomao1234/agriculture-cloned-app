import { ProductCard } from "@/components";
import { ProductCardModel } from "@/models";
import { FC } from "react";

const Shop: FC<{
  productData: ProductCardModel[];
  onItemTap: (self: ProductCardModel) => void;
}> = (props) => {
  return (
    <div className="grid grid-cols-4 gap-3 px-[5%] py-[3%] xl:gap-5 xl:px-[10%]">
      {props.productData.map((val, index) => {
        const onTapWrapepr = () => {
          props.onItemTap(val);
        };
        return <ProductCard key={index} {...val} onTap={onTapWrapepr} />;
      })}
    </div>
  );
};

export { Shop };
