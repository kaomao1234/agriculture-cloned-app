export const WhyChoosUs = () => {
  const promote = [
    {
      icon: "Return_Purchase.png",
      name: "Return Policy",
    },
    {
      icon: "Natural_Food.png",
      name: "100% Fresh",
    },
    {
      icon: "Phone_Time.png",
      name: "Support 24/7",
    },
    {
      icon: "Card_Security.png",
      name: "Secured Paymen",
    },
  ];
  return (
    <div className="flex flex-col bg-stone-50 px-10 py-14 xl:px-20">
      <div className="flex flex-row items-stretch gap-[2%]">
        <div className="flex flex-col">
          <label className="font-yellowtail text-2xl font-normal text-acapulco">
            Why Choose us?
          </label>
          <label className="font-roboto text-3xl font-extrabold text-blue_dianne">
            We do not buy from the
            <br />
            open market & traders.
          </label>
          <label className="font-sans text-base font-normal text-gray-600">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry&apos;s standard the 1500s, when an
            unknown
          </label>
          <div className="mt-9 flex flex-col gap-3 pr-[30%]">
            <div className="flex w-fit flex-row items-center gap-3 rounded-3xl bg-gray-200 p-5">
              <div className="size-3 rounded-full ring-4 ring-acapulco" />
              <label className="w-52 font-roboto text-base font-medium text-slate-700">
                100% Natural Product
              </label>
            </div>
            <label className="pl-[10%] font-sans text-base font-normal text-gray-600">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </label>
          </div>
          <div className="mt-4 flex flex-col gap-3 pr-[30%]">
            <div className="flex w-fit flex-row items-center gap-3 rounded-3xl bg-gray-200 p-5">
              <div className="size-3 rounded-full ring-4 ring-acapulco" />
              <label className="w-52 font-roboto text-base font-medium text-slate-700">
                Increases resistance
              </label>
            </div>
            <label className="pl-[10%] font-sans text-base font-normal text-gray-600">
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </label>
          </div>
        </div>
        <img
          src="About/WhyChoosUs/image_1.jpg"
          className="w-[45%] rounded-2xl"
        />
      </div>
      <div className="mt-5 flex flex-row gap-x-7">
        {promote.map((val, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-y-2.5 rounded-2xl bg-white p-5"
          >
            <div className="rounded-2xl bg-stone-50 p-10">
              <img src={`About/WhyChoosUs/${val.icon}`} className="size-11" />
            </div>
            <label className="font-roboto text-xl font-extrabold text-slate-700">
              {val.name}
            </label>
            <label className="text-center font-sans text-lg font-normal text-gray-600">
              Simply dummy text of the printintypesetting industry.
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
