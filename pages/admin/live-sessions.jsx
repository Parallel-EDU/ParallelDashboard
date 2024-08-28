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
              <div className="flex gap-[39px] max-lg:flex-wrap max-lg:pr-[10px] max-hamburger:pr-0 max-hamburger:gap-[25px] mt-[25px]">
                <div className=" max-hamburger:w-[100%]">
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
              <div className=" w-full overflow-scroll bg-white rounded-[8px]">
                <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1260px] border-[#00000033]">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                    Slno.
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[160px] mr-[7px]">
                    Session type
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[300px] mr-[50px] max-[1440px]:w-[200px]">
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
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1440px]:w-[200px]">
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
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1440px]:w-[200px]">
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
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1440px]:w-[200px]">
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
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1440px]:w-[200px]">
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
                    <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1440px]:w-[200px]">
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
                    <p className="text-[14px] leading-[16.8px] w-[300px] mr-[50px] max-[1440px]:w-[200px]">
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
            <section className="mt-[16px] max-sm:px-[20px] max-md:pr-[20px] max-xl:h-auto max-hamburger:px-[25px] max-xl:pb-[40px] max-hamburger:pr-[40px] max-xl:w-full bg-white rounded-[5px] w-full h-[351px] pt-[29.77px] pl-[38px]">
              <h1 className="capitalize text-[20px] leading-[26px] font-semibold mb-[25.88px]">
                WhatsApp Doubt Clearing Link
              </h1>
              <div className="flex w-[494px] max-sm:w-full flex-col relative">
                <p className="text-black text-[13px] bg-white mb-[13px] p-[8px] leading-[15.6px]">
                  Select Course
                </p>
                <div className="flex gap-[20px] max-sm:flex-wrap max-sm:w-full w-[494px]">
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
              <div className="flex max-xl:flex-wrap mt-[27px] gap-[18px]">
                <div className=" max-hamburger:w-[100%]">
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
            {remark && (
              <div className="fixed top-0 bg-[#00000066] w-[calc(100%+120px)] left-[-60px] h-[110vh] z-50 flex justify-center items-center">
                <div className="w-[336px] max-[400px]:w-[70%] h-[214px] bg-white relative rounded-[6px] max-sm:px-[20px] pt-[37.12px] pb-[23px] pl-[31px]">
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
                    className="bg-[white] text-black border-[1px] border-black ml-[20px] max-[400px]:ml-[10px] px-[40.7px] mt-[48.06px] py-[10px] rounded-[4px] text-[14px] leading-[16.8px]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}
