import React from "react";
import brickland from "@/images/brickland-img.png";
import Image from "next/image";
import { H4, H6 } from "../ui/heading";
import avatar from "@/images/Ellipse 7.png";
import { Results } from "../results";

export const Brickland = () => {
  return (
    <div className="py-12 md:py-20 md:px-20 px-6">
      <p className="text-[18px] leading-[24px] md:text-[28px] md:leading-[42px]">
        Industry: <span className="font-medium">Real Estate</span>
      </p>

      <p className="text-[18px] leading-[24px] pt-4 md:text-[28px] md:leading-[42px]">
        Company: <span className="font-medium">Brickland</span>
      </p>
      <div className="pt-10">
        <Image src={brickland} alt="brickland" className="max-w-full" />
      </div>

      <div className="pt-14">
        <H4>Brand Overview</H4>
        <p className="text-[16px] pt-4 md:text-[18px] leading-[28px]">
          Brickland is a modern construction company with a mission to build
          more than just structures we build trust, value, and lasting impact.
          With a reputation for delivering premium construction solutions,
          Brickland merges innovative technology, experienced craftsmanship, and
          sustainable practices to serve clients across residential, commercial,
          and industrial sectors. Driven by precision and powered by passion,
          Brickland ensures that every project whether a private residence or
          large-scale complex is handled with a commitment to quality, safety,
          and on-time delivery.
        </p>
      </div>

      <div className="pt-14">
        <H4>Problem</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <ul className="list-disc pl-10">
            <li>
              Many clients struggle with unreliable contractors who cause
              delays, go over budget, or deliver poor workmanship.
            </li>
            <li>
              Rapid urban development has increased demand for high-quality yet
              affordable construction but many firms fall short on efficiency,
              innovation, and professionalism.
            </li>
            <li>
              Clients often lack transparency into the construction process,
              leading to frustration and mistrust.
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-14">
        <H4>Solution</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <p>
            As a trusted creative partner, Grovia helped Brickland build more
            than structures we built systems for trust, speed, and scalability.
          </p>
          <p>We delivered:</p>
          <ul className="list-disc pl-10">
            <li>
              Streamlined Delivery: Introduced a project framework that cuts
              delays and cost overruns by up to 23%.
            </li>
            <li>
              Transparent Client Experience: Set up a real-time dashboard for
              progress tracking, budgeting, and updates.
            </li>
            <li>
              Positioned for Growth: Crafted a scalable service model that
              supports both premium and mid-scale projects.
            </li>
            <li>
              Brand Repositioning: Shifted Brickland from &quot;builders&quot;
              to strategic development partners with a bold, credible identity.
            </li>
            <li>
              Built-in Compliance: Integrated eco-friendly and regulation-ready
              practices for market advantage.
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-14">
        <H4>Results</H4>
        <div className="text-[16px] pt-4 md:text-[18px] leading-[30px] md:leading-[42px]">
          <p>Brickland didn’t just elevate, it expanded.</p>
          <ul className="list-disc pl-10">
            <li>
              <span className="text-primary">95%</span> on-time delivery across
              all projects within 18 months.
            </li>
            <li>
              <span className="text-primary">30%</span> cost savings for clients
              through smarter workflows and procurement.
            </li>
            <li>
              <span className="text-primary">+80%</span> client satisfaction &
              referral rate, driven by transparency and trust.
            </li>
            <li>
              <span className="text-primary">120+</span> successful builds
              completed, from residential homes to commercial complexes.
            </li>
            <li>
              Secured 3 large-scale contracts after brand repositioning and
              compliance integration.
            </li>
          </ul>
          <p>
            Brickland now stands as a trusted force in construction, with a
            brand and system built to scale.
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
          <H6 className="font-semibold">Jidenna O</H6>
          <p className="text-[16px] pt-4 md:text-[18px] leading-[20px] md:leading-[26px]">
            CEO of Brickland
          </p>
        </div>
      </div>

      <Results />
    </div>
  );
};
