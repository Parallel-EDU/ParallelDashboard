"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import {toast} from 'react-hot-toast';
import { useRouter } from "next/navigation";


export default function forgotPass() {
  const router = useRouter();

  const [visible, setvisible] = useState(false);
  const [visiblenewpassword, setvisiblenewpassword] = useState(false);
  const [visibleconfirmpassword, setvisibleconfirmpassword] = useState(false);
  const [email, setemail] = useState("");
  const [state, setstate] = useState("enter password");
  const [emailentered, setemailentered] = useState(false);
  const [passwordentered, setpasswordentered] = useState(false);
  const [password, setpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [cofirmpassword, setcofirmpassword] = useState("");
  const [samepassword, setsamepassword] = useState(true);



  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    //const email = e.target.email.value;
    

    try {
      const response = await axios.post('/api/users/forgotPassword/route', { email });
      if (response.data.success) {
        toast.success(response.data.message);

      }
      else if(!user) {
        router.push('/signup')

      }
      
      else {
        toast.error(response.data.error);
      }


    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }




    
    if (email === "") {
      setemailentered(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setemailentered(true);
    } else {
      setstate("enter password");
    }
    if (password === "") {
      setpasswordentered(true);
    }
  };
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newpassword !== cofirmpassword) {
      setsamepassword(false);
    }else{
        setstate('passwordupdated')
    }
  };
  return (
    <main className="flex">
      {state === "" && (
        <div className="w-[595px] max-md:w-full max-md:px-[40px] max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[52.16px] pt-[118.42px] pr-[113px]">
          <div className="flex max-md:w-full w-[502.43px] flex-col gap-[28px]">
            <Image
              src="back.svg"
              className="mt-[0.61px]"
              width={44.97}
              height={44.97}
            />
            <div className="absolute w-[calc(100%-40px)]  max-md:w-hidden z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="logo.svg"
              className="absolute top-[43.13px]"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] mb-[27px] leading-[30px]">
              {emailentered
                ? "We don’t have any account registered with this email."
                : "Enter the email you used to create your account."}
            </strong>
            {!emailentered && (
              <div className="flex flex-col relative gap-[32px]">
                <p className="text-black mb-[4px] text-[13px] left-[18px] bg-white top-[-14px] p-[8px] absolute leading-[15.6px]">
                  Enter your email
                </p>
                <input
                  id="numberedInput"
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                />
              
                <button
                  onClick={handleSubmitEmail}
                  className="w-[421px] py-[20px] max-md:w-full bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
                >
                  Send reset link
                </button>
              </div>
            )}
            {emailentered && (
              <Link href={"/signup"}>
                <button className="w-[421px] max-md:w-full py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base">
                  Register
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
      {state === "enter password" && (
        <div className="w-[595px] max-md:w-full max-md:px-[40px] max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[52.16px] pt-[118.42px] pr-[113px]">
          <div className="flex max-md:w-full w-[502.43px] flex-col gap-[28px]">
            <Image
              src="back.svg"
              className="mt-[0.61px]"
              width={44.97}
              height={44.97}
            />
            <div className="absolute w-[calc(100%-40px)] max-md:hidden z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="logo.svg"
              className="absolute top-[43.13px]"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] mb-[27px] leading-[30px]">
              Enter new password{" "}
            </strong>
            
            <div className="flex flex-col relative gap-[32px]">
              {samepassword ? (
                <p className="text-black text-[13px] left-[18px] bg-white top-[-15px] p-[8px] absolute leading-[15.6px]">
                  Enter new password{" "}
                </p>
              ) : (
                <p className="text-[#D21313] text-[13px] left-[18px] bg-white top-[-15px] p-[8px] absolute leading-[15.6px]">
                  Enter new password{" "}
                </p>
              )}
              <input
                id="numberedInput"
                type={visiblenewpassword ? "text" : "password"}
                placeholder="Enter new password"
                onChange={(e) => setnewpassword(e.target.value)}
                className={
                  samepassword
                    ? "pl-[25.71px] w-[421px]  max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                    : "pl-[25.71px] w-[421px] max-md:w-full text-[#D21313] border-[1px] border-[#D21313] rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                }
              />
              {visiblenewpassword ? (
                <Image
                  src="eye-open.svg"
                  className="absolute cursor-pointer top-[22.13px] max-md:left-auto max-md:right-[20px] left-[378px]"
                  onClick={() => setvisiblenewpassword(!visiblenewpassword)}
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="eye.svg"
                  className="absolute cursor-pointer top-[22.13px] max-md:left-auto max-md:right-[20px] left-[378px]"
                  onClick={() => setvisiblenewpassword(!visiblenewpassword)}
                  width={24}
                  height={24}
                />
              )}{" "}
              {!samepassword ? (
                <p className="text-[#D21313] text-[13px] left-[18px] bg-white top-[80px] p-[8px] absolute leading-[15.6px]">
                  Confirm new password{" "}
                </p>
              ) : (
                <p className="text-black text-[13px] left-[18px] bg-white top-[80px] p-[8px] absolute leading-[15.6px]">
                  Confirm new password{" "}
                </p>
              )}
              <input
                id="numberedInput"
                type={visibleconfirmpassword ? "text" : "password"}
                placeholder="Confirm new password"
                onChange={(e) => setcofirmpassword(e.target.value)}
                className={
                  !samepassword
                    ? "pl-[25.71px] w-[421px] max-md:w-full text-[#D21313] border-[1px] border-[#D21313] rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                    : "pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                }
              />
              {visibleconfirmpassword ? (
                <Image
                  src="eye-open.svg"
                  className="absolute cursor-pointer max-md:left-auto max-md:right-[20px] top-[118.13px] left-[378px]"
                  onClick={() =>
                    setvisibleconfirmpassword(!visibleconfirmpassword)
                  }
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="eye.svg"
                  className="absolute cursor-pointer max-md:left-auto max-md:right-[20px] top-[118.13px] left-[378px]"
                  onClick={() =>
                    setvisibleconfirmpassword(!visibleconfirmpassword)
                  }
                  width={24}
                  height={24}
                />
              )}
              <button
                onClick={handlePasswordUpdate}
                className="w-[421px] py-[20px] max-md:w-full bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
              >
                Update password
              </button>
              {!samepassword && (
                <div className="w-[421px] max-md:w-full pl-[11px] rounded-[3px] py-[16.5px] flex items-center gap-[11.65px] bg-[#FAEFE2]">
                  <Image
                    src="info-icon.svg"
                    width={24}
                    height={24}
                  />{" "}
                  <p className="text-[#B72626] font-medium text-[13px] leading-[15.6px]">
                    The passwords entered do not match.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {state === "passwordupdated" && (
        <div className="w-[595px] max-md:px-[40px] max-md:w-full max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[52.16px] pt-[130px] pr-[113px]">
          <div
            className={
              emailentered
                ? "flex w-[502.43px] max-md:w-full flex-col gap-[32px]"
                : "flex w-[502.43px] max-md:w-full flex-col gap-[50px]"
            }
          >
            <div className="absolute max-md:hidden w-[calc(100%-40px)] z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="logo.svg"
              className="absolute top-[43.13px]"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] leading-[30px]">
              Password updated.
            </strong>
            <div className="flex flex-col relative gap-[32px]">
              <p className="text-black text-[13px] left-[18px] bg-white top-[-14px] p-[8px] absolute leading-[15.6px]">
                Enter your email
              </p>
              <input
                id="numberedInput"
                type="email"
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter your email"
                className="pl-[25.71px] max-md:w-full w-[421px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              {passwordentered ? (
                <p className="text-[#D21313] text-[13px] left-[18px] bg-white top-[80px] p-[8px] absolute leading-[15.6px]">
                  Password invalid
                </p>
              ) : (
                <p className="text-black text-[13px] left-[18px] bg-white top-[80px] p-[8px] absolute leading-[15.6px]">
                  Enter your password
                </p>
              )}
              <input
                id="numberedInput"
                type={visible ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) => setpassword(e.target.value)}
                className={
                  passwordentered
                    ? "pl-[25.71px] w-[421px] max-md:w-full text-[#D21313] border-[1px] border-[#D21313] rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                    : "pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                }
              />
              {visible ? (
                <Image
                  src="eye-open.svg"
                  className="absolute cursor-pointer max-md:left-auto max-md:right-[20px] top-[118.13px] left-[378px]"
                  onClick={() => setvisible(!visible)}
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="eye.svg"
                  className="absolute cursor-pointer max-md:left-auto max-md:right-[20px] top-[118.13px] left-[378px]"
                  onClick={() => setvisible(!visible)}
                  width={24}
                  height={24}
                />
              )}

              <div className="flex w-full flex-col gap-[16px]">
                <div className="flex w-[421px] max-md:w-full justify-between">
                  <div className="flex items-center gap-[8px]">
                    <input
                      type="checkbox"
                      className="w-[18px] h-[18px]"
                      name="signin"
                      id="signin"
                    />
                    <label
                      htmlFor="signin"
                      className="text-[13px] cursor-pointer leading-[15.6px] font-semibold"
                    >
                      Keep me signed in
                    </label>
                  </div>
                  <p className="underline text-[13px] leading-[15.6px] font-semibold">
                    <Link href={"/forgot-password"}>Forgot password</Link>
                  </p>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-[421px] max-md:w-full py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
                >
                  Log In
                </button>
                <p className="mt-[8px] text-[13px] leading-[15.6px] w-full">
                  Are you a new user?
                  <Link href="/signup" className="ml-[8px] underline">
                    <strong>Register</strong>
                  </Link>
                </p>
              </div>
              <div className="text-[13px] max-md:w-full w-[421px] mt-[52.99px] leading-[19.5px] text-[#00000099]">
                By clicking on Log In you are agreeing to Parallel’s
                <span className="ml-[4px] cursor-pointer text-black underline">
                  Terms Of Service
                </span>
                , and
                <span className="ml-[4px] cursor-pointer text-black underline">
                  Privacy Policy.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="h-[100vh] w-full max-md:hidden relative overflow-hidden">
        <Image
          src="/bg-eclips.svg"
          className="w-full object-cover mixblend h-auto"
          width={1024}
          height={700}
        />
        <Image
          src="/bg-eclips.svg"
          className="w-full object-cover mixblend h-auto"
          width={1024}
          height={700}
        />
        <Image
          src="/bg-eclips.svg"
          className="w-full object-cover mixblend h-auto"
          width={1024}
          height={700}
        />
      </div>
    </main>
  );
}
