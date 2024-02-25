import { FC } from "react";

const PortfolioDetails: FC = () => {
  return (
    <div className="mt-[15%] flex flex-col gap-10 px-[16%]">
      <div className="flex flex-col items-start justify-start gap-3">
        <label className="font-roboto text-2xl font-extrabold text-blue_dianne">
          About The Farm:
        </label>
        <label className="font-sans text-lg font-normal text-black_coral_pearl">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. <br />
          <br />
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and auncover many web sites still
          in their infancy. Various versions have evolved over the years
        </label>
      </div>
      <div className="flex flex-col gap-5">
        <img
          src="PortfolioSingle/PortfolioDetails/image_1.png"
          className="rounded-2xl"
        />
        <label className="text-center font-sans text-lg font-normal text-black_coral_pearl">
          The Organic Products
        </label>
      </div>
      <div className="flex flex-col items-start justify-start gap-3">
        <label className="font-roboto text-2xl font-extrabold text-blue_dianne">
          How To Farm:
        </label>
        <label className="font-sans text-lg font-normal text-black_coral_pearl">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. <br />
          <br />
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and auncover many web sites still
          in their infancy. Various versions have evolved over the years
        </label>
      </div>
      <div className="flex flex-col items-start justify-start gap-3">
        <label className="font-roboto text-2xl font-extrabold text-blue_dianne">
          Conclusion:
        </label>
        <label className="font-sans text-lg font-normal text-black_coral_pearl">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. <br />
          <br />
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and auncover many web sites still
          in their infancy. Various versions have evolved over the years
        </label>
      </div>
    </div>
  );
};

export { PortfolioDetails };
