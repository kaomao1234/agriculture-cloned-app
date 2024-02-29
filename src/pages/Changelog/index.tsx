import { Banner } from "@/components";
import { Release } from "@/templates/Changelog";
import { FC } from "react";
const ChangeLogPage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Banner label="changelog" image="Changelog/Banner/image.png" />
      <Release />
    </div>
  );
};
export default ChangeLogPage;
