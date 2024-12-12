"use client";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";
import { Mail, MapPinCheck, Phone } from "lucide-react";
import React from "react";

const infoData = [
  { title: "Phone", description: "+972-59-3964645", icon: <Phone /> },
  { title: "Email", description: "contact@almadani.dev", icon: <Mail /> },
  {
    title: "Address",
    description: "Palestine, Gaza",
    icon: <MapPinCheck />,
  },
];
const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <SocialLinks />
      <Container className=" mt-20 items-center justify-center py-8 md:py-8 flex flex-col  gap-8 md:gap-8   ">
        {/* <div className="w-full md:w-2/3 ">
        <ContactForm />
        </div> */}
        <div className=" w-full flex flex-col justify-center gap-4 md:gap-8 ">
          {infoData?.map((item) => (
            <div key={item?.title} className="flex items-center space-x-4">
              <span className="bg-hovercolor/5 p-4 rounded-md ">
                {item?.icon}
              </span>
              <div>
                <h3 className="text-white text-sm font-semibold">
                  {item?.title}
                </h3>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
