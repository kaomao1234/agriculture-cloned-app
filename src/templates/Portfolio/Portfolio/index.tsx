import { FC } from "react";

const PortfolioItem: FC<{
  label: string;
  type: string;
  image: string;
  onTap?: () => void;
}> = (props) => {
  return (
    <div className="flex-co flex justify-start">
      <div className="relative"></div>
      <label className="font-roboto text-xl font-extrabold text-blue_dianne">
        {props.label}
      </label>
      <div className=" font-yellowtail text-lg font-normal text-acapulco">
        {props.type}
      </div>
    </div>
  );
};

const Portfolio: FC = () => {
  return <div className="grid grid-cols-3"></div>;
};

export { Portfolio };
