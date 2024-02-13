import { FC } from "react";
import style from "./main.module.scss";
import {
  Banner,
  Team,
  WhyChoosUs,
  About,
  OfferProduct,
} from "@/components/Page/About";
import { Newslatteer } from "@/components";
const AboutPage: FC = () => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-white" id={style.main}>
      <Banner />
      <About />
      <WhyChoosUs />
      <Team />
      <OfferProduct />
      <Newslatteer />
    </div>
  );
};

export default AboutPage;
