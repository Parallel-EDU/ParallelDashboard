import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function Login() {
  const [state, setstate] = useState("login");
  const [pan, setpan] = useState("");
  const [pass, setpass] = useState("");
  const [aadhar, setaadhar] = useState("");
  const [marks, setmarks] = useState("");
  const [letter, setletter] = useState("");
  const [count, setcount] = useState(0);
  const [visible, setvisible] = useState(false);
  const [email, setemail] = useState("");
  const [emailentered, setemailentered] = useState(false);
  const [passwordentered, setpasswordentered] = useState(false);
  const [password, setpassword] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setemailentered(true);
    }
    if (password === "") {
      setpasswordentered(true);
    }
  };
  const handleSubmitText = (e) => {
    setcount(e.target.value.length);
  };
  return (
    <main className="flex">
      {state === "login" && (
        <div className="w-[595px] max-md:px-[40px] max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[52.16px] pt-[130px] pr-[113px]">
          <div
            className={"flex w-[502.43px] flex-col gap-[32px] max-md:w-full"}
          >
            <div className="absolute max-md:hidden w-[calc(100%-40px)] z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="../../logo.svg"
              className="absolute top-[43.13px] cursor-pointer"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] leading-[30px]">
              Finish this onboarding process to get started as a trainer at
              parallel
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
                className="pl-[25.71px] max-md:w-full w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
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
                  passwordentered
                    ? "pl-[25.71px] w-[421px] max-md:w-full text-[#D21313] border-[1px] border-[#D21313] rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                    : "pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                }
              />
              {visible ? (
                <Image
                  src="../../eye-open.svg"
                  className="absolute cursor-pointer top-[118.13px] left-[378px] max-md:right-[20px] max-md:left-auto"
                  onClick={() => setvisible(!visible)}
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="../../eye.svg"
                  className="absolute cursor-pointer top-[118.13px] left-[378px] max-md:right-[20px] max-md:left-auto"
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
                </div>
                <button
                  onClick={() => setstate("1/5")}
                  className="w-[421px] max-md:w-full py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
                >
                  Register
                </button>
              </div>
              <div className="text-[13px] w-[421px] max-md:w-full mt-[52.99px] leading-[19.5px] text-[#00000099]">
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
      {state === "1/5" && (
        <div className="w-[710px] max-md:w-full max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[113px]">
          <div className="flex w-[502.43px] max-md:w-full flex-col gap-[32px] max-md:w-full">
            <div className="flex max-md:w-full items-center mb-[9px] w-[420.97px] justify-between">
              <Image
                src="../../back.svg"
                className="mt-[0.61px]"
                onClick={() => setstate("login")}
                width={44.97}
                height={44.97}
              />
              <p className="text-base text-[#00000099]">1/5</p>
            </div>
            <div className="absolute max-md:hidden w-[calc(100%-40px)] z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="../../logo.svg"
              className="absolute top-[43.13px] cursor-pointer"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] mb-[22px] leading-[30px]">
              We’d like to know more about you
            </strong>
            <div className="flex flex-col relative gap-[32px]">
              <p className="text-black text-[13px] left-[18px] bg-white top-[-14px] p-[8px] absolute leading-[15.6px]">
                Enter your name
              </p>
              <input
                id="numberedInput"
                type="text"
                placeholder="Enter your name"
                className="pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[81px] p-[8px] absolute leading-[15.6px]">
                Enter your phone number
              </p>
              <div className="pl-[25.71px] flex w-[421px] max-md:w-full border-[1px] border-black rounded-[6px]">
                <p className="text-base pt-[21px]">+ 91 |</p>
                <input
                  id="numberedInput"
                  type="number"
                  placeholder="Enter your phone number"
                  className="pt-[21.5px] pl-[9.11px] max-md:w-[calc(100%-100px)] w-[350px] pb-[16.5px] text-base"
                />
              </div>
              <p className="text-black text-[13px] left-[18px] bg-white top-[177px] p-[8px] absolute leading-[15.6px]">
                Enter your email
              </p>
              <input
                id="numberedInput"
                type="email"
                placeholder="Enter your email"
                className="pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[273px] p-[8px] absolute leading-[15.6px]">
                Enter your DOB(DD/MM/YY)
              </p>
              <input
                id="numberedInput"
                type="number"
                placeholder="DD/MM/YY"
                className="pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />

              <button
                onClick={() => setstate("2/5")}
                className="w-[421px] max-md:w-full py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {state === "2/5" && (
        <div className="w-[710px] max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[113px]">
          <div className="flex w-[502.43px] flex-col gap-[32px] max-md:w-full">
            <div className="flex max-md:w-full items-center mb-[9px] w-[420.97px] justify-between">
              <Image
                src="../../back.svg"
                onClick={() => setstate("1/5")}
                className="mb-[0.61px] cursor-pointer"
                width={44.97}
                height={44.97}
              />
              <p className="text-base text-[#00000099]">2/5</p>
            </div>
            <div className="absolute w-[calc(100%-40px)] max-md:hidden z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="../../logo.svg"
              className="absolute top-[43.13px] cursor-pointer"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] mb-[22px] leading-[30px]">
              We’d like to know more about you
            </strong>
            <div className="flex max-md:w-full flex-col relative">
              <div className="flex max-md:w-full  max-md:flex-col gap-[32px]">
                <div className="max-md:w-full">
                  <p className="text-black text-[13px] left-[18px] bg-white top-[-17px] p-[8px] absolute leading-[15.6px]">
                    State
                  </p>
                  <input
                    id="numberedInput"
                    type="email"
                    placeholder="Enter the name of state"
                    className="pl-[25.71px] max-md:w-full w-[226px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                  />
                </div>
                <div className="max-md:w-full">
                  <p className="text-black text-[13px] max-md:left-[18px] max-md:top-[85px]  left-[276px] bg-white top-[-17px] p-[8px] absolute leading-[15.6px]">
                    City
                  </p>
                  <input
                    id="numberedInput"
                    type="email"
                    placeholder="Enter the name of city"
                    className="pl-[25.71px] w-[226px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                  />
                </div>
              </div>
              <p className="text-black text-[13px] left-[18px] bg-white max-md:top-[187px] top-[85px] p-[8px] absolute leading-[15.6px]">
                Enter postal ZIP code{" "}
              </p>
              <input
                id="numberedInput"
                type="email"
                placeholder="Enter postal ZIP code"
                className="pl-[25.71px] w-[421px] max-md:w-full mt-[38px] border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[187px] max-md:top-[284px] p-[8px] absolute leading-[15.6px]">
                Enter house address
              </p>
              <p className="text-black max-md:right-[20px] text-[13px] right-[88px] bg-white bottom-[100px] p-[8px] absolute leading-[15.6px]">
                {count} / 100
              </p>
              <textarea
                id="numberedInput"
                type="number"
                placeholder="Enter house address"
                onChange={handleSubmitText}
                maxLength={100}
                className="pl-[25.71px] resize-none h-[224px] mt-[38px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              ></textarea>
              <button
                onClick={() => setstate("3/5")}
                className="w-[421px] max-md:w-full mt-[32px] py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {state === "3/5" && (
        <div className="w-[710px] max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[113px]">
          <div className="flex w-[502.43px] flex-col gap-[32px] max-md:w-full">
            <div className="flex items-center max-md:w-full mb-[9px] w-[420.97px] justify-between">
              <Image
                src="../../back.svg"
                onClick={() => setstate("2/5")}
                className="mb-[0.61px] cursor-pointer"
                width={44.97}
                height={44.97}
              />
              <p className="text-base text-[#00000099]">3/5</p>
            </div>

            <div className="absolute w-[calc(100%-40px)] max-md:hidden z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="../../logo.svg"
              className="absolute top-[43.13px] cursor-pointer"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] mb-[22px] leading-[30px]">
              We’d like to know more about you
            </strong>
            <div className="flex flex-col gap-[32px] relative">
              <p className="text-black text-[13px] left-[18px] bg-white top-[-14px] p-[8px] absolute leading-[15.6px]">
                Enter your PAN number
              </p>
              <input
                id="numberedInput"
                type="text"
                placeholder="Enter your PAN number"
                className="pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[81px] p-[8px] absolute leading-[15.6px]">
                Upload PAN card photo
              </p>
              <div className="flex w-[421px] max-md:w-full">
                <input
                  id="pan"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setpan(file.name);
                    }
                  }}
                  className="pt-[21.5px] hidden pl-[9.11px] w-[350px] pb-[16.5px] text-base"
                />
                <label
                  htmlFor="pan"
                  className="cursor-pointer max-md:w-full flex justify-between w-[420px]"
                >
                  <div className="pt-[21.5px] max-md:w-[calc(100%-75px)] whitespace-nowrap w-[100px] overflow-scroll flex pl-[25.71px] w-[337px]  border-[1px] border-black rounded-[6px] justify-between items-center text-[#00000099] pr-[11.68px] w-[350px] pb-[16.5px] text-base">
                    <i>{pan === "" ? "Click to upload photo" : pan}</i>
                    <span className=" text-[13px] leading-[15.6px]">
                      {pan === "" ? (
                        "Max file size: 3 MB"
                      ) : (
                        <Image
                          src="../../green-tick.svg"
                          width={16}
                          height={12}
                        />
                      )}
                    </span>
                  </div>
                  {pan === "" ? (
                    <Image src="../../upload-pan.svg" width={62} height={67} />
                  ) : (
                    <Image
                      src="../../undo.svg"
                      onClick={() => setpan("")}
                      width={62}
                      height={67}
                    />
                  )}
                </label>
              </div>
              <p className="text-black text-[13px] left-[18px] bg-white top-[177px] p-[8px] absolute leading-[15.6px]">
                Upload passport sized photo
              </p>
              <div className="flex w-[421px] max-md:w-full">
                <input
                  id="passport"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setpass(file.name);
                    }
                  }}
                  className="pt-[21.5px] hidden pl-[9.11px] w-[350px] pb-[16.5px] text-base"
                />
                <label
                  htmlFor="passport"
                  className="cursor-pointer max-md:w-full flex justify-between w-[420px]"
                >
                  <div className="pt-[21.5px] max-md:w-[calc(100%-75px)] whitespace-nowrap w-[100px] overflow-scroll flex pl-[25.71px] w-[337px]  border-[1px] border-black rounded-[6px] justify-between items-center text-[#00000099] pr-[11.68px] w-[350px] pb-[16.5px] text-base">
                    <i>{pass === "" ? "Click to upload photo" : pass}</i>
                    <span className=" text-[13px] leading-[15.6px]">
                      {pass === "" ? (
                        "Max file size: 3 MB"
                      ) : (
                        <Image
                          src="../../green-tick.svg"
                          width={16}
                          height={12}
                        />
                      )}
                    </span>
                  </div>
                  {pass === "" ? (
                    <Image src="../../upload-pan.svg" width={62} height={67} />
                  ) : (
                    <Image
                      src="../../undo.svg"
                      onClick={() => setpass("")}
                      width={62}
                      height={67}
                    />
                  )}
                </label>
              </div>
              <button
                onClick={() => setstate("4/5")}
                className="w-[421px] max-md:w-full py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {state === "4/5" && (
        <div className="w-[710px] max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[113px]">
          <div className="flex w-[502.43px] flex-col gap-[32px] max-md:w-full">
            <div className="flex items-center mb-[9px] max-md:w-full w-[420.97px] justify-between">
              <Image
                src="../../back.svg"
                onClick={() => setstate("3/5")}
                className="mb-[0.61px] cursor-pointer"
                width={44.97}
                height={44.97}
              />
              <p className="text-base text-[#00000099]">4/5</p>
            </div>

            <div className="absolute w-[calc(100%-40px)] max-md:hidden z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="../../logo.svg"
              className="absolute top-[43.13px] cursor-pointer"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] mb-[22px] leading-[30px]">
              We’d like to know more about you
            </strong>
            <div className="flex flex-col gap-[32px] relative">
              <p className="text-black text-[13px] left-[18px] bg-white top-[-14px] p-[8px] absolute leading-[15.6px]">
                Enter your Aadhaar number
              </p>
              <input
                id="numberedInput"
                type="text"
                placeholder="Enter your Aadhaar number"
                className="pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
              />
              <p className="text-black text-[13px] left-[18px] bg-white top-[81px] p-[8px] absolute leading-[15.6px]">
                Upload Aadhaar card photo
              </p>
              <div className="flex w-[421px] max-md:w-full">
                <input
                  id="aadhar"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setaadhar(file.name);
                    }
                  }}
                  className="pt-[21.5px] hidden pl-[9.11px] w-[350px] pb-[16.5px] text-base"
                />
                <label
                  htmlFor="pan"
                  className="cursor-pointer max-md:w-full flex justify-between w-[420px]"
                >
                  <div className="pt-[21.5px] max-md:w-[calc(100%-75px)] whitespace-nowrap w-[100px] overflow-scroll flex pl-[25.71px] w-[337px]  border-[1px] border-black rounded-[6px] justify-between items-center text-[#00000099] pr-[11.68px] w-[350px] pb-[16.5px] text-base">
                    <i>{aadhar === "" ? "Click to upload photo" : aadhar}</i>
                    <span className=" text-[13px] leading-[15.6px]">
                      {aadhar === "" ? (
                        "Max file size: 3 MB"
                      ) : (
                        <Image
                          src="../../green-tick.svg"
                          width={16}
                          height={12}
                        />
                      )}
                    </span>
                  </div>
                  {aadhar === "" ? (
                    <Image src="../../upload-pan.svg" width={62} height={67} />
                  ) : (
                    <Image
                      src="../../undo.svg"
                      onClick={() => setaadhar("")}
                      width={62}
                      height={67}
                    />
                  )}
                </label>
              </div>
              <p className="text-black text-[13px] left-[18px] bg-white top-[177px] p-[8px] absolute leading-[15.6px]">
                Upload 10th marks card photo
              </p>
              <div className="flex w-[421px] max-md:w-full">
                <input
                  id="passport"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setmarks(file.name);
                    }
                  }}
                  className="pt-[21.5px] hidden pl-[9.11px] w-[350px] pb-[16.5px] text-base"
                />
                <label
                  htmlFor="passport"
                  className="cursor-pointer max-md:w-full flex justify-between w-[420px]"
                >
                  <div className="pt-[21.5px] max-md:w-[calc(100%-75px)] whitespace-nowrap w-[100px] overflow-scroll flex pl-[25.71px] w-[337px]  border-[1px] border-black rounded-[6px] justify-between items-center text-[#00000099] pr-[11.68px] w-[350px] pb-[16.5px] text-base">
                    <i>{marks === "" ? "Click to upload photo" : marks}</i>
                    <span className=" text-[13px] leading-[15.6px]">
                      {marks === "" ? (
                        "Max file size: 3 MB"
                      ) : (
                        <Image
                          src="../../green-tick.svg"
                          width={16}
                          height={12}
                        />
                      )}
                    </span>
                  </div>
                  {marks === "" ? (
                    <Image src="../../upload-pan.svg" width={62} height={67} />
                  ) : (
                    <Image
                      src="../../undo.svg"
                      onClick={() => setmarks("")}
                      width={62}
                      height={67}
                    />
                  )}
                </label>
              </div>
              <p className="text-black text-[13px] left-[18px] bg-white top-[274px] p-[8px] absolute leading-[15.6px]">
                Upload experience letter
              </p>
              <div className="flex w-[421px] max-md:w-full">
                <input
                  id="passport"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setletter(file.name);
                    }
                  }}
                  className="pt-[21.5px] hidden pl-[9.11px] w-[350px] pb-[16.5px] text-base"
                />
                <label
                  htmlFor="passport"
                  className="cursor-pointer max-md:w-full flex justify-between w-[420px]"
                >
                  <div className="pt-[21.5px] max-md:w-[calc(100%-75px)] whitespace-nowrap w-[100px] overflow-scroll flex pl-[25.71px] w-[337px]  border-[1px] border-black rounded-[6px] justify-between items-center text-[#00000099] pr-[11.68px] w-[350px] pb-[16.5px] text-base">
                    <i>{letter === "" ? "Click to upload PDF" : letter}</i>
                    <span className=" text-[13px] leading-[15.6px]">
                      {letter === "" ? (
                        "Max file size: 3 MB"
                      ) : (
                        <Image
                          src="../../green-tick.svg"
                          width={16}
                          height={12}
                        />
                      )}
                    </span>
                  </div>
                  {letter === "" ? (
                    <Image src="../../upload-pan.svg" width={62} height={67} />
                  ) : (
                    <Image
                      src="../../undo.svg"
                      onClick={() => setletter("")}
                      width={62}
                      height={67}
                    />
                  )}
                </label>
              </div>
              <button
                onClick={() => setstate("5/5")}
                className="w-[421px] max-md:w-full py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {state === "5/5" && (
        <div className="w-[710px] max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] flex flex-col justify-between pl-[40px] pb-[42.16px] pt-[118.42px] pr-[167px]">
          <div className="flex w-[502.43px] flex-col gap-[32px] max-md:w-full">
            <div className="flex items-center max-md:w-full mb-[9px] w-[420.97px] justify-between">
              <Image
                src="../../back.svg"
                onClick={() => setstate("4/5")}
                className="mb-[0.61px] cursor-pointer"
                width={44.97}
                height={44.97}
              />
              <p className="text-base text-[#00000099]">5/5</p>
            </div>
            <div className="absolute w-[calc(100%-40px)] max-md:hidden z-[-1] top-0 h-full overflow-hidden">
              <div className="radical-circle"></div>
            </div>
            <Image
              src="../../logo.svg"
              className="absolute top-[43.13px] cursor-pointer"
              width={127.79}
              height={24}
            />
            <strong className="text-[25px] mb-[22px] leading-[30px]">
              We’d like to know more about you
            </strong>
            <div className="flex w-[494px] max-md:w-full flex-col relative">
              <div className="flex flex-col relative gap-[32px]">
                <p className="text-black text-[13px] left-[18px] bg-white top-[-14px] p-[8px] absolute leading-[15.6px]">
                  Enter GitHub profile link
                </p>
                <input
                  id="numberedInput"
                  type="email"
                  placeholder="Paste link here"
                  className="pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                />
                <p className="text-black text-[13px] left-[18px] bg-white top-[80px] p-[8px] absolute leading-[15.6px]">
                  Enter LinkedIn profile link
                </p>
                <input
                  id="numberedInput"
                  type="text"
                  placeholder="Paste link here"
                  onChange={(e) => setpassword(e.target.value)}
                  className="pl-[25.71px] w-[421px] max-md:w-full border-[1px] border-black rounded-[6px] pt-[21.5px] pb-[16.5px] text-base"
                />
                <div className="flex w-full flex-col gap-[16px]">
                  <button
                    onClick={() => setstate("done")}
                    className="w-[421px] max-md:w-full py-[20px] bg-[#30E29D] text-black font-semibold rounded-[6px] text-base"
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {state === "done" && (
        <div className="w-[710px] max-md:px-[40px] overflow-scroll max-sm:px-[20px] max-md:w-full bg-[white] h-[100vh] pl-[40px] pb-[40px] pt-[118.42px] pr-[167px]">
          <div className="absolute w-[calc(100%-40px)] z-[-1] top-0 h-full overflow-hidden">
            <div className="radical-circle"></div>
          </div>
          <Image
            src="../../logo.svg"
            className="absolute top-[43.13px] cursor-pointer"
            width={127.79}
            height={24}
          />
          <strong className="text-[25px] pb-[26px] leading-[30px]">
            Thank you for providing all the details. You can close this window
            now.{" "}
          </strong>
          <p className="text-[#00000099] mt-[26px] text-base">
            Please check your email for further updates.{" "}
          </p>
        </div>
      )}
      <div className="w-[calc(100%-500px)] max-md:hidden h-[100vh] absolute right-0 overflow-hidden">
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
