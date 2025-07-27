"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import { ColouredBtn } from "./ui/colouredBtn";
import { usePathname, useRouter } from "next/navigation";
import { MenuIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { text: "Home", link: "/" },
  { text: "About", link: "/#about" },
  { text: "Services", link: "#services" },
  { text: "Work", link: "/works" },
  { text: "Contact", link: "/contact" },
];
export const Nav = () => {
  const [nav, showNav] = useState(false);
  const router = useRouter();

  const pathname = usePathname();

  const handleNav = () => {
    showNav((prev) => !prev);
  };

  const handleNavClick = (link: string) => {
    showNav(false); // Close the mobile nav

    if (link.startsWith("#")) {
      if (pathname !== "/") {
        // If not on home, go to home with anchor
        router.push(`/${link}`);
      } else {
        // If already on home, scroll to section
        const el = document.querySelector(link);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router.push(link);
    }
  };
  return (
    <div className="py-6 lg:px-12 px-4">
      <div className="flex justify-between gap-10 items-center">
        <Image
          src={logo}
          alt="logo"
          className="w-[119px] h-[30px] md:w-[187px] md:-mt-3 mt-0 md:h-[45px]"
        />
        <div className="lg:flex w-full hidden gap-4 justify-between items-center text-xl">
          {navItems.map((items) => {
            const isActive = pathname === items.link;
            return (
              <ul key={items.text}>
                <li key={items.text}>
                  <button
                    onClick={() => handleNavClick(items.link)}
                    className={`${
                      isActive ? "text-primary" : "text-body hover:text-primary"
                    } `}
                  >
                    {items.text}
                  </button>
                </li>
              </ul>
            );
          })}
          <Link href="/contact">
            <ColouredBtn text="Get Free Brand Audit" />
          </Link>
        </div>
        <div className="block lg:hidden" onClick={handleNav}>
          <MenuIcon />
        </div>
      </div>
      <AnimatePresence>
        {nav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black cursor-pointer bg-opacity-10 backdrop-blur-sm z-10"
            />
            {/* Animated Mobile Nav */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-screen pt-[52px] fixed inset-0 w-full bg-white text-body z-20"
            >
              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={handleNav}
              >
                <X />
              </div>

              <ul className="space-y-[30px] text-[18px] pl-2 mx-3 text-center pt-[40px]">
                {navItems.map((item) => {
                  const isActive = pathname === item.link;

                  return (
                    <li key={item.text}>
                      <button
                        onClick={() => handleNavClick(item.link)}
                        className={`${
                          isActive
                            ? "text-primary"
                            : "text-body hover:text-primary"
                        } w-full text-[18px]`}
                      >
                        {item.text}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
