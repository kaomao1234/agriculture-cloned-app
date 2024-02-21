import { Banner } from "@/components";
import { Service, Videos } from "@/templates/Service";
import { FC } from "react";

const ServicePage: FC = () => {
  return (
    <div className="flex flex-col">
      <Banner image="Service/Banner/image.png" label="Services" />
      <Service />
      <Videos />
    </div>
  );
};
export default ServicePage;
