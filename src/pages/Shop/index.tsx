import { FC, useEffect, useRef } from "react";
import style from "./Shop.module.scss";
import { Banner, Newslatteer } from "@/components";
import { Shop } from "@/templates/Shop";
import { ShopViewModel } from "@/viewmodels";
import { useRouter } from "next/router";
import { ProductCardModel } from "@/models";
const ShopPage: FC = () => {
  const router = useRouter();
  const viewModelRef = useRef(new ShopViewModel(router));
  const viewModel = viewModelRef.current;
  const onItemTap = (self: ProductCardModel) => {
    viewModel.onItemTrigger(self);
  };
  return (
    <div id={style.main}>
      <Banner image="Shop/Banner/Image.png" label="Shop" />
      <Shop productData={viewModel.productItemCard} onItemTap={onItemTap} />
      <Newslatteer />
    </div>
  );
};

export default ShopPage;
