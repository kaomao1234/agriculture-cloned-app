import { Newslatteer } from "@/components";
import { Banner, Content } from "@/templates/BlogSingle";
import { FC } from "react";

const BlogSinglePage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Banner />
      <Content />
      <Newslatteer/>
    </div>
  );
};
export default BlogSinglePage;
