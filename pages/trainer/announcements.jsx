import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "../../styles/style.module.css";
import TrainerNavbar from "../../components/trainerbar";

export default function Jobs() {
  const [active, setactive] = useState("announcements");
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
                {active === "announcements" && (
          <>
            <div className="h-[611px] pb-[36.88px] max-sm:px-[20px] w-full bg-white rounded-[8px] pt-[37.12px] px-[31px] pr-[36px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Send Announcement
              </h1>
              <div className="flex max-sm:flex-wrap gap-[26px] mt-[31.87px]">
                <div
                  onClick={() => setactive("doubt clearing session")}
                  className="flex items-center justify-center rounded-[10px] border-[#00000033] cursor-pointer border-[1px] h-[202px] w-[50%] max-sm:w-full"
                >
                  <h1 className="text-[20px] leading-[26px]">
                    Doubt clearing session
                  </h1>
                </div>
                <div
                  onClick={() => setactive("general announcement")}
                  className="flex items-center justify-center rounded-[10px] border-[#00000033] cursor-pointer border-[1px] h-[202px] w-[50%] max-sm:w-full"
                >
                  <h1 className="text-[20px] leading-[26px]">
                    General announcement
                  </h1>
                </div>
              </div>
            </div>
          </>
        )}
        {active === "general announcement" && (
          <>
            <div className="mb-[21.5px] flex items-center mt-[12px]">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("announcements")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="h-auto pb-[36.88px] w-full bg-white rounded-[8px] pt-[37.12px] max-sm:px-[20px] px-[31.48px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Send Announcement
              </h1>
              <div className="flex flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[32.88px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Enter heading
                  </p>
                  <input
                    type="text"
                    name=""
                    placeholder="Enter heading"
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                  <p className="mt-[16px] text-[14px] leading-[18.2px] mb-[10px]">
                    Enter message
                  </p>
                  <div className="relative max-hamburger:w-[100%] w-[639px]">
                    <textarea
                      placeholder="Enter message"
                      onChange={handleChangeTextArea}
                      maxLength={250}
                      className="w-[639px] max-hamburger:w-[100%] h-[138px] rounded-[4px] resize-none border-[0.5px] py-[11.5px] px-[12.74px] border-[#00000080]"
                      name=""
                      id=""
                    ></textarea>
                    <p className="text-[12px] text-[#2C2E32] absolute bottom-[18px] right-[18px]">
                      {count} / 250px
                    </p>
                  </div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Send link (optional)
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                  <p className="text-[14px] leading-[18.2px] mt-[16px] mb-[10px]">
                    Select course
                  </p>
                  <div className="flex gap-[20px] max-sm:w-full max-sm:flex-wrap w-[494px]">
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
                  <button className="text-[14px] max-sm:w-[100%] leading-[16.8px] text-white bg-black px-[15px] rounded-[4px] mt-[36px] py-[10px]">
                    Send Announcement
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {active === "doubt clearing session" && (
          <>
            <div className="mb-[21.5px] flex items-center mt-[12px]">
              <Image
                src="/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("announcements")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="h-auto pb-[36.88px] max-sm:px-[20px] w-full bg-white rounded-[8px] pt-[37.12px] px-[31.48px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Send Announcement
              </h1>
              <div className="flex flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[32.88px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <div className="flex max-md:flex-wrap gap-[16px]">
                    <div className="max-sm:w-full">
                      <p className="text-[14px] leading-[18.2px] mb-[10px]">
                        Enter heading
                      </p>
                      <input
                        type="text"
                        name=""
                        placeholder="Enter heading"
                        id=""
                        className="w-[254px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                    <div className="max-sm:w-full">
                      <p className="text-[14px] leading-[18.2px] mb-[10px]">
                        Select course{" "}
                      </p>
                      <div className="w-[367px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                        <select
                          type="text"
                          name=""
                          id=""
                          className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                        >
                          <option value="">Full stack development</option>
                        </select>
                      </div>
                    </div>
                    <div className="max-sm:w-full">
                      <p className="text-[14px] leading-[18.2px] mb-[10px]">
                        Enter topic
                      </p>
                      <input
                        type="text"
                        name=""
                        placeholder="Enter topic"
                        id=""
                        className="w-[254px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <div className="flex mt-[16px] max-sm:flex-col gap-[16px]">
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
                  <p className="mt-[16px] text-[14px] leading-[18.2px] mb-[10px]">
                    Enter message (optional){" "}
                  </p>
                  <div className="relative max-hamburger:w-[100%] w-[639px]">
                    <textarea
                      placeholder="Enter message"
                      onChange={handleChangeTextArea}
                      maxLength={250}
                      className="w-[639px] max-hamburger:w-[100%] h-[138px] rounded-[4px] resize-none border-[0.5px] py-[11.5px] px-[12.74px] border-[#00000080]"
                      name=""
                      id=""
                    ></textarea>
                    <p className="text-[12px] text-[#2C2E32] absolute bottom-[18px] right-[18px]">
                      {count} / 250px
                    </p>
                  </div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Send link (optional)
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />

                  <p className="text-[14px] mt-[16px] leading-[18.2px] mb-[10px]">
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
                  <button className="text-[14px] max-sm:w-full leading-[16.8px] text-white bg-black px-[15px] rounded-[4px] mt-[36px] py-[10px]">
                    Send Announcement
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
