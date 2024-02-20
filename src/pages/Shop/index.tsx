import { FC } from "react";
import style from "./Shop.module.scss";
import { Banner, Newslatteer } from "@/components";
const Shop: FC = () => {
  return (
    <div id={style.main}>
      <Banner image="Shop/Banner/Image.png" label="Shop" />
      <Newslatteer/>
    </div>
  );
};

export default Shop;
