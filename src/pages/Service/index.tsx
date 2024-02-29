import { Banner } from "@/components";
import { Service, Videos } from "@/templates/Service";
import { ServiceViewModel } from "@/viewmodels";
import { useRouter } from "next/router";
import { FC, useRef } from "react";

const ServicePage: FC = () => {
  const viewModelRef = useRef(new ServiceViewModel());
  const viewModel = viewModelRef.current;
  const router = useRouter();
  const onTap = () => {
    router.push({
      pathname: "/ServiceSingle",
    });
  };
  return (
    <div className="mb-14 flex flex-col">
      <Banner image="Service/Banner/image.png" label="Services" />
      <Service
        serviceLeftData={viewModel.serviceLeftData}
        serviceRightData={viewModel.serviceRightData}
        onTap={onTap}
      />
      <Videos />
    </div>
  );
};
export default ServicePage;
