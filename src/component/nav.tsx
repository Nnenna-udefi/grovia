import React from "react";
import Image from "next/image";
import logo from "@/component/images/logo.png";
import Link from "next/link";
import { ColouredBtn } from "./ui/colouredBtn";
import Menu from "@/component/images/menu.png";

export const navItems = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Services", link: "/services" },
  { text: "Work", link: "/work" },
  { text: "Contact", link: "/contact" },
];
export const Nav = () => {
  return (
    <div className="py-6 lg:px-12 px-4">
      <div className="flex justify-between  items-center">
        <Image src={logo} alt="logo" />
        <div className="md:flex hidden gap-6  justify-between items-center text-xl">
          {navItems.map((items) => (
            <ul key={items.text}>
              <Link href={items.link}>
                <li>{items.text}</li>
              </Link>
            </ul>
          ))}
          <ColouredBtn text="Get Free Brand Audit" />
        </div>
        <div className="block md:hidden">
          <Image src={Menu} alt="menu" />
        </div>
      </div>
    </div>
  );
};
