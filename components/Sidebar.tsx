import { useOutsideClick } from "@/hooks/use-outside-click";
import { X } from "lucide-react";
import React from "react";
import Logo from "./Logo";
import { navbarData } from "./constants";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  clickedLink: string;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose, clickedLink }) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 z-50 min-w-72 max-w-96 bg-bodycolor border-l border-l-hovercolor/50 shadow-xl
        transform
        ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out
        `}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="hover:text-red-500 hoverEFfect "
          aria-label="Close sidebar"
        >
          <X />
        </button>
      </div>
      <nav className="flex flex-col px-5 gap-7 text-sm uppercase tracking-wide font-medium mt-2">
        <Logo title="Al-Madani" subtitle="." title2="Dev" />
        {navbarData?.map((item) => (
          <Link
            key={item?.title}
            href={item?.href}
            className={`hover:text-hovercolor hoverEffect ${
              clickedLink === item?.href && "text-hovercolor"
            }`}
            onClick={onClose}
          >
            {item?.title}
            <span
              className={`w-full h-px bg-hovercolor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect  ${
                clickedLink === item?.href
                  ? "translate-x-0"
                  : "translate-x-[105%]"
              }`}
            ></span>
          </Link>
        ))}

        <Link
          href={"/cv.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-center bg-hovercolor/30 px-4 py-2 rounded-md border border-hovercolor/10 hover:border-hovercolor hover:bg-hovercolor hover:text-black hoverEffect"
        >
          Hire Me
        </Link>
        <SocialLinks />
      </nav>
    </div>
  );
};

export default Sidebar;
