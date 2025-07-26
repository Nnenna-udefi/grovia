"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";
import Menu from "@/images/menu.png";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { text: "Home", link: "/" },
  { text: "Services", link: "#services" },
  { text: "Work", link: "/works" },
  { text: "Contact", link: "/contact" },
];
export const ContactNav = () => {
  const [nav, showNav] = useState(false);

  const pathname = usePathname();

  const handleNav = () => {
    showNav((prev) => !prev);
  };
  return (
    <div className="py-6 lg:px-12 px-4">
      <div className="flex justify-between gap-10 items-center">
        <Image src={logo} alt="logo" />
        <div className="w-full lg:flex hidden gap-10 uppercase justify-between items-center text-xl">
          {navItems.map((items) => {
            const isActive = pathname === items.link;
            return (
              <ul key={items.text}>
                <Link href={items.link}>
                  <li
                    className={`${
                      isActive
                        ? " text-primary"
                        : "text-body hover:text-primary"
                    }`}
                  >
                    {items.text}
                  </li>
                </Link>
              </ul>
            );
          })}
          <Link href="/works">
            <button className="bg-white border-2 transition duration-300 transform hover:scale-105 cursor-pointer border-black shadow rounded-xl py-3 px-2 w-[200px] hover:bg-black hover:text-white text-black font-semibold  text-xl ">
              View Our Work
            </button>
          </Link>
        </div>
        <div className="block lg:hidden" onClick={handleNav}>
          <Image src={Menu} alt="menu" />
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
                {navItems.map((items) => {
                  const isActive = pathname === items.link;
                  return (
                    <li
                      key={items.text}
                      className={`${
                        isActive
                          ? " text-primary"
                          : "text-body hover:text-primary "
                      }`}
                    >
                      {" "}
                      <Link href={items.link}>{items.text}</Link>
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
