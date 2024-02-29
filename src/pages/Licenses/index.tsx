import { Banner } from "@/components";
import { Licenses } from "@/templates/Licenses";
import { FC } from "react";

const LicensePage: FC = () => {
  return <div className="flex flex-col min-h-screen bg-white">
    <Banner image="Licenses\Banner\Banner.png" label="Licenses"/>
    <Licenses/>
  </div>;
};
export default LicensePage;
