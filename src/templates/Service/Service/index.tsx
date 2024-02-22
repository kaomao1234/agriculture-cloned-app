import { CustomOutlinedButton } from "@/components";
import { ViewAgenda } from "@mui/icons-material";
import { FC } from "react";

interface serviceData {
  image: string;
  title: string;
}

const Service: FC<{
  serviceLeftData: serviceData[];
  serviceRightData: serviceData[];
}> = (props) => {
  return (
    <div className="flex w-full flex-col items-center bg-alabaster gap-y-5 py-10">
      <div className="flex w-fit flex-col">
        <div className="font-yellowtail text-2xl font-normal text-acapulco">
          What we Grow
        </div>
        <div className="font-roboto text-3xl font-extrabold text-blue_dianne">
          Better Agriculture for
          <br /> Better Future
        </div>
      </div>
      <div className="grid-cols-3 items-center grid gap-x-12 xl:px-[10%] lg:px-[5%]">
        <div className="flex flex-col gap-y-5">
          {props.serviceLeftData.map((val, index) => {
            return (
              <div
                className="flex flex-col items-end gap-2 text-right"
                key={index}
              >
                <img src={val.image} className="size-10 " />
                <label className="font-roboto text-base font-medium text-blue_dianne">
                  {val.title}
                </label>
                <label className="font-sans text-sm font-normal text-black_coral_pearl">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </label>
              </div>
            );
          })}
        </div>
        <img src="Service/Service/photo.png" className="w-full" />
        <div className="flex flex-col gap-y-5">
          {props.serviceRightData.map((val, index) => {
            return (
              <div
                className="flex flex-col items-start gap-2 text-left"
                key={index}
              >
                <img src={val.image} className="size-10" />
                <label className="font-roboto text-base font-medium text-blue_dianne">
                  {val.title}
                </label>
                <label className="font-sans text-sm font-normal text-black_coral_pearl">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <CustomOutlinedButton text="Explore More" />
    </div>
  );
};

export { Service };
