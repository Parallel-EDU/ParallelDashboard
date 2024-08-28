import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "../../styles/style.module.css";
import AdminNavbar from "../../components/adminbar";

export default function Jobs() {
  const [active, setactive] = useState("");
  const [filter, setfilter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("Select session type");
  const [isOpenYear, setIsOpenYear] = useState(false);
  const [year, setyear] = useState("Select year");
  const [isOpenMonth, setIsOpenMonth] = useState(false);
  const [month, setmonth] = useState("Select month");

  const handleSelect = (value) => {
    setItem(value);
    setIsOpen(false);
  };
  const handleSelectMonth = (value) => {
    setmonth(value);
    setIsOpenMonth(false);
  };
  const handleSelectYear = (value) => {
    setyear(value);
    setIsOpenYear(false);
  };
  return (
    <>
      <AdminNavbar />

      <main className="relative px-[59.5px] pb-[78px] pt-[0] max-md:px-[40px] max-sm:px-[20px]">
        {active === "" && (
          <>
            <div className="mb-[13px] justify-between bg-white pl-[19.08px] max-md:flex-col max-md:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[30.92px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center gap-[27.5px]">
              <div className="flex max-[500px]:flex-col max-[500px]:items-start max-[500px]:w-full gap-[16px] max-sm:gap-[8px] items-center gap-[27.5px]">
                <input
                  type="search"
                  name=""
                  className="w-[365px] max-[500px]:pr-[40px] max-[800px]:w-[310px] max-[500px]:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] max-sm:pr-0 border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                  placeholder="Search by student name, PAN number"
                  id=""
                />
                <Image
                  src="/search.svg"
                  className="cursor-pointer max-[500px]:left-auto max-[500px]:right-[34px] max-[800px]:left-[290px] max-hamburger:top-[27px] max-sm:top-[27px] absolute left-[347.88px]"
                  width={24}
                  height={24}
                />
                <div
                  onClick={() => setfilter(true)}
                  className="cursor-pointer h-[44px] max-[500px]:hidden border-[1px] px-[16px] border-[black] rounded-[9px] py-[13px] flex gap-[8px]"
                >
                  <Image src="/filter-fill.svg" width={18} height={18} />
                  <p className="text-[14px] leading-[16.94px]">Filter by</p>
                </div>
              </div>
              <div className="flex items-center max-[500px]:w-full gap-[16px]">
                <button
                  onClick={() => setactive("add details")}
                  className="h-[37px] w-[99px] max-[500px]:w-full bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                >
                  Add Batch
                </button>
                <div
                  onClick={() => setfilter(true)}
                  className="cursor-pointer h-[44px] max-[500px]:w-full max-[500px]:justify-center max-[500px]:flex hidden border-[1px] px-[16px] border-[black] rounded-[9px] py-[13px] flex gap-[8px]"
                >
                  <Image src="/filter-fill.svg" width={18} height={18} />
                  <p className="text-[14px] leading-[16.94px]">Filter by</p>
                </div>
              </div>
            </div>
            <div className="h-[533px] pb-[20px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
                  Batch ID
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[30px]">
                  Instructor
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                  No of students
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70">
                  | Start Date &nbsp;&nbsp;| Course
                </p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    Ahmed
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024 | FSD
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    02
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    Ahmed
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024 | FSD
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    03
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    Ahmed
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024 | FSD
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    04
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    Ahmed
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024 | FSD
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    05
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    Ahmed
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024 | FSD
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    06
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    Ahmed
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024 | FSD
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    07
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    Ahmed
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024 | FSD
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    08
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    Ahmed
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024 | FSD
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    09
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    Ahmed
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024 | FSD
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    10
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    Ahmed
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024 | FSD
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex gap-[16px] max-smallerphone:gap-[8px] max-:top-0 max-lg:mt-[30px] max-lg:left-[60px] max-md:left-[40px] max-sm:left-[20px] absolute right-[60px] bottom-[31px]">
                <div className="w-[32px] h-[32px] flex max-smallerphone:pr-0 pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  <Image src="/Group 4.svg" width={14.13} height={14.13} />
                </div>
                <div className="flex gap-[8px] max-smallerphone:gap-[6px]">
                  <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] max-smallphone:text-base cursor-pointer bg-black leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-black text-white">
                    1
                  </p>
                  <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] max-smallphone:text-base cursor-pointer">
                    2
                  </p>
                  <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] max-smallphone:text-base cursor-pointer">
                    3
                  </p>
                  <p className="w-[25px] max-smallphone:w-[20px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center cursor-pointer">
                    ...
                  </p>
                  <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] max-smallphone:text-base cursor-pointer">
                    42
                  </p>
                </div>
                <div className="w-[32px] rotate-180 h-[32px] max-smallphone:pr-0 flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  <Image src="/Group 4.svg" width={14.13} height={14.13} />
                </div>
              </div>
            </div>
          </>
        )}
        {active === "view details" && (
          <>
            <div className="mb-[21.5px] flex items-center mt-[12px]">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="h-auto pb-[36.88px] w-full bg-white rounded-[8px] pt-[37.12px] max-sm:px-[20px] px-[31.48px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Batch Information
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Batch ID
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Course enrolled in
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    No of students
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[103px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Progress
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[144px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="pb-[32px] max-xl:flex-wrap border-b-[0.5px] border-[#00000033] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Instructor 1
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Instructor 2
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Batch Start date
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[142px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Batch End date
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[142px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                Batch Links
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-lg:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-lg:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    WhatsApp Group Link
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-lg:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    GitHub Link{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
            </div>
            <h1 className="mt-[39.5px] mb-[15.41px] text-[20px] leading-[26px]">
              Students
            </h1>
            <div className="mb-[13px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[34px] max-sm:gap-[8px] items-center">
              <input
                type="search"
                name=""
                className="w-[483px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search student name, instructor, batch ID"
                id=""
              />
              <Image
                src="/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:top-[] max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[28px] absolute left-[467.88px]"
                width={24}
                height={24}
              />
            </div>
            <div className="pb-[75px] h-[533px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
                  Student name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[30px]">
                  Course
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[] mr-[7px]">
                  UIN | College | passing Year | Contact number | Email
                </p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[472px] mr-[7px]">
                    FSD05202432 | JSSIT | 2024 | +91 89023 09234 |
                    viosut@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    02
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[472px] mr-[7px]">
                    FSD05202432 | JSSIT | 2024 | +91 89023 09234 |
                    viosut@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    03
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[472px] mr-[7px]">
                    FSD05202432 | JSSIT | 2024 | +91 89023 09234 |
                    viosut@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    04
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[472px] mr-[7px]">
                    FSD05202432 | JSSIT | 2024 | +91 89023 09234 |
                    viosut@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    05
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[472px] mr-[7px]">
                    FSD05202432 | JSSIT | 2024 | +91 89023 09234 |
                    viosut@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    06
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[472px] mr-[7px]">
                    FSD05202432 | JSSIT | 2024 | +91 89023 09234 |
                    viosut@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    07
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[472px] mr-[7px]">
                    FSD05202432 | JSSIT | 2024 | +91 89023 09234 |
                    viosut@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    08
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[472px] mr-[7px]">
                    FSD05202432 | JSSIT | 2024 | +91 89023 09234 |
                    viosut@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    09
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[472px] mr-[7px]">
                    FSD05202432 | JSSIT | 2024 | +91 89023 09234 |
                    viosut@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    10
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[472px] mr-[7px]">
                    FSD05202432 | JSSIT | 2024 | +91 89023 09234 |
                    viosut@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        {active === "add details" && (
          <>
            <div className="mb-[21.5px] flex items-center mt-[12px]">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="h-auto pb-[36.88px] w-full bg-white rounded-[8px] pt-[37.12px] max-sm:px-[20px] px-[31.48px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Batch Information
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Batch ID
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Course enrolled in
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    No of students
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[103px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Progress
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[144px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="pb-[32px] max-xl:flex-wrap border-b-[0.5px] border-[#00000033] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Instructor 1
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Instructor 2
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Batch Start date
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[142px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Batch End date
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[142px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                Batch Links
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-lg:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-lg:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    WhatsApp Group Link
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-lg:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    GitHub Link{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
            </div>
            <h1 className="mt-[39.5px] mb-[15.41px] text-[20px] leading-[26px]">
              Students
            </h1>
            <div className="mb-[13px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[34px] max-sm:gap-[8px] items-center">
              <input
                type="search"
                name=""
                className="w-[483px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search student name, instructor, batch ID"
                id=""
              />
              <Image
                src="/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:top-[] max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[28px] absolute left-[467.88px]"
                width={24}
                height={24}
              />
            </div>
            <div className="pb-[75px] h-[247px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
                  Student name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[30px]">
                  Course
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[] mr-[7px]">
                  UIN | College | passing Year | Contact number | Email
                </p>
              </div>
            </div>
            <button
              onClick={() => setactive("")}
              className="h-[37px] w-[99px] mt-[28px] max-[500px]:w-full bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
            >
              Add Batch
            </button>
          </>
        )}
        {filter && (
          <div className="absolute top-[85px] z-[99] shadow-xl h-[170px] max-xl:h-auto py-[34px] pl-[47px] pr-[73px] max-[1330px]:px-[20px] max-[1330px]:py-[32px] rounded-[8px] bg-[white] w-[calc(100%-120px)] max-md:w-[calc(100%-80px)] max-sm:w-[calc(100%-40px)]">
            <div className="flex justify-between max-xl:flex-col">
              <div className="flex max-lg:flex-wrap gap-[20px]">
                <div className="max-sm:w-full relative">
                  <p className="text-[18.67px] leading-[22.4px] mb-[12px]">
                    Filter by course
                  </p>
                  <Image
                    src="/drop.svg"
                    className={
                      isOpen
                        ? "absolute rotate-180 max-md:right-[20px] right-[20.5px] cursor-pointer top-[65.5px]"
                        : "absolute right-[20.5px] max-md:right-[20px] cursor-pointer top-[65.5px]"
                    }
                    width={15}
                    height={8.55}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="pl-[23.5px] max-sm:w-full h-[68px] bg-white cursor-pointer w-[333px] border-[1px] border-[#00000033] rounded-[6px] py-[22px] text-[20px] leading-[24px]"
                  >
                    {" "}
                    {item}
                  </div>{" "}
                  {isOpen && (
                    <div className="bg-white max-md:w-[calc(100%-80px)] rounded-[4px] max-sm:w-[calc(100%-40px)] absolute border-[1px] border-[#00000033] top-[103px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() => handleSelect("Doubt Clearing Session")}
                          className="pl-[23.5px] w-[330px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          Doubt Clearing Session
                        </li>
                        <li
                          onClick={() => handleSelect("Update Session")}
                          className="pl-[23.5px] w-[330px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          Update Session
                        </li>
                        <li
                          onClick={() =>
                            handleSelect("Answer Revealing Session")
                          }
                          className="pl-[23.5px] w-[330px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          Answer Revealing Session
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="max-sm:w-full relative">
                  <p className="text-[18.67px] leading-[22.4px] mb-[12px]">
                    Filter by year
                  </p>
                  <Image
                    src="/drop.svg"
                    className={
                      isOpen
                        ? "absolute rotate-180 max-md:right-[20px] right-[20.5px] cursor-pointer top-[65.5px]"
                        : "absolute right-[20.5px] max-md:right-[20px] cursor-pointer top-[65.5px]"
                    }
                    width={15}
                    height={8.55}
                    onClick={() => setIsOpenYear(!isOpenYear)}
                  />
                  <div
                    onClick={() => setIsOpenYear(!isOpenYear)}
                    className="pl-[23.5px] max-sm:w-full h-[68px] bg-white cursor-pointer w-[221px] border-[1px] border-[#00000033] rounded-[6px] py-[22px] text-[20px] leading-[24px]"
                  >
                    {" "}
                    {year}
                  </div>{" "}
                  {isOpenYear && (
                    <div className="bg-white h-[210px] overflow-scroll max-md:w-[calc(100%-80px)] rounded-[4px] max-sm:w-[calc(100%-40px)] absolute border-[1px] border-[#00000033] top-[103px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() => handleSelectYear("2024")}
                          className="pl-[23.5px] w-[220px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          2024
                        </li>
                        <li
                          onClick={() => handleSelectYear("2023")}
                          className="pl-[23.5px] w-[220px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          2023
                        </li>
                        <li
                          onClick={() => handleSelectYear("2022")}
                          className="pl-[23.5px] w-[220px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          2022
                        </li>
                        <li
                          onClick={() => handleSelectYear("2021")}
                          className="pl-[23.5px] w-[220px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          2021
                        </li>
                        <li
                          onClick={() => handleSelectYear("2020")}
                          className="pl-[23.5px] w-[220px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          2020
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="max-sm:w-full relative">
                  <p className="text-[18.67px] leading-[22.4px] mb-[12px]">
                    Filter by month
                  </p>
                  <Image
                    src="/drop.svg"
                    className={
                      isOpen
                        ? "absolute rotate-180 max-md:right-[20px] right-[20.5px] cursor-pointer top-[65.5px]"
                        : "absolute right-[20.5px] max-md:right-[20px] cursor-pointer top-[65.5px]"
                    }
                    width={15}
                    height={8.55}
                    onClick={() => setIsOpenMonth(!isOpenMonth)}
                  />
                  <div
                    onClick={() => setIsOpenMonth(!isOpenMonth)}
                    className="pl-[23.5px] max-sm:w-full h-[68px] bg-white cursor-pointer w-[249px] border-[1px] border-[#00000033] rounded-[6px] py-[22px] text-[20px] leading-[24px]"
                  >
                    {" "}
                    {month}
                  </div>{" "}
                  {isOpenMonth && (
                    <div className="bg-white h-[210px] overflow-scroll max-md:w-[calc(100%-80px)] rounded-[4px] max-sm:w-[calc(100%-40px)] absolute border-[1px] border-[#00000033] top-[103px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() => handleSelectMonth("January")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          January
                        </li>
                        <li
                          onClick={() => handleSelectMonth("February")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          February
                        </li>
                        <li
                          onClick={() => handleSelectMonth("March")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          March
                        </li>
                        <li
                          onClick={() => handleSelectMonth("April")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          April
                        </li>
                        <li
                          onClick={() => handleSelectMonth("May")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          May
                        </li>
                        <li
                          onClick={() => handleSelectMonth("June")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          June
                        </li>
                        <li
                          onClick={() => handleSelectMonth("July")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          July
                        </li>
                        <li
                          onClick={() => handleSelectMonth("August")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          August
                        </li>
                        <li
                          onClick={() => handleSelectMonth("September")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          September
                        </li>
                        <li
                          onClick={() => handleSelectMonth("October")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          October
                        </li>
                        <li
                          onClick={() => handleSelectMonth("November")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          November
                        </li>
                        <li
                          onClick={() => handleSelectMonth("December")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          December
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex max-[350px]:flex-col mt-[46.5px] gap-[12px]">
                <button
                  onClick={() => setfilter(false)}
                  className="bg-[white] h-[43px] text-black border-[1px] border-black px-[16px] py-[13px] rounded-[4px] text-[14px] leading-[16.8px]"
                >
                  Clear filters
                </button>
                <button
                  onClick={() => setfilter(false)}
                  className="bg-[black] h-[43px] text-white px-[16px] py-[13px] rounded-[4px] text-[14px] leading-[16.8px]"
                >
                  Apply filters{" "}
                </button>
              </div>
            </div>{" "}
          </div>
        )}
      </main>
    </>
  );
}
