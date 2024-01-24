import { Button } from "@mui/material";
import { FC } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
interface Props {
  text: string;
  textColor: string;
  circleIconColor: string;
  backgroundColor: string;
  onClick?: () => void;
}
export const CustomGeneralButton: FC<Props> = (props) => {
  return (
    <Button
      onClick={props.onClick}
      variant="contained"
      className={`flex w-fit flex-row gap-x-2.5 rounded-2xl ${props.backgroundColor} px-7 py-5 hover:${props.backgroundColor}`}
    >
      <label
        className={`${props.textColor} font-roboto text-base font-bold capitalize`}
      >
       {props.text}
      </label>
      <IoIosArrowRoundForward
        className={`${props.circleIconColor} size-5 rounded-full`}
      ></IoIosArrowRoundForward>
    </Button>
  );
};
