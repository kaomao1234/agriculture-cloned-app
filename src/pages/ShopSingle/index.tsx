import { Banner, Newslatteer } from "@/components";
import {
  ProductDetails,
  ProductInfomation,
  RelatedProduct,
} from "@/templates/ShopSingle";
import { FC, useRef } from "react";
import style from "./ShopSingle.module.scss";
import { ShopSingleViewModel } from "@/viewmodels";

const ShopSinglePage: FC = () => {
  const viewModelRef = useRef(new ShopSingleViewModel());
  const viewModel = viewModelRef.current;
  return (
    <div
      className="flex h-full min-h-screen w-full flex-col bg-white"
      id={style.main}
    >
      <Banner image="ShopSingle/Banner/Banner Image.jpg" label="Shop Single" />
      <div className="flex flex-col gap-y-12 px-[10%] py-[8%]">
        <ProductDetails />
        <ProductInfomation />
        <RelatedProduct data={viewModel.productItemCard} />
        <Newslatteer />
      </div>
    </div>
  );
};

export default ShopSinglePage;
