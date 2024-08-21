import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import TrainerNavbar from "../../components/trainerbar";

export default function Profile() {
  const [Name, setName] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [userName, setUserName] = useState("");
  const [College, setCollege] = useState("");
  const [allLocation, setallLocation] = useState(false);
  const [remote, setremote] = useState(false);
  const [bangalore, setbangalore] = useState(false);
  const [hyderabad, sethyderabad] = useState(false);
  const [chennai, setchennai] = useState(false);
  const [delhi, setdelhi] = useState(false);
  const [mumbai, setmumbai] = useState(false);
  const [gurgaon, setgurgaon] = useState(false);
  const [ahmedabad, setahmedabad] = useState(false);
  const [noida, setnoida] = useState(false);
  const [pune, setpune] = useState(false);
  const [nashik, setnashik] = useState(false);
  const [chattisgarh, setchattisgarh] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, index) => currentYear - index);
  const [isPassingOpen, setIsPassingOpen] = useState(false);
  const [selectedPassingYear, setSelectedPassingYear] = useState("");
  const passingyears = Array.from(
    { length: 50 },
    (_, index) => currentYear - index
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/viewprofiledata");
  //       const data = response.data;
  //       if (data.length > 0) {
  //         const lastData = data[data.length - 1];
  //         setPhonenumber(lastData.phonenumber);
  //         setName(lastData.Name);
  //         setUserName(lastData.userName);
  //         setCollege(lastData.College);
  //         setAllLocation(lastData.allLocation);
  //         setRemote(lastData.remote);
  //         setBangalore(lastData.bangalore);
  //         setHyderabad(lastData.hyderabad);
  //         setChennai(lastData.chennai);
  //         setDelhi(lastData.delhi);
  //         setMumbai(lastData.mumbai);
  //         setGurgaon(lastData.gurgaon);
  //         setAhmedabad(lastData.ahmedabad);
  //         setNoida(lastData.noida);
  //         setPune(lastData.pune);
  //         setNashik(lastData.nashik);
  //         setChattisgarh(lastData.chattisgarh);
  //         setSelectedYear(lastData.selectedYear);
  //         setSelectedPassingYear(lastData.selectedPassingYear);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = {
  //     Name,
  //     userName,
  //     College,
  //     selectedYear,
  //     selectedPassingYear,
  //     allLocation,
  //     remote,
  //     bangalore,
  //     hyderabad,
  //     chennai,
  //     delhi,
  //     mumbai,
  //     gurgaon,
  //     ahmedabad,
  //     noida,
  //     pune,
  //     nashik,
  //     chattisgarh,
  //     phonenumber,
  //   };

  //   try {
  //     const response = await axios.post("/api/profile", data);
  //     console.log("Data sent successfully:", response.data);
  //   } catch (error) {
  //     console.error("Error sending data:", error);
  //   }
  // };
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
                id=""
                onChange={(e) => setName(e.target.value)}
                className="w-[309px] bg-[white] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[1px] border-[#00000080]"
              />
            </div>
            <div className="max-hamburger:w-[100%]">
              <p className="text-[14px] leading-[18.2px] mb-[10px]">Password</p>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => setUserName(e.target.value)}
                disabled
                className="w-[309px] bg-[#EDEDED] border-[#00000080] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[1px] border-black"
              />
            </div>
          </div>
          <div className="flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
            <div className="max-hamburger:w-full relative">
              <p className="text-[14px] leading-[15px] mb-[10px]">Phone number</p>
              <input
                type="text"
                name=""
                id=""
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
