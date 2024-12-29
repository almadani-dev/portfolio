"use client";
import React from "react";
import Container from "../Container";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import SocialLinks from "../SocialLinks";
import Statistics from "../ui/Statistics";
import Photo from "../Photo";
import HomeDescription from "./HomeDescription";
const Profile = () => {
  return (
    <div className="bg-bodycolor text-white/80">
      <Container className="py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-8 md:gap-8 text-center  md:text-start">
          <div>
            <h3 className="font-semibold tracking-wider mb-1 ">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2 text-white">
              Hello I&apos;m
            </h2>
            <h1 className="text-hovercolor text-5xl md:text-7xl tracking-normal">
              Mohammed
            </h1>
          </div>
          <div className=" w-full h-[170px] md:[140px] relative mb-12 md:mb-0">
            <div className="absolute top-0 left-0 w-full h-full ">
              <HomeDescription />
            </div>
          </div>
          <Button
            onClick={() => {
              window.open("./cv.pdf", "_blank");
            }}
            className=" bg-transparent rounded-full border border-hovercolor/50 text-hovercolor hover:bg-hovercolor hover:text-black hoverEffect h-11"
          >
            Download cv <Download />
          </Button>
          <SocialLinks />
          <Statistics />
        </div>
        <Photo />
      </Container>
    </div>
  );
};

export default Profile;
