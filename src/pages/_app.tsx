import { Footer, Nav } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CircularProgress from "@mui/material/CircularProgress";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <div className="flex-col flex">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
      {/* <div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-2 xl:hidden">
        <label className="font-yellowtail text-2xl text-sunset_pearl">
          Open this web with desktop resolution
        </label>
        <CircularProgress className="text-sunset_pearl" />
      </div> */}
    </div>
  );
}
