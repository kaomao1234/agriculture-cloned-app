import { Newslatteer } from "@/components";
import { Banner, PortfolioDetails } from "@/templates/PortfolioSingle";
import { FC } from "react";

const PortfolioSinglePage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Banner />
      <PortfolioDetails />
      <Newslatteer />
    </div>
  );
};
export default PortfolioSinglePage;
