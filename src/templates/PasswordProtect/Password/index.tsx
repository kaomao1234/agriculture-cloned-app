import { CustomContainedButton } from "@/components";
import { FC } from "react";

const Password: FC = () => {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="flex flex-row gap-5 rounded-3xl p-5 shadow-xl">
        <img
          src="PasswordProtect/Password/image.jpg"
          className="w-[70%] rounded-2xl"
        />
        <div className=" inline-flex items-center justify-start gap-3.5">
          <div className="flex flex-col justify-start gap-5">
            <label className="font-robto text-base font-semibold capitalize text-blue_dianne">
              Password
            </label>
            <input
              type="password"
              className="w-[350px] rounded-xl border border-acapulco p-4 italic text-black_coral_pearl outline-none"
              placeholder="Enter Your Password"
            />
            <CustomContainedButton
              text="Send now"
              textColor="text-white"
              backgroundColor="bg-blue_dianne"
              circleIconColor="bg-slate_600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export { Password };
