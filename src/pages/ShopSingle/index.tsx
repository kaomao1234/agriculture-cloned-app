import { Banner, Newslatteer } from "@/components";
import {
  ProductDetails,
  ProductInfomation,
  RelatedProduct,
} from "@/templates/ShopSingle";
import { FC } from "react";

const ShopSingle: FC = () => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-white">
      <Banner image="ShopSingle/Banner/Banner Image.jpg" label="Shop Single" />
      <ProductDetails />
      <ProductInfomation />
      <RelatedProduct />
      <Newslatteer />
    </div>
  );
};

export default ShopSingle;
