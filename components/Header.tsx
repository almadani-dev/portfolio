"use client";

import React, { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { navbarData } from "./constants";
import Link from "next/link";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [clickedLink, setClickedLink] = useState<string>("#home");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <header className="border-b border-b-hovercolor/10 bg-bodycolor text-white sticky top-0 z-50">
      <Container className="py-5 flex items-center justify-between">
        <div className="">
          <Logo title="Al-Madani" subtitle="." title2="Dev" />
        </div>
        <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {navbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-hovercolor hoverEffect relative group overflow-x-hidden ${
                clickedLink === item?.href && "text-hovercolor"
              }`}
              onClick={() => setClickedLink(item.href)}
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
            className="text-sm bg-hovercolor/30 px-4 py-2 rounded-md border border-hovercolor/10 hover:border-hovercolor hover:bg-hovercolor hover:text-black hoverEffect"
          >
            Hire Me
          </Link>
        </div>

        <button
          aria-label="Toggle menue"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
          className="inline-flex md:hidden relative hover:text-hovercolor hoverEffect"
        >
          <Menu />
        </button>
      </Container>
      {isSidebarOpen && (
        <div className="md:hidden">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            clickedLink={clickedLink}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
