import { EmployeeCard } from "@/components";
import { EmployeeCardModel } from "@/models";
import { FC } from "react";

const Team: FC<{
  data:EmployeeCardModel[]
}> = (props) => {
  
  return (
    <div className="mt-[5%] flex flex-col items-center bg-white px-[10%]">
      <div className="mb-5 size-full flex-col items-center justify-start gap-4 text-center">
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
      <div className="mt-5 grid grid-cols-3 w-[85%] gap-10">
        {props.data.map((val, index) => {
          return <EmployeeCard key={index} {...val} />;
        })}
      </div>
    </div>
  );
};
export { Team };
