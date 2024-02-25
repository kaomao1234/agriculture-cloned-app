import { Banner, Newslatteer } from "@/components";
import { Blog } from "@/templates/Blog";
import { BlogViewModel } from "@/viewmodels";
import { useRouter } from "next/router";
import { FC, useRef } from "react";

const BlogPage: FC = () => {
  const router = useRouter();
  const viewModelRef = useRef(new BlogViewModel(router));
  const viewModel = viewModelRef.current;
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Banner image="Blog/Banner/image.png" label="recent news" />
      <Blog data={viewModel.blogItemData} />
      <Newslatteer/>
    </div>
  );
};
export default BlogPage;
