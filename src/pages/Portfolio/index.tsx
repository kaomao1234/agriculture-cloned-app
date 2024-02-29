import { Banner, Newslatteer } from "@/components";
import { Portfolio } from "@/templates/Portfolio";
import { PortfolioViewModel } from "@/viewmodels";
import { useRouter } from "next/router";
import { FC, useRef } from "react";

const PortfolioPage: FC = () => {
  const router = useRouter();
  const viewModelRef = useRef(new PortfolioViewModel(router));
  const viewModel = viewModelRef.current;
  const onItemTap = (self: { label: string; type: string; image: string }) => {
    viewModel.onItemTrigger(self);
  };
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Banner image="Portfolio/Banner/image.png" label="portfolio standard" />
      <Portfolio
        portFolioItemData={viewModel.portFolioItemData}
        onItemTap={onItemTap}
      />
      <Newslatteer />
    </div>
  );
};
export default PortfolioPage;
