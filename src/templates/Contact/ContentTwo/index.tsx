import { FC } from "react";
import { CiLocationOn } from "react-icons/ci";
const ContentTwoItem:FC<{
  param1:string,
  param2:string
}>= (props)=>{
  return   <div className="items-start flex flex-row gap-3 pr-20">
  <CiLocationOn className="size-10 text-acapulco flex-shrink-0"/>
  <div className="flex flex-col font-sans text-black_coral_pearl text-base">
    <span className="font-bold">{props.param1}:</span>
    <span className="font-normal ">{props.param2}</span>
    </div>
  </div>
}

const ContentTwo: FC = () => {
  const cityDetails= [
    {
      param1:"New York, USA",
      param2:"299 Park Avenue New York, New York 10171"
    },
    {
      param1:"London, UK",
      param2:"30 Stamford Street, London SE1 9LQ"
    }
  ]
  return <div className="flex relative items-center justify-end h-[450px] overflow-clip rounded-3xl">
    <div className="flex flex-col bg-white absolute mr-[5%] rounded-3xl p-5 justify-start ml-[58%] gap-4">
    <div className="flex flex-col">
    <label className=" text-acapulco text-2xl font-yellowtail">Location</label>
    <label className="text-blue_dianne text-3xl font-extrabold font-roboto">Our Farms</label>
    </div>
    <label className="text-black_coral_pearl text-base font-normal font-sans">Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.</label>
    <div className="flex flex-col gap-y-4">{
      cityDetails.map((value,index)=>{
        return <ContentTwoItem key={index} param1={value.param1} param2={value.param2}/>
      })
    }
    </div>
    </div>
    <img src="Contact/ContentTwo/image.jpg" alt="" className="" />
  </div>;
};
export { ContentTwo };
