import { FC } from "react";
import style from "./main.module.scss";
import {
  Team,
  WhyChoosUs,
  About,
  OfferProduct,
} from "@/templates/About";
import { Banner, Newslatteer } from "@/components";
const AboutPage: FC = () => {
  return (
    <div className="flex h-full min-h-screen flex-col bg-white" id={style.main}>
      <Banner label="about"image="About/Banner/Banner.png"/>
      <About />
      <WhyChoosUs />
      <Team />
      <OfferProduct />
      <Newslatteer />
    </div>
  );
};

export default AboutPage;
