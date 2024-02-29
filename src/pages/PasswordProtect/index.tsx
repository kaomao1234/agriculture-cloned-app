import { Banner } from "@/components";
import { Password } from "@/templates/PasswordProtect";
import { FC } from "react";

const PasswordProtectPage: FC = () => {
  return <div className="flex min-h-screen flex-col bg-white">
    <Banner label="protect page" image="PasswordProtect/Banner/image.png"/>
    <Password/>
  </div>;
};
export default PasswordProtectPage;
