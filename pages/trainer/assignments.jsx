import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "../../styles/style.module.css";
import TrainerNavbar from "../../components/trainerbar";

export default function Jobs() {
  const [active, setactive] = useState("Assignments");
  const [remark, setRemark] = useState(false);
  const [assignment, setAssignment] = useState(false);
  const [addmodule, setaddmodule] = useState(false);
  const [addassessment, setaddassessment] = useState(false);
  const [viewprofile, setviewprofile] = useState(false);
  const [count, setcount] = useState(0);
  const [remarkcount, setremarkcount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [sessionTime, setsessionTime] = useState(false);
  const [item, setItem] = useState("Select session type");
  const [inputValue, setInputValue] = useState("");
  const [SessionTimeValue, setSessionTimeValue] = useState("PM");
  const characterCount = inputValue.length;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [Date, setDate] = useState('Select date');

  const stars = [1, 2, 3, 4, 5];
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
  const handleChangeTextAreaRemark = (e) => {
    setremarkcount(e.target.value.length);
  };
  const handleChangeTextArea = (e) => {
    setcount(e.target.value.length);
  };
  return (
    <>
      <TrainerNavbar />
      <main className="relative px-[59.5px] pb-[78px] pt-[0] max-md:px-[40px] max-sm:px-[20px]">
        {active === "Assignments" && (
          <>
            <div className="h-[611px] pb-[36.88px] w-full bg-white rounded-[8px] pt-[37.12px] px-[31px] max-sm:px-[20px] max-md:py-[30px] pr-[36px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Assignments
              </h1>
              <div className="flex max-sm:flex-wrap gap-[26px] mt-[31.87px]">
                <div
                  onClick={() => setactive("Give Assignment")}
                  className="flex items-center justify-center rounded-[10px] border-[#00000033] cursor-pointer border-[1px] h-[202px] w-[50%] max-md:w-full"
                >
                  <h1 className="text-[20px] leading-[26px]">
                    Give Assignment
                  </h1>
                </div>
                <div
                  onClick={() => setactive("Grade Assignment")}
                  className="flex items-center justify-center rounded-[10px] border-[#00000033] cursor-pointer border-[1px] h-[202px] w-[50%] max-md:w-full"
                >
                  <h1 className="text-[20px] leading-[26px]">
                    Grade Assignment
                  </h1>
                </div>
              </div>
            </div>
          </>
        )}
        {active === "Grade Assignment" && (
          <>
            <div className="mb-[40px] flex items-center mt-[12px]">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("Assignments")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <>
              <h1 className="text-[20px] leading-[26px] font-semibold mb-[13px]">
                Select Batch
              </h1>
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
                    <option
                      value="Select course"
                      className="w-[244px] h-[48px]"
                    >
                      Select course
                    </option>
                  </select>
                </div>
              </div>
              <div className="pb-[75px] max-xl:overflow-scroll w-full bg-white rounded-[8px]">
                <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1149px] border-[#00000033]">
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
                  <p className="text-[14px] leading-[16.8px] opacity-70 w-[120px]">
                    | Current progress
                  </p>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
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
                      Week 04
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("View Submissions")}
                    className="w-[155px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Submissions{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
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
                      Week 04
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("View Submissions")}
                    className="w-[155px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Submissions{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
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
                      Week 04
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("View Submissions")}
                    className="w-[155px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Submissions{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
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
                      Week 04
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("View Submissions")}
                    className="w-[155px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Submissions{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
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
                      Week 04
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("View Submissions")}
                    className="w-[155px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Submissions{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
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
                      Week 04
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("View Submissions")}
                    className="w-[155px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Submissions{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
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
                      Week 04
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("View Submissions")}
                    className="w-[155px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Submissions{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
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
                      Week 04
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("View Submissions")}
                    className="w-[155px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Submissions{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
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
                      Week 04
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("View Submissions")}
                    className="w-[155px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Submissions{" "}
                  </button>
                </div>
                <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
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
                      Week 04
                    </p>
                  </div>
                  <button
                    onClick={() => setactive("View Submissions")}
                    className="w-[155px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                  >
                    View Submissions{" "}
                  </button>
                </div>
              </div>
            </>
          </>
        )}
        {active === "Give Assignment" && (
          <>
            <div className="mb-[21.5px] flex items-center mt-[12px]">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("Assignments")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="h-auto pb-[36.88px] max-sm:px-[20px] w-full bg-white rounded-[8px] pt-[37.12px] px-[31.48px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Give Assignment
              </h1>
              <div className="flex flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[32.88px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Select course
                  </p>
                  <div className="flex max-sm:flex-wrap max-sm:w-[100%] gap-[20px] w-[494px]">
                    <div className="flex items-center gap-[6.5px]">
                      <input type="radio" name="course" id="course" />
                      <label
                        htmlFor="course"
                        className="text-[14px] leading-[16.8px]"
                      >
                        Full Stack Development
                      </label>
                    </div>
                    <div className="flex items-center gap-[6.5px]">
                      <input type="radio" name="course" id="course" />
                      <label
                        htmlFor="course"
                        className="text-[14px] leading-[16.8px]"
                      >
                        Backend Mastery
                      </label>
                    </div>
                    <div className="flex items-center gap-[6.5px]">
                      <input type="radio" name="course" id="course" />
                      <label
                        htmlFor="course"
                        className="text-[14px] h-[20px] leading-[16.8px]"
                      >
                        Frontend Mastery{" "}
                      </label>
                    </div>
                  </div>
                  <p className="text-[14px] mt-[16px] leading-[18.2px] mb-[10px]">
                    Select batch
                  </p>
                  <div className="w-[279px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      type="text"
                      name=""
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[45px] bg-[white]"
                    >
                      <option value="">Batch Code</option>
                    </select>
                  </div>
                  <div className="flex max-sm:flex-col mt-[16px] gap-[16px]">
                    <div>
                      <p className="text-[14px] leading-[18.2px] mb-[10px]">
                        Enter heading
                      </p>
                      <input
                        type="text"
                        name=""
                        placeholder="Enter heading"
                        id=""
                        className="w-[288px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[18.2px] mb-[10px]">
                        Topic name
                      </p>
                      <input
                        type="text"
                        name=""
                        placeholder="Topic name"
                        id=""
                        className="w-[288px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <p className="mt-[16px] text-[14px] leading-[18.2px] mb-[10px]">
                    Enter message
                  </p>
                  <div className="relative max-hamburger:w-[100%] w-[639px]">
                    <textarea
                      placeholder="Enter message"
                      onChange={handleChangeTextArea}
                      maxLength={250}
                      className="w-[639px] h-[138px] rounded-[4px] resize-none border-[0.5px] py-[11.5px] px-[12.74px] max-hamburger:w-[100%] border-[#00000080]"
                      name=""
                      id=""
                    ></textarea>
                    <p className="text-[12px] text-[#2C2E32] absolute bottom-[18px] right-[18px]">
                      {count} / 250px
                    </p>
                  </div>
                  <p className="text-[14px] mt-[16px] leading-[18.2px] mb-[10px]">
                    Send link (optional)
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                  <button
                    onClick={() => setactive("done")}
                    className="text-[14px] max-sm:w-full block leading-[16.8px] text-white bg-black px-[15px] rounded-[4px] mt-[36px] py-[10px]"
                  >
                    Send Assignment
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {active === "done" && (
          <div className="w-full flex justify-center pt-[55px] max-sm:px-[20px] max-[400px]:px-[10px] h-[630px] pb-[47px] bg-white rounded-[8px]">
            <div className="w-[483px] h-[419px] max-sm:px-[20px] max-sm:w-full max-[400px]:px-[10px] border-[1px] border-[#00000033] rounded-[6px] pt-[30px] flex flex-col items-center">
              <Image src="/done.svg" width={193.08} height={193.08} />
              <h1 className="text-[20px] leading-[26px] mt-[36.92px] font-semibold">
                Assignment Sent to Batch BFSD053AK
              </h1>
              <button
                onClick={() => setactive("Assignments")}
                className="w-[247px] capitalize mt-[44px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]"
              >
                Give Assignment to another batch
              </button>
            </div>
          </div>
        )}
        {active === "View Submissions" && (
          <>
            <div className="mb-[40px] flex items-center mt-[12px]">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("Grade Assignment")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="mt-[54.99px]">
              <div className="pt-[14px] max-sm:px-[15px] max-md:flex-col max-md:items-start h-[77px] max-lg:h-auto pb-[15px] pl-[21px] pr-[31px] rounded-[8px] flex justify-between items-center bg-white">
                <div className="flex max-xl:gap-[25px] max-lg:flex-col max-lg:gap-[12px] max-lg:items-start gap-[56.04px] items-center">
                  <h1 className="font-semibold text-[20px] leading-[26px]">
                    Viewing Recent Assignments
                  </h1>
                  <div className="p-0 relative h-[77px] rounded-[8px] flex justify-between max-sm:h-auto max-sm:items-start gap-[12px] max-sm:flex-col items-center bg-white">
                    <label
                      htmlFor="calender"
                      className="h-[48px] flex items-center relative justify-between border-[#0000004D] border-[1px] py-[12px] px-[14.28px] w-[244px] rounded-[6px]"
                    >
                      <input
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        name="calender"
                        className="h-[48px] pl right-0 absolute pl-[80px] opacity-0 flex items-center justify-between border-[#0000004D] border-[1px] py-[12px] pr-[14.28px] rounded-[6px]"
                        id="calender"
                      />
                      <p className="text-[14px]">{Date}</p>
                      <Image src="/calender.svg" width={24} height={24} />
                    </label>
                  </div>
                </div>
                <div className="flex max-sm:mt-[12px] items-center gap-[4px]">
                  <input type="checkbox" name="unsubmitted" id="unsubmitted" />
                  <label htmlFor="unsubmitted" className="text-[14px]">
                    Show only unsubmitted assignments
                  </label>
                </div>
              </div>
            </div>
            <div className="h-[609px] pb-[20px] overflow-scroll w-full bg-white mt-[18.5px] rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1149px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[14.9px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[20px] max-[1500px]:w-[200px]">
                  Student name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[271px] mr-[17.26px] max-[1375px]:w-[241px]">
                  Enrolled Course
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[100px] mr-[246px] max-[1350px]:mr-[189.5px]">
                  UIN{" "}
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 border-l-[1px] border-[#00000033] pt-[14.5px] pb-[13.5px] pl-[26.53px]">
                  Grade assignment
                </p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[14.9px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[300px] mr-[20px] max-[1500px]:w-[200px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[271px] mr-[17.26px] max-[1375px]:w-[241px]">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[100px]">
                    FSD05202432
                  </p>
                  <button
                    onClick={() => setAssignment(true)}
                    className="mr-[49.47px] bg-black max-[1350px]:mx-[20px] text-white px-[10px] rounded-[6px] text-base h-[29px] ml-[47.3px]"
                  >
                    View Assignment
                  </button>
                  <div className=" flex items-center gap-[22.09px] border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                    <div className="flex gap-[4.76px]">
                      {stars.map((star) => (
                        <span
                          key={star}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                          onClick={() => setRating(star)}
                          style={{ cursor: "pointer" }}
                        >
                          <Image
                            src={
                              star <= (hover || rating)
                                ? "../yellow.svg"
                                : "../blank.svg"
                            }
                            alt="star"
                            width={24.17}
                            height={24.17}
                          />
                        </span>
                      ))}{" "}
                    </div>
                    <p
                      onClick={() => setRemark(true)}
                      className="text-[14px] leading-[16.8px] font-bold opacity-70 cursor-pointer text-[14px] underline"
                    >
                      View Remarks
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[14.9px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[300px] mr-[20px] max-[1500px]:w-[200px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[271px] mr-[17.26px] max-[1375px]:w-[241px]">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[100px]">
                    FSD05202432
                  </p>
                  <button
                    onClick={() => setAssignment(true)}
                    className="mr-[49.47px] bg-black max-[1350px]:mx-[20px] text-white px-[10px] rounded-[6px] text-base h-[29px] ml-[47.3px]"
                  >
                    View Assignment
                  </button>
                  <div className=" flex items-center gap-[22.09px] border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                    <div className="flex gap-[4.76px]">
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                    </div>
                    <p
                      onClick={() => setRemark(true)}
                      className="text-[14px] leading-[16.8px] font-bold opacity-70 cursor-pointer text-[14px] underline"
                    >
                      View Remarks
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[14.9px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[300px] mr-[20px] max-[1500px]:w-[200px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[271px] mr-[17.26px] max-[1375px]:w-[241px]">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[100px]">
                    FSD05202432
                  </p>
                  <button
                    onClick={() => setAssignment(true)}
                    className="mr-[49.47px] bg-black max-[1350px]:mx-[20px] text-white px-[10px] rounded-[6px] text-base h-[29px] ml-[47.3px]"
                  >
                    View Assignment
                  </button>
                  <div className=" flex items-center gap-[22.09px] border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                    <div className="flex gap-[4.76px]">
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                    </div>
                    <p
                      onClick={() => setRemark(true)}
                      className="text-[14px] leading-[16.8px] font-bold opacity-70 cursor-pointer text-[14px] underline"
                    >
                      View Remarks
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[14.9px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[300px] mr-[20px] max-[1500px]:w-[200px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[271px] mr-[17.26px] max-[1375px]:w-[241px]">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[100px]">
                    FSD05202432
                  </p>
                  <button
                    onClick={() => setAssignment(true)}
                    className="mr-[49.47px] bg-black max-[1350px]:mx-[20px] text-white px-[10px] rounded-[6px] text-base h-[29px] ml-[47.3px]"
                  >
                    View Assignment
                  </button>
                  <div className=" flex items-center gap-[22.09px] border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                    <div className="flex gap-[4.76px]">
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                    </div>
                    <p
                      onClick={() => setRemark(true)}
                      className="text-[14px] leading-[16.8px] font-bold opacity-70 cursor-pointer text-[14px] underline"
                    >
                      View Remarks
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[14.9px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[300px] mr-[20px] max-[1500px]:w-[200px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[271px] mr-[17.26px] max-[1375px]:w-[241px]">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[100px]">
                    FSD05202432
                  </p>
                  <button
                    onClick={() => setAssignment(true)}
                    className="mr-[49.47px] bg-black max-[1350px]:mx-[20px] text-white px-[10px] rounded-[6px] text-base h-[29px] ml-[47.3px]"
                  >
                    View Assignment
                  </button>
                  <div className=" flex items-center gap-[22.09px] border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                    <div className="flex gap-[4.76px]">
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                    </div>
                    <p
                      onClick={() => setRemark(true)}
                      className="text-[14px] leading-[16.8px] font-bold opacity-70 cursor-pointer text-[14px] underline"
                    >
                      View Remarks
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[14.9px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[300px] mr-[20px] max-[1500px]:w-[200px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[271px] mr-[17.26px] max-[1375px]:w-[241px]">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[100px]">
                    FSD05202432
                  </p>
                  <button
                    onClick={() => setAssignment(true)}
                    className="mr-[49.47px] bg-black max-[1350px]:mx-[20px] text-white px-[10px] rounded-[6px] text-base h-[29px] ml-[47.3px]"
                  >
                    View Assignment
                  </button>
                  <div className=" flex items-center gap-[22.09px] border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                    <div className="flex gap-[4.76px]">
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                    </div>
                    <p
                      onClick={() => setRemark(true)}
                      className="text-[14px] leading-[16.8px] font-bold opacity-70 cursor-pointer text-[14px] underline"
                    >
                      View Remarks
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[14.9px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[300px] mr-[20px] max-[1500px]:w-[200px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[271px] mr-[17.26px] max-[1375px]:w-[241px]">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[100px]">
                    FSD05202432
                  </p>
                  <button
                    onClick={() => setAssignment(true)}
                    className="mr-[49.47px] bg-black max-[1350px]:mx-[20px] text-white px-[10px] rounded-[6px] text-base h-[29px] ml-[47.3px]"
                  >
                    View Assignment
                  </button>
                  <div className=" flex items-center gap-[22.09px] border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                    <div className="flex gap-[4.76px]">
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                    </div>
                    <p
                      onClick={() => setRemark(true)}
                      className="text-[14px] leading-[16.8px] font-bold opacity-70 cursor-pointer text-[14px] underline"
                    >
                      View Remarks
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[14.9px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[300px] mr-[20px] max-[1500px]:w-[200px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[271px] mr-[17.26px] max-[1375px]:w-[241px]">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[100px]">
                    FSD05202432
                  </p>
                  <button
                    onClick={() => setAssignment(true)}
                    className="mr-[49.47px] bg-black max-[1350px]:mx-[20px] text-white px-[10px] rounded-[6px] text-base h-[29px] ml-[47.3px]"
                  >
                    View Assignment
                  </button>
                  <div className=" flex items-center gap-[22.09px] border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                    <div className="flex gap-[4.76px]">
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                    </div>
                    <p
                      onClick={() => setRemark(true)}
                      className="text-[14px] leading-[16.8px] font-bold opacity-70 cursor-pointer text-[14px] underline"
                    >
                      View Remarks
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[14.9px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[300px] mr-[20px] max-[1500px]:w-[200px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[271px] mr-[17.26px] max-[1375px]:w-[241px]">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[100px]">
                    FSD05202432
                  </p>
                  <button
                    onClick={() => setAssignment(true)}
                    className="mr-[49.47px] bg-black max-[1350px]:mx-[20px] text-white px-[10px] rounded-[6px] text-base h-[29px] ml-[47.3px]"
                  >
                    View Assignment
                  </button>
                  <div className=" flex items-center gap-[22.09px] border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                    <div className="flex gap-[4.76px]">
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                    </div>
                    <p
                      onClick={() => setRemark(true)}
                      className="text-[14px] leading-[16.8px] font-bold opacity-70 cursor-pointer text-[14px] underline"
                    >
                      View Remarks
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1300px]:pr-[20px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1149px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[14.9px] max-xl:w-[30px]">
                    01
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[300px] mr-[20px] max-[1500px]:w-[200px]">
                    Vitae facilisis
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[271px] mr-[17.26px] max-[1375px]:w-[241px]">
                    Erat mattis curabitur pretium sit
                  </p>
                  <p className="text-[14px] leading-[16.8px] w-[100px]">
                    FSD05202432
                  </p>
                  <button
                    onClick={() => setAssignment(true)}
                    className="mr-[49.47px] bg-black max-[1350px]:mx-[20px] text-white px-[10px] rounded-[6px] text-base h-[29px] ml-[47.3px]"
                  >
                    View Assignment
                  </button>
                  <div className=" flex items-center gap-[22.09px] border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                    <div className="flex gap-[4.76px]">
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                      <Image src="/blank.svg" width={24.17} height={24.17} />
                    </div>
                    <p
                      onClick={() => setRemark(true)}
                      className="text-[14px] leading-[16.8px] font-bold opacity-70 cursor-pointer text-[14px] underline"
                    >
                      View Remarks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      {assignment && (
        <div className="fixed top-0 bg-[#00000066] w-full h-[100vh] z-50 flex justify-center items-center">
        <div className="w-[887px] max-lg:w-[95%] bg-white relative rounded-[6px] pt-[53.01px] max-md:px-[20px] max-md:py-[30px] pb-[51.06px] pl-[48px]">
          <Image
            src="/close.svg"
            className="absolute cursor-pointer max-md:right-[20px] max-md:top-[20px] right-[60.02px] top-[53.01px]"
            onClick={() => setAssignment(false)}
            width={40}
            height={40}
          />
          <h1 className="text-[20px] w-[541.83px] max-md:w-[90%] leading-[26px] font-semibold mb-[20px]">
            Faucibus nec adipiscing lacus faucibus rhoncus elit consequat.
            Suscipit lacus.
          </h1>
          <p className="mb-[20px] max-md:w-full w-[587px] text-base">
            Mi mi morbi molestie integer lacinia arcu leo purus. Fringilla
            volutpat tellus vitae est. Sapien eget amet elit placerat.
            Porttitor urna egestas nisi viverra quam magnis lectus scelerisque
            integer. Est viverra augue pulvinar quisque. Arcu luctus nec duis
            suspendisse. Sagittis est donec at ut tortor vulputate in. Ut
            pharetra dis augue duis vitae viverra id. Aliquam aliquet turpis
            vulputate.
          </p>
          <button className="bg-white mb-[31px] text-black font-semibold border-[1px] border-[black] px-[24px] py-[12.04px] rounded-[6px] text-[16px] leading-[19.2px]">
            View Resources
          </button>
          <div className="pt-[31px] max-md:w-full border-t-[1px] w-[649px] border-[#00000033]">
            <p className="text-[#2C2E32] mb-[10px] text-[14px]">
              Submitted link{" "}
            </p>
            <input
              type="text"
              className="border-[0.5px] max-sm:w-full rounded-[4px] py-[18.5px] px-[16.27px] w-[309px] italic text-[14px] border-[#00000080]"
              placeholder="https/sdgsdklhglhfldfh/.sdkghsihgfhjhh"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
      )}{" "}
      {remark && (
        <div className="fixed top-0 bg-[#00000066] w-full h-[110vh] z-50 flex justify-center items-center">
          <div className="w-[657px] max-md:w-[95%] max-md:px-[20px] bg-white relative rounded-[6px] pt-[35px] pb-[23px] pl-[37px]">
            <Image
              src="/close.svg"
              className="absolute cursor-pointer right-[39px] top-[25.01px]"
              onClick={() => setRemark(false)}
              width={40}
              height={40}
            />
            <h1 className="text-[20px] leading-[26px] font-semibold mb-[26px]">
              Assignment Remark
            </h1>
            <div className="relative mb-[31px]">
              <textarea
                placeholder="Type remark here"
                onChange={handleChangeTextAreaRemark}
                className="border-[1px] max-md:w-full pl-[19.1px] pr-[15.81px] pt-[18.81px] h-[197px] resize-none pb-[31.19px] border-[#00000033] w-[581px] rounded-[6px] text-[14px] leading-[21px]"
              ></textarea>
              <p className="text-[12px] max-md:right-[20px] text-[#2C2E32] absolute bottom-[18px] right-[53px]">
                {remarkcount} / 250px
              </p>
            </div>
            <button
              onClick={() => setRemark(false)}
              className="bg-black text-white px-[15px] py-[10px] rounded-[4px] text-[14px] leading-[16.8px]"
            >
              Send Remark
            </button>
          </div>
        </div>
      )}
    </>
  );
}
