import { Footer, Nav } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
