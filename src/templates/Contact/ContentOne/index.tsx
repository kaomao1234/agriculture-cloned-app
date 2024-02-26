import { FC,Fragment } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import  IconButton from '@mui/material/IconButton';



const ContentOne: FC = () => {
    const contractIcon = [
    (key: number) => <FaInstagram key={key} />,
    (key: number) => <FaFacebook key={key} />,
    (key: number) => <FaTwitter key={key} />,
    (key: number) => <FaPinterest key={key} />,
  ];
  return (
    <div className="flex flex-row gap-10">
      <img src="Contact/ContentOne/image.jpg" alt="" className="rounded-3xl w-[45%]" />
      <div className="flex flex-col gap-3">
      <label className="text-blue_dianne text-3xl font-extrabold font-roboto">We&apos;d love to talk about how we can work together.</label>
      <label className=" text-black_coral_pearl text-base font-normal font-sans">
        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley.
      </label>
      <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-5 items-center rounded-2xl shadow-md w-[70%] p-3">
            <div  className="bg-zinc-100 p-5 rounded-xl" >
            <CiMail className="text-acapulco size-8 "/>
            </div>
            <div className="flex flex-col">
            <label className="text-blue_dianne text-lg font-extrabold font-roboto">Massege<br/></label>
  <label className="text-black_coral_pearl text-base font-normal font-sans">support@organic.com</label>
            </div>
            </ div>
          <div className="flex flex-row gap-5 items-center rounded-2xl shadow-md w-[70%] p-3">
            <div  className="bg-zinc-100 p-5 rounded-xl" >
            <MdOutlinePhone className="text-acapulco size-8 "/>
            </div>
            <div className="flex flex-col">
            <label className="text-blue_dianne text-lg font-extrabold font-roboto">Contact Us<br/></label>
  <label className="text-black_coral_pearl text-base font-normal font-sans">+01 123 456 789</label>
            </div>
            </ div>
      </div>
      <div className="mt-[15px] flex flex-row gap-4">
          {contractIcon.map((value, index) => (
            <Fragment key={index}>
              <IconButton
                key={index}
                className="bg-[#EFF6F1] p-5 text-[25px] text-blue_dianne"
              >
                {value(index)}
              </IconButton>
            </Fragment>
          ))}
        </div>
      </div>
  
    </div>
  );
};
export { ContentOne };
