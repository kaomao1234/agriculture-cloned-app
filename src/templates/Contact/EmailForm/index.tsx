import { FC } from "react";
import { Button } from '@mui/material';
const EmailForm: FC = () => {
  return <form className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-[8%]">
    <div className="flex flex-col justify-start gap-5">
      <label className="text-blue_dianne text-base font-semibold font-robto capitalize">Full Name</label>
      <input type="email" className="text-black_coral_pearl outline-none border-acapulco border rounded-xl p-4 italic" placeholder="Your Name" />
    </div>
    <div className="flex flex-col justify-start gap-5">
      <label className="text-blue_dianne text-base font-semibold font-robto capitalize">Your Email</label>
      <input type="email" className="text-black_coral_pearl outline-none border-acapulco border rounded-xl p-4 italic" placeholder="example@yourmail.com" />
    </div>
    <div className="flex flex-col justify-start gap-5">
      <label className="text-blue_dianne text-base font-semibold font-robto capitalize">company</label>
      <input type="email" className="text-black_coral_pearl outline-none border-acapulco border rounded-xl p-4 italic" placeholder="yourcompany name here" />
    </div>
    <div className="flex flex-col justify-start gap-5">
      <label className="text-blue_dianne text-base font-semibold font-robto capitalize">Subject</label>
      <input type="email" className="text-black_coral_pearl outline-none border-acapulco border rounded-xl p-4 italic" placeholder="how can we help" />
    </div>
    <div className="flex flex-col justify-start gap-5 col-span-2">
      <label className="text-blue_dianne text-base font-semibold font-robto capitalize">Message</label>
      <textarea  className="text-black_coral_pearl outline-none border-acapulco border rounded-xl p-4 italic h-[250px]" placeholder="hello there,i would like to talk about how to..." />
    </div>
      <Button variant="contained" className="text-white text-base font-bold font-roboto bg-blue_dianne rounded-xl capitalize w-fit px-12 py-7">Send message</Button>
  </form>;
};
export { EmailForm };
