import { Banner, Newslatteer } from "@/components";
import { ServiceSingle } from "@/templates/ServiceSingle";
import { FC } from "react";

const ServiceSinglePage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Banner
        label="Quality Standard"
        image="ServiceSingle/Banner/Background.jpg"
      />
      <ServiceSingle />
      <Newslatteer />
    </div>
  );
};

export default ServiceSinglePage;
