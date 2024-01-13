import { FC } from "react";
import style from "./Nav.module.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdCart } from "react-icons/io";
const Nav: FC = () => {
  return (
    <div className={style.Nav}>
      <div className={style.Content}>
        <div className={style.Logo}>
          <label className="text-blue_dianne font-bold font-roboto text-lg">
            Organick
          </label>
        </div>
        <div className={style.Menu}>
          <button>Home</button>
          <button>About</button>
          <button>Pages</button>
          <button>Shop</button>
          <button>Projects</button>
          <button>News</button>
        </div>
        <div className={style.Search}>
          <input className="outline-none text-black_coral_pearl bg-transparent p-2"></input>
          <button className="text-white bg-acapulco rounded-full my-[5px] p-2">
            <HiMagnifyingGlass className="size-[21px]"></HiMagnifyingGlass>
          </button>
        </div>
        <div className={style.Cart}>
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
