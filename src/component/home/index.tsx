import React from "react";
import { H1, H3, H5, H6 } from "../ui/heading";
import { LightBtn } from "../ui/lighBtn";
import { ColouredBtn } from "../ui/colouredBtn";
import { reviews, services, works } from "../lib/constants";
import aboutImg from "@/images/about-us-image.png";
import Image from "next/image";
import aboutImg2 from "@/images/about-us2.png";
import Link from "next/link";
import gold from "@/images/gold color.png";
import civa from "@/images/Civa white.png";
import technova from "@/images/technova logo.png";
import swift from "@/images/swift aid white.png";

export const HomeComponent = () => {
  return (
    <div className="py-12 md:py-20 ">
      <div className="relative md:px-20 px-6 pb-20 md:pb-60 flex justify-center flex-col items-center">
        <div
          className="absolute hidden md:block blur-[100px]"
          style={{
            width: "254px",
            height: "274px",
            top: "86px",
            left: "-70px",
            background: "linear-gradient(0deg, #00CED1 0%, #F25C5C 100%)",
            transform: "rotate(-136.7deg)",
            opacity: 1,
            zIndex: -1, // Ensures it stays behind the content
          }}
        />
        <H1 className="text-center text-primary">
          Accelerate Business Growth Through Smarter Branding
        </H1>
        <p className="text-black md:text-2xl text-lg font-medium text-center py-8 w-[80%] ">
          From ambitious SMEs to scaling enterprises, we create brand systems
          that convert trust into traction with design, strategy and artificial
          intelligence
        </p>
        <div className="flex lg:flex-row flex-col pb-12 gap-6">
          <Link href="/works">
            <LightBtn text="View Our Work" className=" py-4" />
          </Link>
          <Link href="/contact">
            {" "}
            <ColouredBtn text="Get Free Audit" />
          </Link>
        </div>
      </div>

      <div className="bg-body">
        <div className="grid grid-cols-1 py-10 md:px-20 px-6 justify-center place-items-center md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Image src={gold} alt="gold logo" />
          <Image src={civa} alt="civa logo" />
          <Image src={technova} alt="technova logo" />
          <Image src={swift} alt="swift logo" />
        </div>
      </div>
      <div
        className="flex md:px-20 px-6 justify-center gap-4 flex-col items-center py-20 lg:py-30"
        id="about"
      >
        <H5 className="text-secondary">About Us</H5>
        <p className="md:text-[40px] text-[18px] leading-[100%] md:leading-[50px] text-center text-body font-semibold">
          Built for Growth. Backed by Experience
        </p>

        <div className="flex lg:flex-row flex-col gap-10 pt-8">
          <Image
            src={aboutImg}
            alt="about us image"
            className="hidden md:block"
          />
          <Image
            src={aboutImg2}
            alt="about us image"
            className="md:hidden block"
          />
          <H5 className="text-center md:text-left">
            Grovia has empowered forward-thinking businesses with the right mix
            of clarity, creativity, and conversion. We don’t just make things
            look good we help you scale smarter with strategy-first branding and
            growth tools tailored to your journey.
          </H5>
        </div>
      </div>

      <div
        className="flex md:px-20 px-6 justify-center gap-6 flex-col items-center py-20"
        id="services"
      >
        <H5 className="text-secondary">Smart Services for Ambitious Brands</H5>
        <p className="md:text-[40px] text-[18px] leading-[100%] md:leading-[50px] text-center text-body font-semibold">
          We help business and enterprise grow with the right mix of strategy,
          standout design, and performance-driven marketing. Whether you&apos;re
          building from scratch or scaling fast. Grovia gives you the tools to
          lead.
        </p>

        <div className="flex md:flex-row flex-col gap-6 pt-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-lg border:none bg-[#00CED105] md:bg-white md:border-body md:border"
            >
              <H3>{service.title}</H3>
              <H6 className="pt-4">{service.text}</H6>
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:px-20 px-6 justify-center gap-6 flex-col items-center py-10 lg:py-20">
        <H5 className="text-secondary">Works That Speaks for Itself</H5>
        <p className="md:text-[40px] text-[18px]  md:leading-[50px] text-center text-body font-semibold">
          We’ve helped businesses go from invisible to unforgettable. Here are
          some of our favorite transformations:
        </p>

        <div className="flex lg:flex-row flex-col gap-6 pt-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="text-[14px] flex flex-col items-center justify-center gap-4 p-6 rounded-md md:text-[18px] leading-[20px] md:leading-[28px] text-black bg-[#2D2D2D0F]"
            >
              <Image src={work.img} alt="work ige" />
              <div>
                <p className="py-6">{work.text}</p>
                <Link href={work.link}>
                  <p className="text-secondary">{work.case}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:px-20 px-6 justify-center gap-4 flex-col items-center pt-10 lg:pt-20">
        <H5 className="text-secondary">What Our Clients Say About Grovia</H5>
        <p className="md:text-[40px] text-[18px] leading-[100%] md:leading-[50px] text-center text-body font-semibold">
          The real proof of impact? Growth stories from real founders,
          businesses, and professionals we’ve worked with.
        </p>

        <div className="flex lg:flex-row flex-col gap-6 pt-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="text-[14px] p-6 rounded-md md:text-[18px] leading-[20px] md:leading-[28px] text-black md:bg-white border border-body md:border-none bg-[#00CED105]"
            >
              <p>{review.text}</p>
              <p className="font-semibold pt-2">{review.client}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
