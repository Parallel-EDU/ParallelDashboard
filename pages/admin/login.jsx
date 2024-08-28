import { useState } from "react";
import style from "../../styles/style.module.css";
// import { sendOTP } from './api/sendOTP';
import Image from "next/image";
import { useRouter } from "next/router";

export default function Login() {
  const [otpcheck, setotpcheck] = useState(true);
  const [email, setemail] = useState("");
  const [help, sethelp] = useState("");
  const [emailchecker, setemailchecker] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [termActive, setTermActive] = useState(false);
  const [contact, setContact] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [validatepassword, setvalidatepassword] = useState(true);
  const [password, setpassword] = useState("");
  const [validateemail, setvalidateemail] = useState(true);
  const [user_name, setuser_name] = useState("");
  const router = useRouter();

  const handleChangeText = (e) => {
    setInputValue(e.target.value);
  };
  const characterCount = inputValue.length;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const emailcheck = () => {
    if (email === "") {
      setemailchecker(false);
    } else {
      setemailchecker(true);
      setContact(false);
    }
  };
  const handleOptionSelect = (option) => {
    sethelp(option);
    setIsOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "" || user_name === "") {
      setvalidatepassword(false);
      setvalidateemail(false);
      setotpcheck(false);
    } else {
      setvalidateemail(true);
      setvalidatepassword(true);
      setotpcheck(true);
      router.push("/admin/students");
    }
  };
  return (
    <main>
      <div className="w-[598px] max-md:w-full max-md:px-[40px] max-sm:h-auto max-sm:px-[20px] relative bg-[white] h-[100vh] flex flex-col justify-between pl-[60px] pb-[48.07px] pt-[114px] pr-[113px]">
        <div className="flex flex-col gap-[35px]">
          <strong className="text-[24.71px] leading-[29.65px]">Log In </strong>
          <div className="flex flex-col gap-[28px]">
            {(validateemail === false || validatepassword === false) && (
              <p className="absolute max-md:right-[40px] max-sm:relative max-sm:w-[280px] max-sm:top-0 max-sm:right-0 text-black top-[108px] right-[113px] px-[14px] text-[14px] leading-[16.8px] bg-[#F1F1F1] rounded-[6px] py-[13px]">
                The credentials entered do not match{" "}
              </p>
            )}
            <div
              className={
                validateemail
                  ? "hidden text-[#D41717] bg-white left-[78px] max-md:left-[40px] px-[5px] text-[11.91px] leading-[14.29px] top-[173px]"
                  : "absolute text-[#D41717] bg-white left-[78px] max-md:left-[60px] max-sm:left-[30px] px-[5px] text-[11.91px] leading-[14.29px] top-[173px] max-sm:top-[244px]"
              }
            >
              Enter a valid Username{" "}
            </div>
            <input
              id="numberedInput"
              type="text"
              onChange={(e) => setuser_name(e.target.value)}
              placeholder="Username"
              className={
                validateemail
                  ? "pl-[25.71px] border-[1px] max-sm:px-[15px] h-[62px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
                  : "pl-[25.71px] border-[1px] max-sm:px-[15px] h-[62px] border-[#D41717] rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
              }
            />
            <div
              className={
                validatepassword
                  ? "hidden text-[#D41717] bg-white left-[78px] px-[5px] text-[11.91px] leading-[14.29px] top-[274px]"
                  : "absolute text-[#D41717] bg-white left-[78px] max-md:left-[60px] max-sm:left-[30px] px-[5px] text-[11.91px] leading-[14.29px] top-[264px] max-sm:top-[334.5px]"
              }
            >
              Enter a vaild Password{" "}
            </div>
            <input
              id="numberedInput"
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
              className={
                validatepassword
                  ? "pl-[25.71px] border-[1px] h-[62px] border-black rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
                  : "pl-[25.71px] border-[1px] h-[62px] border-[#D41717] rounded-[6px] pt-[19.93px] pb-[20.07px] text-[17.95px] leading-[21.54px]"
              }
            />
            <button
              onClick={handleSubmit}
              className="w-full pt-[19.93px] pb-[20.07px] bg-black text-white rounded-[6px] text-[17.95px] leading-[21.54px]"
            >
              Log In{" "}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
