import Link from "next/link";
import React from "react";
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const SocialLinks = () => {
  const socialData = [
    { title: "Facebook", icon: <Facebook />, href: "https://www.facebook.com" },
    { title: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com" },
    { title: "Github", icon: <Github />, href: "https://www.github.com" },
    { title: "Youtube", icon: <Youtube />, href: "https://www.youtube.com" },
    { title: "Slack", icon: <Slack />, href: "https://www.slack.com" },
  ];
  return (
    <TooltipProvider>
      <div className="flex items-center gap-3">
        {socialData?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger>
              <div className="text-hovercolor/80 border border-hovercolor/80 p-2.5 rounded-full hover:bg-hovercolor/50 hover:border-hovercolor hoverEffect">
                <Link href={item?.href} target="_blank">
                  <span>{item?.icon}</span>
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-hovercolor text-black font-semibold">
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialLinks;
