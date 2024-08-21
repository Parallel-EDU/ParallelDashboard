import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "../../styles/style.module.css";
import TrainerNavbar from "../../components/trainerbar";

export default function Jobs() {
  const [active, setactive] = useState("progress");
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
        {active === "progress" && (
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
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
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
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
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
                  onClick={() => setactive("View Progress")}
                  className="w-[126px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Progress{" "}
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
                  onClick={() => setactive("View Progress")}
                  className="w-[126px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Progress{" "}
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
                  onClick={() => setactive("View Progress")}
                  className="w-[126px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Progress{" "}
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
                  onClick={() => setactive("View Progress")}
                  className="w-[126px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Progress{" "}
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
                  onClick={() => setactive("View Progress")}
                  className="w-[126px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Progress{" "}
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
                  onClick={() => setactive("View Progress")}
                  className="w-[126px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Progress{" "}
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
                  onClick={() => setactive("View Progress")}
                  className="w-[126px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Progress{" "}
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
                  onClick={() => setactive("View Progress")}
                  className="w-[126px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Progress{" "}
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
                  onClick={() => setactive("View Progress")}
                  className="w-[126px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Progress{" "}
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
                  onClick={() => setactive("View Progress")}
                  className="w-[126px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                >
                  View Progress{" "}
                </button>
              </div>
            </div>
          </>
        )}
        {active === "View Progress" && (
          <main>
            <div className="mb-[21.5px] flex items-center mt-[12px]">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("progress")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <section className="mt-[24.62px] rounded-[6px] bg-white">
              <div className="">
                <div className="pt-[33px] max-md:px-[20px] max-sm:px-[15px] pl-[25px] pr-[73px]">
                  <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                    Module 01
                  </p>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>
                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                </div>
                <div className="pt-[33px] pl-[25px] pr-[41.64px]">
                  <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                    Module 02
                  </p>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                </div>
                <div className="pt-[33px] pl-[25px] pr-[41.64px]">
                  <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                    Module 03
                  </p>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                </div>
                <div className="pt-[33px] pl-[25px] pr-[41.64px]">
                  <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                    Module 04
                  </p>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                  <div className="py-[24px] max-smallerphone:gap-[16px] border-b-[1px] flex gap-[24px]">
                    <Image
                      src="/Frame 18.svg"
                      className="w-[28.64px] h-[28.64px]"
                      width={28.6}
                      height={28.64}
                    />
                    <div className="flex justify-between w-full gap-[12px] max-sm:w-full max-md:flex-col">
                      <div>
                        <div className="flex gap-[20px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] leading-[26px] w-[514px] max-smallphone:text-base max-sm:w-[80%] max-[500px]:w-full max-[500px]:whitespace-normal max-xl:truncate">
                            Justo est urna pellentesque c...
                          </h1>
                        </div>

                        <p className="w-[840px] max-md:hidden mt-[6.8px] max-[1100px]:w-full">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                      </div>
                      <p className="w-[840px] mt-[6.8px] max-[1100px]:w-full hidden max-md:block ml-[-50px] max-sm:w-[calc(100%+40px)]">
                          Et mauris rutrum phasellus pellentesque. Nisl pulvinar
                          adipiscing vitae sed sed sapien neque morbi. Diam
                          scelerisque et aenean ac nunc cras. Integer gravida
                          lobortis sollicitudin dui. Dignissim volutpat felis
                          diam potenti. Mauris amet pharetra nisl nunc commodo
                          ultrices nisl nullam aliquam. In tempor volutpat
                          suspendisse massa a feugiat. Cras sed blandit dolor eu
                          tempus in in. Arcu lacus vulputate turpis interdum sem
                          maecenas dui feugiat. Amet neque lorem metus ac quis
                          vel elit.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        )}{" "}
      </main>
    </>
  );
}
