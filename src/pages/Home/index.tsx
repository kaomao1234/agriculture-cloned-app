import { FC, useRef } from "react";
import style from "./Home.module.scss";
import Button from "@mui/material/Button";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  Banner,
  OfferBanner,
  About,
  Shop,
  Counter,
  Offer,
  WhoWeAre,
  Gallery,
  Blog,
} from "./components";
import { HomeViewModel } from "@/viewmodels";
import { Newslatteer } from "@/components";
const Home: FC = () => {
  const viewmodelRef = useRef(new HomeViewModel());
  const viewmodel = viewmodelRef.current;
  return (
    <div id={style.main}>
      <Banner />
      <OfferBanner />
      <About />
      <Shop productItem={viewmodel.productItemCard} />
      <Counter />
      <Offer data={viewmodel.offerData} />
      <WhoWeAre />
      <Gallery />
      <Blog />
      <Newslatteer />
    </div>
  );
};
export default Home;
