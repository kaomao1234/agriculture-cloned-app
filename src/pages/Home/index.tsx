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
} from "@/templates/Home";
import { HomeViewModel } from "@/viewmodels";
import { Newslatteer } from "@/components";
import { useRouter } from "next/router";
const HomePage: FC = () => {
  const router = useRouter();
  const viewmodelRef = useRef(new HomeViewModel());
  const viewmodel = viewmodelRef.current;
  const chunkingProductItemCard = viewmodel.chunkArray(
    viewmodel.productItemCard,
    4,
  );
  const onShopClick = () => {
    router.push({
      pathname: "/Shop",
    });
  };
  const onLoadingMore = () => {
    router.push({
      pathname: "/Shop",
    });
  };
  const onProductCard = () => {
    router.push({
      pathname: "/ShopSingle",
    });
  };
  const onBlogClick = () => {
    router.push({
      pathname: "/BlogSingle",
    });
  };
  const onLoadBlogClick = () => {
    router.push({
      pathname: "/Blog",
    });
  };
  return (
    <div id={style.main}>
      <Banner />
      <OfferBanner />
      <About onShopClick={onShopClick} />
      <Shop
        data={chunkingProductItemCard}
        onLoadigMore={onLoadingMore}
        onProductCard={onProductCard}
      />
      <Counter />
      <Offer
        data={viewmodel.offerData}
        onProductCardClick={onProductCard}
        onViewAllProductClick={onLoadingMore}
      />
      <WhoWeAre />
      <Gallery data={viewmodel.galleryData} />
      <Blog onBlogClick={onBlogClick} onLoadBlogClick={onLoadBlogClick} />
      <Newslatteer />
    </div>
  );
};
export default HomePage;
