"use client";
import { projects } from "@/components/constants";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const WorkPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <PageLayout className="py-6 md:py-12">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
          onSelect={() => {
            const index = 0;
            if (typeof index === "number") {
              handleSlideChange(index);
            }
          }}
        >
          <CarouselContent>
            {projects?.map((project) => (
              <CarouselItem key={project?.id}>
                <Card className="bg-bodycolor border-hovercolor/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
                      {/* Description */}
                      <div className="w-full md:w-1/2 order-2 md:order-1  mb-8 md:mb-6 ">
                        <div className="space-y-3 md:space-y-6 mt-4 md:mt-0 ">
                          <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline ">
                            {project?.id}
                          </h2>
                          <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-hovercolor hoverEffect">
                            {project?.category} project
                          </h3>
                          <p className="text-white text-sm md:text-base leading-6 md:leading-normal">
                            {project?.description}
                          </p>
                          <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
                            {project?.stack?.map((item, index) => (
                              <li
                                key={index}
                                className="text-xs md:text-base text-hovercolor/80"
                              >
                                {item}{" "}
                                {index !== project?.stack?.length - 1 && ","}
                              </li>
                            ))}
                          </ul>
                          <Separator className="bg-gray-700" />
                          <div className="flex items-center space-x-4">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-hovercolor/5 text-white/80 border border-hovercolor/30 hover:bg-hovercolor/20 hover:border-hovercolor hover:text-hovercolor hoverEffect"
                                  >
                                    <Link href={project?.liveUrl}>
                                      <ArrowUpRight />
                                      <span className="sr-only">View Live</span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black text-sm">
                                  <p>View Live</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-hovercolor/5 text-white/80 border border-hovercolor/30 hover:bg-hovercolor/20 hover:border-hovercolor hover:text-hovercolor hoverEffect"
                                  >
                                    <Link href={project?.githubUrl}>
                                      <Github />
                                      <span className="sr-only">Github</span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black text-sm">
                                  <p>View Github</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                      {/* image */}
                      <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative h-64 md:h-96 bg-gray-700 rounded-lg">
                          <Image
                            src={project?.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 -bottom-8 ">
            <CarouselPrevious className="rounded-md bg-transparent border border-hovercolor/50 hover:bg-hovercolor/20 hover:text-white hover:border-hovercolor p-5 hoverEffect" />
            <CarouselNext className="rounded-md bg-transparent border border-hovercolor/50 hover:bg-hovercolor/20 hover:text-white hover:border-hovercolor p-5 hoverEffect" />
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default WorkPage;
