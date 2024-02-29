import { Footer, Nav } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CircularProgress from "@mui/material/CircularProgress";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      {/* <div className="fixed z-30 flex w-full flex-row gap-3 bg-sunset_pearl">
        <label className="hidden text-xl sm:visible sm:flex sm:md:hidden">
          Sm breakpoint-up
        </label>
        <label className="hidden text-xl md:visible md:flex md:lg:hidden">
          Md breakpoint-up
        </label>
        <label className="hidden text-xl lg:visible lg:flex lg:xl:hidden">
          Lg breakpoint-up
        </label>
        <label className="hidden text-xl xl:visible xl:flex xl:2xl:hidden">
          Xl breakpoint-up
        </label>
        <label className="hidden text-xl 2xl:visible 2xl:flex">
          2Xl breakpoint-up
        </label>
      </div> */}
      <div className="relative flex flex-col">
        <Nav />
        <div className="flex flex-col z-0 pt-[100px]">
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </div>
  );
}
