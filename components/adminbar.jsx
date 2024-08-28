import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useRouter } from "next/router";

export default function AdminNavbar() {
  const router = useRouter();

  return (
    <>
      <nav className="px-[60px] sticky top-0 z-[99999] relative max-md:px-[40px] max-sm:px-[20px] flex justify-between pt-[40px] pb-[20px] bg-white border-b-[0.5px] border-[#00000033]">
        <Image src="/Frame 96.svg" width={120.92} height={22} />
        <p className="text-[16px] max-hamburger:text-right max-hamburger:text-2xl leading-[19.2px] py-[2.5px]">
          Log out
        </p>
      </nav>
      <div className="h-[59px] sticky top-[85px] z-[9999] shadow-lg gap-[32px] max-xl:gap-[24px] flex mb-[28px] items-center px-[60px] max-md:px-[40px] max-sm:px-[20px] max-hamburger:gap-[16px] max-xl:overflow-scroll bg-[white]">
        <Link
          href={"/admin/students"}
          className={`${
            router.pathname === "/admin/students" ? "underline font-bold" : ""
          } text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-xl:whitespace-nowrap`}
        >
          Student info
        </Link>
        <Link
          href={"/admin/kyc-info"}
          className={`${
            router.pathname === "/admin/kyc-info" ? "underline font-bold" : ""
          } text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-xl:whitespace-nowrap`}
        >
          KYC info{" "}
        </Link>
        <Link
          href={"/admin/graduates"}
          className={`${
            router.pathname === "/admin/graduates" ? "underline font-bold" : ""
          } text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-xl:whitespace-nowrap`}
        >
          Graduates{" "}
        </Link>
        <Link
          href={"/admin/announcements"}
          className={`${
            router.pathname === "/admin/announcements"
              ? "underline font-bold"
              : ""
          } text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-xl:whitespace-nowrap`}
        >
          Send Announcement{" "}
        </Link>
        <Link
          href={"/admin/live-sessions"}
          className={`${
            router.pathname === "/admin/live-sessions"
              ? "underline font-bold"
              : ""
          } text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-xl:whitespace-nowrap`}
        >
          Live session & WhatsApp links{" "}
        </Link>
        <Link
          href={"/admin/courses"}
          className={`${
            router.pathname === "/admin/courses" ? "underline font-bold" : ""
          } text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-xl:whitespace-nowrap`}
        >
          Courses{" "}
        </Link>
        <Link
          href={"/admin/batches"}
          className={`${
            router.pathname === "/admin/batches" ? "underline font-bold" : ""
          } text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-xl:whitespace-nowrap`}
        >
          Batches{" "}
        </Link>
        <Link
          href={"/admin/trainers"}
          className={`${
            router.pathname === "/admin/trainers" ? "underline font-bold" : ""
          } text-[16px] cursor-pointer leading-[19.2px] pl-[0.5px] max-hamburger:pl-0 max-md:text-[14px] max-md:leading-[16.8px] max-sm:text-[12px] max-sm:leading-[14.4px] max-xl:whitespace-nowrap`}
        >
          Trainers{" "}
        </Link>
      </div>
    </>
  );
}
