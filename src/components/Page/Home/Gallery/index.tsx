import { FC, Fragment } from "react";
import style from "./main.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
interface galleryItem {
  name: string;
  imageSrc: string;
}
interface Props {
  data: galleryItem[];
}
const Gallery: FC<Props> = (props) => {
  return (
    <div id={style.main}>
      {props.data.map((value, index) => {
        return (
          <Fragment key={index}>
            <div className="relative flex overflow-clip" key={index}>
              <div className="absolute z-10 flex size-full items-center justify-center">
                <Button
                  variant="contained"
                  className="rounded-[20px] bg-white px-[41px] py-[17px] font-roboto text-xl font-medium capitalize text-blue_dianne hover:bg-white"
                >
                  {value.name}
                </Button>
              </div>
              <img src={value.imageSrc} alt=""/>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Gallery;
