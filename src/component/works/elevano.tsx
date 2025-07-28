import React from "react";
import elevaImg from "@/images/elevano-image.png";
import Image from "next/image";
import { H4, H6 } from "../ui/heading";
import avatar from "@/images/Ellipse 4.png";
import { ColouredBtn } from "../ui/colouredBtn";
import Link from "next/link";

export const Elevano = () => {
  return (
    <div className="py-12 md:py-20 md:px-20 px-6">
      <p className="text-[18px] leading-[24px] md:text-[28px] md:leading-[42px]">
        Industry: <span className="font-medium">Consulting</span>
      </p>

      <p className="text-[18px] leading-[24px] pt-4 md:text-[28px] md:leading-[42px]">
        Company: <span className="font-medium">Elevano</span>
      </p>
      <div className="pt-10">
        <Image src={elevaImg} alt="elevano img" className="max-w-full" />
      </div>

      <div className="pt-14">
        <H4>Brand Overview</H4>
        <p className="text-[16px] pt-4 md:text-[18px] leading-[28px]">
          Elevano is a consulting firm focused on helping startups and small
          businesses scale through strategic clarity, operational structure, and
          expert guidance. With a mission centered on unlocking growth for
          ambitious founders, Elevano needed a brand identity that communicated
          trust, direction, and premium service from the first impression.
        </p>
      </div>

      <div className="pt-14">
        <H4>Problem</H4>
        <p className="text-[16px] pt-4 md:text-[18px] leading-[28px]">
          While Elevano had a clear vision and strong leadership, their visual
          identity didn’t reflect their depth of expertise. They lacked a
          cohesive brand system which made their communications feel
          inconsistent and didn’t inspire the level of confidence they delivered
          through their services. In a saturated consulting space,
          differentiation and clarity were urgent needs.
        </p>
      </div>

      <div className="pt-14">
        <H4>Solution</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <p>
            As a creative agency, our approach was rooted in clarity and
            strategy. We collaborated closely with the Elevano team to develop a
            modern wordmark identity that captures their essence without
            complexity.
          </p>
          <p>What we delivered:</p>
          <ul className="list-disc pl-10">
            <li>
              A bold, typographically driven wordmark that feels confident,
              clean, and trustworthy.
            </li>
            <li>
              A color palette of elevated gold and refined grey, balancing
              premium positioning with approachability.
            </li>
            <li>
              Brand guidelines to ensure consistent rollout across platforms and
              future communications.
            </li>
            <li>
              Consultation on visual tone, content framing, and brand narrative
              for alignment with their target audience (startups and
              growth-stage businesses).
            </li>
          </ul>
          <p>
            We intentionally kept the system simple, elegant, and scalable just
            like Elevano’s own client offering.
          </p>
        </div>
      </div>

      <div className="pt-14">
        <H4>Results</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <p>Since launching the refreshed identity, Elevano has:</p>
          <ul className="list-disc pl-10">
            <li>
              Seen increased engagement on their outreach and proposal materials
            </li>
            <li>
              Established a consistent brand image across digital and print
            </li>
            <li>
              Improved clarity in how they present their value to founders and
              partners
            </li>
            <li>
              Built a foundation they can confidently scale as they expand their
              reach
            </li>
          </ul>
          <p>
            Elevano now shows up as they are: structured, strategic, and built
            to elevate.
          </p>
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
          <H6 className="font-semibold">Bryan B</H6>
          <p className="text-[16px] pt-4 md:text-[18px] leading-[20px] md:leading-[26px]">
            Founder Elevano
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
