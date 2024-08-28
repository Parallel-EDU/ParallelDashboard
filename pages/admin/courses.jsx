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
                <div className="relative max-hamburger:px-[18px] pl-[31.48px] pr-[34px] pt-[37.5px] mt-[28px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
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
                <div className="relative pl-[31.48px] max-hamburger:px-[18px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
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
                <div className="relative pl-[31.48px] max-hamburger:px-[18px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
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
                <div className="relative pl-[31.48px] max-hamburger:px-[18px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
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
                <div className="relative pl-[31.48px] max-hamburger:px-[18px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
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
                onClick={() => setactive("")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="w-full bg-white max-hamburger:px-[18px] max-md:py-[17px] max-md:h-auto max-hamburger:w-full relative pl-[31.48px] pb-[47.5px] pt-[34.5px] rounded-[14px] border-[1px] border-[#D8D8D8]">
              <h1 className="text-[16px] leading-[20.8px] font-bold mb-[27.09px]">
                Course information
              </h1>
              <div className="max-hamburger:w-[100%] max-xl:flex-wrap max-xl:pr-[20px] max-sm:pr-0 max-md:flex-col flex gap-[33px]">
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
            <div className="relative pl-[31.48px] max-hamburger:px-[18px] pr-[34px] pt-[37.5px] mt-[28px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
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
            <div className="relative pl-[31.48px] max-hamburger:px-[18px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
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
            <div className="relative pl-[31.48px]  max-hamburger:px-[18px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
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
            <div className="relative pl-[31.48px]  max-hamburger:px-[18px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
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
            <div className="relative pl-[31.48px] max-hamburger:px-[18px] pr-[34px] pt-[37.5px] pb-[38px] bg-white rounded-[9px] mb-[11px]">
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
      </main>
    </>
  );
}
