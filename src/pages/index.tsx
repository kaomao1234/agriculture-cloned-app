import Image from "next/image";
import { Inter } from "next/font/google";
import { Home } from "./Home/Home";
import { Roboto, Open_Sans } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function App() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between${roboto.className}`}
    >
      <Home />
    </main>
  );
}
