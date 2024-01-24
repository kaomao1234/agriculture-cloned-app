import { FC } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdCart } from "react-icons/io";
import style from "./main.module.scss";

const Nav: FC = () => {
  return (
    <div className={style.nav}>
      <div className={style.content}>
        <div className={style.logo}>
          <label className="font-roboto text-lg font-bold text-blue_dianne">
            Organick
          </label>
        </div>
        <div className={style.menu}>
          <button>Home</button>
          <button>About</button>
          <button>Pages</button>
          <button>Shop</button>
          <button>Projects</button>
          <button>News</button>
        </div>
        <div className={style.search}>
          <input className="bg-transparent p-2 text-black_coral_pearl outline-none"></input>
          <button className="text-white my-[5px] rounded-full bg-acapulco p-2">
            <HiMagnifyingGlass className="size-[21px]"></HiMagnifyingGlass>
          </button>
        </div>
        <div className={style.cart}>
          <button className="text-white my-[5px] rounded-full bg-blue_dianne p-2">
            <IoMdCart className="size-[21px]"></IoMdCart>
          </button>
          <label className="font-roboto text-base font-semibold text-blue_dianne">
            Cart(0)
          </label>
        </div>
      </div>
    </div>
  );
};

export { Nav };
