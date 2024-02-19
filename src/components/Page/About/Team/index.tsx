import style from "./main.module.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export const Team = () => {
  const employees = [
    {
      name: "Giovani Bacardo",
      role: "farmer",
      links: ["facebook", "twitter"],
      image: "person_1.jpg",
    },
    {
      name: "Marianne Loreno",
      role: "designer",
      links: ["ig", "facebook", "twitter"],
      image: "person_2.jpg",
    },
    {
      name: "Riga Pelore",
      role: "farmer",
      links: ["ig", "facebook", "twitter"],
      image: "person_3.jpg",
    },
  ];
  return (
    <div id={style.main}>
      <div className="mb-5 size-full flex-col items-center justify-start gap-4">
        <div className="mb-2 flex flex-col items-center justify-start">
          <label className="font-yellowtail text-2xl font-normal text-acapulco">
            Team
          </label>
          <label className="font-roboto text-3xl font-extrabold text-slate-700">
            Our Organic Experts
          </label>
        </div>
        <label className="text-center font-sans text-lg font-normal text-gray-600">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry&#39;s standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </label>
      </div>
      <div className="flex w-[85%] flex-row gap-10">
        {employees.map((val, index) => {
          return (
            <div
              key={index}
              className="flex flex-col overflow-clip rounded-3xl bg-stone-50 shadow duration-150 ease-out hover:bg-white hover:shadow-2xl"
            >
              <img src={`About/Team/${val.image}`}></img>
              <div className="flex flex-col p-3">
                <label className="font-roboto text-xl font-extrabold text-slate-700">
                  {val.name}
                </label>
                <div className="flex flex-row items-center justify-between">
                  <label className="font-yellowtail text-lg font-normal text-acapulco">
                    {val.role}
                  </label>
                  <div className="flex flex-row gap-2">
                    {val.links.map((val, index) => {
                      if (val == "facebook") {
                        return (
                          <FaFacebook
                            key={index}
                            className="size-6 text-slate-700"
                          />
                        );
                      } else if (val == "twitter") {
                        return (
                          <FaTwitter
                            key={index}
                            className="size-6 text-slate-700"
                          />
                        );
                      } else if (val == "ig") {
                        return (
                          <FaInstagram
                            key={index}
                            className="size-6 text-slate-700"
                          />
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
