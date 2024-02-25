import { BlogPostCardModel } from "@/models";
import { title } from "process";
import { FC } from "react";
import { CustomContainedButton } from "../CustomContainedButton";
import PersonIcon from "@mui/icons-material/Person";
const BlogPostCard: FC<BlogPostCardModel> = (props) => (
  <div className="relative">
    <div className="absolute z-0 flex size-full flex-col px-5 pt-[23px]">
      <pre className="flex size-20 flex-shrink-0 items-center justify-center rounded-full bg-white text-center font-roboto text-base font-bold text-blue_dianne xl:size-24 xl:text-2xl">
        {props.date.replace("\\n", "\n")}
      </pre>
      <div className="mt-[15%] flex flex-col justify-start gap-3.5 rounded-3xl bg-white px-7 pb-7 pt-3 shadow-2xl xl:mt-[20%]">
        <div className="flex flex-row items-center">
          <PersonIcon className="size-5 text-sunset_pearl" />
          <label className="font-roboto text-base font-normal text-blue_dianne">
            By {props.author}
          </label>
        </div>
        <div className="flex flex-col">
          <label className="font-roboto text-xl font-extrabold text-blue_dianne">
            {props.title}
          </label>
          <label className="font-sans text-lg font-normal text-black_coral_pearl">
            {props.content}
          </label>
        </div>
        <CustomContainedButton
          text="Read more"
          circleIconColor="bg-blue_dianne"
          textColor="text-blue_dianne"
          backgroundColor="bg-sunset_pearl"
        />
      </div>
    </div>
    <img alt="" src={props.image} className="w-full rounded-3xl" />
  </div>
);
export { BlogPostCard };
