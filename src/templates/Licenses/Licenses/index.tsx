import { FC } from "react";

const Licenses: FC = () => {
  return (
    <table className="mx-[11%] table-fixed border-separate border-spacing-x-11 border-spacing-y-10">
      <tbody>
        <tr>
          <td className="flex">
            <h2 className="flex-shrink-0 font-roboto text-2xl font-extrabold text-blue_dianne">
              Icon & Graphics
            </h2>
          </td>
          <td>
            <label className="font-sans text-base font-normal text-gray-600">
              Icons and Graphics are manually designed by the
              <span className="font-bold text-neutral-400">VictorFlow</span>
              Templates team. You may download these and edit them to fit your
              website without asking for permission or providing credit.
              <br />
              <br />
              Upon purchasing Software UI Kit Template our team grants you a
              nonexclusive, worldwide copyright license to download, copy,
              modify, and use the icons.
            </label>
          </td>
        </tr>
        <tr>
          <td className="flex">
            <h2 className="font-roboto text-2xl font-extrabold text-blue_dianne">
              Photography
            </h2>
          </td>
          <td>
            <div className="flex flex-col gap-5">
              <label className="font-sans text-base font-normal text-gray-600">
                All images used in the Organick Webflow Template are licensed
                for free personal and commercial use. If you&apos;d like to use
                any specific image, you can check the licenses and download the
                images for free on Unsplash, Pexels, and Freepik.
              </label>
              <div className="flex flex-col gap-3">
                <h3 className="font-roboto text-xl font-extrabold text-blue_dianne">
                  Unsplash
                </h3>
                <label className="font-sans text-base font-normal text-gray-600">
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13,
                  Image 14, Image 15, Image 16, Image 17, Image 18, Image 19,
                  Image 20, Image 21, Image 22, Image 23, Image 24, Image 25
                </label>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-roboto text-xl font-extrabold text-blue_dianne">
                  Pixcel
                </h3>
                <label className="font-sans text-base font-normal text-gray-600">
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13,
                  Image 14, Image 15, Image 16, Image 17
                </label>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h2 className="font-roboto text-2xl font-extrabold text-blue_dianne">
              Font
            </h2>
          </td>
          <td>
            <div className="font-sans text-base font-normal text-gray-600">
              Organick template uses free licensed Google Fonts. Please check
              <span className="font-bold">Roboto</span>,
              <span className="font-bold">Yellowtail</span>, and
              <span className="font-bold">Open Sans</span>.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export { Licenses };
