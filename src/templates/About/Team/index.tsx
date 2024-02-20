import { EmployeeCard } from "@/components";
import style from "./main.module.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { EmployeeCardModel } from "@/models";
export const Team = () => {
  const employees: EmployeeCardModel[] = [
    {
      name: "Giovani Bacardo",
      role: "farmer",
      links: ["facebook", "twitter"],
      image: "About/Team/person_1.jpg",
    },
    {
      name: "Marianne Loreno",
      role: "designer",
      links: ["ig", "facebook", "twitter"],
      image: "About/Team/person_2.jpg",
    },
    {
      name: "Riga Pelore",
      role: "farmer",
      links: ["ig", "facebook", "twitter"],
      image: "About/Team/person_3.jpg",
    },
  ];
  return (
    <div id={style.main}>
      <div className="mb-5 size-full flex-col items-center justify-start gap-4">
        <div className="mb-2 flex flex-col items-center justify-start">
          <label className="font-yellowtail text-2xl font-normal text-acapulco">
            Team
          </label>
          <label className="font-roboto text-3xl font-extrabold text-slate-700">
            Our Organic Experts
          </label>
        </div>
        <label className="text-center font-sans text-lg font-normal text-gray-600">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry&#39;s standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </label>
      </div>
      <div className="flex w-[85%] flex-row gap-10">
        {employees.map((val, index) => {
          return <EmployeeCard key={index} {...val} />;
        })}
      </div>
    </div>
  );
};
