import React from "react";
import elevateImg from "@/images/elevate-consulting.png";
import Image from "next/image";
import { H4, H6 } from "../ui/heading";
import { ColouredBtn } from "../ui/colouredBtn";
import avatar from "@/images/Ellipse 6.png";
import Link from "next/link";

export const Elevate = () => {
  return (
    <div className="py-12 md:py-20 md:px-20 px-6">
      <p className="text-[18px] leading-[24px] md:text-[28px] md:leading-[42px]">
        Industry: <span className="font-medium">Consulting</span>
      </p>

      <p className="text-[18px] leading-[24px] pt-4 md:text-[28px] md:leading-[42px]">
        Company: <span className="font-medium">Elevate Consulting</span>
      </p>
      <div className="pt-10">
        <Image src={elevateImg} alt="elevate-img" className="max-w-full" />
      </div>

      <div className="pt-14">
        <H4>Brand Overview</H4>
        <p className="text-[16px] pt-4 md:text-[18px] leading-[28px]">
          Elevate Consulting is a strategic business consulting firm that
          partners with startups and SMEs to accelerate growth, improve
          operational efficiency, and drive long-term success. With a focus on
          actionable strategy and practical implementation, Elevate bridges the
          gap between where businesses are and where they want to be. The brand
          embodies progress, clarity, and leadership reflected in its refined
          identity using gold (signifying excellence and value) and grey
          (representing professionalism and balance).
        </p>
      </div>

      <div className="pt-14">
        <H4>Problem</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <p>Startups and SMEs often struggle with:</p>
          <ul className="list-disc pl-10">
            <li>Lack of clear strategy to scale effectively.</li>
            <li>Operational inefficiencies draining time and resources.</li>
            <li>
              Limited access to expert guidance tailored to their unique
              industry and stage.
            </li>
            <li>
              Brand inconsistency that weakens trust and market positioning.
            </li>
          </ul>
          <p>
            They know they need to grow, but they don’t know how to grow right.
          </p>
        </div>
      </div>

      <div className="pt-14">
        <H4>Solution</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <p>
            Grovia partnered with Elevate Consulting to design a cohesive brand
            identity and communication framework that reinforces their promise:
            to help businesses scale smartly and sustainably.
          </p>
          <p>We delivered:</p>
          <ul className="list-disc pl-10">
            <li>
              A premium wordmark identity that reflects trust and clarity.
            </li>
            <li>
              A color system using gold for ambition and grey for intelligence
              and stability.
            </li>
            <li>
              A clear brand voice and positioning that speaks directly to
              growth-focused businesses.
            </li>
            <li>
              Strategic brand storytelling for social platforms to drive
              engagement and credibility.
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-14">
        <H4>Results</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <p> The transformation led to tangible outcomes:</p>
          <ul className="list-disc pl-10">
            <li>
              <span className="text-primary">60%</span> increase in client
              inquiries within the first month of launching the new brand.
            </li>
            <li>
              <span className="text-primary">2x</span> engagement on social
              media due to refined messaging and visual identity.
            </li>
            <li>
              Clear positioning in the consulting space, attracting higher-value
              clients.
            </li>
            <li>
              Empowered internal team alignment with the brand’s mission and
              value proposition.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-4 items-center py-16">
        <Image
          src={avatar}
          alt="avatar"
          width={100}
          height={100}
          className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
        />
        <div>
          <H6 className="font-semibold">Jane, A</H6>
          <p className="text-[16px] pt-4 md:text-[18px] leading-[20px] md:leading-[26px]">
            CEO, Elevate Consulting
          </p>
        </div>
      </div>

      <div className="flex justify-center text-center items-center gap-6 py-10 flex-col">
        <p className="text-[18px] md:text-[32px] font-medium md:font-semibold leading-[32px]">
          Want Similar Results for your Business
        </p>
        <p className="md:text-[24px] text-[16px] leading-[24px] md:leading-[40px]">
          We’ll show you what’s possible based on your goals and how we would
          help you get there
        </p>
        <Link href="/contact" className="pt-10">
          <ColouredBtn text={"Start Your Project"} />
        </Link>
      </div>
    </div>
  );
};
