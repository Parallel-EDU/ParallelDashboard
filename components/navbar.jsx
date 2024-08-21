import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const Hamburger = useRef(null);
  const Menu = useRef(null);
  const Menuitems1 = useRef(null);
  const Menuitems2 = useRef(null);
  const Menuitems3 = useRef(null);
  const Menuitems4 = useRef(null);
  const Menuitems5 = useRef(null);
  const Menuitems6 = useRef(null);
  const Cross = useRef(null);
  const Background = useRef(null);
  const handleHamburger = () => {
    setOpenHamburger(true);
    console.log(openHamburger);
  };
  const handleHamburgerClose = () => {
    setOpenHamburger(false);
    console.log(openHamburger);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width <= 980) {
      if (openHamburger === true) {
        gsap.to(Hamburger.current, 0, { display: "none" });
        gsap.to(Cross.current, 0, { display: "block" });
        gsap.to(Menu.current, 0.8, { display: "flex", opacity: 1 });
        gsap.to(Background.current, 0.8, { display: "block", opacity: 0.9 });
        if (height <= 550) {
          gsap.to(Menu.current, 0, {
            top: "80px",
            height: "calc(100vh - 100px)",
          });
        }
        if (height <= 480) {
          gsap.to(Menuitems1.current, 0, {
            fontSize: "20px",
            lineHeight: "24px",
          });
          gsap.to(Menuitems2.current, 0, {
            fontSize: "20px",
            lineHeight: "24px",
          });
          gsap.to(Menuitems3.current, 0, {
            fontSize: "20px",
            lineHeight: "24px",
          });
          gsap.to(Menuitems4.current, 0, {
            fontSize: "20px",
            lineHeight: "24px",
          });
          gsap.to(Menuitems5.current, 0, {
            fontSize: "20px",
            lineHeight: "24px",
          });
          gsap.to(Menuitems6.current, 0, {
            fontSize: "20px",
            lineHeight: "24px",
          });
        }
        if (height <= 370) {
          gsap.to(Menu.current, 0, {
            gap: "32px",
          });
        }
      } else {
        gsap.to(Hamburger.current, 0, { display: "block" });
        gsap.to(Cross.current, 0, { display: "none" });
        gsap.to(Menu.current, 0.8, { display: "none", opacity: 0 });
        gsap.to(Background.current, 0.8, { display: "none", opacity: 0 });
      }
    }
  }, [openHamburger, width, height]);

  return (
    <>
      <nav className="px-[60px] sticky top-0 z-[9999999999] relative max-md:px-[40px] max-sm:px-[20px] flex justify-between pt-[40px] pb-[20px] bg-white shadow-nav">
        <div className="flex">
          <Image src="/Frame 96.svg" width={120.92} height={22} />
          <p className="text-base text-black opacity-60 ml-[36px] max-sm:hidden">
            FSD05202432
          </p>
        </div>
        <div className="gap-[36px] max-smallerphone:gap-[10px] items-center hidden max-hamburger:flex">
          <Link
            className={openHamburger ? "hidden" : ""}
            href={"/notifications"}
          >
            <Image src="/c.svg" width={24} height={24} />
          </Link>
          <div
            ref={Hamburger}
            onClick={handleHamburger}
            className="h-[20px] max-smallerphone:w-[60px] max-smallerphone:h-[15px] w-[80px] hidden max-hamburger:block border-t-[2px] border-b-[2px] border-black curser-pointer"
          ></div>
        </div>
        <div
          ref={Cross}
          onClick={handleHamburgerClose}
          className="w-[36px] absolute max-hamburger:right-[60px] max-md:right-[40px] max-sm:right-[12px] top-[33px] z-50 hidden curser-pointer"
        >
          {" "}
          <Image src="/close.svg" width={36} height={36} />
        </div>
        <div
          ref={Background}
          className="flex bg-white max-hamburger:opacity-0 backdrop-blur-sm absolute hidden w-[100%] h-[100vh] top-0 left-0"
        ></div>
        <div
          ref={Menu}
          className="flex max-hamburger:flex-col max-hamburger:absolute max-hamburger:top-[130px] max-hamburger:right-[60px] max-md:right-[40px] max-sm:right-[20px] max-hamburger:hidden gap-[64px]"
        >
          <ul className="list-none max-hamburger:flex-col flex max-hamburger:gap-[20px] gap-[32px]">
            <p className="text-base text-black opacity-60 hidden max-sm:block text-right ml-0">
              FSD05202432
            </p>

            <Link
              href={"/class"}
              ref={Menuitems1}
              className="text-[16px] max-hamburger:text-right max-hamburger:text-2xl leading-[19.2px] py-[2.5px]"
            >
              Class
            </Link>
            <Link
              href={"/assignments"}
              ref={Menuitems2}
              className="text-[16px] max-hamburger:text-right max-hamburger:text-2xl leading-[19.2px] py-[2.5px]"
            >
              Assignments
            </Link>
            <Link
              href={"/support"}
              ref={Menuitems3}
              className="text-[16px] max-hamburger:text-right max-hamburger:text-2xl leading-[19.2px] py-[2.5px]"
            >
              Support
            </Link>
            <Link
              href={"/jobs"}
              ref={Menuitems4}
              className="text-[16px] max-hamburger:text-right max-hamburger:text-2xl leading-[19.2px] py-[2.5px]"
            >
              Jobs
            </Link>
          </ul>
          <div className="flex gap-[32px]">
            <Link
              ref={Menuitems5}
              className="max-hamburger:hidden"
              href={"/notifications"}
            >
              <Image src="/c.svg" width={24} height={24} />
            </Link>
            <div ref={Menuitems6} className="flex gap-[8px]">
              <Image
                src="/codicon_account.svg"
                className="max-hamburger:w-[27px]"
                width={24}
                height={24}
              />
              <Link
                href={"/profile"}
                className="text-[16px] max-hamburger:text-right max-hamburger:text-2xl leading-[19.2px] py-[2.5px]"
              >
                My Account
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
