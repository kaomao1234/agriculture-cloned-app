import { Banner, Newslatteer } from "@/components";
import { ContentOne, ContentTwo } from "@/templates/Contact";
import { FC } from "react";

const ContactPage:FC = ()=>{
    return <div className="flex flex-col min-h-screen bg-white">
        <Banner label="contact us" image="Contact/Banner/image.jpg"/>
        <ContentOne/>
        <ContentTwo/>
        <Newslatteer/>
    </div>
}
export default ContactPage;