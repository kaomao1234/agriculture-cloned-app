import { FC } from "react";

const Banner: FC = () => {
  const data = [
    "December 4, 2022",
    "Kevin Martin",
    "Agriculture , Eco",
    "Organic Products",
  ];
  return (
    <div
      style={{
        backgroundImage: `url(PortfolioSingle/Banner/image.png)`,
      }}
      className="relative w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute z-10 mx-[10%] mt-[20%] flex flex-row overflow-clip rounded-2xl bg-white shadow-2xl">
        <div className="flex flex-col justify-start gap-5 p-[3%]">
          <label className="font-roboto text-3xl font-extrabold text-blue_dianne">
            Black Raspberry
          </label>
          <label className="font-sans text-base font-normal text-black_coral_pearl">
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed
          </label>
        </div>
        <div className="flex flex-shrink-0 flex-row items-center gap-3 bg-alabaster px-[3%]">
          <div className="flex flex-col gap-2 font-roboto text-base font-medium text-blue_dianne">
            <label>Date</label>
            <label>Client</label>
            <label>Category</label>
            <label>Service</label>
          </div>
          <div className="flex flex-col gap-2">
            {Array.from({
              length: 4,
            }).map((value, index) => {
              return (
                <div className="flex flex-row items-center gap-3" key={index}>
                  <label className="font-roboto text-base font-medium text-blue_dianne">
                    :
                  </label>
                  <label className="font-sans text-base font-normal text-black_coral_pearl">
                    {data[index]}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <img
        src="PortfolioSingle/Banner/image.png"
        className="w-[60%] opacity-0"
      />
    </div>
  );
};

export { Banner };
