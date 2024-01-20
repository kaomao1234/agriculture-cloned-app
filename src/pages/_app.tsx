import { Footer, Nav } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CircularProgress from "@mui/material/CircularProgress";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <div className="hidden flex-col xl:visible xl:flex">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
      <div className="flex h-full min-h-screen w-full items-center justify-center xl:hidden">
        <CircularProgress />
      </div>
    </div>
  );
}
