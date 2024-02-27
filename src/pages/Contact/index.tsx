import { Banner, Newslatteer } from "@/components";
import { ContentOne, ContentTwo,EmailForm } from "@/templates/Contact";
import { FC } from "react";

const ContactPage:FC = ()=>{
    return <div className="flex flex-col min-h-screen bg-white">
        <Banner label="contact us" image="Contact/Banner/image.jpg"/>
        <div className="flex flex-col xl:px-[10%] py-[5%] gap-10 px-[5%]">
        <ContentOne/>
        <ContentTwo/>
        <EmailForm/>
        <Newslatteer/>
        </div>
    </div>
}
export default ContactPage;