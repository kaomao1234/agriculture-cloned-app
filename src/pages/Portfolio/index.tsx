import { Banner, Newslatteer } from "@/components";
import { Portfolio } from "@/templates/Portfolio";
import { PortfolioViewModel } from "@/viewmodels";
import { useRouter } from "next/router";
import { FC, useRef } from "react";

let a = 0;
const recur = () => {
  console.log(a);
  a += 1;
  return <div className="bg-sunset_pearl">{a < 41674 ? recur() : null}</div>;
};

const PortfolioPage: FC = () => {
  const router = useRouter();
  const viewModelRef = useRef(new PortfolioViewModel(router));
  const viewModel = viewModelRef.current;
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Banner image="Portfolio/Banner/image.png" label="portfolio standard" />
      <Portfolio portFolioItemData={viewModel.portFolioItemData} />
      <Newslatteer />
    </div>
  );
};
export default PortfolioPage;
