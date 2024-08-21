"use client";


import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";




export default function Signup() {
  const router = useRouter();
  

  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState(false);
  const [password, setPassword] = useState("");
  const [userExists, setUserExists] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("before response");
  
      const response = await axios.post("/api/users/signup/route", { email, password });
      console.log("after response");
  
      if (response.data.success) {
        console.log("registration successful");
        router.push('/login');
      } else {
        if (response.data.error === 'User already exists') {
          console.log("User already exists");
          setUserExists(true); // Update state if user exists
          toast.error("User already exists");
        } else if (response.data.error === 'Invalid email address') {
          console.log("Invalid email address");
          toast.error("Invalid email address");
        } else {
          console.log("registration failed");
          toast.error("Registration failed");
        }
      }
  
      console.log("Signup success", response.data);
    } catch (error) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    }
    if (email === "") {
      setEmailEntered(true);
      return;
    }
    if (password === "") {
      setPasswordEntered(true);
      return;
    }

    
    
  };

  return (
    <main className="flex">
      <div className="w-[595px] max-md:w-full max-md:px-[40px] max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[52.16px] pt-[130px] pr-[113px]">
        <div className="flex w-[502.43px] max-md:w-full flex-col gap-[50px]">
          <div className="absolute w-[calc(100%-40px)] max-md:hidden z-[-1] top-0 h-full overflow-hidden">
            <div className="radical-circle"></div>
          </div>
          <Image
            src="logo.svg"
            className="absolute top-[43.13px]"
            width={127.79}
            height={24}
          />
          <strong className="text-[25px] leading-[30px]">
            {userExists
              ? "An account with this email already exists. Would you like to log in?"
              : "Register to start upskilling right away!"}
          </strong>
          <div className="flex flex-col relative gap-[32px]">
            <p className="text-black text-[13px] left-[18px] bg-white top-[-14px] p-[8px] absolute leading-[15.6px]">
              Enter your email
            </p>
            <input
              id="numberedInput"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
            />
            {passwordEntered ? (
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
              onChange={(e) => setPassword(e.target.value)}
              className={
                passwordEntered
                  ? "pl-[25.71px] w-[421px] max-md:w-full text-[#D21313] border-[1px] border-[#D21313] rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                  : "pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              }
            />
            {visible ? (
              <Image
                src="eye-open.svg"
                className="absolute cursor-pointer max-md:left-auto max-md:right-[20px] top-[118.13px] left-[378px]"
                onClick={() => setVisible(!visible)}
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="eye.svg"
                className="absolute cursor-pointer max-md:left-auto max-md:right-[20px] top-[118.13px] left-[378px]"
                onClick={() => setVisible(!visible)}
                width={24}
                height={24}
              />
            )}
            <div className="flex w-[421px] max-md:w-full flex-col gap-[16px]">
              <div className="flex justify-between">
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
                <p
                  className={
                    emailEntered
                      ? "underline text-[13px] leading-[15.6px] font-semibold"
                      : "underline hidden text-[13px] leading-[15.6px] font-semibold"
                  }
                >
                  <Link href={'/forgot-password'}>Forgot password</Link>
                </p>
              </div>
              {!emailEntered ? (
                <>
                  <button
                    onClick={handleSubmit}
                    className="w-[421px] max-md:w-full py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
                  >
                    Register
                  </button>
                  <p className="mt-[8px] text-[13px] leading-[15.6px] w-full">
                    Have an account?
                    <Link href="/login" className="ml-[8px] underline">
                      <strong>Log In</strong>
                    </Link>
                  </p>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSubmit}
                    className="w-[421px] max-md:w-full py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
                  >
                    Login
                  </button>
                  <p className="mt-[8px] text-[13px] leading-[15.6px] w-full">
                    Are you a new user?
                    <Link href="/login" className="ml-[8px] underline">
                      <strong>Register</strong>
                    </Link>
                  </p>
                </>
              )}
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
      <div className="h-[100vh] max-md:hidden w-full relative overflow-hidden">
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
