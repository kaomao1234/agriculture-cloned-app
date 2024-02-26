import { Banner, Newslatteer } from "@/components";
import { ContentOne, ContentTwo } from "@/templates/Contact";
import { FC } from "react";

const ContactPage:FC = ()=>{
    return <div className="flex flex-col min-h-screen bg-white">
        <Banner label="contact us" image="Contact/Banner/image.jpg"/>
        <div className="flex flex-col px-[10%] py-[10%] gap-5">
        <ContentOne/>
        <ContentTwo/>
        <Newslatteer/>
        </div>
    </div>
}
export default ContactPage;