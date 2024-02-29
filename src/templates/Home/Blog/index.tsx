import { FC } from "react";
import style from "./main.module.scss";
import { CustomOutlinedButton, BlogPostCard } from "@/components";

const Blog: FC<{
  onBlogClick: () => void;
  onLoadBlogClick: () => void;
}> = (props) => {
  return (
    <div
      id={style.main}
      className="mb-[15%] flex flex-col gap-y-[24px] xl:mb-0"
    >
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col">
          <label className="font-yellowtail text-2xl font-normal text-acapulco">
            News
          </label>
          <label className="font-robto w-[70%] text-3xl font-extrabold text-blue_dianne">
            Discover weekly content about organic food, & more
          </label>
        </div>
        <CustomOutlinedButton text="More new" onClick={props.onLoadBlogClick} />
      </div>
      <div className="flex flex-row gap-x-16">
        <BlogPostCard
          date="25\nNov"
          image="/Home/Blog/image_1.png"
          author="Rachi Card"
          title="The Benefits of Vitamin D & How to Get It"
          content="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          onTap={props.onBlogClick}
        />
        <BlogPostCard
          date="25\nNov"
          image="/Home/Blog/image_2.png"
          author="Rachi Card"
          title="The Benefits of Vitamin D & How to Get It"
          content="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          onTap={props.onBlogClick}
        />
      </div>
    </div>
  );
};

export default Blog;
