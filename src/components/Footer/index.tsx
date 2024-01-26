import { FC, Fragment } from "react";
import style from "./main.module.scss";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa6";
import IconButton from "@mui/material/IconButton";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
const Footer: FC = () => {
  const contractIcon = [
    (key: number) => <FaInstagram key={key} />,
    (key: number) => <FaFacebook key={key} />,
    (key: number) => <FaTwitter key={key} />,
    (key: number) => <FaPinterest key={key} />,
  ];
  return (
    <div id={style.Footer}>
      <div className="flex flex-col gap-4 border-r-2 border-alto pr-[25px] text-right">
        <label className="font-roboto text-xl font-bold text-blue_dianne">
          Contact Us
        </label>
        <div className="flex flex-col">
          <label className="font-['Open Sans'] font-bold text-black_coral_pearl">
            Email
          </label>
          <label className="font-['Open Sans'] text-black_coral_pearl">
            needhelp@Organia.com
          </label>
        </div>
        <div className="flex flex-col">
          <label className="font-['Open Sans'] font-bold text-black_coral_pearl">
            Phone
          </label>
          <label className="font-['Open Sans'] text-black_coral_pearl">
            666 888 888
          </label>
        </div>
        <div className="flex flex-col">
          <label className="font-['Open Sans'] font-bold text-black_coral_pearl">
            Address
          </label>
          <label className="font-['Open Sans'] text-black_coral_pearl">
            88 road, borklyn street, USA
          </label>
        </div>
      </div>
      <div className="mx-3 flex w-[50%] flex-col items-center text-center">
        <div className="flex flex-row items-center gap-2">
          <Image src="/Nav/Logo.png" className="w-7" alt=""/>
          <label className="font-roboto text-2xl font-bold text-blue_dianne">
            Organick
          </label>
        </div>
        <label className="font-['Open Sans'] mt-5 text-center font-normal text-black_coral_pearl">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing{" "}
        </label>
        <div className="mt-[25px] flex flex-row gap-4">
          {contractIcon.map((value, index) => (
        <Fragment key={index}>
              <IconButton
              key={index}
              className="bg-[#EFF6F1] p-6 text-[30px] text-blue_dianne"
            >
              {value(index)}
            </IconButton>
        </Fragment>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 border-l-2 border-alto pl-[25px]">
        <label className="font-roboto text-xl font-bold text-blue_dianne">
          Utility Pages
        </label>
        <div className="flex flex-col gap-4">
          <label className="font-['Open Sans'] font-normal text-black_coral_pearl">
            Style Guide
          </label>
          <label className="font-['Open Sans'] font-normal text-black_coral_pearl">
            404 Not Found
          </label>
          <label className="font-['Open Sans'] font-normal text-black_coral_pearl">
            Password Protected
          </label>
          <label className="font-['Open Sans'] font-normal text-black_coral_pearl">
            Licences
          </label>
          <label className="font-['Open Sans'] font-normal text-black_coral_pearl">
            Changelog
          </label>
        </div>
      </div>
    </div>
  );
};

export { Footer };
