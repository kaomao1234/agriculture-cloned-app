import { FC } from "react";

const Release: FC = () => {
  return (
    <div className="flex items-center justify-center pt-[10%]">
      <div className="flex flex-row gap-5 rounded-3xl p-5 shadow-xl">
        <img src="Changelog/Release/photo.jpg" className="rounded-full overflow-clip" />
        <div className=" inline-flex items-center justify-start gap-3.5">
          <div className="font-roboto text-2xl font-extrabold text-blue_dianne">
            V.1
          </div>
          <div className="font-sans text-base font-normal text-gray-600">
            Initial Organick Webflow Template Release
          </div>
        </div>
      </div>
    </div>
  );
};

export { Release };
