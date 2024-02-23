import { FC } from "react";

const ServiceSingle: FC = () => {
  return (
    <div className="mt-[5%] flex flex-col  items-center px-[8%]">
      <img src="ServiceSingle/ServiceSingle/Image.jpg" className="w-[90%]" />
      <div className="mt-[5%] flex flex-col gap-14 px-[12%]">
        <div className="flex flex-col items-start gap-5">
          <label className="font-roboto text-3xl font-extrabold text-blue_dianne">
            Organic Store Services
          </label>
          <label className="font-sans text-base font-normal text-black_coral_pearl">
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
        <div className="flex flex-col gap-7">
          <div className="flex flex-row gap-5">
            <img
              src="ServiceSingle/ServiceSingle/Photo_1.jpg"
              className="rounded-xl"
            ></img>
            <div className="flex flex-col items-start justify-center gap-3 rounded-xl bg-alabaster px-[3%]">
              <label className="font-roboto text-xl font-medium text-blue_dianne">
                Why Organic
              </label>
              <label className="font-sans text-base font-normal text-black_coral_pearl">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                page editors now use Lorem Ipsum as their default model text,
                and auncover.
              </label>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col items-start justify-center gap-3 rounded-xl bg-alabaster px-[3%]">
              <label className="font-roboto text-xl font-medium text-blue_dianne">
                Speciality Produce
              </label>
              <label className="font-sans text-base font-normal text-black_coral_pearl">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                page editors now use Lorem Ipsum as their default model text,
                and auncover.
              </label>
            </div>
            <img
              src="ServiceSingle/ServiceSingle/Photo_2.jpg"
              className="rounded-xl"
            ></img>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <label className="font-roboto text-2xl font-extrabold text-blue_dianne">
              We farm your land
            </label>
            <label className="font-sans text-base font-normal text-black_coral_pearl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English.
            </label>
          </div>
          <div className="flex flex-row gap-[5%]">
            <div className="flex flex-row items-center gap-5 rounded-full bg-alabaster px-4 py-2">
              <label className=" flex h-16 w-16 items-center justify-center rounded-full bg-acapulco text-center font-roboto text-xl font-bold text-white">
                01
              </label>
              <label className="font-roboto text-xl font-semibold text-blue_dianne">
                Best quality support
              </label>
            </div>
            <div className="flex flex-row items-center gap-5 rounded-full bg-alabaster px-4 py-2">
              <label className=" flex h-16 w-16 items-center justify-center rounded-full bg-acapulco text-center font-roboto text-xl font-bold text-white">
                02
              </label>
              <label className="font-roboto text-xl font-semibold text-blue_dianne">
                Money back guarantee
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ServiceSingle };
