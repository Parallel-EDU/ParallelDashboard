import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "../../styles/style.module.css";
import TrainerNavbar from "../../components/trainerbar";
import AdminNavbar from "../../components/adminbar";

export default function Jobs() {
  const [active, setactive] = useState("");
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);
  const [count3, setcount3] = useState(0);

  const handleChangeTextArea = (e) => {
    setcount(e.target.value.length);
  };
  const handleChangeTextArea2 = (e) => {
    setcount2(e.target.value.length);
  };
  const handleChangeTextArea3 = (e) => {
    setcount3(e.target.value.length);
  };
  return (
    <>
      <AdminNavbar />

      <main className="relative px-[59.5px] pb-[78px] pt-[0] max-md:px-[40px] max-sm:px-[20px]">
        {active === "" && (
          <>
            <div className="h-[611px] max-sm:h-auto pb-[36.88px] max-sm:px-[20px] w-full bg-white rounded-[8px] pt-[37.12px] px-[31px] pr-[36px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Send Announcement
              </h1>
              <div className="flex max-sm:flex-wrap gap-[26px] mt-[31.87px]">
                <div
                  onClick={() => setactive("Students")}
                  className="flex items-center justify-center rounded-[10px] border-[#00000033] cursor-pointer border-[1px] h-[202px] w-[50%] max-sm:w-full"
                >
                  <h1 className="text-[20px] leading-[26px]">Students</h1>
                </div>
                <div
                  onClick={() => setactive("Trainers")}
                  className="flex items-center justify-center rounded-[10px] border-[#00000033] cursor-pointer border-[1px] h-[202px] w-[50%] max-sm:w-full"
                >
                  <h1 className="text-[20px] leading-[26px]">Trainers</h1>
                </div>
                <div
                  onClick={() => setactive("Graduates")}
                  className="flex items-center justify-center rounded-[10px] border-[#00000033] cursor-pointer border-[1px] h-[202px] w-[50%] max-sm:w-full"
                >
                  <h1 className="text-[20px] leading-[26px]">Graduates</h1>
                </div>
              </div>
            </div>
          </>
        )}
        {active === "Students" && (
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
                Send Announcement - Students
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
                  <div className="flex mt-[36px] max-sm:items-start max-sm:flex-col-reverse gap-[26.5px] items-center">
                    <button className="text-[14px] max-sm:w-[100%] leading-[16.8px] text-white bg-black px-[15px] rounded-[4px] py-[10px]">
                      Send Announcement
                    </button>
                    <label
                      className="text-[14px] leading-[16.8px] cursor-pointer flex items-center"
                      htmlFor="send"
                    >
                      <input
                        className="w-[15px] h-[15px] mr-[7px]"
                        name="send"
                        id="send"
                        type="checkbox"
                      />
                      Send an email
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {active === "Trainers" && (
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
                Send Announcement - Trainers
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
                      onChange={handleChangeTextArea2}
                      maxLength={250}
                      className="w-[639px] max-hamburger:w-[100%] h-[138px] rounded-[4px] resize-none border-[0.5px] py-[11.5px] px-[12.74px] border-[#00000080]"
                      name=""
                      id=""
                    ></textarea>
                    <p className="text-[12px] text-[#2C2E32] absolute bottom-[18px] right-[18px]">
                      {count2} / 250px
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

                  <div className="flex mt-[36px] max-sm:items-start max-sm:flex-col-reverse gap-[26.5px] items-center">
                    <button className="text-[14px] max-sm:w-[100%] leading-[16.8px] text-white bg-black px-[15px] rounded-[4px] py-[10px]">
                      Send Announcement
                    </button>
                    <label
                      className="text-[14px] leading-[16.8px] cursor-pointer flex items-center"
                      htmlFor="send"
                    >
                      <input
                        className="w-[15px] h-[15px] mr-[7px]"
                        name="send"
                        id="send"
                        type="checkbox"
                      />
                      Send an email
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {active === "Graduates" && (
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
                Send Announcement - Graduates
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
                      onChange={handleChangeTextArea3}
                      maxLength={250}
                      className="w-[639px] max-hamburger:w-[100%] h-[138px] rounded-[4px] resize-none border-[0.5px] py-[11.5px] px-[12.74px] border-[#00000080]"
                      name=""
                      id=""
                    ></textarea>
                    <p className="text-[12px] text-[#2C2E32] absolute bottom-[18px] right-[18px]">
                      {count3} / 250px
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

                  <div className="flex mt-[36px] max-sm:items-start max-sm:flex-col-reverse gap-[26.5px] items-center">
                    <button className="text-[14px] max-sm:w-[100%] leading-[16.8px] text-white bg-black px-[15px] rounded-[4px] py-[10px]">
                      Send Announcement
                    </button>
                    <label
                      className="text-[14px] leading-[16.8px] cursor-pointer flex items-center"
                      htmlFor="send"
                    >
                      <input
                        className="w-[15px] h-[15px] mr-[7px]"
                        name="send"
                        id="send"
                        type="checkbox"
                      />
                      Send an email
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
