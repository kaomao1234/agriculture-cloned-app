import { Banner, Newslatteer } from "@/components";
import { Team } from "@/templates/Team";
import { TeamViewModel } from "@/viewmodels";
import { useRouter } from "next/router";
import { FC, useRef } from "react";

const TeamPage: FC = () => {
  const router = useRouter();
  const viewModelRef = useRef(new TeamViewModel(router));
  const viewModel = viewModelRef.current;
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Banner image="Team/Banner/Image.jpg" label="Our Team" />
      <Team data={viewModel.employees} />
      <Newslatteer />
    </div>
  );
};

export default TeamPage;
