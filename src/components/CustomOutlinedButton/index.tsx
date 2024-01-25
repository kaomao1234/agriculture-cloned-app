import { Button } from "@mui/material";
import { FC } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
interface Props {
  text: string;
  onClick?:()=>void;
}
export const CustomOutlinedButton: FC<Props> = (props) => {
  return (
    <Button
    onClick={props.onClick}
      variant="outlined"
      className="flex size-fit flex-row gap-x-[9px] rounded-2xl border-2 border-blue_dianne px-7 py-5 text-blue_dianne"
    >
      <label className="font-roboto text-base font-bold capitalize">
        {props.text}
      </label>
      <IoIosArrowRoundForward className="size-5 rounded-full bg-blue_dianne text-white"></IoIosArrowRoundForward>
    </Button>
  );
};
