import React from "react";
import mentorImg from "@/images/mentorly-img.jpg";
import Image from "next/image";
import { H4, H6 } from "../ui/heading";
import avatar from "@/images/Ellipse 9.png";
import { ColouredBtn } from "../ui/colouredBtn";
import Link from "next/link";

export const Mentorly = () => {
  return (
    <div className="py-12 md:py-20 md:px-20 px-6">
      <p className="text-[18px] leading-[24px] md:text-[28px] md:leading-[42px]">
        Industry: <span className="font-medium">Consulting</span>
      </p>

      <p className="text-[18px] leading-[24px] pt-4 md:text-[28px] md:leading-[42px]">
        Company: <span className="font-medium">Mentorly</span>
      </p>
      <div className="pt-10">
        <Image src={mentorImg} alt="mentorly" className="max-w-full" />
      </div>

      <div className="pt-14">
        <H4>Brand Overview</H4>
        <p className="text-[16px] pt-4 md:text-[18px] leading-[20px] md:leading-[28px]">
          Mentorly is a growth platform designed for individuals ready to take
          ownership of their future through personalized learning, expert
          mentorship, and intentional habit-building. It bridges the gap between
          ambition and execution turning scattered self-improvement into a
          guided, results-driven journey. Mentorly empowers users to grow with
          structure: not just what to do, but how to do it consistently with
          real mentors, measurable challenges, and progress that sticks.
        </p>
      </div>

      <div className="pt-14">
        <H4>Problem</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <ul className="list-disc pl-10">
            <li>
              Many people want to grow, but don’t know where to start or how to
              stay consistent.
            </li>
            <li>
              Generic online courses lack accountability and rarely lead to
              sustained transformation.
            </li>
            <li>
              Motivation fades without real human connection, mentorship, or
              structure.
            </li>
            <li>
              People often bounce between content, apps, and advice without a
              cohesive growth system.
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-14">
        <H4>Solution</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <p className="font-medium">
            At Grovia, we helped shape Mentorly into more than a learning
            platform we positioned it as a personal success system.
          </p>
          <ul className="list-disc pl-10">
            <li>
              <span className="font-medium">Strategic Positioning: </span> We
              defined Mentorly’s sweet spot the intersection of learning,
              accountability, and mentorship to cut through a noisy self-help
              market.
            </li>
            <li>
              <span className="font-medium">Bold, Friendly Identity: </span>
              Designed a clean, approachable brand identity that signals growth,
              warmth, and forward momentum.
            </li>
            <li>
              <span className="font-medium">Platform Narrative: </span>Built a
              clear message hierarchy: You don’t need more motivation. You need
              mentorship, structure, and momentum.t.
            </li>
            <li>
              <span className="font-medium">Experience Mapping: </span>Helped
              structure the user journey from onboarding to habit loops into a
              system that supports both personal and professional growth.
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-14">
        <H4>Results</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <ul className="list-disc pl-10">
            <li>
              <span className="text-primary">3x</span> increase in client
              onboarding within the first 60 days of relaunch.
            </li>
            <li>
              <span className="text-primary">+70%</span> improvement in
              consultation-to-sale conversion rate due to clearer service
              communication.
            </li>
            <li>
              Established a strong digital presence that now supports inbound
              lead generation.
            </li>
            <li>
              Mentorly is now positioned as a go-to partner for small business
              growth not just another consultant.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-4 items-center py-16">
        <Image src={avatar} alt="avatar" width={100} height={100} />
        <div>
          <H6 className="font-semibold">Sarah T</H6>
          <p className="text-[16px] pt-4 md:text-[18px] leading-[20px] md:leading-[26px]">
            Marketing Director, Mentorly
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-16 py-10 flex-col">
        <p className="text-[18px] md:text-[32px] font-medium md:font-semibold leading-[32px]">
          Let’s create your success story
        </p>
        <Link href="/contact">
          <ColouredBtn text={"Get in touch"} />
        </Link>
      </div>
    </div>
  );
};
