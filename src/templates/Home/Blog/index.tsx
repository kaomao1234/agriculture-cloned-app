import { FC } from "react";
import style from "./main.module.scss";
import { CustomOutlinedButton, CustomContainedButton } from "@/components";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";

// BlogPost Component
const BlogPost: FC<{
  date: string;
  image: string;
  author: string;
  title: string;
  content: string;
}> = ({ date, image, author, title, content }) => (
  <div className="relative">
    <div className="absolute z-0 flex size-full flex-col px-5 pt-[23px]">
      <pre className="flex size-20 items-center justify-center rounded-full bg-white text-center font-roboto text-base font-bold text-blue_dianne xl:size-24 xl:text-2xl flex-shrink-0">
        {date.replace("\\n", "\n")}
      </pre>
      <div className="flex flex-col justify-start gap-3.5 rounded-3xl bg-white px-7 pb-7 shadow-2xl pt-3 mt-[15%] xl:mt-[20%]">
        <div className="flex flex-row items-center">
          <PersonIcon className="size-5 text-sunset_pearl" />
          <label className="font-roboto text-base font-normal text-blue_dianne">
            By {author}
          </label>
        </div>
        <div className="flex flex-col">
          <label className="font-roboto text-xl font-extrabold text-blue_dianne">
            {title}
          </label>
          <label className="font-sans text-lg font-normal text-black_coral_pearl">
            {content}
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
    <img alt="" src={image} className="w-full rounded-3xl" />
  </div>
);

const Blog: FC = () => {
  return (
    <div id={style.main} className="flex flex-col gap-y-[24px] mb-[15%] xl:mb-0">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col">
          <label className="font-yellowtail text-2xl font-normal text-acapulco">
            News
          </label>
          <label className="font-robto w-[70%] text-3xl font-extrabold text-blue_dianne">
            Discover weekly content about organic food, & more
          </label>
        </div>
        <CustomOutlinedButton text="More new" />
      </div>
      <div className="flex flex-row gap-x-16">
        <BlogPost
          date="25\nNov"
          image="/Home/Blog/image_1.png"
          author="Rachi Card"
          title="The Benefits of Vitamin D & How to Get It"
          content="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        />
        <BlogPost
          date="25\nNov"
          image="/Home/Blog/image_2.png"
          author="Rachi Card"
          title="The Benefits of Vitamin D & How to Get It"
          content="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        />
      </div>
    </div>
  );
};

export default Blog;
