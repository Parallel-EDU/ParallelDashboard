import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import style from "../styles/style.module.css";
import axios from "axios";
import NextVideo from "next-video";
import sample from "../videos/file_example_MP4_640_3MG.mp4";

export default function Dashboard() {
  const [fold, setFold] = useState("");
  const [assignments, setAssignments] = useState([]);
  const [guestSession, setGuestSession] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [videos, setVideos] = useState([]);
  const [curriculum, setCurriculum] = useState([]);
  const [error, setError] = useState(null);

  const [userData, setUserData] = useState(null);
  const [tokenId, settokenId] = useState(null);
  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await axios.get(`/api/cookies`);
        settokenId(response.data.id);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchTokenData();
  }, []);

  useEffect(() => {
    if (!tokenId) {
      console.error("TokenId is not defined");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/onboarding/personalInfo/route`);
        const data = response.data;
        const results = data.filter((student) => student.SID === tokenId);
        setUserData(results[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [tokenId]);

  useEffect(() => {
    if (!userData) return;

    const fetchAssignments = async () => {
      try {
        const response = await axios.get(`/api/platform/assignments/route?batchId=${userData.batchId}`);
        setAssignments(response.data.data)
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    const fetchGuestSession = async () => {
      try {
        const response = await axios.get("/api/platform/guestSession/route");
        setGuestSession(response.data.data);
      } catch (error) {
        console.error("Error fetching guest sessions:", error);
      }
    };

    const fetchSchedules = async () => {
      try {
        const response = await axios.get("/api/platform/schedules/route");
        const schedule = response.data.data;
        const results = schedule.filter((schedule) =>
          schedule.batchId
            ?.toLowerCase()
            .includes(userData.batchId.toLowerCase())
        );

        setSchedules(results);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };
    const fetchCurriculum = async () => {
      try {
        const response = await axios.get("/api/admin/moduleInfo");
        const modules = response.data;
        const results = modules.filter((module) =>
          module.courseName
            ?.toLowerCase()
            .includes(userData.course.toLowerCase())
        );
        setCurriculum(results);
      } catch (error) {
        setError("Failed to fetch curriculum");
      }
    };
    fetchCurriculum();
    fetchAssignments();
    fetchGuestSession();
    fetchSchedules();
  }, [userData]);

  return (
    <>
      <Navbar />
      {fold === "" && (
        <main className="px-[60px] max-md:px-[40px] max-sm:px-[20px] max-hamburger:flex-col pb-[31px] pt-[42px] flex gap-[20px]">
          <div className="w-[58.61%] max-hamburger:w-full">
            <section className="pl-[25px] bg-white rounded-[6px] max-md:px-[20px] max-sm:px-[15px] pr-[40px] pb-[28px] pt-[27.96px]">
              <h1 className="pb-[24.04px] text-[20px] border-[#C4C4C4] border-b-[1px] leading-[24px] font-bold">
                Schedule
              </h1>
              {schedules.map((schedule, index) => (
                <div className="py-[18.5px] max-[500px]:flex-col max-[500px]:gap-[20px] border-b-[1px] border-[#C4C4C4] pl-[18.3px] pr-[15.6px] flex justify-between max-md:px-[0px] max-sm:px-[5px]">
                  <h1 className="text-base opacity-70">{schedule.day}</h1>
                  <div className="w-[478.35px] max-[1350px]:w-auto max-[1040px]:w-[210px]">
                    <h1 className="text-base opacity-70 mb-[4px]">
                      Class: {schedule.startTime} to {schedule.endTime}
                    </h1>
                    <p className="text-[20px]">{schedule.sessionName}</p>
                  </div>
                </div>
              ))}
            </section>
            <section className="mt-[24.62px] h-[659px] rounded-[6px] bg-white">
              <div className="pt-[30px] max-sm:p-[15px] max-sm:items-center pb-[23px] pl-[25.1px] pr-[43px] border-b-[1px] flex justify-between">
                <h1 className="py-[1.5px] text-[20px] leading-[24px] font-bold">
                  Modules
                </h1>
                <div
                  onClick={() => setFold("curriculum")}
                  className="border-[1px] cursor-pointer border-black py-[5px] px-[10px] rounded-[4px]"
                >
                  View curriculum
                </div>
              </div>
              <div className={style.module}>
                {curriculum.map((curriculum, index) => (
                  <div
                    key={index}
                    className="pt-[33px] max-md:px-[20px] max-sm:px-[15px] pl-[25px] pr-[41.64px]"
                  >
                    <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                      Module {index + 1}
                    </p>
                    <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                      <Image
                        src="/images/Frame 18.svg"
                        className="w-[28.64px] h-[28.64px]"
                        width={28.6}
                        height={28.64}
                      />
                      <div className="flex justify-between max-[550px]:flex-col gap-[12px] w-full">
                        <div className="flex gap-[20px] max-smallerphone:gap-[8px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <h1 className="text-[20px] max-[1100px]:w-[200px] max-[550px]:w-full leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate max-[550px]:whitespace-normal">
                            {curriculum.lesson1Name}
                          </h1>
                        </div>
                        <div
                          onClick={() => setFold("video")}
                          className="cursor-pointer max-[550px]:text-center border-[1px] border-black py-[5px] px-[10px] rounded-[4px]"
                        >
                          Watch Video
                        </div>
                      </div>
                    </div>
                    <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                      <Image
                        src="/images/Frame 18.svg"
                        className="w-[28.64px] h-[28.64px]"
                        width={28.6}
                        height={28.64}
                      />
                      <div className="flex justify-between max-[550px]:flex-col gap-[12px] w-full">
                        <div className="flex gap-[20px] max-smallerphone:gap-[8px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            02
                          </p>
                          <h1 className="text-[20px] max-[550px]:whitespace-normal max-[1100px]:w-[200px] max-[550px]:w-full leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                            {curriculum.lesson2Name}
                          </h1>
                        </div>
                        <div
                          onClick={() => setFold("video")}
                          className="cursor-pointer max-[550px]:text-center border-[1px] border-black py-[5px] px-[10px] rounded-[4px]"
                        >
                          Watch Video
                        </div>
                      </div>
                    </div>
                    <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                      <Image
                        src="/images/Frame 18.svg"
                        className="w-[28.64px] h-[28.64px]"
                        width={28.6}
                        height={28.64}
                      />
                      <div className="flex justify-between max-[550px]:flex-col gap-[12px] w-full">
                        <div className="flex gap-[20px] max-smallerphone:gap-[8px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            03
                          </p>
                          <h1 className="text-[20px] max-[1100px]:w-[200px] max-[550px]:w-full leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate max-[550px]:whitespace-normal">
                            {curriculum.lesson3Name}
                          </h1>
                        </div>
                        <div
                          onClick={() => setFold("video")}
                          className="cursor-pointer max-[550px]:text-center border-[1px] border-black py-[5px] px-[10px] rounded-[4px]"
                        >
                          Watch Video
                        </div>
                      </div>
                    </div>
                    <div className="py-[10px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                      <Image
                        src="/images/Frame 18.svg"
                        className="w-[28.64px] h-[28.64px]"
                        width={28.6}
                        height={28.64}
                      />
                      <div className="flex justify-between max-[550px]:flex-col gap-[12px] w-full">
                        <div className="flex gap-[20px] max-smallerphone:gap-[8px]">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            04
                          </p>
                          <h1 className="text-[20px] max-[1100px]:w-[200px] max-[550px]:w-full leading-[26px] max-smallphone:text-base max-sm:w-[80%] max-xl:truncate max-[550px]:whitespace-normal">
                            {curriculum.lesson4Name}
                          </h1>
                        </div>
                        <div
                          onClick={() => setFold("video")}
                          className="cursor-pointer max-[550px]:text-center border-[1px] border-black py-[5px] px-[10px] rounded-[4px]"
                        >
                          Watch Video
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="w-[41.4%] max-hamburger:w-full">
            <section className="w-[100%] rounded-[6px] gap-[20px] max-xl:h-auto max-sm:px-[16px] py-[22.5px] flex justify-between pl-[24px] pr-[26px] h-[77px] bg-white">
              <div className="flex gap-[9px]">
                <Image
                  src="/images/whatsapp.svg"
                  width={26.53}
                  height={26.67}
                />
                <p className="text-[16px] max-sm:text-sm leading-[20.8px] py-[5.5px] font-bold capitalize">
                  Clear doubts, connect with your peers and more
                </p>
              </div>
              <Image src="/images/open.svg" width={16.53} height={16.67} />
            </section>
            <section className="w-[100%] rounded-[6px] mt-[22px] h-[339px] bg-white overflow-y-auto">
              <div className=" pl-[23.5px] pt-[27.36px] pb-[29.64px] flex justify-between pr-[38px]">
                <h1 className="text-[20px] font-bold leadng-[26px] block w-full">
                  Assignments
                </h1>

                <p className="text-[14px] text-white p-[8px] bg-[#0C6926] rounded-[24px] w-[46px] ">
                  New
                </p>
              </div>

              <div className="pl-[23px] pr-[38px]">
                {assignments.length > 0 ? (
                  assignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="border-b-[1px] pb-[20px] max-xl:justify-center max-xl:gap-[12px] max-xl:items-start max-xl:flex-col"
                    >
                      <p className="text-[16px] leading-[20.8px] opacity-70 max-smallerphone:text-sm">
                        {assignment.dueDate}
                      </p>
                      <h1 className="max-smallerphone:text-base text-[20px] leading-[26px] mt-[12px]">
                        {assignment.title}
                      </h1>
                      <button className="h-[43px] mt-[14px] w-[168px] max-sm:w-full border-[1px] border-black rounded-[4px] text-base">
                        View Assignment
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No assignments available</p>
                )}
              </div>
            </section>
            <section className="w-[100%] mt-[22px] rounded-[6px] h-[404px] bg-white overflow-y-auto">
              <div className="">
                <h1 className="text-[20px] font-bold leadng-[26px] pl-[23.5px] pt-[27.36px] pb-[17.64px] block w-full">
                  Guest sessions
                </h1>
              </div>
              <div className="zoom pl-[23px] pr-[38px]">
                {guestSession.length > 0 ? (
                  guestSession.map((session) => (
                    <div
                      key={session._id}
                      className="border-b-[1px] py-[13px] flex justify-between items-center max-xl:justify-center max-xl:gap-[12px] max-xl:items-start max-xl:flex-col"
                    >
                      <div className="w-[268px]">
                        <p className="text-[16px] leading-[20.8px] opacity-70 max-smallerphone:text-sm">
                          {session.date}{" "}
                          <span className="ml-[17px]">{session.time}</span>
                        </p>
                        <h1 className="max-smallerphone:text-base text-[20px] leading-[26px] mt-[11px]">
                          {session.topic}
                        </h1>
                      </div>
                      <button
                        className="h-[43px] w-[134px] max-sm:w-full border-[1px] border-black rounded-[6px] text-base"
                        onClick={() =>
                          window.open(
                            "https://meet.google.com/landing",
                            "_blank"
                          )
                        }
                      >
                        Join in Meet
                      </button>{" "}
                    </div>
                  ))
                ) : (
                  <p className="text-left">No guest sessions available</p>
                )}
              </div>
            </section>
            <section className="w-[100%] rounded-[6px] mt-[22px] pt-[25.4px] pb-[36px] pl-[22.32px] max-sm:p-[20px] max-sm:h-auto h-[189px] bg-white">
              <p className="text-[20px] leading-[26px] pl-[2.78px] mb-[27px] max-sm:mb-[7px] font-bold capitalize">
                Support{" "}
              </p>
              <p className="text-[16px] leading-[20.8px]">
                Facing Issues? Get Help At{" "}
              </p>
              <button className="font-bold max-sm:w-full mt-[16px] w-[111px] h-[43.07px] rounded-[6px] bg-[#30E29D]">
                Support
              </button>
            </section>
          </div>
        </main>
      )}
      {fold === "curriculum" && (
        <main className="px-[60px] pb-[30px] pt-[56.02px] max-md:px-[40px] max-sm:px-[20px]">
          <div className="flex items-center">
            <Image
              src="/images/back.svg"
              className="mt-[0.61px] cursor-pointer"
              onClick={() => setFold("")}
              width={44.97}
              height={44.97}
            />
            <p
              className="ml-[30px] max-sm:ml-[10px] text-base opacity-60 cursor-pointer"
              onClick={() => setFold("")}
            >
              Class
            </p>
            <p className="ml-[5px]">&gt;</p>
            <p className="ml-[5px] text-base underline font-semibold">
              Curriculum
            </p>
          </div>

          <section className="mt-[24.62px] h-[659px] rounded-[6px] bg-white">
            <div className="pt-[30px] max-sm:p-[15px] max-sm:items-center pb-[23px] max-lg:px-[20px] pl-[25.1px] pr-[43px] border-b-[1px] flex justify-between">
              <h1 className="py-[1.5px] text-[20px] leading-[24px] font-bold">
                Modules
              </h1>
            </div>
            <div className={style.module}>
              {error && <p className="text-red-500">{error}</p>}
              {curriculum ? (
                curriculum.map((module, index) => (
                  <div
                    key={index}
                    className="pt-[33px] max-lg:px-[20px] max-sm:px-[15px] pl-[25px] pr-[73px]"
                  >
                    <p className="text-[16px] w-[100%] pb-[21px] border-b-[1px] leading-[20.8px] text-[#000000]">
                      Module {index + 1}
                    </p>
                    <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                      <Image
                        src="/images/Frame 18.svg"
                        className="w-[28.64px] h-[28.64px]"
                        width={28.6}
                        height={28.64}
                      />
                      <div className="flex max-hamburger:flex-col justify-between w-full gap-[12px] max-sm:w-full">
                        <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            01
                          </p>
                          <div className="">
                            <h1 className="text-[20px] leading-[26px] w-[514px] max-md:w-full max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                              {module.lesson1Name}
                            </h1>
                            <p className="w-[840px] max-[500px]:hidden max-xl:w-[600px] max-hamburger:w-full mt-[6.8px]">
                             
                              {module.lesson1Description}
                            </p>
                          </div>
                        </div>
                        <p className="w-[840px] max-[500px]:w-[calc(100%+20px)] max-[500px]:ml-[-40px] max-[500px]:block hidden max-xl:w-[600px] max-hamburger:w-full mt-[6.8px]">
                            {module.lesson1Description}
                        </p>
                        <div
                          onClick={() => setFold("video")}
                          className="border-[1px] max-sm:w-[90%] max-[500px]:w-[calc(100%+10px)] max-[500px]:ml-[-40px] max-sm:text-center max-hamburger:w-[117px] max-hamburger:ml-[25px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                        >
                          Watch Video
                        </div>
                      </div>
                    </div>
                    <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                      <Image
                        src="/images/Frame 18.svg"
                        className="w-[28.64px] h-[28.64px]"
                        width={28.6}
                        height={28.64}
                      />
                      <div className="flex max-hamburger:flex-col justify-between w-full gap-[12px] max-sm:w-full">
                        <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            02
                          </p>
                          <div className="">
                            <h1 className="text-[20px] leading-[26px] w-[514px] max-md:w-full max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                              {module.lesson2Name}
                            </h1>
                            <p className="w-[840px] max-[500px]:hidden max-xl:w-[600px] max-hamburger:w-full mt-[6.8px]">
                             
                              {module.lesson2Description}
                            </p>
                          </div>
                        </div>
                        <p className="w-[840px] max-[500px]:w-[calc(100%+20px)] max-[500px]:ml-[-40px] max-[500px]:block hidden max-xl:w-[600px] max-hamburger:w-full mt-[6.8px]">
                            {module.lesson2Description}
                        </p>
                        <div
                          onClick={() => setFold("video")}
                          className="border-[1px] max-sm:w-[90%] max-[500px]:w-[calc(100%+10px)] max-[500px]:ml-[-40px] max-sm:text-center max-hamburger:w-[117px] max-hamburger:ml-[25px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                        >
                          Watch Video
                        </div>
                      </div>
                    </div>
                    <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                      <Image
                        src="/images/Frame 18.svg"
                        className="w-[28.64px] h-[28.64px]"
                        width={28.6}
                        height={28.64}
                      />
                      <div className="flex max-hamburger:flex-col justify-between w-full gap-[12px] max-sm:w-full">
                        <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            03
                          </p>
                          <div className="">
                            <h1 className="text-[20px] leading-[26px] w-[514px] max-md:w-full max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                              {module.lesson3Name}
                            </h1>
                            <p className="w-[840px] max-[500px]:hidden max-xl:w-[600px] max-hamburger:w-full mt-[6.8px]">
                             
                              {module.lesson3Description}
                            </p>
                          </div>
                        </div>
                        <p className="w-[840px] max-[500px]:w-[calc(100%+20px)] max-[500px]:ml-[-40px] max-[500px]:block hidden max-xl:w-[600px] max-hamburger:w-full mt-[6.8px]">
                            {module.lesson3Description}
                        </p>
                        <div
                          onClick={() => setFold("video")}
                          className="border-[1px] max-sm:w-[90%] max-[500px]:w-[calc(100%+10px)] max-[500px]:ml-[-40px] max-sm:text-center max-hamburger:w-[117px] max-hamburger:ml-[25px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                        >
                          Watch Video
                        </div>
                      </div>
                    </div>
                    <div className="py-[24px] max-smallerphone:gap-[6px] border-b-[1px] flex gap-[12px]">
                      <Image
                        src="/images/Frame 18.svg"
                        className="w-[28.64px] h-[28.64px]"
                        width={28.6}
                        height={28.64}
                      />
                      <div className="flex max-hamburger:flex-col justify-between w-full gap-[12px] max-sm:w-full">
                        <div className="flex gap-[20px] max-smallerphone:gap-[8px] max-sm:w-full">
                          <p className="py-[4px] text-[14px] leading-[18.2px]">
                            04
                          </p>
                          <div className="">
                            <h1 className="text-[20px] leading-[26px] w-[514px] max-md:w-full max-smallphone:text-base max-sm:w-[80%] max-xl:truncate">
                              {module.lesson4Name}
                            </h1>
                            <p className="w-[840px] max-[500px]:hidden max-xl:w-[600px] max-hamburger:w-full mt-[6.8px]">
                             
                              {module.lesson4Description}
                            </p>
                          </div>
                        </div>
                        <p className="w-[840px] max-[500px]:w-[calc(100%+20px)] max-[500px]:ml-[-40px] max-[500px]:block hidden max-xl:w-[600px] max-hamburger:w-full mt-[6.8px]">
                            {module.lesson4Description}
                        </p>
                        <div
                          onClick={() => setFold("video")}
                          className="border-[1px] max-sm:w-[90%] max-[500px]:w-[calc(100%+10px)] max-[500px]:ml-[-40px] max-sm:text-center max-hamburger:w-[117px] max-hamburger:ml-[25px] h-[29px] border-black py-[3px] text-base px-[10px] rounded-[4px] cursor-pointer"
                        >
                          Watch Video
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-[20px] ml-[20px] mt-[40px]">
                  Loading curriculum...
                </p>
              )}
            </div>
          </section>
        </main>
      )}

      {/* video section here */}
      {fold === "video" && (
        <main className="px-[60px] pb-[30px] pt-[56.02px] max-md:px-[40px] max-sm:px-[20px]">
          <div className="flex items-center">
            {/* <NextVideo src={sample} /> */}
            <Image
              src="/images/back.svg"
              className="mt-[0.61px] cursor-pointer"
              onClick={() => setFold("curriculum")}
              width={44.97}
              height={44.97}
            />
            <p
              className="ml-[30px] max-sm:ml-[10px] text-base opacity-60 cursor-pointer"
              onClick={() => setFold("")}
            >
              Class
            </p>
            <p className="ml-[5px]">&gt;</p>
            <p
              className="ml-[5px] text-base opacity-60 cursor-pointer"
              onClick={() => setFold("curriculum")}
            >
              Curriculum
            </p>
            <p className="ml-[5px]">&gt;</p>
            <p className="ml-[5px] max-sm:truncate text-base underline font-bold">
              Class Title
            </p>
          </div>

          <div className="mt-[24.62px] h-[543px] rounded-[6px] bg-black rounded-[6.27px]"></div>
          <div className="mt-[29px] bg-white rounded-[6px] px-[30.14px] max-sm:px-[15px] pt-[32px] pb-[29px]">
            <div className="flex justify-between max-md:flex-col max-md:gap-[12px] pb-[25px] border-b-[1px] border-[#00000033]">
              <div>
                <h1 className="text-base mb-[9px]">Module {}</h1>
                <p className="text-[24px] leading-[31.2px]">
                  Bit manipulation and complexity
                </p>
              </div>
              <div className="flex gap-[8px] max-md:justify-center items-center border-[1px] h-[48px] border-black py-[14.5px] px-[32px] rounded-[4px]">
                <div>I Have A Doubt</div>
                <Image src="/images/open.svg" width={16.53} height={16.67} />
              </div>
            </div>
            <div className="pt-[25px]">
              <p className="text-base mb-[9px]">Assignments given</p>
              <div className="flex gap-[9px] mb-[9px] max-sm:items-start">
                <p className="text-[20px] underline leading-[26px]">
                  Bit manipulation and complexity
                </p>
                <Image src="/images/open.svg" width={16.53} height={16.67} />
              </div>
              <div className="flex gap-[9px] mb-[64.54px] max-[398px]:items-start">
                <p className="text-[20px] underline leading-[26px]">
                  Bit manipulation and complexity
                </p>
                <Image src="/images/open.svg" width={16.53} height={16.67} />
              </div>
              <p className="text-black opacity-60">
                Class taken on : Tuesday 18 June, 11:30AM to 1:00PM{" "}
              </p>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
