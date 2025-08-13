import { EmailConfirmation } from "@/component/contact/emailConfirmation";

import { Footer } from "@/component/footer";
import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";

export default function Confirmation() {
  return (
    <div>
      <div className="py-6 lg:px-12 px-4">
        <div className="flex justify-between gap-10 items-center">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              className="w-[119px] h-[30px] md:w-[187px] md:h-[45px]"
            />
          </Link>
          <Link href="/works">
            <button className="bg-white border-2 rounded-[10px] md:w-[300px] w-[130px] h-[40px] md:h-[70px] md:leading-[32px] text-[14px] leading-normal md:text-[24px] transition duration-300 transform hover:scale-105 cursor-pointer border-black shadow hover:bg-black hover:text-white text-black font-semibold ">
              View Our Work
            </button>
          </Link>
        </div>
        <EmailConfirmation />
        <Footer />
      </div>
    </div>
  );
}
