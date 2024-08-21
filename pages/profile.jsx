import Navbar from "../components/navbar";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Profile() {
  const [Name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [userName, setUserName] = useState("");
  const [College, setCollege] = useState("");
  const [allLocation, setAllLocation] = useState(false);
  const [remote, setRemote] = useState(false);
  const [bangalore, setBangalore] = useState(false);
  const [hyderabad, setHyderabad] = useState(false);
  const [chennai, setChennai] = useState(false);
  const [delhi, setDelhi] = useState(false);
  const [mumbai, setMumbai] = useState(false);
  const [gurgaon, setGurgaon] = useState(false);
  const [ahmedabad, setAhmedabad] = useState(false);
  const [noida, setNoida] = useState(false);
  const [pune, setPune] = useState(false);
  const [nashik, setNashik] = useState(false);
  const [chattisgarh, setChattisgarh] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, index) => currentYear - index);
  const [isPassingOpen, setIsPassingOpen] = useState(false);
  const [selectedPassingYear, setSelectedPassingYear] = useState("");
  const passingYears = Array.from(
    { length: 50 },
    (_, index) => currentYear - index
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/platform/account/route");
        const data = response.data;
        if (data.length > 0) {
          const lastData = data[data.length - 1];
          setPhonenumber(lastData.phonenumber);
          setName(lastData.Name);
          setUserName(lastData.userName);
          setCollege(lastData.College);
          setAllLocation(lastData.allLocation);
          setRemote(lastData.remote);
          setBangalore(lastData.bangalore);
          setHyderabad(lastData.hyderabad);
          setChennai(lastData.chennai);
          setDelhi(lastData.delhi);
          setMumbai(lastData.mumbai);
          setGurgaon(lastData.gurgaon);
          setAhmedabad(lastData.ahmedabad);
          setNoida(lastData.noida);
          setPune(lastData.pune);
          setNashik(lastData.nashik);
          setChattisgarh(lastData.chattisgarh);
          setSelectedYear(lastData.selectedYear);
          setSelectedPassingYear(lastData.selectedPassingYear);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      Name,
      userName,
      College,
      selectedYear,
      selectedPassingYear,
      allLocation,
      remote,
      bangalore,
      hyderabad,
      chennai,
      delhi,
      mumbai,
      gurgaon,
      ahmedabad,
      noida,
      pune,
      nashik,
      chattisgarh,
      phonenumber,
    };

    try {
      const response = await axios.post("/api/platform/account/route", data);
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
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
      <main className="pl-[60px] max-xl:px-[60px] max-md:px-[40px] max-sm:px-[20px] pt-[51.08px] pb-[67px]">
        <h1 className="capitalize text-[20px] leading-[26px] font-bold mb-[35.92px]">
          your account
        </h1>
        <div className="w-[1097px] max-sm:px-[20px] max-hamburger:pr-[60px] max-xl:pr-[20px] pb-[39px] max-xl:w-full max-hamburger:h-auto max-hamburger:pb-[38.5px] pt-[38.5px] pl-[28.5px] bg-white rounded-[5px]">
          <h1 className="text-[20px] leading-[26px] font-semibold">
            User Information
          </h1>
          <div className="flex gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] max-xl:flex-wrap mt-[28.5px] mb-[23px]">
            <div className="max-hamburger:w-[100%]">
              <p className="text-[14px] leading-[18.2px] mb-[10px]">Name</p>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => setName(e.target.value)}
                disabled
                className="w-[309px] bg-[#EDEDED] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[1px] border-[#00000080]"
              />
            </div>
            <div className="max-hamburger:w-[100%]">
              <p className="text-[14px] leading-[18.2px] mb-[10px]">SID</p>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => setUserName(e.target.value)}
                disabled
                className="w-[309px] bg-[#EDEDED] border-[#00000080] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[1px] border-black"
              />
            </div>
            <div className="max-hamburger:w-[100%]">
              <p className="text-[14px] leading-[18.2px] mb-[10px]">Email</p>
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
              <p className="text-[14px] leading-[15px] mb-[10px]">Password</p>
              <Image
                src="edit.svg"
                className="mt-[0.61px] absolute top-[35px] right-[14.67px] cursor-pointer"
                width={18.83}
                height={18.83}
              />{" "}
              <input
                type="password"
                name=""
                id=""
                onChange={(e) => setCollege(e.target.value)}
                className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[1px] border-black"
              />
            </div>
          </div>
          <div className="border-[1px] w-[134px] mt-[24px] h-[41px] text-[14px] border-black py-[12px] px-[19px] rounded-[4px] cursor-pointer">
            Save Changes
          </div>
        </div>
        <section className="mt-[25px] max-sm:px-[20px] pr-[21px] max-hamburger:h-auto max-hamburger:pb-[40px] max-hamburger:pr-[40px] max-xl:w-full bg-white rounded-[5px] w-[1097px] h-[335px] pt-[38.5px] pl-[23.5px]">
          <div className="flex justify-between mb-[28.5px]">
            <h1 className="capitalize text-[20px] leading-[26px] font-semibold">
              Job preferences{" "}
            </h1>
            <div className="border-[1px] max-sm:hidden w-[206px] h-[41px] text-[14px] border-black py-[12px] px-[19px] rounded-[4px] cursor-pointer">
              Update Placement Profile
            </div>
          </div>
          <div className="w-[673px] max-md:w-full">
            <p className="text-[14px] leading-[15.4px] mb-[10px]">Resume </p>
            <div className="flex max-sm:flex-col max-sm:items-start gap-[12.5px] items-center">
              <input type="file" id="fileupload" className="hidden" />
              <label
                htmlFor="fileupload"
                className="cursor-pointer max-sm:text-[11px] max-sm:pr-[20px] max-sm:w-full italic text-[14px] leading-[16.8px] pr-[102.73px] py-[11.5px] pl-[16.27px] rounded-[4px] h-[40px] border-[0.5px] text-[#000000B3] border-[#00000080]"
              >
                Click to upload your resume
              </label>
              <p className="opacity-70 text-[14px] leading-[16.8px] capitalize">
                max file size: 2 MB
              </p>
            </div>
          </div>
          <div className="w-[673px] max-md:w-full mt-[28.5px]">
            <p className="text-[14px] leading-[15.4px] mb-[10px]">
              Location preference
            </p>
            <div className="flex flex-wrap gap-[11px]">
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="all" id="all" />
                <label
                  htmlFor="all"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  All Locations
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Remote" id="Remote" />
                <label
                  htmlFor="Remote"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Remote
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Bangalore" id="Bangalore" />
                <label
                  htmlFor="Bangalore"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Bangalore
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Hyderbad" id="Hyderbad" />
                <label
                  htmlFor="Hyderbad"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Hyderbad
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Chennai" id="Chennai" />
                <label
                  htmlFor="Chennai"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Chennai
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Delhi" id="Delhi" />
                <label
                  htmlFor="Delhi"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Delhi
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Mumbai" id="Mumbai" />
                <label
                  htmlFor="Mumbai"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Mumbai
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Gurgaon" id="Gurgaon" />
                <label
                  htmlFor="Gurgaon"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Gurgaon
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Ahmedabad" id="Ahmedabad" />
                <label
                  htmlFor="Ahmedabad"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Ahmedabad
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Noida" id="Noida" />
                <label
                  htmlFor="Noida"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Noida
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Pune" id="Pune" />
                <label
                  htmlFor="Pune"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Pune
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Nashik" id="Nashik" />
                <label
                  htmlFor="Nashik"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Nashik
                </label>
              </div>
              <div className="flex gap-[6.5px] items-center">
                <input type="checkbox" name="Chhattisgarh" id="Chhattisgarh" />
                <label
                  htmlFor="Chhattisgarh"
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-[14px] leading-[16.8px] h-[17px]"
                >
                  Chattisgarh
                </label>
              </div>
            </div>
            <div className="border-[1px] max-sm:block hidden mt-[32px] w-full text-center h-[41px] text-[14px] border-black py-[12px] px-[19px] rounded-[4px] cursor-pointer">
              Update Placement Profile
            </div>
          </div>
        </section>
        <h1 className="capitalize text-[20px] leading-[26px] font-bold mt-[54px] mb-[25.92px]">
          Billing information
        </h1>
        <div className="w-[1097px] max-sm:px-[20px] max-hamburger:pr-[60px] max-md:pr-[20px] pb-[67.8px] max-xl:w-full max-hamburger:h-auto max-hamburger:pb-[38.5px] pt-[33.71px] pl-[23.5px] bg-white rounded-[5px]">
          <p className="text-base mb-[6px]">Course Opted</p>
          <h1 className="text-[39px] max-sm:text-[30px] max-md:leading-[120%] leading-[46.8px] mb-[11.86px]">
            Frontend Mastery
          </h1>
          <p className="text-base mb-[43.96px]">Total Fee: INR 9,999</p>

          <p className="text-base mb-[6px]">Pending Fees</p>
          <div className="flex gap-[31.5px] max-sm:flex-col mb-[24px]">
            <h1 className="text-[39px] leading-[46.8px]">INR 5,000 </h1>
            <button className="w-[99px] font-semibold h-[43px] max-sm:w-full bg-[#30E29D] rounded-[6px] text-[16px] leading-[19.2px]">
              Pay now{" "}
            </button>
          </div>
          <div className="max-lg:overflow-scroll">
            <table className="max-[850px]:w-[640px]">
              <tr className="bg-[#D3D3D3]">
                <td className="text-base w-[142px] pl-[25px] py-[16px]">
                  Date
                </td>
                <td className="text-base w-[218px] pl-[25px] py-[16px]">
                  Payment number
                </td>
                <td className="text-base w-[184px] pl-[25px] py-[16px]">
                  Payment method
                </td>
                <td className="text-base w-[196px] pl-[25px] py-[16px]">
                  Amount
                </td>
              </tr>
              <tr className="border-b-[0.2px] border-[#00000080]">
                <td className="text-base text-[#1D1D1D] w-[142px] pl-[25px] py-[16px]">
                  28/08/23
                </td>
                <td className="text-base text-[#1D1D1D] w-[218px] pl-[25px] py-[16px]">
                  947u60749862766
                </td>
                <td className="text-base text-[#1D1D1D] w-[184px] pl-[25px] py-[16px]">
                  Credit Card
                </td>
                <td className="text-base text-[#1D1D1D] w-[196px] pl-[25px] py-[16px]">
                  INR 5,000
                </td>
              </tr>
            </table>
          </div>
        </div>
        <button className="w-[96px] font-semibold h-[43px] max-sm:w-full mt-[41px] bg-[#30E29D] rounded-[6px] text-[16px] leading-[19.2px]">
          Log out{" "}
        </button>
        <section className="w-[1097px] mt-[54px] max-sm:px-[20px] max-xl:w-full mt-[25px] pt-[25.4px] border-[2px] border-[#672B094D] rounded-[6px] pb-[36px] pl-[22.32px] h-[131px] bg-[#FFEAC9]">
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
      </main>
    </>
  );
}
