import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Jobs() {
  const [applied, setapplied] = useState(true);
  const [apply, setapply] = useState(false);
  const [applynow, setapplynow] = useState(false);
  const [progress, setprogress] = useState(true);
  const [profile, setprofile] = useState(true);
  const handleapplied = () => {
    setapplied(!applied);
  };
  return (
    <>
      <Navbar />
      <div
        style={{ backdropFilter: "blur(17px)" }}
        className="w-full h-full fixed top-0 max-[500px]:text-center flex flex-col items-center justify-center left-0 bg-[#FFFFFF0D] z-50"
      >
        <h1 className="text-[39px] max-sm:text-center">Finish the course to unlock jobs</h1>
        <Link className="max-sm:w-full px-[20px]" href={"/class"}>
          <button className="bg-[#30E29D] max-sm:w-full mt-[28.53px] rounded-[4px] font-semibold w-[159px] h-[43px]">
            Back to classes
          </button>
        </Link>
      </div>
      <section className="px-[60px] max-hamburger:px-[60px] max-md:px-[40px] max-sm:px-[20px] pb-[65px] pt-[51.08px]">
        <h1 className="text-[20px] leading-[26px] font-semibold mb-[28.92px]">
          Job Opportunities
        </h1>{" "}
        {applied ? (
          <>
            <div className="flex mb-[18px] gap-[16px]">
              <button
                onClick={handleapplied}
                className="h-[43px] max-smallphone:text-sm capitalize w-[149px] bg-[black] text-white border-[0px] border-black rounded-[28px] text-[16px] leading-[19.2px]"
              >
                new openings{" "}
              </button>{" "}
              <button
                onClick={handleapplied}
                className="h-[43px] opacity-50 max-smallphone:text-sm w-[168px] bg-[transparent] text-black rounded-[28px] border-[1px] border-black text-[16px] leading-[19.2px]"
              >
                Applied positions{" "}
              </button>{" "}
            </div>
            {profile && (
              <div className="bg-[#F0DEC9] justify-between max-hamburger:mb-[50px] max-[500px]:flex-col max-[500px]:h-auto max-hamburger:static max-hamburger:w-full items-start absolute right-[60px] rounded-[7px] py-[14.96px] pl-[15px] pr-[19px] flex gap-[17px] h-[73px] w-[588px] max-[1170px]:w-[500px] top-[153.93px]">
                <div className="flex items-center gap-[17px]">
                  <Image
                    src="/info.svg"
                    className="mt-[0.54px]"
                    width={28.71}
                    height={28.71}
                  />
                  <p className="text-[14px] w-[202.57px] max-[500px]:w-full py-[0.54px] capitalize leading-[21px] font-bold text-[#970B0B]">
                    Set up your placement profile before applying for jobs
                  </p>
                </div>
                <Link className=" max-[500px]:w-full" href={"/placement-profile"}>
                  <button className="h-[43.07px] max-[500px]:w-full capitalize max-smallphone:text-sm w-[182px] max-[1170px]:w-[140px] bg-black text-white rounded-[6px] border-[1px] border-black text-[16px] leading-[19.2px]">
                    Set up profile{" "}
                  </button>
                </Link>
              </div>
            )}
            <div className="w-full relative max-hamburger:h-auto max-hamburger:pb-[100px] max-smallphone:pb-[50px] h-[1007px] bg-white rounded-[5px] pt-[29px] max-sm:pt-[5px] max-sm:px-[16px] pl-[22px] pb-[38px] pb-[108px]">
              <div className="flex justify-between max-hamburger:flex-col py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button
                    onClick={() => setapplynow(true)}
                    className="h-[43px] max-hamburger:hidden ml-[93px] max-xl:ml-[50px] max-smalllaptop:ml-[24px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Apply Now{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] max-md:block hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                  Apply by: 15th Apr 2024, 10:00 AM{" "}
                </p>
                <button
                  onClick={() => setapplynow(true)}
                  className="h-[43px] max-md:block max-sm:w-full hidden max-hamburger:block hidden mt-[12px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                >
                  Apply Now{" "}
                </button>
              </div>
              <div className="flex justify-between max-hamburger:flex-col py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button
                    onClick={() => setapplynow(true)}
                    className="h-[43px] max-hamburger:hidden ml-[93px] max-xl:ml-[50px] max-smalllaptop:ml-[24px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Apply Now{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] max-md:block hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                  Apply by: 15th Apr 2024, 10:00 AM{" "}
                </p>
                <button
                  onClick={() => setapplynow(true)}
                  className="h-[43px] max-md:block max-sm:w-full hidden max-hamburger:block hidden mt-[12px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                >
                  Apply Now{" "}
                </button>
              </div>
              <div className="flex justify-between max-hamburger:flex-col py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button
                    onClick={() => setapplynow(true)}
                    className="h-[43px] max-hamburger:hidden ml-[93px] max-xl:ml-[50px] max-smalllaptop:ml-[24px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Apply Now{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] max-md:block hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                  Apply by: 15th Apr 2024, 10:00 AM{" "}
                </p>
                <button
                  onClick={() => setapplynow(true)}
                  className="h-[43px] max-md:block max-sm:w-full hidden max-hamburger:block hidden mt-[12px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                >
                  Apply Now{" "}
                </button>
              </div>
              <div className="flex justify-between max-hamburger:flex-col py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button
                    onClick={() => setapplynow(true)}
                    className="h-[43px] max-hamburger:hidden ml-[93px] max-xl:ml-[50px] max-smalllaptop:ml-[24px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Apply Now{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] max-md:block hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                  Apply by: 15th Apr 2024, 10:00 AM{" "}
                </p>
                <button
                  onClick={() => setapplynow(true)}
                  className="h-[43px] max-md:block max-sm:w-full hidden max-hamburger:block hidden mt-[12px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                >
                  Apply Now{" "}
                </button>
              </div>
              <div className="flex justify-between max-hamburger:flex-col py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button
                    onClick={() => setapplynow(true)}
                    className="h-[43px] max-hamburger:hidden ml-[93px] max-xl:ml-[50px] max-smalllaptop:ml-[24px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Apply Now{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] max-md:block hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                  Apply by: 15th Apr 2024, 10:00 AM{" "}
                </p>
                <button
                  onClick={() => setapplynow(true)}
                  className="h-[43px] max-md:block max-sm:w-full hidden max-hamburger:block hidden mt-[12px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                >
                  Apply Now{" "}
                </button>
              </div>
              <div className="flex justify-between max-hamburger:flex-col py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button
                    onClick={() => setapplynow(true)}
                    className="h-[43px] max-hamburger:hidden ml-[93px] max-xl:ml-[50px] max-smalllaptop:ml-[24px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Apply Now{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] max-md:block hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                  Apply by: 15th Apr 2024, 10:00 AM{" "}
                </p>
                <button
                  onClick={() => setapplynow(true)}
                  className="h-[43px] max-md:block max-sm:w-full hidden max-hamburger:block hidden mt-[12px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                >
                  Apply Now{" "}
                </button>
              </div>
              <div className="flex justify-between max-hamburger:flex-col py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button
                    onClick={() => setapplynow(true)}
                    className="h-[43px] max-hamburger:hidden ml-[93px] max-xl:ml-[50px] max-smalllaptop:ml-[24px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Apply Now{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] max-md:block hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                  Apply by: 15th Apr 2024, 10:00 AM{" "}
                </p>
                <button
                  onClick={() => setapplynow(true)}
                  className="h-[43px] max-md:block max-sm:w-full hidden max-hamburger:block hidden mt-[12px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                >
                  Apply Now{" "}
                </button>
              </div>
              <div className="flex justify-between max-hamburger:flex-col py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button
                    onClick={() => setapplynow(true)}
                    className="h-[43px] max-hamburger:hidden ml-[93px] max-xl:ml-[50px] max-smalllaptop:ml-[24px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Apply Now{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] max-md:block hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                  Apply by: 15th Apr 2024, 10:00 AM{" "}
                </p>
                <button
                  onClick={() => setapplynow(true)}
                  className="h-[43px] max-md:block max-sm:w-full hidden max-hamburger:block hidden mt-[12px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                >
                  Apply Now{" "}
                </button>
              </div>
              <div className="flex justify-between max-hamburger:flex-col py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button
                    onClick={() => setapplynow(true)}
                    className="h-[43px] max-hamburger:hidden ml-[93px] max-xl:ml-[50px] max-smalllaptop:ml-[24px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Apply Now{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] max-md:block hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                  Apply by: 15th Apr 2024, 10:00 AM{" "}
                </p>
                <button
                  onClick={() => setapplynow(true)}
                  className="h-[43px] max-md:block max-sm:w-full hidden max-hamburger:block hidden mt-[12px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                >
                  Apply Now{" "}
                </button>
              </div>
              <div className="flex justify-between max-hamburger:flex-col py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                    Apply by: 15th Apr 2024, 10:00 AM{" "}
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] leading-[20.8px] max-sm:w-full w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button
                    onClick={() => setapplynow(true)}
                    className="h-[43px] max-hamburger:hidden ml-[93px] max-xl:ml-[50px] max-smalllaptop:ml-[24px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Apply Now{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] max-md:block hidden text-[14px] leading-[18.2px] text-[#9D0C0C]">
                  Apply by: 15th Apr 2024, 10:00 AM{" "}
                </p>
                <button
                  onClick={() => setapplynow(true)}
                  className="h-[43px] max-md:block max-sm:w-full hidden max-hamburger:block hidden mt-[12px] w-[120px] bg-black text-white rounded-[4px] text-[16px] leading-[19.2px]"
                >
                  Apply Now{" "}
                </button>
              </div>
              <div className="flex gap-[16px] max-smallphone:gap-[8px] max-smallphone:relative max-smallphone:right-0 max-smallphone:top-[35px] absolute right-[38px] bottom-[37px]">
                <div className="w-[32px] h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  <Image src="/Group 4.svg" width={14.13} height={14.13} />
                </div>
                <div className="flex gap-[8px] max-smallphone:gap-[6px]">
                  <p className="w-[32px] text-[17.23px] cursor-pointer bg-[#000] text-white leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#000]">
                    1
                  </p>
                  <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                    2
                  </p>
                  <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                    3
                  </p>
                  <p className="w-[25px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center cursor-pointer">
                    ...
                  </p>
                  <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                    42
                  </p>
                </div>
                <div className="w-[32px] rotate-180 h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  <Image src="/Group 4.svg" width={14.13} height={14.13} />
                </div>
              </div>
            </div>
            {applynow && (
              <>
                <div className="bg-white fixed pr-[25.59px] pt-[37.29px] pl-[38px] z-30 max-sm:shadow-md items-center max-sm:top-[120px] top-[150px] shadow-2xl rounded-[8px] left-[22.15%] max-hamburger:w-[80%] max-hamburger:left-[10%] max-md:w-[96%] max-md:left-[2%] h-[439px] w-[55.7%]">
                  <Image
                    src="/Vector (2).svg"
                    className="absolute max-md:right-[40px] max-sm:right-[5%] right-[36.12px] max-smallerphone:top-[20px] cursor-pointer top-[37.29px]"
                    width={23.35}
                    onClick={() => setapplynow(false)}
                    height={23.35}
                  />
                  <p className="text-[16px] tracking-[-0.64px] leading-[20.64px]">
                    You are applying for{" "}
                  </p>
                  <p className="w-[422.24px] text-[32px] leading-[41.28px] tracking-[-1.28px] mt-[8px]">
                    Position Position{" "}
                  </p>
                  <div className="flex gap-[16px] mb-[109.71px] mt-[23px] max-sm:mb-[34px] max-smallphone:gap-[10px] gap-[59px]">
                    <div className="w-[179px]">
                      <p className="mb-[7px] text-[14px] leading-[18.2px]">
                        Company name{" "}
                      </p>
                      <h1 className="text-[20px] leading-[26px]">TATA 1mg</h1>
                    </div>
                    <div className="w-[179px]">
                      <p className="mb-[7px] text-[14px] leading-[18.2px]">
                        Salary package{" "}
                      </p>
                      <h1 className="text-[20px] leading-[26px]">3 to 4 LPA</h1>
                    </div>
                    <div className="w-[179px]">
                      <p className="mb-[7px] text-[14px] leading-[18.2px]">
                        Location{" "}
                      </p>
                      <h1 className="text-[20px] leading-[26px]">Bangalore</h1>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-[356px] h-[117px] rounded-[7px] bg-[#F0DEC9] rounded-[7px] pt-[18px] pl-[15px] pr-[12.15px]">
                      <div className="flex items-center mb-[16.5px]">
                        <Image
                          src="/info.svg"
                          width={24}
                          height={24}
                          className="mr-[9px]"
                        />
                        <p className="text-[#970B0B] text-[14px] leading-[18.2px]">
                          {" "}
                          Note:
                        </p>
                      </div>
                      <p className="text-[14px] capitalize leading-[21px] text-[#970B0B] font-">
                        You{" "}
                        <span className="font-semibold">cannot withdraw</span>{" "}
                        application once applied. You{" "}
                        <span className="font-semibold">cannot reject</span> the
                        offer if you get selected.
                      </p>
                    </div>
                    <div>
                      <div className="w-[283px] h-[53px] mb-[21px] bg-[#EEEEEE]"></div>
                      <div className="flex gap-[16px] max-smallphone:flex-col max-smallphone:w-[90%] max-sm:gap-[8px]">
                        <button
                          onClick={() => setapplynow(false)}
                          className="h-[43.07px] w-[143px] max-smallphone:w-full max-hamburger:w-[170px] bg-white border-[1px] border-[#000000] text-[#000000] rounded-[6px] text-[16px] leading-[19.2px]"
                        >
                          Go Back{" "}
                        </button>{" "}
                        <button
                          onClick={() => setapply(true)}
                          className="h-[43.07px] w-[124px] max-smallphone:w-full max-sm:w-[170px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                        >
                          Apply{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {apply && (
              <>
                <div className="bg-white fixed flex flex-col justify-center z-30 max-sm:shadow-md items-center max-sm:top-[120px] top-[150px] shadow-2xl rounded-[8px] left-[22.15%] max-hamburger:w-[80%] max-hamburger:left-[10%] max-md:w-[96%] max-md:left-[2%] h-[439px] w-[55.7%]">
                  <Image
                    src="/Vector (2).svg"
                    className="absolute max-md:right-[40px] max-sm:right-[5%] right-[36.12px] max-smallerphone:top-[20px] cursor-pointer top-[37.29px]"
                    width={23.35}
                    onClick={() => setapply(false)}
                    height={23.35}
                  />
                  <Image src="/Frame 18.svg" width={85.48} height={85.48} />{" "}
                  <p className="text-[16px] mt-[20px] text-center leading-[20.64px]">
                    Your application for{" "}
                  </p>
                  <h1 className="mt-[8px] text-[32px] max-sm:leading-[40px] max-md:w-full text-center leading-[41.28px] tracking-[-1.28px]">
                    Position Position
                  </h1>
                  <h1 className="text-[32px] max-sm:leading-[40px] max-md:w-full text-center leading-[41.28px] tracking-[-1.28px]">
                    at TATA 1mg
                  </h1>
                  <h1 className="text-[32px] max-sm:leading-[40px] max-md:w-full text-center leading-[41.28px] tracking-[-1.28px]">
                    is being processed.{" "}
                  </h1>
                  <button className="w-[168px] mt-[40.23px] max-sm:w-full pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]">
                    View status{" "}
                  </button>{" "}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="flex mb-[18px] gap-[16px]">
              <button
                onClick={handleapplied}
                className="h-[43px] opacity-50 max-smallphone:text-sm capitalize w-[149px] bg-[transparent] text-blacks border-[1px] border-black rounded-[28px] text-[16px] leading-[19.2px]"
              >
                new openings{" "}
              </button>{" "}
              <button
                onClick={handleapplied}
                className="h-[43px] max-smallphone:text-sm w-[168px] bg-[black] text-white rounded-[28px] border-[0] border-black text-[16px] leading-[19.2px]"
              >
                Applied positions{" "}
              </button>{" "}
            </div>{" "}
            {progress && (
              <div className="bg-[#F0DEC9] items-start absolute right-[60px] rounded-[7px] py-[15.5px] pl-[15px] pr-[35.71px] flex gap-[17px] h-[73px] w-[538px] max-lg:w-[470px] max-hamburger:static max-hamburger:w-full max-hamburger:mb-[50px] max-hamburger:h-auto max-hamburger:items-center max-sm:items-start max-lg:gap-[7px] max-lg:px-[15px] top-[153.93px]">
                <Image src="/info.svg" width={28.71} height={28.71} />
                <p className="text-[14px] capitalize leading-[21px] font-bold text-[#970B0B]">
                  Your profile is under review. Please allow us up to 48 hours.
                  you will receive an email once the review is finished.
                </p>
              </div>
            )}
            <div className="w-full relative h-[1007px] max-hamburger:h-auto max-hamburger:pb-[100px] max-sm:pb-[50px] max-sm:pt-[5px] max-sm:px-[16px] bg-white rounded-[5px] pt-[29px] pl-[22px] pb-[38px] pb-[108px]">
              <div className="flex max-hamburger:flex-col justify-between py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button className="h-[43px] max-hamburger:hidden ml-[117px] max-xl:ml-[80px] max-lg:ml-[50px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] text-[14px] leading-[18.2px] text-black max-md:block hidden">
                  Applied on: 12th Apr 2024
                </p>
                <button className="h-[43px] max-sm:w-full max-md:block hidden mt-[12px] max-hamburger:block hidden ml-[0] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                  Applied{" "}
                </button>
              </div>
              <div className="flex max-hamburger:flex-col justify-between py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button className="h-[43px] max-hamburger:hidden ml-[73px] max-xl:ml-[80px] max-lg:ml-[50px] w-[142px] bg-[#C9A062] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Under Review{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] text-[14px] leading-[18.2px] text-black max-md:block hidden">
                  Applied on: 12th Apr 2024
                </p>
                <button className="h-[43px] max-sm:w-full max-md:block hidden mt-[12px] max-hamburger:block hidden ml-[0] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                  Applied{" "}
                </button>
              </div>
              <div className="flex max-hamburger:flex-col justify-between py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button className="h-[43px] max-hamburger:hidden ml-[117px] max-xl:ml-[80px] max-lg:ml-[50px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] text-[14px] leading-[18.2px] text-black max-md:block hidden">
                  Applied on: 12th Apr 2024
                </p>
                <button className="h-[43px] max-sm:w-full max-md:block hidden mt-[12px] max-hamburger:block hidden ml-[0] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                  Applied{" "}
                </button>
              </div>
              <div className="flex max-hamburger:flex-col justify-between py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button className="h-[43px] max-hamburger:hidden ml-[109px] max-xl:ml-[72px] max-lg:ml-[42px] w-[105px] bg-[#D56E6E] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Rejected{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] text-[14px] leading-[18.2px] text-black max-md:block hidden">
                  Applied on: 12th Apr 2024
                </p>
                <button className="h-[43px] max-sm:w-full max-md:block hidden mt-[12px] max-hamburger:block hidden ml-[0] w-[105px] bg-[#D56E6E] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                  Rejected{" "}
                </button>
              </div>
              <div className="flex max-hamburger:flex-col justify-between py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button className="h-[43px] max-hamburger:hidden ml-[117px] max-xl:ml-[80px] max-lg:ml-[50px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] text-[14px] leading-[18.2px] text-black max-md:block hidden">
                  Applied on: 12th Apr 2024
                </p>
                <button className="h-[43px] max-sm:w-full max-md:block hidden mt-[12px] max-hamburger:block hidden ml-[0] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                  Applied{" "}
                </button>
              </div>
              <div className="flex max-hamburger:flex-col justify-between py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button className="h-[43px] max-hamburger:hidden ml-[117px] max-xl:ml-[80px] max-lg:ml-[50px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] text-[14px] leading-[18.2px] text-black max-md:block hidden">
                  Applied on: 12th Apr 2024
                </p>
                <button className="h-[43px] max-sm:w-full max-md:block hidden mt-[12px] max-hamburger:block hidden ml-[0] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                  Applied{" "}
                </button>
              </div>
              <div className="flex max-hamburger:flex-col justify-between py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button className="h-[43px] max-hamburger:hidden ml-[117px] max-xl:ml-[80px] max-lg:ml-[50px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] text-[14px] leading-[18.2px] text-black max-md:block hidden">
                  Applied on: 12th Apr 2024
                </p>
                <button className="h-[43px] max-sm:w-full max-md:block hidden mt-[12px] max-hamburger:block hidden ml-[0] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                  Applied{" "}
                </button>
              </div>
              <div className="flex max-hamburger:flex-col justify-between py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button className="h-[43px] max-hamburger:hidden ml-[117px] max-xl:ml-[80px] max-lg:ml-[50px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] text-[14px] leading-[18.2px] text-black max-md:block hidden">
                  Applied on: 12th Apr 2024
                </p>
                <button className="h-[43px] max-sm:w-full max-md:block hidden mt-[12px] max-hamburger:block hidden ml-[0] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                  Applied{" "}
                </button>
              </div>
              <div className="flex max-hamburger:flex-col justify-between py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button className="h-[43px] max-hamburger:hidden ml-[117px] max-xl:ml-[80px] max-lg:ml-[50px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] text-[14px] leading-[18.2px] text-black max-md:block hidden">
                  Applied on: 12th Apr 2024
                </p>
                <button className="h-[43px] max-sm:w-full max-md:block hidden mt-[12px] max-hamburger:block hidden ml-[0] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                  Applied{" "}
                </button>
              </div>
              <div className="flex max-hamburger:flex-col justify-between py-[16px] max-sm:pr-0 pr-[23.62px] border-b-[1px] border-[#C4C4C4]">
                <div>
                  {" "}
                  <h1 className="text-[20px] w-[350px] max-smalllaptop:w-[150px] max-smalllaptop:truncate leading-[26px]">
                    Position name
                  </h1>
                  <p className="mt-[11px] max-md:hidden text-[14px] leading-[18.2px] text-black">
                    Applied on: 12th Apr 2024
                  </p>
                </div>
                <div className="flex gap-[24px] max-sm:flex-col max-hamburger:mt-[20px] max-smalllaptop:gap-[16px] max-hamburger:gap-[12px]">
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[177.05px] max-lg:w-[140px] truncate">
                    Company name
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] pr-[5px] max-hamburger:pr-0 truncate">
                    Salary package
                  </p>
                  <p className="text-[16px] max-sm:w-full leading-[20.8px] w-[87.39px] truncate max-hamburger:w-[70px]">
                    Location
                  </p>
                  <button className="h-[43px] max-hamburger:hidden ml-[117px] max-xl:ml-[80px] max-lg:ml-[50px] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                    Applied{" "}
                  </button>{" "}
                </div>
                <p className="mt-[11px] text-[14px] leading-[18.2px] text-black max-md:block hidden">
                  Applied on: 12th Apr 2024
                </p>
                <button className="h-[43px] max-sm:w-full max-md:block hidden mt-[12px] max-hamburger:block hidden ml-[0] w-[97px] bg-[#999999] text-white rounded-[4px] text-[16px] leading-[19.2px]">
                  Applied{" "}
                </button>
              </div>
              <div className="flex gap-[16px] absolute right-[38px] bottom-[37px]">
                <div className="w-[32px] h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  <Image src="/Group 4.svg" width={14.13} height={14.13} />
                </div>
                <div className="flex gap-[8px]">
                  <p className="w-[32px] text-[17.23px] cursor-pointer bg-[#000] text-white leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#000]">
                    1
                  </p>
                  <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                    2
                  </p>
                  <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                    3
                  </p>
                  <p className="w-[25px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center cursor-pointer"></p>
                  <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                    42
                  </p>
                </div>
                <div className="w-[32px] rotate-180 h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  <Image src="/Group 4.svg" width={14.13} height={14.13} />
                </div>
              </div>
            </div>{" "}
          </>
        )}
      </section>
    </>
  );
}
