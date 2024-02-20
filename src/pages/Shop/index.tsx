import { FC, useRef } from "react";
import style from "./Shop.module.scss";
import { Banner, Newslatteer } from "@/components";
import { Shop } from "@/templates/Shop";
import { ShopViewModel } from "@/viewmodels";
const ShopPage: FC = () => {
  const viewModelRef = useRef(new ShopViewModel());
  const viewModel = viewModelRef.current
  return (
    <div id={style.main}>
      <Banner image="Shop/Banner/Image.png" label="Shop" />
      <Shop productData={viewModel.productItemCard}/>
      <Newslatteer/>
    </div>
  );
};

export default ShopPage;
