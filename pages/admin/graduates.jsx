import Image from "next/image";
import { useState } from "react";
import style from "../../styles/style.module.css";
import AdminNavbar from "../../components/adminbar";

export default function Jobs() {
  const [active, setactive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [sessionTime, setsessionTime] = useState(false);
  const [remark, setRemark] = useState(false);
  const [item, setItem] = useState("Select session type");
  const [inputValue, setInputValue] = useState("");
  const [SessionTimeValue, setSessionTimeValue] = useState("PM");
  const characterCount = inputValue.length;
  const [filter, setfilter] = useState(false);
  const [isOpenSession, setIsOpenSession] = useState(false);
  const [itemSession, setItemSession] = useState("Select session type");
  const [isOpenYear, setIsOpenYear] = useState(false);
  const [year, setyear] = useState("Select year");
  const [isOpenMonth, setIsOpenMonth] = useState(false);
  const [month, setmonth] = useState("Select month");

  const handleSelectSession = (value) => {
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
  const handleSelect = (value) => {
    setItem(value);
    setIsOpen(false);
  };
  const handleTimeSelect = (value) => {
    setSessionTimeValue(value);
    setsessionTime(false);
  };
  const handleChangeText = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <AdminNavbar />
      <main className="relative px-[59.5px] pb-[78px] pt-[0] max-md:px-[40px] max-sm:px-[20px]">
        {active === "" && (
          <>
            <div className="mb-[13px] bg-white pl-[19.08px] max-[500px]:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center gap-[27.5px]">
              <input
                type="search"
                name=""
                className="w-[365px] max-[500px]:pr-[40px] max-sm:w-[310px] max-[500px]:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] max-sm:pr-0 border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search by student name, PAN number"
                id=""
              />
              <Image
                src="/search.svg"
                className="cursor-pointer max-[500px]:left-auto max-[500px]:right-[34px] max-sm:left-[290px] max-hamburger:top-[27px] max-sm:top-[27px] absolute left-[347.88px]"
                width={24}
                height={24}
              />
              <div
                onClick={() => setfilter(true)}
                className="cursor-pointer h-[44px] border-[1px] px-[16px] border-[black] rounded-[9px] py-[13px] flex gap-[8px]"
              >
                <Image src="/filter-fill.svg" width={18} height={18} />
                <p className="text-[14px] leading-[16.94px]">Filter by</p>
              </div>
            </div>
            <div className="h-[533px] pb-[20px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1139px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
                  Candidate name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[40px]">
                  Enrolled Course
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[280px]">
                  Current Location | College | passing Year
                </p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1139px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[280px]">
                    Bangalore | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1139px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    02
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[280px]">
                    Bangalore | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1139px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    03
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[280px]">
                    Bangalore | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1139px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    04
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[280px]">
                    Bangalore | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1139px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    05
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[280px]">
                    Bangalore | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1139px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    06
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[280px]">
                    Bangalore | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1139px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    07
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[280px]">
                    Bangalore | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1139px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    08
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[280px]">
                    Bangalore | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1139px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    09
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[280px]">
                    Bangalore | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1139px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    10
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[280px]">
                    Bangalore | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view candidate details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
            </div>
            <div className="flex gap-[16px] max-smallerphone:gap-[8px] max-lg:relative max-lg:top-0 max-lg:mt-[30px] max-lg:left-[0] max-sm:left-[0] absolute right-[60px] bottom-[31px]">
              <div className="w-[32px] h-[32px] flex max-smallerphone:pr-0 pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image src="/Group 4.svg" width={14.13} height={14.13} />
              </div>
              <div className="flex gap-[8px] max-smallerphone:gap-[6px]">
                <p className="w-[32px] max-smallphone:w-[30px] text-[17.23px] max-smallphone:text-base cursor-pointer bg-black leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#000000] text-white">
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
          </>
        )}
        {active === "view candidate details" && (
          <div className="flex flex-col items-center">
            <div className="mb-[21.5px] w-full flex items-center mt-[12px]">
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
            <div className="h-auto pb-[36.88px] w-full bg-white rounded-[8px] pt-[36px] px-[31.48px] max-sm:px-[20px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Graduate Information
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">Name</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    SIN
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="pb-[32px] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Batch ID
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
                    DOB
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
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
                    Enrolled on
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
                    Graduated on
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="pb-[32px] border-b-[0.5px] border-[#00000033] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Email
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
                    Phone number
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                Payment Details
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Course enrolled in
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="pb-[24px] flex items-end max-hamburger:items-start max-xl:flex-wrap max-hamburger:flex-col gap-[24px]">
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Payment date (DD/MM/YY)
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[159px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Amount paid in INR
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[159px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Amount pending in INR
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[159px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Total fees in INR
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[159px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Payment Method
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[236px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="pb-[32px] max-hamburger:overflow-scroll border-b-[0.5px] border-[#00000033] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[24px]">
                <table className="w-[668px]">
                  <tr className="bg-[#D3D3D3]">
                    <td className="text-base w-[142px] pl-[25px] py-[16px]">
                      Date
                    </td>
                    <td className="text-base w-[218px] pl-[25px] py-[16px]">
                      Payment number
                    </td>
                    <td className="text-base w-[184px] pl-[25px] py-[16px]">
                      Payment method
                    </td>
                    <td className="text-base w-[196px] pl-[25px] py-[16px]">
                      Amount
                    </td>
                  </tr>
                  <tbody className="border-b-[0.2px] border-[#00000080]">
                    <td className="text-base text-[#1D1D1D] w-[142px] pl-[25px] py-[16px]">
                      28/08/23
                    </td>
                    <td className="text-base text-[#1D1D1D] w-[218px] pl-[25px] py-[16px]">
                      947u60749862766
                    </td>
                    <td className="text-base text-[#1D1D1D] w-[184px] pl-[25px] py-[16px]">
                      Credit Card
                    </td>
                    <td className="text-base text-[#1D1D1D] w-[196px] pl-[25px] py-[16px]">
                      INR 5,000
                    </td>
                  </tbody>
                </table>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                Company Information
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%] relative">
                  <Image
                    src="/edit.svg"
                    className="absolute bottom-[11px] right-[13.48px]"
                    width={18}
                    height={18}
                  />

                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Company Name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%] relative">
                  <Image
                    src="/edit.svg"
                    className="absolute bottom-[11px] right-[13.48px]"
                    width={18}
                    height={18}
                  />
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Current role
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
                <div className="max-hamburger:w-[100%] relative">
                  <Image
                    src="/edit.svg"
                    className="absolute bottom-[11px] right-[13.48px]"
                    width={18}
                    height={18}
                  />
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Company URL
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="flex gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%] relative">
                  <Image
                    src="/edit.svg"
                    className="absolute bottom-[11px] right-[13.48px]"
                    width={18}
                    height={18}
                  />
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Placement date
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%] relative">
                  <Image
                    src="/edit.svg"
                    className="absolute bottom-[11px] right-[13.48px]"
                    width={18}
                    height={18}
                  />
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Placement CTC (in LPA)
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-[20px] leading-[26px] font-semibold mt-[24px] w-full">
              Applied positions
            </h1>
            <div className="w-full mt-[22px] relative h-[563px] max-hamburger:h-auto max-hamburger:pb-[100px] max-sm:pb-[110px] max-sm:pt-[5px] max-sm:px-[16px] bg-white rounded-[5px] pt-[29px] pl-[22px] pb-[38px] pb-[108px]">
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
            </div>
            <h1 className="text-center mt-[32px] text-[20px] leading-[26px] font-semibold">
              Graduate Profile
            </h1>
            <div className="w-[874px] mt-[22px] max-hamburger:w-full max-sm:px-[20px] max-hamburger:w-full py-[24px] pl-[25px] max-hamburger:px-[25px] bg-white rounded-[5px]">
              <div className="flex gap-[18px] max-sm:flex-col max-sm:gap-[17px] mb-[17px]">
                <div className="w-[210px] max-smallerphone:w-full h-[252px] max-md:px-[12px] max-md:justify-center max-md:items-center max-md:py-[17px] max-md:h-auto pl-[34px] flex flex-col justify-center rounded-[14px] border-[1px] border-[#D8D8D8]">
                  <Image src="/profile.png" width={147.1} height={147.1} />
                </div>
                <div className="w-[588px] max-sm:w-full max-md:py-[17px] max-md:h-auto max-hamburger:px-[18px] max-hamburger:w-[calc(100%-210px)] h-[252px] relative pl-[28px] pt-[17.08px] rounded-[14px] border-[1px] border-[#D8D8D8]">
                  <h1 className="text-[16px] leading-[20.8px] font-bold mb-[31.92px]">
                    Profile
                  </h1>
                  <div className="max-hamburger:w-[100%]">
                    <p className="text-[14px] leading-[16.8px] mb-[8px]">
                      Name
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      value={"Candidate name"}
                      className="w-[250px] text-[14px] leading-[16.8px] max-md:w-[100%] pl-[15.71px] rounded-[6px] h-[45px] text-[#606060] border-[1px] border-[#0000004D]"
                    />
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[16px] mt-[22px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[8px]">
                        Email
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        value={"candidate@gmail.com"}
                        className="w-[250px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] pl-[15.71px] max-hamburger:pl-[6.51px] rounded-[6px] h-[45px] text-[#606060] border-[1px] border-[#0000004D]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[8px]">
                        Phone number
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        value={"+91 97307 3287"}
                        className="w-[250px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] max-hamburger:pl-[6.51px] pl-[15.71px] rounded-[6px] h-[45px] text-[#606060] border-[1px] border-[#0000004D]"
                      />
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="flex gap-[18px] mb-[17px]">
                <div className="w-[816px] max-hamburger:w-[100%] max-md:py-[17px] max-md:h-auto max-hamburger:px-[18px] h-[134px] pl-[28px] flex flex-col justify-center rounded-[14px] border-[1px] border-[#D8D8D8]">
                  <div className="flex items-end max-sm:items-start max-sm:flex-col gap-[17px]">
                    <div className="max-sm:w-full">
                      <p className="text-[14px] leading-[15.4px] mb-[10px] text-[#2C2E32]">
                        Current location
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[166px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div className="max-sm:w-full gap-[12px] max-">
                      <p className="text-[14px] leading-[15.4px] mb-[10px] text-[#2C2E32]">
                        Graduation year{" "}
                      </p>
                      <div className="border-[0.5px] max-hamburger:w-full cursor-pointer border-[#00000080] w-[71px] h-[40px] rounded-[4px]">
                        <div className="flex justify-between h-[40px] items-center pl-[6.27px] pr-[9px]">
                          <div className="max-sm:text-sm"> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[816px] max-md:py-[17px] max-md:h-auto max-hamburger:h-auto max-hamburger:px-[18px] max-hamburger:w-full h-[167px] relative pl-[28px] pt-[17.08px] max-hamburger:py-[17.08px] rounded-[14px] border-[1px] border-[#D8D8D8]">
                <h1 className="text-[16px] leading-[20.8px] font-bold mb-[27.09px]">
                  Documents
                </h1>
                <div className="max-hamburger:w-[100%] max-hamburger:gap-[20px] max-hamburger:flex-col flex gap-[39px]">
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      Resume
                    </p>
                    <div className="flex gap-[10px]">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[142px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                      />
                      <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                        <Image
                          src="/download.svg"
                          className="cursor-pointer"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      CV{" "}
                    </p>
                    <div className="flex gap-[10px]">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[142px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                      />
                      <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                        <Image
                          src="/download.svg"
                          className="cursor-pointer"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="w-[816px] max-md:py-[17px] max-md:h-auto max-hamburger:h-auto max-hamburger:px-[18px] max-hamburger:w-full h-[108px] relative pl-[28px] pt-[17.08px] max-hamburger:py-[17.08px] rounded-[14px] border-[1px] mt-[17px] border-[#D8D8D8]">
                <h1 className="text-[16px] leading-[20.8px] font-bold mb-[27.09px]">
                  Job Preference
                </h1>
                <p className="text-[16px] leading-[19.2px]">
                  Job 1, Job 2, Job 3
                </p>
              </div>{" "}
              <div className="w-[816px] max-md:py-[17px] max-md:h-auto max-hamburger:w-full my-[17px] relative max-hamburger:px-[18px] pl-[28px] pt-[17.08px] pb-[16.86px] rounded-[14px] border-[1px] border-[#D8D8D8]">
                <h1 className="text-[16px] leading-[20.8px] font-bold mb-[28.07px]">
                  Work Experience
                </h1>
                <h1 className="text-[16px] leading-[20.8px] mb-[10px]">
                  R&D Intern
                </h1>
                <p className="text-[12px] leading-[14.4px] opacity-80">
                  NOKIA | Internship
                </p>
                <p className="text-[12px] leading-[14.4px] opacity-80 mt-[4px]">
                  On-site | Bangalore, Karnataka
                </p>
                <p className="text-[12px] leading-[14.4px] opacity-80 mt-[4px]">
                  June 2024 - September 2024 | 6 months
                </p>
              </div>{" "}
              <div className="w-[816px] max-hamburger:px-[18px] max-md:py-[17px] max-md:h-auto max-hamburger:w-full h-[167px] relative pl-[28px] pt-[17.08px] rounded-[14px] border-[1px] border-[#D8D8D8]">
                <h1 className="text-[16px] leading-[20.8px] font-bold mb-[27.09px]">
                  Socials
                </h1>
                <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[18px]">
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      LinkedIn
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[216px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      GitHub (optional){" "}
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[216px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      Website (optional){" "}
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[216px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
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
                      isOpenSession
                        ? "absolute rotate-180 max-md:right-[20px] right-[20.5px] cursor-pointer top-[65.5px]"
                        : "absolute right-[20.5px] max-md:right-[20px] cursor-pointer top-[65.5px]"
                    }
                    width={15}
                    height={8.55}
                    onClick={() => setIsOpenSession(!isOpenSession)}
                  />
                  <div
                    onClick={() => setIsOpenSession(!isOpenSession)}
                    className="pl-[23.5px] max-sm:w-full h-[68px] bg-white cursor-pointer w-[333px] border-[1px] border-[#00000033] rounded-[6px] py-[22px] text-[20px] leading-[24px]"
                  >
                    {" "}
                    {itemSession}
                  </div>{" "}
                  {isOpenSession && (
                    <div className="bg-white max-md:w-[calc(100%-80px)] rounded-[4px] max-sm:w-[calc(100%-40px)] absolute border-[1px] border-[#00000033] top-[103px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() => handleSelectSession("Doubt Clearing Session")}
                          className="pl-[23.5px] w-[330px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          Doubt Clearing Session
                        </li>
                        <li
                          onClick={() => handleSelectSession("Update Session")}
                          className="pl-[23.5px] w-[330px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          Update Session
                        </li>
                        <li
                          onClick={() =>
                            handleSelectSession("Answer Revealing Session")
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
