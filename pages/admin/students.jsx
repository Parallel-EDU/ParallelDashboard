import Image from "next/image";
import { useState } from "react";
import style from "../../styles/style.module.css";
import AdminNavbar from "../../components/adminbar";

export default function Jobs() {
  const [active, setactive] = useState("");
  const [addmodule, setaddmodule] = useState(false);
  const [addassessment, setaddassessment] = useState(false);
  const [viewprofile, setviewprofile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sessionTime, setsessionTime] = useState(false);
  const [remark, setRemark] = useState(false);
  const [item, setItem] = useState("Select session type");
  const [inputValue, setInputValue] = useState("");
  const [SessionTimeValue, setSessionTimeValue] = useState("PM");
  const characterCount = inputValue.length;

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
            <div className="mb-[13px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center gap-[27.5px]">
              <input
                type="search"
                name=""
                className="w-[365px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search by student name, PAN number"
                id=""
              />
              <Image
                src="/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:top-[83px] max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[27px] absolute left-[347.88px]"
                width={24}
                height={24}
              />
              <div className="cursor-pointer h-[44px] border-[1px] px-[16px] border-[black] rounded-[9px] py-[13px] flex gap-[8px]">
                <Image src="/filter-fill.svg" width={18} height={18} />
                <p className="text-[14px] leading-[16.94px]">Filter by</p>
              </div>
            </div>
            <div className="h-[533px] pb-[20px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
                  Student name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[40px]">
                  Enrolled Course
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                  SID | College | passing Year
                </p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
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
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    FSD05202432 | JSSIT | 2024
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
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    FSD05202432 | JSSIT | 2024
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
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    FSD05202432 | JSSIT | 2024
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
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    FSD05202432 | JSSIT | 2024
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
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    FSD05202432 | JSSIT | 2024
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
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    FSD05202432 | JSSIT | 2024
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
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    FSD05202432 | JSSIT | 2024
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
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    FSD05202432 | JSSIT | 2024
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
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    FSD05202432 | JSSIT | 2024
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
                    Vitae facilisis in sit integer. A mauris ac.
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                    FSD05202432 | JSSIT | 2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("view details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
            </div>
            <div className="flex gap-[16px] max-smallerphone:gap-[8px] max-lg:relative max-lg:top-0 max-lg:mt-[30px] max-lg:left-[23px] max-sm:left-[15px] absolute right-[60px] bottom-[31px]">
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
          </>
        )}
        {active === "kyc" && (
          <>
            <div className="mb-[13px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center gap-[27.5px]">
              <input
                type="search"
                name=""
                className="w-[365px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search by student name, PAN number"
                id=""
              />
              <Image
                src="/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:top-[83px] max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[27px] absolute left-[347.88px]"
                width={24}
                height={24}
              />
              <div className="cursor-pointer h-[44px] border-[1px] px-[16px] border-[black] rounded-[9px] py-[13px] flex gap-[8px]">
                <Image src="/filter-fill.svg" width={18} height={18} />
                <p className="text-[14px] leading-[16.94px]">Filter by</p>
              </div>
            </div>
            <div className="h-[533px] pb-[20px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1179px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
                  Student name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[40px]">
                  Enrolled Course
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                  PAN number
                </p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1179px]">
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
                  <p className="text-[14px] leading-[16.8px] w-[236px]">
                    JBFPR4236R
                  </p>
                </div>
                <button className="w-[171px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                  Download PAN card{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1179px]">
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
                  <p className="text-[14px] leading-[16.8px] w-[236px]">
                    JBFPR4236R
                  </p>
                </div>
                <button className="w-[171px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                  Download PAN card{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1179px]">
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
                  <p className="text-[14px] leading-[16.8px] w-[236px]">
                    JBFPR4236R
                  </p>
                </div>
                <button className="w-[171px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                  Download PAN card{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1179px]">
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
                  <p className="text-[14px] leading-[16.8px] w-[236px]">
                    JBFPR4236R
                  </p>
                </div>
                <button className="w-[171px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                  Download PAN card{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1179px]">
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
                  <p className="text-[14px] leading-[16.8px] w-[236px]">
                    JBFPR4236R
                  </p>
                </div>
                <button className="w-[171px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                  Download PAN card{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1179px]">
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
                  <p className="text-[14px] leading-[16.8px] w-[236px]">
                    JBFPR4236R
                  </p>
                </div>
                <button className="w-[171px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                  Download PAN card{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1179px]">
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
                  <p className="text-[14px] leading-[16.8px] w-[236px]">
                    JBFPR4236R
                  </p>
                </div>
                <button className="w-[171px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                  Download PAN card{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1179px]">
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
                  <p className="text-[14px] leading-[16.8px] w-[236px]">
                    JBFPR4236R
                  </p>
                </div>
                <button className="w-[171px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                  Download PAN card{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1179px]">
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
                  <p className="text-[14px] leading-[16.8px] w-[236px]">
                    JBFPR4236R
                  </p>
                </div>
                <button className="w-[171px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                  Download PAN card{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1179px]">
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
                  <p className="text-[14px] leading-[16.8px] w-[236px]">
                    JBFPR4236R
                  </p>
                </div>
                <button className="w-[171px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
                  Download PAN card{" "}
                </button>
              </div>
            </div>
            <div className="flex gap-[16px] max-smallerphone:gap-[8px] max-lg:relative max-lg:top-0 max-lg:mt-[30px] max-lg:left-[23px] max-sm:left-[15px] absolute right-[60px] bottom-[31px]">
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
        {active === "Graduates" && (
          <>
            <div className="mb-[13px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center gap-[27.5px]">
              <input
                type="search"
                name=""
                className="w-[365px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search by student name, PAN number"
                id=""
              />
              <Image
                src="/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:top-[83px] max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[27px] absolute left-[347.88px]"
                width={24}
                height={24}
              />
              <div className="cursor-pointer h-[44px] border-[1px] px-[16px] border-[black] rounded-[9px] py-[13px] flex gap-[8px]">
                <Image src="/filter-fill.svg" width={18} height={18} />
                <p className="text-[14px] leading-[16.94px]">Filter by</p>
              </div>
            </div>
            <div className="h-[533px] pb-[20px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
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
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
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
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
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
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
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
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
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
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
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
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
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
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
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
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
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
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
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
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
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
            <div className="flex gap-[16px] max-smallerphone:gap-[8px] max-lg:relative max-lg:top-0 max-lg:mt-[30px] max-lg:left-[23px] max-sm:left-[15px] absolute right-[60px] bottom-[31px]">
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
            <div className="h-auto pb-[36.88px] w-full bg-white rounded-[8px] pt-[36px] px-[31.48px]">
              <div className="w-[210px] h-[196px] border-[1px] rounded-[14px] border-[#D8D8D8] flex items-center justify-center mb-[32px]">
                <Image src="/profile.png" width={147.1} height={147.1} />
              </div>
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Vitae’s Student information
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
                    Username
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
                    Email
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
                    Phone number
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
                    College
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
                    Current occupation
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
                    Highest qualification
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
                    Branch
                  </p>
                  <input
                    type="text"
                    name=""
                    value={"BCA"}
                    id=""
                    className="w-[188px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                Account information
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Email
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
                    Phone number
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
                    Password
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
              <div className="pb-[24px] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[24px]">
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
              <div className="pb-[32px] border-b-[0.5px] border-[#00000033] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[24px]">
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
                KYC information
              </h1>
              <div className="flex pb-[32px] border-b-[0.5px] border-[#00000033] gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    PAN number
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
                    PAN card photo
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
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                Learning Progress
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
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Progress
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[63px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Current module
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
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
            <div className="h-auto pb-[36.88px] w-full bg-white rounded-[8px] pt-[36px] px-[31.48px]">
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
              <div className="pb-[24px] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[24px]">
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
              <div className="pb-[32px] border-b-[0.5px] border-[#00000033] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[24px]">
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
        {active === "announcements" && (
          <>
            <div className="w-full max-sm:px-[20px] py-[37.12px] px-[31.48px] relative   pr-[40.08px] rounded-[8px] bg-white">
              <h1 className="text-[20px] leading-[24px] font-semibold mb-[18px]">
                Send Announcement{" "}
              </h1>
              <p className="text-[14px] leading-[15.4px]">Enter Message </p>
              <textarea
                name=""
                placeholder="Enter Message"
                className="w-[639px] text-black placeholder:text-black max-hamburger:w-full h-[138px] relative resize-none mb-[15.88px] border-[1px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={250}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] leading-[16.8px] top-[211.72px] max-hamburger:left-auto max-hamburger:right-[55px] left-[621.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/250
              </div>
              <div className="max-hamburger:w-[100%] mb-[16px]">
                <p className="text-[14px] leading-[16.8px] mb-[8px]">
                  Send link (optional)
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  value={""}
                  disabled
                  className="w-[407px] text-[14px] leading-[16.8px] max-md:w-[100%] pl-[15.71px] rounded-[6px] h-[45px] border-[1px] border-[#000000] bg-white"
                />
              </div>
              <div className="flex w-full">
                <button className="h-[37px] w-[169px] max-smallphone:w-full bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                  Send Announcement{" "}
                </button>
              </div>
            </div>
          </>
        )}
        {active === "live" && (
          <>
            <div className="w-full relative max-sm:px-[20px] max-hamburger:px-[25px] max-md:pr-[20px] max-xl:w-full max-hamburger:h-auto max-hamburger:pb-[38.5px] pb-[46px] pt-[38px] pl-[37.5px] bg-white rounded-[10px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Add Live Session{" "}
              </h1>
              <div className="flex gap-[39px] max-md:flex-col max-lg:gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[25.88px] mb-[24px]">
                <div className="max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Session type
                  </p>
                  <Image
                    src="/drop.svg"
                    className={
                      isOpen
                        ? "absolute rotate-180 max-md:right-[40px] max-md:left-auto left-[203px] cursor-pointer top-[138px]"
                        : "absolute left-[203px] max-md:right-[40px] max-md:left-auto cursor-pointer top-[138px]"
                    }
                    width={19.98}
                    height={10.75}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="pl-[15.71px] max-md:w-full h-[45px] bg-white cursor-pointer w-[206px] border-[1px] border-black rounded-[6px] pt-[13.93px] pb-[20.07px] text-[14px] leading-[16.8px]"
                  >
                    {" "}
                    {item}
                  </div>{" "}
                  {isOpen && (
                    <div className="bg-white max-md:w-[calc(100%-80px)] rounded-[4px] max-sm:w-[calc(100%-40px)] absolute border-[1px] border-black top-[165px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() => handleSelect("")}
                          className="pl-[15.71px] w-[223.2px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                        >
                          Doubt Clearing Session
                        </li>
                        <li
                          onClick={() => handleSelect("")}
                          className="pl-[15.71px] w-[223.2px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                        >
                          Update Session
                        </li>
                        <li
                          onClick={() => handleSelect("")}
                          className="pl-[15.71px] w-[223.2px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                        >
                          Answer Revealing Session
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Session name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[407px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                  />
                </div>
              </div>
              <div className="flex gap-[39px] max-md:flex-wrap max-hamburger:gap-[25px] mt-[25px]">
                <div>
                  <div className="max-sm:w-full">
                    <p className="text-[14px] leading-[18.2px] mb-[12px]">
                      Google meet link
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      className="w-[407px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black"
                    />
                  </div>
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Session start time
                  </p>
                  <div className="flex relative gap-[8px]">
                    <div className="flex gap-[1px] justify-center items-center w-[100px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder=""
                        className="w-[40px] text-[14px] leading-[16.8px]"
                      />
                      <span>:</span>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder=""
                        className="w-[40px] text-[14px] leading-[16.8px]"
                      />
                    </div>
                    <Image
                      src="/drop.svg"
                      className={
                        sessionTime
                          ? "absolute rotate-180 max-sm:right-[40px] max-md:right-[60px] left-[158px] cursor-pointer top-[19px]"
                          : "absolute left-[158px] max-sm:right-[40px] max-md:right-[60px] cursor-pointer top-[19px]"
                      }
                      width={14.77}
                      height={7.95}
                      onClick={() => setsessionTime(!sessionTime)}
                    />
                    <div
                      onClick={() => setsessionTime(!sessionTime)}
                      className="pl-[15.71px] h-[45px] bg-white cursor-pointer w-[75px] border-[1px] border-black rounded-[6px] pt-[13.93px] pb-[20.07px] text-[14px] leading-[16.8px]"
                    >
                      {" "}
                      {SessionTimeValue}
                    </div>{" "}
                    {sessionTime && (
                      <div className="bg-white rounded-[4px] absolute border-[1px] border-black top-[45px] left-[108px] z-[22222] cursor-pointer">
                        <ul>
                          <li
                            onClick={() => handleTimeSelect("PM")}
                            className="pl-[15.71px] w-[75px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                          >
                            PM
                          </li>
                          <li
                            onClick={() => handleTimeSelect("AM")}
                            className="pl-[15.71px] w-[75px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                          >
                            AM
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="max-hamburger:w-[100%] max-md:w-[40%] max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Session end time
                  </p>
                  <div className="flex relative gap-[8px]">
                    <div className="flex gap-[1px] justify-center items-center w-[100px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-black">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder=""
                        className="w-[40px] text-[14px] leading-[16.8px]"
                      />
                      <span>:</span>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder=""
                        className="w-[40px] text-[14px] leading-[16.8px]"
                      />
                    </div>
                    <Image
                      src="/drop.svg"
                      className={
                        sessionTime
                          ? "absolute rotate-180 max-sm:right-[40px] max-md:right-[60px] left-[158px] cursor-pointer top-[19px]"
                          : "absolute left-[158px] max-sm:right-[40px] max-md:right-[60px] cursor-pointer top-[19px]"
                      }
                      width={14.77}
                      height={7.95}
                      onClick={() => setsessionTime(!sessionTime)}
                    />
                    <div
                      onClick={() => setsessionTime(!sessionTime)}
                      className="pl-[15.71px] h-[45px] bg-white cursor-pointer w-[75px] border-[1px] border-black rounded-[6px] pt-[13.93px] pb-[20.07px] text-[14px] leading-[16.8px]"
                    >
                      {" "}
                      {SessionTimeValue}
                    </div>{" "}
                    {sessionTime && (
                      <div className="bg-white rounded-[4px] absolute border-[1px] border-black top-[45px] left-[108px] z-[22222] cursor-pointer">
                        <ul>
                          <li
                            onClick={() => handleTimeSelect("PM")}
                            className="pl-[15.71px] w-[75px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                          >
                            PM
                          </li>
                          <li
                            onClick={() => handleTimeSelect("AM")}
                            className="pl-[15.71px] w-[75px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                          >
                            AM
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button className="h-[37px] w-[112px] max-smallphone:w-full bg-black text-white rounded-[6px] mt-[16px] text-[14px] leading-[16.8px]">
                Add Session{" "}
              </button>
            </div>
            <div className="w-full pb-[56px] mt-[11px] bg-white rounded-[8px]">
              <h1 className="text-[20px] pb-[22.88px] pt-[37.12px] ml-[31.48px] leading-[26px] font-semibold">
                Upcoming live sessions{" "}
              </h1>
              <div className=" w-full bg-white rounded-[8px]">
                <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1260px] border-[#00000033]">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    Slno.
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[160px] mr-[7px]">
                    Session type
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[300px] mr-[50px]">
                    Session name
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[150px] mr-[27px]">
                    Session start time
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[150px] mr-[14px]">
                    Session end time
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    Zoom meeting link
                  </p>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1260px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                      01
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                      Session type
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Session name
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                      Session start time
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[150px] mr-[14px]">
                      Session end time
                    </p>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      className="w-[228px] text-[14px] leading-[16.8px] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-[#0000004D]"
                    />
                  </div>
                  <div className="flex gap-[28px] items-center">
                    <button className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]">
                      Update
                    </button>
                    <Image
                      src="../../delete.svg"
                      onClick={() => setRemark(true)}
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1260px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                      02
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                      Session type
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Session name
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                      Session start time
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[150px] mr-[14px]">
                      Session end time
                    </p>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      className="w-[228px] text-[14px] leading-[16.8px] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-[#0000004D]"
                    />
                  </div>
                  <div className="flex gap-[28px] items-center">
                    <button className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]">
                      Update
                    </button>
                    <Image
                      src="../../delete.svg"
                      onClick={() => setRemark(true)}
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1260px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                      03
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                      Session type
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Session name
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                      Session start time
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[150px] mr-[14px]">
                      Session end time
                    </p>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      className="w-[228px] text-[14px] leading-[16.8px] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-[#0000004D]"
                    />
                  </div>
                  <div className="flex gap-[28px] items-center">
                    <button className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]">
                      Update
                    </button>
                    <Image
                      src="../../delete.svg"
                      onClick={() => setRemark(true)}
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1260px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                      04
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                      Session type
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Session name
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                      Session start time
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[150px] mr-[14px]">
                      Session end time
                    </p>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      className="w-[228px] text-[14px] leading-[16.8px] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-[#0000004D]"
                    />
                  </div>
                  <div className="flex gap-[28px] items-center">
                    <button className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]">
                      Update
                    </button>
                    <Image
                      src="../../delete.svg"
                      onClick={() => setRemark(true)}
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1260px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                      05
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                      Session type
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                      Session name
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                      Session start time
                    </p>
                    <p className="text-[16px] leading-[19.2px] w-[150px] mr-[14px]">
                      Session end time
                    </p>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      className="w-[228px] text-[14px] leading-[16.8px] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-[#0000004D]"
                    />
                  </div>
                  <div className="flex gap-[28px] items-center">
                    <button className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]">
                      Update
                    </button>
                    <Image
                      src="../../delete.svg"
                      onClick={() => setRemark(true)}
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1260px]">
                  <div className="flex items-center">
                    <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                      06
                    </p>
                    <p className="text-[14px] leading-[16.8px] w-[160px] mr-[7px]">
                      Session type
                    </p>
                    <p className="text-[14px] leading-[16.8px] w-[300px] mr-[50px]">
                      Session name
                    </p>
                    <p className="text-[14px] leading-[16.8px] w-[150px] mr-[27px]">
                      Session start time
                    </p>
                    <p className="text-[14px] leading-[16.8px] w-[150px] mr-[14px]">
                      Session end time
                    </p>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder=""
                      className="w-[228px] text-[14px] leading-[16.8px] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] bg-[white] border-[1px] border-[#0000004D]"
                    />
                  </div>
                  <div className="flex gap-[28px] items-center">
                    <button className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]">
                      Update
                    </button>
                    <Image
                      src="../../delete.svg"
                      onClick={() => setRemark(true)}
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>
            <section className="mt-[16px] max-sm:px-[20px] max-md:pr-[20px] max-hamburger:h-auto max-hamburger:px-[25px] max-hamburger:pb-[40px] max-hamburger:pr-[40px] max-xl:w-full bg-white rounded-[5px] w-full h-[351px] pt-[29.77px] pl-[38px]">
              <h1 className="capitalize text-[20px] leading-[26px] font-semibold mb-[25.88px]">
                WhatsApp Doubt Clearing Link
              </h1>
              <div className="flex w-[494px] flex-col relative">
                <p className="text-black text-[13px] bg-white mb-[13px] p-[8px] leading-[15.6px]">
                  Select Course
                </p>
                <div className="flex gap-[20px] w-[494px]">
                  <div className="flex items-center gap-[4px]">
                    <input type="radio" name="course" id="course" />
                    <label
                      htmlFor="course"
                      className="text-[14px] leading-[16.8px]"
                    >
                      Full Stack Development
                    </label>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <input type="radio" name="course" id="course" />
                    <label
                      htmlFor="course"
                      className="text-[14px] leading-[16.8px]"
                    >
                      Backend Mastery
                    </label>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <input type="radio" name="course" id="course" />
                    <label
                      htmlFor="course"
                      className="text-[14px] h-[20px] leading-[16.8px]"
                    >
                      Frontend Mastery{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex mt-[27px] gap-[18px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Select batch
                  </p>
                  <div className="w-[407px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      type="text"
                      name=""
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[45px] bg-[white]"
                    >
                      <option value="">Batch Code</option>
                    </select>
                  </div>
                </div>
                <div className="max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    Batch instructor
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    disable
                    className="w-[241px] bg-[#ECECEC] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] border-[1px] border-black"
                  />
                </div>
                <div className="max-sm:w-full">
                  <p className="text-[14px] leading-[18.2px] mb-[12px]">
                    WhatsApp Link
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className="w-[241px] bg-[#fff] text-[14px] leading-[16.8px] max-hamburger:w-[100%] placeholder:opacity-70 pl-[14.28px] rounded-[6px] h-[45px] border-[1px] border-black"
                  />
                </div>
              </div>
              <button className="h-[37px] w-[112px] max-smallphone:w-full bg-black text-white rounded-[6px] mt-[39px] text-[14px] leading-[16.8px]">
                Add Session{" "}
              </button>
            </section>
          </>
        )}
        {active === "courses" && (
          <div className="w-full pb-[37px] bg-white rounded-[8px]">
            <h1 className="text-[20px] pb-[38.88px] pt-[37.12px] ml-[31.48px] leading-[26px] font-semibold">
              Courses{" "}
            </h1>
            <div className="w-full overflow-scroll">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1125px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[20px]">
                  Course name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[150px] mr-[25px]">
                  Enrolled Course
                </p>
                <p className="text-[14px] leading-[16.8px] w-[158px] mr-[75px]">
                  No. of students enrolled
                </p>
                <p className="text-[14px] leading-[16.8px] w-[300px] max-biggerscreen:w-[150px] mr-[20px]">
                  Head instructor
                </p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1125px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[20px]">
                    No-code, Low-code Development
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[25px]">
                    09
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[158px] mr-[75px]">
                    1,200
                  </p>
                  <p className="text-[16px] leading-[19.2px] max-biggerscreen:w-[150px] w-[300px] mr-[20px]">
                    Ornare id
                  </p>
                </div>
                <button
                  onClick={() => setactive("edit course")}
                  className="w-[107px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Course{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1125px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    02
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[20px]">
                    Artificial Intelligence (AI/ML)
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[25px]">
                    09
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[158px] mr-[75px]">
                    1,200
                  </p>
                  <p className="text-[16px] leading-[19.2px] max-biggerscreen:w-[150px] w-[300px] mr-[20px]">
                    Auctor in cras leo
                  </p>
                </div>
                <button
                  onClick={() => setactive("edit course")}
                  className="w-[107px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Course{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1125px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    03
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[20px]">
                    Data Analytics
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[25px]">
                    09
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[158px] mr-[75px]">
                    1,200
                  </p>
                  <p className="text-[16px] leading-[19.2px] max-biggerscreen:w-[150px] w-[300px] mr-[20px]">
                    Proin pharetra
                  </p>
                </div>
                <button
                  onClick={() => setactive("edit course")}
                  className="w-[107px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Course{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1125px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    04
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[20px]">
                    Full Stack Development
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[25px]">
                    09
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[158px] mr-[75px]">
                    1,200
                  </p>
                  <p className="text-[16px] leading-[19.2px] max-biggerscreen:w-[150px] w-[300px] mr-[20px]">
                    Consectetur
                  </p>
                </div>
                <button
                  onClick={() => setactive("edit course")}
                  className="w-[107px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Course{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1125px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    05
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[20px]">
                    New course
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[25px]">
                    09
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[158px] mr-[75px]">
                    1,200
                  </p>
                  <p className="text-[16px] leading-[19.2px] max-biggerscreen:w-[150px] w-[300px] mr-[20px]">
                    Consectetur
                  </p>
                </div>
                <button
                  onClick={() => setactive("edit course")}
                  className="w-[107px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Edit Course{" "}
                </button>
              </div>
            </div>
            <div
              onClick={() => setactive("add course")}
              className="gap-[11px] max-sm:ml-[20px] max-sm:w-[300px] max-smallphone:w-[calc(100%-40px)] cursor-pointer mt-[29px] text-[16px] leading-[19.2px] text-center ml-[52px] border-[0.5px] border-[#000000B2] rounded-[4px] w-[319px] h-[139px] flex flex-col items-center justify-center"
            >
              Add course{" "}
              <div className="w-[53.6px] h-[53.6px] bg-[#F1F1F1] rounded-[100%] flex justify-center items-center">
                <Image src="/plus.svg" width={33.91} height={33.91} />
              </div>{" "}
            </div>
          </div>
        )}
        {active === "add course" && (
          <>
            <div className="mb-[21.5px] flex items-center my-[12px]">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("courses")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="w-full bg-white max-hamburger:px-[18px] max-md:py-[17px] max-md:h-auto max-hamburger:w-full relative px-[31.48px] pb-[47.5px] pt-[34.5px] rounded-[14px] border-[1px] border-[#D8D8D8]">
              <h1 className="text-[16px] leading-[20.8px] font-bold mb-[27.09px]">
                Course information
              </h1>
              <div className="max-hamburger:w-[100%] max-xl:flex-wrap max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Course name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Head instructor{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    WhatsApp group link (Doubt clearing){" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
            </div>
            {addmodule === false && (
              <div
                onClick={() => setaddmodule(true)}
                className="gap-[11px] max-smallphone:w-full cursor-pointer mt-[15px] text-[16px] leading-[19.2px] text-center bg-white border-[0.5px] border-[#000000B2] rounded-[4px] w-[319px] h-[139px] flex flex-col items-center justify-center"
              >
                Add Module{" "}
                <div className="w-[53.6px] h-[53.6px] bg-[#F1F1F1] rounded-[100%] flex justify-center items-center">
                  <Image src="/plus.svg" width={33.91} height={33.91} />
                </div>{" "}
              </div>
            )}
            {addmodule && (
              <>
                <div className="relative pl-[31.48px] pr-[34px] pt-[37.5px] mt-[28px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Lesson 1
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Lesson name
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Head instructor{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Lesson description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none mb-[35.5px] border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <div className="flex max-sm:flex-col max-sm:gap-[24px] gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[15.4px] mb-[10px]">
                        Upload video
                      </p>
                      <div className="flex gap-[10px]">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                        />
                        <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                          <Image
                            src="/upload.svg"
                            className="cursor-pointer"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[14px] leading-[15.4px] mb-[10px]">
                        Upload lesson resources (optional)
                      </p>
                      <div className="flex gap-[10px]">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                        />
                        <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                          <Image
                            src="/upload.svg"
                            className="cursor-pointer"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative pl-[31.48px] max-sm:px-[20px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Lesson 2
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Lesson name
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Head instructor{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Lesson description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none mb-[35.5px] border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <div className="flex max-sm:flex-col max-sm:gap-[24px] gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[15.4px] mb-[10px]">
                        Upload video
                      </p>
                      <div className="flex gap-[10px]">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                        />
                        <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                          <Image
                            src="/upload.svg"
                            className="cursor-pointer"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[14px] leading-[15.4px] mb-[10px]">
                        Upload lesson resources (optional)
                      </p>
                      <div className="flex gap-[10px]">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                        />
                        <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                          <Image
                            src="/upload.svg"
                            className="cursor-pointer"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative pl-[31.48px] max-sm:px-[20px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Lesson 3
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Lesson name
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Head instructor{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Lesson description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none mb-[35.5px] border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <div className="flex max-sm:flex-col max-sm:gap-[24px] gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[15.4px] mb-[10px]">
                        Upload video
                      </p>
                      <div className="flex gap-[10px]">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                        />
                        <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                          <Image
                            src="/upload.svg"
                            className="cursor-pointer"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[14px] leading-[15.4px] mb-[10px]">
                        Upload lesson resources (optional)
                      </p>
                      <div className="flex gap-[10px]">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                        />
                        <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                          <Image
                            src="/upload.svg"
                            className="cursor-pointer"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative pl-[31.48px] max-sm:px-[20px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Lesson 4
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Lesson name
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Head instructor{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Lesson description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none mb-[35.5px] border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <div className="flex max-sm:flex-col max-sm:gap-[24px] gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[15.4px] mb-[10px]">
                        Upload video
                      </p>
                      <div className="flex gap-[10px]">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                        />
                        <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                          <Image
                            src="/upload.svg"
                            className="cursor-pointer"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[14px] leading-[15.4px] mb-[10px]">
                        Upload lesson resources (optional)
                      </p>
                      <div className="flex gap-[10px]">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                        />
                        <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                          <Image
                            src="/upload.svg"
                            className="cursor-pointer"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {addassessment && (
              <>
                <div className="relative pl-[31.48px] max-sm:px-[20px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[16px] leading-[20.8px] font-bold mb-[27.08px]">
                      Module Assessment
                    </h1>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <Image
                        src="/drop.svg"
                        className={
                          isOpen
                            ? "absolute rotate-180 max-sm:right-[40px] max-md:right-[60px] left-[233px] cursor-pointer top-[130px]"
                            : "absolute left-[233px] max-sm:right-[40px] max-md:right-[60px] cursor-pointer top-[130px]"
                        }
                        width={19.98}
                        height={10.75}
                        onClick={() => setIsOpen(!isOpen)}
                      />
                      <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="pl-[15.71px] h-[45px] bg-white cursor-pointer w-[237px] border-[1px] border-black rounded-[6px] pt-[13.93px] pb-[20.07px] text-[14px] leading-[16.8px]"
                      >
                        {" "}
                        {item}
                      </div>{" "}
                      {isOpen && (
                        <div className="bg-white max-md:w-[calc(100%-80px)] rounded-[4px] max-sm:w-[calc(100%-40px)] absolute border-[1px] border-black top-[157px] z-[22222] cursor-pointer">
                          <ul>
                            <li
                              onClick={() => handleSelect("")}
                              className="pl-[15.71px] w-[223.2px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                            >
                              Doubt Clearing Session
                            </li>
                            <li
                              onClick={() => handleSelect("")}
                              className="pl-[15.71px] w-[223.2px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                            >
                              Update Session
                            </li>
                            <li
                              onClick={() => handleSelect("")}
                              className="pl-[15.71px] w-[223.2px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                            >
                              Answer Revealing Session
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[154px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <div className="flex items-center gap-[8px]">
                        <div className="flex gap-[6px] items-center">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="w-[46px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                          />
                          <span>min</span>
                        </div>
                        <span className="text-[14px] leading-[16.8px]">:</span>
                        <div className="flex gap-[6px] items-center">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="w-[46px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                          />
                          <span>sec</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Assessment description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none mb-[18px] border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[470px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mb-[10px]">
                    Upload resources (optional)
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/upload.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Question 1
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Question type
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[236px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={500}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[551.72px] max-md:top-[651px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/500
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question hint
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[703.72px] max-md:top-[805px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Expected answer
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[955px] mt-2">
                    {characterCount}/100
                  </div>
                </div>
                <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Question 2
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Question type
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[416.72px] max-md:top-[516px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <div className="w-[652px] h-[0.5px] bg-[#00000080] my-[24px] max-hamburger:w-full"></div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option A
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option B{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option C
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option D{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      Correct Option{" "}
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[131px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                  </div>
                  <p className="text-[14px] leading-[15.4px]">Question hint</p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[1190px] mt-2">
                    {characterCount}/100
                  </div>
                </div>
                <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Question 3
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Question type
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[236px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={500}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[551.72px] max-md:top-[651px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/500
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question hint
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[703.72px] max-md:top-[805px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Expected answer
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[955px] mt-2">
                    {characterCount}/100
                  </div>
                </div>
                <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Question 4
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Question type
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[416.72px] max-md:top-[516px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <div className="w-[652px] h-[0.5px] bg-[#00000080] my-[24px] max-hamburger:w-full"></div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option A
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option B{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option C
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option D{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      Correct Option{" "}
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[131px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                  </div>
                  <p className="text-[14px] leading-[15.4px]">Question hint</p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[1190px] mt-2">
                    {characterCount}/100
                  </div>
                </div>
                <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Question 5
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Question type
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[236px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={500}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[551.72px] max-md:top-[651px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/500
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question hint
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[703.72px] max-md:top-[805px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Expected answer
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[955px] mt-2">
                    {characterCount}/100
                  </div>
                </div>
                <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Question 6
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Question type
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[416.72px] max-md:top-[516px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <div className="w-[652px] h-[0.5px] bg-[#00000080] my-[24px] max-hamburger:w-full"></div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option A
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option B{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option C
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option D{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      Correct Option{" "}
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[131px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                  </div>
                  <p className="text-[14px] leading-[15.4px]">Question hint</p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[1190px] mt-2">
                    {characterCount}/100
                  </div>
                </div>
                <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Question 7
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Question type
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[236px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={500}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[551.72px] max-md:top-[651px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/500
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question hint
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[703.72px] max-md:top-[805px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Expected answer
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[955px] mt-2">
                    {characterCount}/100
                  </div>
                </div>
                <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Question 8
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Question type
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[416.72px] max-md:top-[516px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <div className="w-[652px] h-[0.5px] bg-[#00000080] my-[24px] max-hamburger:w-full"></div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option A
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option B{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option C
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option D{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      Correct Option{" "}
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[131px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                  </div>
                  <p className="text-[14px] leading-[15.4px]">Question hint</p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[1190px] mt-2">
                    {characterCount}/100
                  </div>
                </div>
                <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Question 9
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Question type
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[236px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={500}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[551.72px] max-md:top-[651px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/500
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question hint
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[703.72px] max-md:top-[805px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Expected answer
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[955px] mt-2">
                    {characterCount}/100
                  </div>
                </div>
                <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
                  <div className="flex items-center justify-between mb-[27.09px]">
                    <h1 className="text-[16px] leading-[20.8px] font-bold">
                      Question 10
                    </h1>
                    <div className="flex gap-[8px] items-center">
                      <Image
                        src="/delete.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                      <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                        Remove lesson
                      </p>
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Question type
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Maximum points{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <p className="text-[14px] leading-[15.4px] mt-[18px]">
                    Question description
                  </p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[416.72px] max-md:top-[516px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                    {characterCount}/100
                  </div>
                  <div className="w-[652px] h-[0.5px] bg-[#00000080] my-[24px] max-hamburger:w-full"></div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option A
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option B{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option C
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[16.8px] mb-[10px]">
                        Option D{" "}
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] leading-[16.8px] mb-[10px]">
                      Correct Option{" "}
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[131px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                  </div>
                  <p className="text-[14px] leading-[15.4px]">Question hint</p>
                  <textarea
                    name=""
                    placeholder=""
                    className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                    id=""
                    maxLength={100}
                    onChange={handleChangeText}
                  ></textarea>
                  <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[1190px] mt-2">
                    {characterCount}/100
                  </div>
                </div>
                <button className="w-[110px] h-[37px] py-[5px] bg-black text-white rounded-[6px] text-[16px] mt-[2px] leading-[19.2px]">
                  Add Module{" "}
                </button>
              </>
            )}
            {addmodule && addassessment === false && (
              <div
                onClick={() => setaddassessment(true)}
                className="gap-[11px] max-smallphone:w-full cursor-pointer mt-[17px] text-[16px] leading-[19.2px] text-center bg-white border-[0.5px] border-[#000000B2] rounded-[4px] w-[319px] h-[139px] flex flex-col items-center justify-center"
              >
                Add Assessment{" "}
                <div className="w-[53.6px] h-[53.6px] bg-[#F1F1F1] rounded-[100%] flex justify-center items-center">
                  <Image src="/plus.svg" width={33.91} height={33.91} />
                </div>{" "}
              </div>
            )}
          </>
        )}
        {active === "edit course" && (
          <>
            <div className="mb-[21.5px] flex items-center my-[12px]">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("courses")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="w-full bg-white max-hamburger:px-[18px] max-md:py-[17px] max-md:h-auto max-hamburger:w-full relative pl-[31.48px] pb-[47.5px] pt-[34.5px] rounded-[14px] border-[1px] border-[#D8D8D8]">
              <h1 className="text-[16px] leading-[20.8px] font-bold mb-[27.09px]">
                Course information
              </h1>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Course name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Head instructor{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    WhatsApp group link (Doubt clearing){" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
            </div>
            <div className="relative pl-[31.48px] pr-[34px] pt-[37.5px] mt-[28px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Lesson 1
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Lesson name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Head instructor{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Lesson description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none mb-[35.5px] border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <div className="flex max-sm:flex-col max-sm:gap-[24px] gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[15.4px] mb-[10px]">
                    Upload video
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/upload.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[15.4px] mb-[10px]">
                    Upload lesson resources (optional)
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/upload.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative pl-[31.48px] max-sm:px-[20px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Lesson 2
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Lesson name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Head instructor{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Lesson description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none mb-[35.5px] border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <div className="flex max-sm:flex-col max-sm:gap-[24px] gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[15.4px] mb-[10px]">
                    Upload video
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/upload.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[15.4px] mb-[10px]">
                    Upload lesson resources (optional)
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/upload.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative pl-[31.48px] max-sm:px-[20px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Lesson 3
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Lesson name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Head instructor{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Lesson description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none mb-[35.5px] border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <div className="flex max-sm:flex-col max-sm:gap-[24px] gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[15.4px] mb-[10px]">
                    Upload video
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/upload.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[15.4px] mb-[10px]">
                    Upload lesson resources (optional)
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/upload.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative pl-[31.48px] max-sm:px-[20px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Lesson 4
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Lesson name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Head instructor{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Lesson description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none mb-[35.5px] border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <div className="flex max-sm:flex-col max-sm:gap-[24px] gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[15.4px] mb-[10px]">
                    Upload video
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/upload.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[15.4px] mb-[10px]">
                    Upload lesson resources (optional)
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/upload.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative pl-[31.48px] max-sm:px-[20px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Module Assessment
                </h1>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <Image
                    src="/drop.svg"
                    className={
                      isOpen
                        ? "absolute rotate-180 max-sm:right-[40px] max-md:right-[60px] left-[233px] cursor-pointer top-[130px]"
                        : "absolute left-[233px] max-sm:right-[40px] max-md:right-[60px] cursor-pointer top-[130px]"
                    }
                    width={19.98}
                    height={10.75}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="pl-[15.71px] h-[45px] bg-white cursor-pointer w-[237px] border-[1px] border-black rounded-[6px] pt-[13.93px] pb-[20.07px] text-[14px] leading-[16.8px]"
                  >
                    {" "}
                    {item}
                  </div>{" "}
                  {isOpen && (
                    <div className="bg-white max-md:w-[calc(100%-80px)] rounded-[4px] max-sm:w-[calc(100%-40px)] absolute border-[1px] border-black top-[157px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() => handleSelect("")}
                          className="pl-[15.71px] w-[223.2px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                        >
                          Doubt Clearing Session
                        </li>
                        <li
                          onClick={() => handleSelect("")}
                          className="pl-[15.71px] w-[223.2px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                        >
                          Update Session
                        </li>
                        <li
                          onClick={() => handleSelect("")}
                          className="pl-[15.71px] w-[223.2px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer pt-[11px] pb-[11px] text-[14px] leading-[16.8px]"
                        >
                          Answer Revealing Session
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[154px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <div className="flex items-center gap-[8px]">
                    <div className="flex gap-[6px] items-center">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[46px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                      <span>min</span>
                    </div>
                    <span className="text-[14px] leading-[16.8px]">:</span>
                    <div className="flex gap-[6px] items-center">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-[46px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                      <span>sec</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Assessment description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none mb-[18px] border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[470px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mb-[10px]">
                Upload resources (optional)
              </p>
              <div className="flex gap-[10px]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[182px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                />
                <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                  <Image
                    src="/upload.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Question 1
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Question type
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">Question</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[236px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={500}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[551.72px] max-md:top-[651px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/500
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question hint
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[703.72px] max-md:top-[805px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Expected answer
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[955px] mt-2">
                {characterCount}/100
              </div>
            </div>
            <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Question 2
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Question type
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">Question</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[416.72px] max-md:top-[516px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <div className="w-[652px] h-[0.5px] bg-[#00000080] my-[24px] max-hamburger:w-full"></div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option A
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option B{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option C
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option D{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div>
                <p className="text-[14px] leading-[16.8px] mb-[10px]">
                  Correct Option{" "}
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[131px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                />
              </div>
              <p className="text-[14px] leading-[15.4px]">Question hint</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[1190px] mt-2">
                {characterCount}/100
              </div>
            </div>
            <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Question 3
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Question type
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">Question</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[236px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={500}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[551.72px] max-md:top-[651px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/500
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question hint
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[703.72px] max-md:top-[805px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Expected answer
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[955px] mt-2">
                {characterCount}/100
              </div>
            </div>
            <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Question 4
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Question type
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">Question</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[416.72px] max-md:top-[516px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <div className="w-[652px] h-[0.5px] bg-[#00000080] my-[24px] max-hamburger:w-full"></div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option A
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option B{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option C
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option D{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div>
                <p className="text-[14px] leading-[16.8px] mb-[10px]">
                  Correct Option{" "}
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[131px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                />
              </div>
              <p className="text-[14px] leading-[15.4px]">Question hint</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[1190px] mt-2">
                {characterCount}/100
              </div>
            </div>
            <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Question 5
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Question type
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">Question</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[236px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={500}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[551.72px] max-md:top-[651px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/500
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question hint
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[703.72px] max-md:top-[805px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Expected answer
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[955px] mt-2">
                {characterCount}/100
              </div>
            </div>
            <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Question 6
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Question type
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">Question</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[416.72px] max-md:top-[516px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <div className="w-[652px] h-[0.5px] bg-[#00000080] my-[24px] max-hamburger:w-full"></div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option A
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option B{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option C
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option D{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div>
                <p className="text-[14px] leading-[16.8px] mb-[10px]">
                  Correct Option{" "}
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[131px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                />
              </div>
              <p className="text-[14px] leading-[15.4px]">Question hint</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[1190px] mt-2">
                {characterCount}/100
              </div>
            </div>
            <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Question 7
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Question type
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">Question</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[236px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={500}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[551.72px] max-md:top-[651px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/500
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question hint
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[703.72px] max-md:top-[805px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Expected answer
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[955px] mt-2">
                {characterCount}/100
              </div>
            </div>
            <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Question 8
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Question type
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">Question</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[416.72px] max-md:top-[516px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <div className="w-[652px] h-[0.5px] bg-[#00000080] my-[24px] max-hamburger:w-full"></div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option A
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option B{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option C
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option D{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div>
                <p className="text-[14px] leading-[16.8px] mb-[10px]">
                  Correct Option{" "}
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[131px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                />
              </div>
              <p className="text-[14px] leading-[15.4px]">Question hint</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[1190px] mt-2">
                {characterCount}/100
              </div>
            </div>
            <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Question 9
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Question type
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">Question</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[236px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={500}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[551.72px] max-md:top-[651px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/500
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question hint
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[703.72px] max-md:top-[805px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Expected answer
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[955px] mt-2">
                {characterCount}/100
              </div>
            </div>
            <div className="relative pl-[31.48px] pr-[34px] max-sm:px-[20px] py-[37.5px] bg-white rounded-[9px] mb-[11px]">
              <div className="flex items-center justify-between mb-[27.09px]">
                <h1 className="text-[16px] leading-[20.8px] font-bold">
                  Question 10
                </h1>
                <div className="flex gap-[8px] items-center">
                  <Image
                    src="/delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px] leading-[16.8px] text-[#EA3535]">
                    Remove lesson
                  </p>
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Question type
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[201px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Maximum points{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[109px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">Question</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[266.72px] max-md:top-[366px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <p className="text-[14px] leading-[15.4px] mt-[18px]">
                Question description
              </p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-sm:right-[35px] max-hamburger:right-[50px] max-hamburger:left-auto leading-[16.8px] top-[416.72px] max-md:top-[516px] left-[630.7px] text-[12px] leading-[14.4px] mt-2">
                {characterCount}/100
              </div>
              <div className="w-[652px] h-[0.5px] bg-[#00000080] my-[24px] max-hamburger:w-full"></div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option A
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option B{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="max-hamburger:w-[100%] max-md:flex-col flex gap-[33px]">
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option C
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">
                    Option D{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div>
                <p className="text-[14px] leading-[16.8px] mb-[10px]">
                  Correct Option{" "}
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[131px] mb-[18px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                />
              </div>
              <p className="text-[14px] leading-[15.4px]">Question hint</p>
              <textarea
                name=""
                placeholder=""
                className="w-[652px] max-hamburger:w-full text-black placeholder:text-black h-[101px] relative resize-none border-[0.5px] rounded-[6px] border-black mt-[10px] pl-[13.78px] pt-[15.39px] pr-[16.25px] placeholder:text-[14px]"
                id=""
                maxLength={100}
                onChange={handleChangeText}
              ></textarea>
              <div className="text-black absolute max-hamburger:right-[50px] max-hamburger:left-auto max-sm:right-[35px] leading-[16.8px] top-[853.72px] left-[630.7px] text-[12px] leading-[14.4px] max-md:top-[1190px] mt-2">
                {characterCount}/100
              </div>
            </div>
            <button className="w-[110px] h-[37px] py-[5px] bg-black text-white rounded-[6px] text-[16px] mt-[2px] leading-[19.2px]">
              Add Module{" "}
            </button>
          </>
        )}
        {active === "Trainers" && (
          <>
            <div className="h-[169px] pl-[22px] pt-[27.12px] bg-white rounded-[8px]">
              <h1 className="text-[20px] leading-[26px] font-bold mb-[18px]">
                Trainer onboarding
              </h1>
              <p className="text-[14px] leading-[16.8px] opacity-80 w-[300px] mr-[50px]">
                Onboarding link
              </p>
              <div className="flex mt-[8px] gap-[14px]">
                <input
                  type="search"
                  name=""
                  className="w-[407px] max-sm:w-full h-[45px] rounded-[6px] border-[##0000004D] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                  placeholder=""
                  id=""
                />
                <button className="h-[45px] w-[95px] max-smallphone:w-full bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]">
                  Copy Link
                </button>
              </div>
            </div>
            <div className="my-[14px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center gap-[27.5px]">
              <input
                type="search"
                name=""
                className="w-[483px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search trainer name"
                id=""
              />
              <Image
                src="/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:top-[83px] max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[27px] absolute left-[465.88px]"
                width={24}
                height={24}
              />
            </div>
            <div className="h-[533px] pb-[20px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[200px] mr-[85px]">
                  Trainer name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[250px] mr-[47px]">
                  Course
                </p>
                <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                  UIN
                </span>
                <p className="text-[14px] leading-[16.8px] opacity-70">
                  | Contact Number &nbsp; | Email
                </p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[200px] mr-[85px]">
                    Bibendum turpis morbi
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[290px] mr-[7px]">
                    No-code, Low-code Development
                  </p>
                  <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                    TFSD5202432
                  </span>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | +91 89023 09234 | viosut@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => setactive("view trianer details")}
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
                  <p className="text-[16px] leading-[19.2px] w-[200px] mr-[85px]">
                    Bibendum turpis morbi
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[290px] mr-[7px]">
                    No-code, Low-code Development
                  </p>
                  <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                    TFSD5202432
                  </span>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | +91 89023 09234 | viosut@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => setactive("view trianer details")}
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
                  <p className="text-[16px] leading-[19.2px] w-[200px] mr-[85px]">
                    Bibendum turpis morbi
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[290px] mr-[7px]">
                    No-code, Low-code Development
                  </p>
                  <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                    TFSD5202432
                  </span>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | +91 89023 09234 | viosut@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => setactive("view trianer details")}
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
                  <p className="text-[16px] leading-[19.2px] w-[200px] mr-[85px]">
                    Bibendum turpis morbi
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[290px] mr-[7px]">
                    No-code, Low-code Development
                  </p>
                  <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                    TFSD5202432
                  </span>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | +91 89023 09234 | viosut@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => setactive("view trianer details")}
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
                  <p className="text-[16px] leading-[19.2px] w-[200px] mr-[85px]">
                    Bibendum turpis morbi
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[290px] mr-[7px]">
                    No-code, Low-code Development
                  </p>
                  <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                    TFSD5202432
                  </span>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | +91 89023 09234 | viosut@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => setactive("view trianer details")}
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
                  <p className="text-[16px] leading-[19.2px] w-[200px] mr-[85px]">
                    Bibendum turpis morbi
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[290px] mr-[7px]">
                    No-code, Low-code Development
                  </p>
                  <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                    TFSD5202432
                  </span>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | +91 89023 09234 | viosut@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => setactive("view trianer details")}
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
                  <p className="text-[16px] leading-[19.2px] w-[200px] mr-[85px]">
                    Bibendum turpis morbi
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[290px] mr-[7px]">
                    No-code, Low-code Development
                  </p>
                  <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                    TFSD5202432
                  </span>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | +91 89023 09234 | viosut@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => setactive("view trianer details")}
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
                  <p className="text-[16px] leading-[19.2px] w-[200px] mr-[85px]">
                    Bibendum turpis morbi
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[290px] mr-[7px]">
                    No-code, Low-code Development
                  </p>
                  <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                    TFSD5202432
                  </span>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | +91 89023 09234 | viosut@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => setactive("view trianer details")}
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
                  <p className="text-[16px] leading-[19.2px] w-[200px] mr-[85px]">
                    Bibendum turpis morbi
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[290px] mr-[7px]">
                    No-code, Low-code Development
                  </p>
                  <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                    TFSD5202432
                  </span>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | +91 89023 09234 | viosut@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => setactive("view trianer details")}
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
                  <p className="text-[16px] leading-[19.2px] w-[200px] mr-[85px]">
                    Bibendum turpis morbi
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[290px] mr-[7px]">
                    No-code, Low-code Development
                  </p>
                  <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                    TFSD5202432
                  </span>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | +91 89023 09234 | viosut@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => setactive("view trianer details")}
                  className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Details{" "}
                </button>
              </div>
            </div>
            <div className="flex gap-[16px] max-smallerphone:gap-[8px] max-lg:relative max-lg:top-0 max-lg:mt-[30px] max-lg:left-[23px] max-sm:left-[15px] absolute right-[60px] bottom-[31px]">
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
          </>
        )}
        {active === "view trianer details" && (
          <>
            <div className="mb-[21.5px] flex items-center mt-[12px]">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("Trainers")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="h-auto pb-[36.88px] w-full bg-white rounded-[8px] pt-[36px] px-[31.48px]">
              <div className="w-[210px] h-[196px] border-[1px] rounded-[14px] border-[#D8D8D8] flex items-center justify-center mb-[32px]">
                <Image src="/profile.png" width={147.1} height={147.1} />
              </div>
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Trainer information
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
                    UIN
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
                    Course
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
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] pb-[32px] border-b-[0.5px] border-[#00000033]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">DOB</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    GitHub profile
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
                    LinkedIn profile
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                Account information
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Email
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
                    Phone number
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
                    Password
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
                Address
              </h1>
              <div className="pb-[24px] mt-[24px] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    State
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[154px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    City
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[154px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Postal ZIP code
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[235px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="pb-[32px] border-b-[0.5px] border-[#00000033] max-hamburger:items-start max-hamburger:flex-col gap-[24px]">
                <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                  Enter house address
                </p>
                <textarea
                  className="w-[593px] h-[119px] pt-[11.5px] pl-[12.74px] border-[0.5px] border-[#00000080] rounded-[4px] resize-none"
                  name=""
                  id=""
                ></textarea>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                KYC information
              </h1>
              <div className="flex pr-[100px] flex-wrap gap-[24px] max-sm:flex-col max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    PAN number
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
                    PAN card photo
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
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Aadhaar number
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
                    Aadhaar card photo
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
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    10th Marks card photo
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
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Experience letter
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
            </div>
          </>
        )}
      </main>
      {remark && (
        <div className="fixed top-0 bg-[#00000066] w-full h-[110vh] z-50 flex justify-center items-center">
          <div className="w-[336px] h-[214px] bg-white relative rounded-[6px] pt-[37.12px] pb-[23px] pl-[31px]">
            <h1 className="text-[20px] capitalize leading-[26px] font-semibold mb-[13.81px]">
              Delete this live session?
            </h1>
            <p className="text-[#EA3535] text-[14px] leaidng-[16.8px]">
              This action cannot be undone
            </p>
            <button
              onClick={() => setRemark(false)}
              className="bg-[#EA3535] text-white px-[15px] py-[10px] rounded-[4px] text-[14px] leading-[16.8px]"
            >
              Delete Session
            </button>
            <button
              onClick={() => setRemark(false)}
              className="bg-[white] text-black border-[1px] border-black ml-[20px] px-[40.7px] mt-[48.06px] py-[10px] rounded-[4px] text-[14px] leading-[16.8px]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
