import axios from "axios";
import { useState, useEffect } from "react";
import TrainerNavbar from "../../components/trainerbar";
export default function Profile() {
  const [trainerData, setTrainerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/trainer/trainerData?email=ahmed@parallelTrainer`
        );
        const data = await response.json();
        setTrainerData(data);
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <>
      <TrainerNavbar />
      <main className="pl-[60px] max-xl:px-[60px] max-md:px-[40px] max-sm:px-[20px] pt-[0.08px] pb-[67px]">
        <div className="w-[1097px] max-sm:px-[20px] max-hamburger:pr-[60px] max-md:pr-[20px] pb-[39px] max-xl:w-full max-hamburger:h-auto max-hamburger:pb-[38.5px] pt-[38.5px] pl-[28.5px] bg-white rounded-[5px]">
          <h1 className="text-[20px] leading-[26px] font-semibold">
            User Information
          </h1>
          <div className="flex gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[28.5px] mb-[23px]">
            <div className="max-hamburger:w-[100%]">
              <p className="text-[14px] leading-[18.2px] mb-[10px]">Email</p>
              <input
                type="text"
                name=""
                value={trainerData.email}
                id=""
                className="w-[309px] bg-[white] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[1px] border-[#00000080]"
              />
            </div>
            <div className="max-hamburger:w-[100%]">
              <p className="text-[14px] leading-[18.2px] mb-[10px]">Password</p>
              <input
                type="text"
                name=""
                id=""
                value={trainerData.password}
                disabled
                className="w-[309px] bg-[#EDEDED] border-[#00000080] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[1px] border-black"
              />
            </div>
          </div>
          <div className="flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
            <div className="max-hamburger:w-full relative">
              <p className="text-[14px] leading-[15px] mb-[10px]">
                Phone number
              </p>
              <input
                type="text"
                name=""
                id=""
                value={trainerData.phoneNumber}
                className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[1px] border-black"
              />
            </div>
          </div>
          <div className="border-[1px] w-[134px] mt-[24px] h-[41px] text-[14px] border-black py-[12px] px-[19px] rounded-[4px] cursor-pointer">
            Save Changes
          </div>
        </div>
        <section className="w-[1097px] mt-[18px] max-sm:px-[20px] max-xl:w-full mt-[25px] pt-[25.4px] border-[2px] border-[#672B094D] rounded-[6px] pb-[36px] pl-[22.32px] h-[131px] bg-[#FFEAC9]">
          <p className="text-[20px] leading-[26px] pl-[2.78px] mb-[27px] max-smallerphone:mb-[7px] font-bold capitalize text-[#672B09]">
            Support{" "}
          </p>
          <p className="text-[16px] leading-[20.8px] text-[#672B09]">
            Facing Issues? Get Help At{" "}
            <a
              href="mailto:help@parallel.com"
              className="font-bold border-b-[1px] border-[#672B09]"
            >
              help@parallel.com
            </a>
          </p>
        </section>
        <button className="w-[96px] h-[43px] max-sm:w-full text-white mt-[18px] bg-[#000] rounded-[6px] text-[16px] leading-[19.2px]">
          Log out{" "}
        </button>
      </main>
    </>
  );
}
