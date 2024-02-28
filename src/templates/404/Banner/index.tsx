import { CustomContainedButton } from "@/components";
import { useRouter } from "next/router";
import { FC } from "react";
const Banner: FC = () => {
    const router = useRouter();
    const onClick = ()=>{
        router.push({
            pathname:"/Home"
        })
    };
  return (
    <div className="relative flex h-[450px] w-full">
      <div className="absolute z-10 flex flex-col gap-5 text-center right-0 m-[5%]">
        <label className="font-roboto text-8xl font-extrabold text-[#8FA8A8]">
          404
        </label>
        <label className="font-roboto text-5xl font-extrabold text-blue_dianne">
          Page not found
        </label>
        <label className="font-sans text-base font-semibold text-black_coral_pearl">
          The page you are looking for doesn&apos;t exist or has been moved
        </label>
        <CustomContainedButton
          text="go homepage"
          textColor="text-white"
          circleIconColor="bg-slate_600"
          backgroundColor="bg-blue_dianne"
          onClick={onClick}
        />
      </div>
      <img src="404/Banner/image.png" alt="" className="w-full object-cover" />
    </div>
  );
};
export { Banner };
