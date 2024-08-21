import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

export default function TrainerNavbar() {
  return (
    <>
      <nav className="px-[60px] sticky top-0 z-[99999] relative max-md:px-[40px] max-sm:px-[20px] flex justify-between pt-[40px] pb-[20px] bg-white border-b-[0.5px] border-[#00000033]">
        <Image src="/Frame 96.svg" width={120.92} height={22} />
        <div className="flex gap-[64px] max-sm:gap-[32px] max-[400px]:gap-[16px]">
          <Link
            href={"/trainer/account"}
            className="text-[16px] max-[500px]:text-[14px] max-hamburger:text-right max-hamburger:text-2xl leading-[19.2px] py-[2.5px]"
          >
            My Account
          </Link>
          <p className="text-[16px] max-[500px]:text-[14px] max-hamburger:text-right max-hamburger:text-2xl leading-[19.2px] py-[2.5px]">
            Log out
          </p>
        </div>
      </nav>
      <div className="h-[59px] sticky top-[85px] z-[9999] shadow-lg gap-[32px] flex mb-[28px] items-center px-[60px] max-md:px-[40px] max-sm:px-[20px] max-hamburger:gap-[16px] max-hamburger:overflow-scroll bg-[white]">
        <Link
          href={"/trainer/batches"}
          className="text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-hamburger:whitespace-nowrap"
        >
          My batches
        </Link>
        <Link
          href={"/trainer/assignments"}
          className="text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-hamburger:whitespace-nowrap"
        >
          Assignments
        </Link>
        <Link
          href={"/trainer/announcements"}
          className="text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-hamburger:whitespace-nowrap"
        >
          Send announcement{" "}
        </Link>
        <Link
          href={"/trainer/progress"}
          className="text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-hamburger:whitespace-nowrap"
        >
          Progress
        </Link>
        <Link
          href={"/trainer/schedule"}
          className="text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-hamburger:whitespace-nowrap"
        >
          Schedule
        </Link>
      </div>
    </>
  );
}
