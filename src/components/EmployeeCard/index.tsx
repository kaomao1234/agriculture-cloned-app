import { EmployeeCardModel } from "@/models";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const socialIcons:Record<string,any> = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  ig: FaInstagram ,
};

const EmployeeCard: React.FC<EmployeeCardModel> = (props) => {
  return (
    <div className="flex flex-col overflow-clip rounded-3xl bg-stone-50 shadow duration-150 ease-out hover:bg-white hover:shadow-2xl">
      <img src={props.image} alt={props.name} />
      <div className="flex flex-col p-3">
        <label className="font-roboto text-xl font-extrabold text-slate-700">
          {props.name}
        </label>
        <div className="flex flex-row items-center justify-between">
          <label className="font-yellowtail text-lg font-normal text-acapulco">
            {props.role}
          </label>
          <div className="flex flex-row gap-2">
            {props.links.map((link, index) => {
              const Icon = socialIcons[link];
              return (Icon ? <Icon key={index} className="size-6 text-slate-700"/> : null)
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { EmployeeCard };
