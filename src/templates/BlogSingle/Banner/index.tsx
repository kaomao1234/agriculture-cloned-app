import { FC } from "react";
import PersonIcon from "@mui/icons-material/Person";
const Banner: FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(BlogSingle/Banner/image.png)`,
      }}
      className="relative w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute z-10 mx-[10%] mt-[20%] flex flex-row overflow-clip rounded-2xl bg-white shadow-2xl">
        <div className="flex flex-col justify-start gap-5 pl-[5%] py-[3%] xl:pr-[28%]">
          <div className="flex flex-row items-center justify-start gap-5">
            <div className="flex h-fit flex-row gap-2 font-sans text-base">
              <label className="font-semibold text-blue_dianne">
                Posted On:
              </label>
              <label className="text-black_coral_pearl">January 6, 2022</label>
            </div>
            <div className="flex h-fit flex-row items-center gap-1">
              <PersonIcon className="size-5 text-acapulco" />
              <label className="font-roboto text-base font-normal text-blue_dianne">
                By Rachi Card
              </label>
            </div>
          </div>
          <label className="font-roboto text-3xl font-extrabold text-blue_dianne">
            Research More Organic Food
          </label>
          <label className="font-sans text-base font-normal text-black_coral_pearl">
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed
          </label>
        </div>
      </div>
      <img src="BlogSingle/Banner/image.png" className="w-[60%] opacity-0" />
    </div>
  );
};
export { Banner };
