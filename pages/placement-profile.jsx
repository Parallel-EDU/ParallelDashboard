import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [College, setCollege] = useState("");
  const [Location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [work, setwork] = useState(false);
  const [mode, setmode] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, index) => currentYear - index);
  const [isPassingOpen, setIsPassingOpen] = useState(false);
  const [selectedPassingYear, setSelectedPassingYear] = useState("");
  const passingyears = Array.from(
    { length: 50 },
    (_, index) => currentYear - index
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const togglePassingMenu = () => {
    setIsPassingOpen(!isPassingOpen);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };
  const handlePassingYearSelect = (passingyear) => {
    setSelectedPassingYear(passingyear);
    setIsPassingOpen(false);
  };
  return (
    <>
      <Navbar />
      <main className="px-[60px] max-xl:px-[60px] max-md:px-[40px] flex justify-center items-center max-sm:px-[20px] pt-[51px] pb-[44px]">
        <div className="max-hamburger:w-full">
          <div className="w-[874px] max-sm:w-full max-hamburger:w-full flex justify-between mb-[31px]">
            <h1 className="capitalize text-[20px] leading-[26px] font-bold">
              Placement Profile{" "}
            </h1>
            <Link href={'/profile'} className="text-[16px] leading-[24px] font-semibold h-[20px] border-b-[1.23px] border-black">
              Go back
            </Link>
          </div>
          <div className="w-[874px] max-hamburger:w-full max-sm:px-[20px] max-hamburger:w-full py-[24px] pl-[25px] max-hamburger:px-[25px] bg-white rounded-[5px]">
            <div className="flex gap-[18px] max-sm:flex-col max-sm:gap-[17px] mb-[17px]">
              <div className="w-[210px] max-smallerphone:w-full h-[252px] max-md:px-[12px] max-md:justify-center max-md:items-center max-md:py-[17px] max-md:h-auto pl-[34px] flex flex-col justify-center rounded-[14px] border-[1px] border-[#D8D8D8]">
                <div className="w-[101.81px] ml-[19.59px] max-md:ml-[0px] h-[101.81px] rounded-[100%] bg-[#ECECEC]"></div>
                <button className="w-[141px] text-[14px] h-[31px] max-sm:w-full mt-[23px] bg-black text-white rounded-[6px] leading-[16.8px]">
                  Upload Picture{" "}
                </button>
              </div>
              <div className="w-[588px] max-sm:w-full max-md:py-[17px] max-md:h-auto max-hamburger:px-[18px] max-hamburger:w-[calc(100%-210px)] h-[252px] relative pl-[28px] pt-[17.08px] rounded-[14px] border-[1px] border-[#D8D8D8]">
                <p className="absolute right-[16.4px] italic text-[12px] leading-[14.4px] text-[#606060]">
                  This cannot be changed.
                </p>
                <h1 className="text-[16px] leading-[20.8px] font-bold mb-[31.92px]">
                  Profile
                </h1>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[16.8px] mb-[8px]">Name</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={"Candidate name"}
                    disabled
                    className="w-[250px] text-[14px] leading-[16.8px] max-md:w-[100%] bg-[#ECECEC] pl-[15.71px] rounded-[6px] h-[45px] text-[#606060] border-[1px] border-[#0000004D]"
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
                      disabled
                      className="w-[250px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] bg-[#ECECEC] pl-[15.71px] max-hamburger:pl-[6.51px] rounded-[6px] h-[45px] text-[#606060] border-[1px] border-[#0000004D]"
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
                      disabled
                      className="w-[250px] text-[14px] leading-[16.8px] max-hamburger:w-[100%] max-hamburger:pl-[6.51px] bg-[#ECECEC] pl-[15.71px] rounded-[6px] h-[45px] text-[#606060] border-[1px] border-[#0000004D]"
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
                      className="w-[216px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                  </div>
                  <div className="max-sm:w-full gap-[12px] max-">
                    <p className="text-[14px] leading-[15.4px] mb-[10px] text-[#2C2E32]">
                      Graduation year{" "}
                    </p>
                    <div
                      onClick={toggleMenu}
                      className="border-[0.5px] max-hamburger:w-full cursor-pointer border-[#00000080] w-[135px] h-[40px] rounded-[4px]"
                    >
                      <div className="flex justify-between h-[40px] items-center pl-[6.27px] pr-[9px]">
                        {" "}
                        <div className="max-sm:text-sm">
                          {" "}
                          {selectedYear || ""}
                        </div>
                        <Image
                          src="/drop.svg"
                          className={
                            isOpen
                              ? "h-[6.93px] rotate-180 w-[12.88px] opacity-70 cursor-pointer"
                              : "h-[6.93px] w-[12.88px] cursor-pointer opacity-70"
                          }
                          width={12.88}
                          height={6.93}
                          onClick={() => toggleMenu()}
                        />
                      </div>

                      {isOpen && (
                        <div className="h-[190px] bg-white relative z-20 overflow-y-scroll mt-[10px]">
                          <ul>
                            {years.map((year) => (
                              <li
                                className="text-[14px] max-hamburger:w-full cursor-pointer leading-[18.2px] bg-[white] py-[10px] pr-[10px] pl-[16.27px]"
                                key={year}
                                onClick={() => handleYearSelect(year)}
                              >
                                {year}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
                  <div className="flex max-sm:flex-col max-sm:items-start gap-[12px] items-center">
                    <input type="file" id="fileupload" className="hidden" />
                    <label
                      htmlFor="fileupload"
                      className="cursor-pointer max-sm:text-[11px] max-sm:pr-[20px] max-sm:w-full italic text-[14px] leading-[16.8px] w-[222px] py-[11.5px] pl-[16.27px] rounded-[4px] h-[40px] border-[0.5px] text-[#000000B3] border-[#00000080]"
                    >
                      Click to upload your resume
                    </label>
                    <p className="opacity-70 text-[14px] leading-[16.8px] capitalize">
                      max file size: 2 MB
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] leading-[16.8px] mb-[10px]">CV </p>
                  <div className="flex max-sm:flex-col max-sm:items-start gap-[12px] items-center">
                    <input type="file" id="fileupload" className="hidden" />
                    <label
                      htmlFor="fileupload"
                      className="cursor-pointer w-[222px] max-sm:text-[11px] max-sm:pr-[20px] max-sm:w-full italic text-[14px] leading-[16.8px] py-[11.5px] pl-[16.27px] rounded-[4px] h-[40px] border-[0.5px] text-[#000000B3] border-[#00000080]"
                    >
                      Click to upload your CV{" "}
                    </label>
                    <p className="opacity-70 text-[14px] leading-[16.8px] capitalize">
                      max file size: 2 MB
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="w-[816px] max-md:py-[17px] max-md:h-auto max-hamburger:w-full my-[17px] relative max-hamburger:px-[18px] pl-[28px] pt-[17.08px] pb-[16.86px] rounded-[14px] border-[1px] border-[#D8D8D8]">
              <h1 className="text-[16px] leading-[20.8px] font-bold mb-[28px]">
                Work Experience
              </h1>
              {work && (
                <>
                  <div className="mt-[18px]">
                    <div className="flex max-sm:flex-col gap-[16px]">
                      <div className="max-hamburger:w-full">
                        <p className="text-[14px] leading-[15.4px] mb-[10px] text-[#2C2E32]">
                          Role
                        </p>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-[216px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                        />
                      </div>
                      <div className="max-hamburger:w-full">
                        <p className="text-[14px] leading-[15.4px] mb-[10px] text-[#2C2E32]">
                          Company
                        </p>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="w-[216px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                        />
                      </div>
                    </div>
                    <div className="flex mt-[25px] gap-[25px]">
                      <div>
                        <p className="text-[14px] leading-[15.4px] mb-[10px] text-[#2C2E32]">
                          Location type
                        </p>
                        <div className="flex max-sm:flex-wrap gap-[20px] mt-[10px] max-hamburger:w-full">
                          <label className="flex cursor-pointer items-center">
                            <input
                              type="radio"
                              name="educationStatus"
                              value="option1"
                              onClick={() => setmode(false)}
                            />
                            <p className="ml-[8px] text-[14px] leading-[16.8px]">
                              Remote
                            </p>
                          </label>
                          <label className="flex cursor-pointer items-center">
                            <input
                              type="radio"
                              name="educationStatus"
                              value="option2"
                              onClick={() => setmode(true)}
                            />
                            <p className="ml-[8px] text-[14px] leading-[16.8px]">
                              Hybrid
                            </p>
                          </label>

                          <label className="flex cursor-pointer items-center">
                            <input
                              type="radio"
                              name="educationStatus"
                              value="option3"
                              onClick={() => setmode(true)}
                            />
                            <p className="ml-[8px] text-[14px] leading-[16.8px]">
                              On-site
                            </p>
                          </label>
                        </div>
                      </div>
                      {mode && (
                        <div className="max-hamburger:w-full">
                          <p className="text-[14px] leading-[15.4px] mb-[10px] text-[#2C2E32]">
                            Location
                          </p>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="w-[216px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex mt-[25px]">
                      <div>
                        <p className="text-[14px] leading-[15.4px] mb-[10px] text-[#2C2E32]">
                          Job type
                        </p>
                        <div className="flex gap-[20px] mt-[10px] max-hamburger:w-full">
                          <label className="flex cursor-pointer items-center">
                            <input
                              type="radio"
                              name="educationStatus"
                              value="option1"
                            />
                            <p className="ml-[8px] text-[14px] leading-[16.8px]">
                              Internship
                            </p>
                          </label>
                          <label className="flex cursor-pointer items-center">
                            <input
                              type="radio"
                              name="educationStatus"
                              value="option2"
                            />
                            <p className="ml-[8px] text-[14px] leading-[16.8px]">
                              Full Time
                            </p>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[25px] flex gap-[12px]">
                      <div
                        onClick={toggleMenu}
                        className="border-[0.5px] max-hamburger:w-full cursor-pointer border-[#00000080] w-[135px] h-[40px] rounded-[4px]"
                      >
                        <div className="flex justify-between h-[40px] items-center pl-[16.27px] pr-[9px]">
                          {" "}
                          <div className="max-sm:text-sm">
                            {" "}
                            {selectedYear || "Start Year"}
                          </div>
                          <Image
                            src="/drop.svg"
                            className={
                              isOpen
                                ? "h-[6.93px] rotate-180 w-[12.88px] opacity-70 cursor-pointer"
                                : "h-[6.93px] w-[12.88px] cursor-pointer opacity-70"
                            }
                            width={12.88}
                            height={6.93}
                            onClick={() => toggleMenu()}
                          />
                        </div>

                        {isOpen && (
                          <div className="h-[190px] bg-white relative z-20 overflow-y-scroll mt-[10px]">
                            <ul>
                              {years.map((year) => (
                                <li
                                  className="text-[14px] max-hamburger:w-full cursor-pointer leading-[18.2px] bg-[white] py-[10px] pr-[10px] pl-[16.27px]"
                                  key={year}
                                  onClick={() => handleYearSelect(year)}
                                >
                                  {year}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div
                        onClick={toggleMenu}
                        className="border-[0.5px] max-hamburger:w-full cursor-pointer border-[#00000080] w-[135px] h-[40px] rounded-[4px]"
                      >
                        <div className="flex justify-between h-[40px] items-center pl-[16.27px] pr-[9px]">
                          {" "}
                          <div className="max-sm:text-sm">
                            {" "}
                            {selectedYear || "End Year"}
                          </div>
                          <Image
                            src="/drop.svg"
                            className={
                              isOpen
                                ? "h-[6.93px] rotate-180 w-[12.88px] opacity-70 cursor-pointer"
                                : "h-[6.93px] w-[12.88px] cursor-pointer opacity-70"
                            }
                            width={12.88}
                            height={6.93}
                            onClick={() => toggleMenu()}
                          />
                        </div>

                        {isOpen && (
                          <div className="h-[190px] bg-white relative z-20 overflow-y-scroll mt-[10px]">
                            <ul>
                              {years.map((year) => (
                                <li
                                  className="text-[14px] max-hamburger:w-full cursor-pointer leading-[18.2px] bg-[white] py-[10px] pr-[10px] pl-[16.27px]"
                                  key={year}
                                  onClick={() => handleYearSelect(year)}
                                >
                                  {year}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-[25px] mb-[8px]">
                      <div className="flex max-sm:flex-col max-sm:items-start gap-[12px] items-center">
                        <input type="file" id="fileupload" className="hidden" />
                        <label
                          htmlFor="fileupload"
                          className="cursor-pointer max-sm:pl-[6.51px] w-[248px] max-sm:text-[11px] max-sm:pr-[20px] max-sm:w-full italic text-[14px] leading-[16.8px] py-[11.5px] pl-[16.27px] rounded-[4px] h-[40px] border-[0.5px] text-[#000000B3] border-[#00000080]"
                        >
                          Click to upload Experience letter{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => setwork(false)}
                    className="flex mt-[28px] cursor-pointer max-smallerphone:w-full gap-[8px] justify-center items-center h-[42.06px] w-[195.06px] bg-black text-white rounded-[4px] border-[1px] border-black"
                  >
                    <span className="text-[25px]">+</span>
                    <p className="text-[14px] leading-[16.8px]">
                      Add work experience
                    </p>
                  </div>
                </>
              )}
              {!work && (
                <div
                  onClick={() => setwork(true)}
                  className="flex cursor-pointer gap-[8px] max-smallerphone:w-full justify-center items-center h-[42.06px] w-[195.06px] rounded-[4px] border-[1px] border-black"
                >
                  <span className="text-[25px]">+</span>
                  <p className="text-[14px] leading-[16.8px]">
                    Add work experience
                  </p>
                </div>
              )}
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
          <button className="w-[152px] h-[43px] max-sm:w-full mt-[31px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]">
            Save profile{" "}
          </button>
        </div>
      </main>
    </>
  );
}
