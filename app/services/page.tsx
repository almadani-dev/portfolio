"use client";
import { servicesData } from "@/components/constants";
import PageLayout from "@/components/PageLayout";
import Title from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col  py-5 md:py-10">
      <PageLayout>
        <Title>Services I Provide</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
          {servicesData?.map((item) => (
            <div
              key={item?._id}
              className="flex flex-col p-6 bg-hovercolor/5 border border-hovercolor/20 hover:border-hovercolor/50 rounded-lg shadow-md group hover:shadow-lg gap-3 hoverEffect"
            >
              <div className="w-full flex items-center justify-between">
                <p className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover hoverEffect">
                  {item?._id}
                </p>
                <Link href={item?.href} target="_blank">
                  <ArrowUp className="rotate-45" />
                </Link>
              </div>
              <h2 className="font-semibold ">{item?.title}</h2>
              <p className="text-sm md:text-base ">{item?.description}</p>
              <Separator className="bg-white/30" />
            </div>
          ))}
        </div>
      </PageLayout>
    </section>
  );
};

export default ServicesPage;