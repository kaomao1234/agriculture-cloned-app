import { Banner } from "@/components";
import { Service, Videos } from "@/templates/Service";
import { ServiceViewModel } from "@/viewmodels";
import { FC, useRef } from "react";

const ServicePage: FC = () => {
  const viewModelRef = useRef(new ServiceViewModel());
  const viewModel = viewModelRef.current;
  return (
    <div className="flex flex-col mb-14">
      <Banner image="Service/Banner/image.png" label="Services" />
      <Service
        serviceLeftData={viewModel.serviceLeftData}
        serviceRightData={viewModel.serviceRightData}
      />
      <Videos />
    </div>
  );
};
export default ServicePage;
