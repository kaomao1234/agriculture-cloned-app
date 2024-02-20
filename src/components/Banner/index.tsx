import { FC } from "react";

const Banner: FC<{
  label: string;
  image: string;
}> = (props) => {
  return (
    <div className="relative flex h-fit w-full overflow-clip">
      <img className="w-full object-cover" src={props.image} />
      <div className="z-1 absolute flex size-full items-center justify-center">
        <label className=" font-roboto text-[40px] font-bold capitalize text-blue_dianne">
          {props.label}
        </label>
      </div>
    </div>
  );
};

export { Banner };
