import { Banner, Newslatteer } from "@/components";
import { Team } from "@/templates/Team";
import { FC } from "react";

const TeamPage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Banner image="Team/Banner/Image.jpg" label="Our Team" />
      <Team />
      <Newslatteer />
    </div>
  );
};

export default TeamPage;
