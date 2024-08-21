"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast"

export default function Login() {
  const router = useRouter();
  const [visible, setvisible] = useState(false);
  const [email, setemail] = useState("");
  const [emailentered, setemailentered] = useState(false);
  const [passwordentered, setpasswordentered] = useState(false);
  const [password, setpassword] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);



  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('/api/users/login/route', { email, password })
      console.log(response);

      if (response.data.success) {
        console.log("login success", response.data);
        router.push('/onboarding');

      }
      else {
        console.log("login failed", response.error);

      }
      
      


    } catch (error) {
      console.log("Incorrect password", error.message);
      setInvalidPassword(true);
      toast.error(error.message)
    }
    e.preventDefault();
    if (email === "") {
      setemailentered(true);
    }
    if (password === "") {
      setpasswordentered(true);
    }
  };
  return (
    <main className="flex">
      <div className="w-[595px] max-md:w-full max-md:px-[40px] max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[52.16px] pt-[130px] pr-[113px]">
        <div
          className={
            emailentered
              ? "flex w-[502.43px] max-md:w-full flex-col gap-[32px]"
              : "flex w-[502.43px] max-md:w-full flex-col gap-[50px]"
          }
        >
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
            {emailentered
              ? "Account with this email doesn’t exist."
              : "Continue upskilling"}
          </strong>
          {!emailentered && (
            <>
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
                {invalidPassword ? (
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
                    invalidPassword
                      ? "pl-[25.71px] w-[421px] max-md:w-full text-[#D21313] border-[1px] border-[#D21313] rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                      : "pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                  }
                />
                {visible ? (
                  <Image
                    src="eye-open.svg"
                    className="absolute cursor-pointer top-[118.13px] max-md:right-[20px] max-md:left-auto left-[378px]"
                    onClick={() => setvisible(!visible)}
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="eye.svg"
                    className="absolute cursor-pointer top-[118.13px] max-md:right-[20px] max-md:left-auto left-[378px]"
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
            </>
          )}
          {emailentered && (
            <>
              <Link href={"/signup"}>
                <button className="w-[421px] max-md:w-full py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base">
                  Register
                </button>
              </Link>

              <p className="text-[20px] pt-[12px] leading-[24px] font-semibold">
                Is this a mistake?
              </p>
              <button
                onClick={handleSubmit}
                className="w-[421px] max-md:w-full py-[20px] bg-transparent border-black border-[1px] text-black font-semibold rounded-[6px] text-base"
              >
                Contact us
              </button>
            </>
          )}
        </div>
      </div>
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
