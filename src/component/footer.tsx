import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import { H5 } from "./ui/heading";
import Link from "next/link";
import insta from "@/images/instagram.png";
import { Linkedin } from "lucide-react";

const navItems = [
  { text: "Home", link: "/" },
  { text: "About", link: "#about" },
  { text: "Services", link: "#services" },
  { text: "Work", link: "/works" },
  { text: "Contact", link: "/contact" },
];

export const Footer = () => {
  return (
    <div className="bg-body text-white ">
      <div className="flex justify-between gap-4 lg:flex-row flex-col py-12 md:py-20 md:px-20 px-6">
        <div className="w-[60%] lg:w-[40%]">
          <Image src={logo} alt="logo" />
          <H5 className="py-12 ">
            We help brands scale through bold design, digital tools, and
            performance-driven marketing.
          </H5>
        </div>

        <div>
          <H5 className="pb-6 font-semibold">Quick Links</H5>
          <div className=" pl-6">
            {navItems.map((items) => (
              <ol
                key={items.text}
                className="list-disc  font-medium text-[14px] md:text-[18px] py-2 leading-[28px]"
              >
                <Link href={items.link}>
                  <li>{items.text}</li>
                </Link>
              </ol>
            ))}
          </div>
        </div>

        <div>
          <H5 className="font-semibold">Contact</H5>
          <p className="pt-6 pb-3 font-medium text-[14px] md:text-[18px] py-2 leading-[28px]">
            hello@groviaagency.com
          </p>
          <p className=" font-medium text-[14px] md:text-[18px] py-2 leading-[28px]">
            +234 70 418 586 86
          </p>
        </div>
        <div>
          <H5 className="font-semibold">Social Media</H5>
          <div className="flex gap-6 py-6">
            <Image src={insta} alt="instagram" />
            {/* <Image src={tiktok} alt="tiktok" />
             */}
            <Linkedin />
          </div>
        </div>
      </div>
      <div>
        <hr className="border-white w-full border px-0" />
        <p className="text-center text-sm py-6 leading-[28px]">
          2025 Grovia Creative Agency. All right Reserved
        </p>
      </div>
    </div>
  );
};
