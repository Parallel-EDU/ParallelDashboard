import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "../../styles/style.module.css";
import TrainerNavbar from "../../components/trainerbar";

export default function Jobs() {
  const [active, setactive] = useState("schedule");
  const [addmodule, setaddmodule] = useState(false);
  const [addassessment, setaddassessment] = useState(false);
  const [viewprofile, setviewprofile] = useState(false);
  const [count, setcount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [sessionTime, setsessionTime] = useState(false);
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
  const handleChangeTextArea = (e) => {
    setcount(e.target.value.length);
  };
  return (
    <>
      <TrainerNavbar />

      <main className="relative px-[59.5px] pb-[78px] pt-[0] max-md:px-[40px] max-sm:px-[20px]">
        {active === "schedule" && (
          <>
            <div className="mb-[13px] bg-white pl-[19.08px] max-md:flex-col max-md:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[34px] max-sm:gap-[8px] items-center">
              <input
                type="search"
                name=""
                className="w-[483px] max-lg:w-[350px] max-md:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search student name, instructor, batch ID"
                id=""
              />
              <Image
                src="/search.svg"
                className="cursor-pointer max-lg:left-[330px] max-md:right-[24px] max-md:left-auto max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[28px] absolute left-[467.88px]"
                width={24}
                height={24}
              />
              <div className="w-[244px] px-[14.28px] max-md:w-full  border-[1px] border-[#0000004D] rounded-[8px]">
                <select className="h-[48px] w-full">
                  <option value="Select course" className="py-[18.5px]">
                    Select course
                  </option>
                  <option value="Select course" className="w-[244px] h-[48px]">
                    Select course
                  </option>
                </select>
              </div>
            </div>
            <div className="pb-[75px] max-xl:overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px] max-[1350px]:w-[200px]">
                  Batch ID
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[30px]">
                  Course
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                  No of students
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[80px]">
                  | Start date{" "}
                </p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("Add next week Schedule")}
                  className="w-[210px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Add next week Schedule{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    02
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("Add next week Schedule")}
                  className="w-[210px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Add next week Schedule{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    03
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("Add next week Schedule")}
                  className="w-[210px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Add next week Schedule{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    04
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("Add next week Schedule")}
                  className="w-[210px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Add next week Schedule{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    05
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("Add next week Schedule")}
                  className="w-[210px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Add next week Schedule{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    06
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("Add next week Schedule")}
                  className="w-[210px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Add next week Schedule{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    07
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("Add next week Schedule")}
                  className="w-[210px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Add next week Schedule{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    08
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("Add next week Schedule")}
                  className="w-[210px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Add next week Schedule{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    09
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("Add next week Schedule")}
                  className="w-[210px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Add next week Schedule{" "}
                </button>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    10
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    BFSD053AK{" "}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                    FSD{" "}
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                    20
                  </p>
                  <p className="text-[14px] leading-[16.8px] opacity-70">
                    | 20/02/2024
                  </p>
                </div>
                <button
                  onClick={() => setactive("Add next week Schedule")}
                  className="w-[210px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  Add next week Schedule{" "}
                </button>
              </div>
            </div>
          </>
        )}
        {active === "Add next week Schedule" && (
          <div className="w-full pt-[16.08px] max-[1400px]:px-[59px] max-md:px-[40px] max-sm:px-[20px] pl-[59px] pb-[47px] bg-white rounded-[8px]">
            <div className="py-[24px] w-[1127px] max-[1400px]:w-full border-b-[1px] border-[#00000033]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Monday
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[28px] mb-[16px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session type{" "}
                  </p>
                  <div className="w-[204px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      type="text"
                      name=""
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] text-[14px] bg-[white]"
                    >
                      <option value="">Select session type</option>
                    </select>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Session name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session start time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="">PM</option>
                        <option value="">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session end time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="">PM</option>
                        <option value="">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-[112px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]">
                Add Session{" "}
              </button>
            </div>
            <div className="py-[24px] w-[1127px] border-b-[1px] border-[#00000033] max-[1400px]:w-full">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Tuesday
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[28px] mb-[16px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session type{" "}
                  </p>
                  <div className="w-[204px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      type="text"
                      name=""
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] text-[14px] bg-[white]"
                    >
                      <option value="">Select session type</option>
                    </select>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Session name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session start time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="">PM</option>
                        <option value="">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session end time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="">PM</option>
                        <option value="">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-[112px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]">
                Add Session{" "}
              </button>
            </div>
            <div className="py-[24px] w-[1127px] border-b-[1px] border-[#00000033] max-[1400px]:w-full">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Wednesday
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[28px] mb-[16px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session type{" "}
                  </p>
                  <div className="w-[204px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      type="text"
                      name=""
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] text-[14px] bg-[white]"
                    >
                      <option value="">Select session type</option>
                    </select>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Session name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session start time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="">PM</option>
                        <option value="">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session end time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="">PM</option>
                        <option value="">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-[112px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]">
                Add Session{" "}
              </button>
            </div>
            <div className="py-[24px] w-[1127px] border-b-[1px] border-[#00000033] max-[1400px]:w-full">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Thursday
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[28px] mb-[16px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session type{" "}
                  </p>
                  <div className="w-[204px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      type="text"
                      name=""
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] text-[14px] bg-[white]"
                    >
                      <option value="">Select session type</option>
                    </select>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Session name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session start time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="">PM</option>
                        <option value="">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session end time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="">PM</option>
                        <option value="">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-[112px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]">
                Add Session{" "}
              </button>
            </div>
            <div className="py-[24px] w-[1127px] border-b-[1px] border-[#00000033] max-[1400px]:w-full">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Friday
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[28px] mb-[16px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session type{" "}
                  </p>
                  <div className="w-[204px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      type="text"
                      name=""
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] text-[14px] bg-[white]"
                    >
                      <option value="">Select session type</option>
                    </select>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Session name
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session start time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="">PM</option>
                        <option value="">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session end time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="">PM</option>
                        <option value="">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-[112px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]">
                Add Session{" "}
              </button>
            </div>

            <button
              onClick={() => setactive("generate schedule")}
              className="w-[157px] mt-[51px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]"
            >
              Generate Schedule
            </button>
          </div>
        )}
        {active === "generate schedule" && (
          <div className="w-full pt-[49.08px] max-md:pl-[40px] max-sm:pl-[20px] pl-[59px] pb-[47px] bg-white rounded-[8px]">
            <h1 className="text-[20px] mb-[29.16px] leading-[26px] font-semibold">
              BFSD053AK Week 05 Schedule
            </h1>
            <div className="pb-[75px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]">
                  Day
                </p>
                <p className="text-[14px] leading-[16.8px] w-[160px] mr-[7px]">
                  Session type
                </p>
                <p className="text-[14px] leading-[16.8px] w-[300px] mr-[50px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                  Session name
                </p>
                <p className="text-[14px] leading-[16.8px] w-[150px] mr-[27px]">
                  Session start time
                </p>
                <p className="text-[14px] leading-[16.8px]">Session end time</p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]">
                    Monday
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                    08 : 00 PM
                  </p>
                  <p className="text-[16px] leading-[19.2px]">08 : 00 PM</p>
                </div>
                <div className="flex gap-[28px] items-center">
                  <button
                    onClick={() => setactive("Add next week Schedule")}
                    className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Update
                  </button>
                  <Image
                    src="../../delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]"></p>
                  <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                    08 : 00 PM
                  </p>
                  <p className="text-[16px] leading-[19.2px]">08 : 00 PM</p>
                </div>
                <div className="flex gap-[28px] items-center">
                  <button
                    onClick={() => setactive("Add next week Schedule")}
                    className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Update
                  </button>
                  <Image
                    src="../../delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]">
                    Tuesday
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                    08 : 00 PM
                  </p>
                  <p className="text-[16px] leading-[19.2px]">08 : 00 PM</p>
                </div>
                <div className="flex gap-[28px] items-center">
                  <button
                    onClick={() => setactive("Add next week Schedule")}
                    className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Update
                  </button>
                  <Image
                    src="../../delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]">
                    Wednesday
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                    08 : 00 PM
                  </p>
                  <p className="text-[16px] leading-[19.2px]">08 : 00 PM</p>
                </div>
                <div className="flex gap-[28px] items-center">
                  <button
                    onClick={() => setactive("Add next week Schedule")}
                    className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Update
                  </button>
                  <Image
                    src="../../delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]">
                    Thursday
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                    08 : 00 PM
                  </p>
                  <p className="text-[16px] leading-[19.2px]">08 : 00 PM</p>
                </div>
                <div className="flex gap-[28px] items-center">
                  <button
                    onClick={() => setactive("Add next week Schedule")}
                    className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Update
                  </button>
                  <Image
                    src="../../delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]">
                    Friday
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                    08 : 00 PM
                  </p>
                  <p className="text-[16px] leading-[19.2px]">08 : 00 PM</p>
                </div>
                <div className="flex gap-[28px] items-center">
                  <button
                    onClick={() => setactive("Add next week Schedule")}
                    className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Update
                  </button>
                  <Image
                    src="../../delete.svg"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[17px] max-sm:pr-[20px] max-[400px]:flex-col">
              <button
                onClick={() => setactive("done")}
                className="w-[130px] mt-[51px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]"
              >
                Send Schedule
              </button>
              <button
                onClick={() => setactive("Add next week Schedule")}
                className="w-[121px] mt-[51px] max-[400px]:mt-0 h-[37px] max-sm:w-full text-black border-[1px] border-black bg-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
              >
                Edit Schedule
              </button>
            </div>
          </div>
        )}
        {active === "done" && (
          <div className="w-full flex justify-center pt-[55px] h-[630px] max-sm:px-[20px] max-[360px]:px-[10px] pb-[47px] bg-white rounded-[8px]">
            <div className="w-[483px] h-[419px] border-[1px] max-sm:px-[20px] border-[#00000033] rounded-[6px] max-[360px]:px-[10px] pt-[30px] flex flex-col items-center">
              <Image src="/done.svg" width={193.08} height={193.08} />
              <h1 className="text-[20px] leading-[26px] mt-[36.92px] font-semibold">
                Schedule Sent to Batch BFSD053AK
              </h1>
              <button
                onClick={() => setactive("schedule")}
                className="w-[247px] capitalize mt-[44px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]"
              >
                Send schedule to another batch
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
