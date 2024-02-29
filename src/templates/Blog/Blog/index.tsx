import { BlogPostCardModel } from "@/models";
import { FC } from "react";
import { CustomContainedButton } from "@/components";
import PersonIcon from "@mui/icons-material/Person";
const BlogPostCard: FC<{
  data: BlogPostCardModel;
  onTap: (self: BlogPostCardModel) => void;
}> = (props) => {
  const data = props.data;
  const onTapWrapper = () => {
    props.onTap(data);
  };
  return (
    <div className="relative">
      <div className="absolute z-0 flex size-full flex-col px-5 pt-[23px]">
        <pre className="flex size-20 flex-shrink-0 items-center justify-center rounded-full bg-white text-center font-roboto text-base font-bold text-blue_dianne xl:size-20 xl:text-xl">
          {data.date.replace("\\n", "\n")}
        </pre>
        <div className="mt-[15%] flex flex-col justify-start gap-2 rounded-3xl bg-white p-[5%] shadow-2xl xl:mt-[20%]">
          <div className="flex flex-row items-center gap-2">
            <PersonIcon className="size-5 text-acapulco" />
            <label className="font-roboto text-base font-normal text-blue_dianne">
              By {data.author}
            </label>
          </div>
          <div className="flex flex-col">
            <label className="font-roboto text-base font-extrabold text-blue_dianne">
              {data.title}
            </label>
            <label className="font-sans text-sm font-normal text-black_coral_pearl">
              {data.content}
            </label>
          </div>
          <CustomContainedButton
            text="Read more"
            circleIconColor="bg-blue_dianne"
            textColor="text-blue_dianne"
            backgroundColor="bg-white"
            onClick={onTapWrapper}
          />
        </div>
      </div>
      <img alt="" src={data.image} className="w-full rounded-3xl" />
    </div>
  );
};
const Blog: FC<{
  data: BlogPostCardModel[];
  onTap: (self: BlogPostCardModel) => void;
}> = (props) => {
  return (
    <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-32 px-[15%] 2xl:px-[20%]">
      {props.data.map((val, index) => (
        <BlogPostCard key={index} data={val} onTap={props.onTap} />
      ))}
    </div>
  );
};
export { Blog };
