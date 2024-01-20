import { FC } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdCart } from "react-icons/io";
import style from "./Nav.module.scss";

const Nav: FC = () => {
  return (
    <div className={style.nav}>
      <div className={style.content}>
        <div className={style.logo}>
          <label className="text-blue_dianne font-bold font-roboto text-lg">
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
          <input className="outline-none text-black_coral_pearl bg-transparent p-2"></input>
          <button className="text-white bg-acapulco rounded-full my-[5px] p-2">
            <HiMagnifyingGlass className="size-[21px]"></HiMagnifyingGlass>
          </button>
        </div>
        <div className={style.cart}>
          <button className="text-white bg-blue_dianne rounded-full my-[5px] p-2">
            <IoMdCart className="size-[21px]"></IoMdCart>
          </button>
          <label className="text-blue_dianne font-semibold text-base font-roboto">
            Cart(0)
          </label>
        </div>
      </div>
    </div>
  );
};

export { Nav };
