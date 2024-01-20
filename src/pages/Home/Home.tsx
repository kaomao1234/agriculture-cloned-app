import { FC } from "react";
import style from "./Home.module.scss";
import Button from '@mui/material/Button'
const Home: FC = () => {
  return (
    <div className={style.home}>
      <div className="relative w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a6caaff14e808971cd0490909f9d32d0e8c9dd4fe33827731a1a2958ee2274b?"
          className="absolute z-0"
        />
        <div className="absolute z-[1]">
          <div className="relative ml-44 mt-48 text-4xl text-acapulco max-md:mt-10 max-md:max-w-full">
            100% Natural Food
          </div>
          <div className="relative ml-44 mt-2 w-[530px] max-w-full text-7xl font-extrabold text-blue_dianne max-md:text-4xl">
            Choose the best <br />
            healthier way
            <br />
            of life
          </div>
          <Button
            variant="text"
            color="primary"
          >
            
          </Button>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { Home };
