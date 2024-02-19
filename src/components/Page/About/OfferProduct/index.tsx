export const OfferProduct = () => {
  const content = [
    {
      name: "spicy",
      image: "image_1.jpg",
    },
    {
      name: "nut & feesd",
      image: "image_2.jpg",
    },
    {
      name: "fruits",
      image: "image_3.jpg",
    },
    {
      name: "vegetable",
      image: "image_4.jpg",
    },
  ];
  return (
    <div className="flex size-full flex-col items-center bg-blue_dianne py-10 gap-10">
      <div className="flex flex-col items-center gap-2">
        <div className="font-yellowtail text-2xl font-normal text-acapulco">
          About Us
        </div>
        <label className="font-yellowtail text-3xl font-extrabold text-white">
          What We Offer for You
        </label>
      </div>
      <div className="flex flex-row gap-5 items-stretch justify-stretch px-[10%]">
        {content.map((val, index) => {
          return (
            <div className="flex flex-col items-center gap-3 flex-grow" key={index}>
              <img src={`About/OfferProduct/${val.image}`} className="rounded-3xl size-[calc(100vh*0.4)]"></img>
              <label className="text-white text-2xl font-medium font-roboto">{val.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
