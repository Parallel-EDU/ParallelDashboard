import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import style from "../../styles/style.module.css";
import TrainerNavbar from "../../components/trainerbar";
import axios from "axios";

export default function Jobs() {
  const [active, setactive] = useState("announcements");
  const [count, setcount] = useState(0);
  const [clicked, setclicked] = useState(false);
  const [sessionCount, setsessionCount] = useState(0);
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState("PM");
  const [timeend, setTimeend] = useState("");
  const [periodend, setPeriodend] = useState("PM");
  const [sessionclicked, setsessionclicked] = useState(false);
  const [doubtClearing, setdoubtClearing] = useState({
    type: "Doubt Clearing Session",
    heading: "",
    course: "",
    topic: "",
    startTime: "",
    endTime: "",
    message: "",
    link: "",
    batchId: "",
  });
  const [general, setgeneral] = useState({
    type: "General Announcement",
    heading: "",
    course: "",
    topic: "",
    startTime: "",
    endTime: "",
    message: "",
    link: "",
    batchId: "",
  });
  const handleChangeGeneral = (event) => {
    setgeneral({ ...general, [event.target.name]: event.target.value });
  };
  const handleChangedoubtClearing = (event) => {
    setdoubtClearing({
      ...doubtClearing,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async () => {
    setclicked(true);
    try {
      const response = await axios.post("/api/announcements/", general);
      setactive("announcements");
    } catch (error) {
      console.log("Incorrect password", error.message);
    }
    console.log(general);
  };
  const handleSubmit2 = async () => {
    try {
      const response = await axios.post("/api/announcements/", doubtClearing);
      setactive("announcements");
    } catch (error) {
      console.log("Incorrect password", error.message);
    }
    setsessionclicked(true);
    console.log(doubtClearing);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
    setdoubtClearing({
      ...doubtClearing,
      startTime: `${e.target.value} ${period}`,
    });
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
    setdoubtClearing({
      ...doubtClearing,
      startTime: `${time} ${e.target.value}`,
    });
  };
  const handleTimeChangeEnd = (e) => {
    setTimeend(e.target.value);
    setdoubtClearing({
      ...doubtClearing,
      endTime: `${e.target.value} ${periodend}`,
    });
  };

  const handlePeriodChangeEnd = (e) => {
    setPeriod(e.target.value);
    setdoubtClearing({
      ...doubtClearing,
      endTime: `${timeend} ${e.target.value}`,
    });
  };

  const handleChangeTextArea = (e) => {
    setcount(e.target.value.length);
    setgeneral({ ...general, [event.target.name]: event.target.value });
  };
  const handleChangeTextAreaSession = (e) => {
    setsessionCount(e.target.value.length);
    setdoubtClearing({
      ...doubtClearing,
      [event.target.name]: event.target.value,
    });
  };
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    async function fetchBatches() {
      const res = await axios.get(`/api/batch/`);
      setBatches(res.data);
      console.log(res.data);
    }
    fetchBatches();
  }, []);
  return (
    <>
      <TrainerNavbar />
      <main className="relative px-[59.5px] pb-[78px] pt-[0] max-md:px-[40px] max-sm:px-[20px]">
        {active === "announcements" && (
          <>
            <div className="h-[611px] pb-[36.88px] max-sm:px-[20px] w-full bg-white rounded-[8px] pt-[37.12px] px-[31px] pr-[36px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Send Announcement
              </h1>
              <div className="flex max-sm:flex-wrap gap-[26px] mt-[31.87px]">
                <div
                  onClick={() => setactive("doubt clearing session")}
                  className="flex items-center justify-center rounded-[10px] border-[#00000033] cursor-pointer border-[1px] h-[202px] w-[50%] max-sm:w-full"
                >
                  <h1 className="text-[20px] leading-[26px]">
                    Doubt clearing session
                  </h1>
                </div>
                <div
                  onClick={() => setactive("general announcement")}
                  className="flex items-center justify-center rounded-[10px] border-[#00000033] cursor-pointer border-[1px] h-[202px] w-[50%] max-sm:w-full"
                >
                  <h1 className="text-[20px] leading-[26px]">
                    General announcement
                  </h1>
                </div>
              </div>
            </div>
          </>
        )}
        {active === "general announcement" && (
          <>
            <div className="mb-[21.5px] flex items-center mt-[12px]">
              <Image
                src="/images/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("announcements")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="h-auto pb-[36.88px] w-full bg-white rounded-[8px] pt-[37.12px] max-sm:px-[20px] px-[31.48px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Send Announcement
              </h1>
              <div className="flex flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[32.88px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Enter heading
                  </p>
                  <input
                    type="text"
                    required
                    name="heading"
                    onChange={handleChangeGeneral}
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
                      required
                      className="w-[639px] max-hamburger:w-[100%] h-[138px] rounded-[4px] resize-none border-[0.5px] py-[11.5px] px-[12.74px] border-[#00000080]"
                      name="message"
                      id=""
                    ></textarea>
                    <p className="text-[12px] text-[#2C2E32] absolute bottom-[18px] right-[18px]">
                      {count} / 250
                    </p>
                  </div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Send link (optional)
                  </p>
                  <input
                    type="text"
                    name="link"
                    onChange={handleChangeGeneral}
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                  <p className="text-[14px] leading-[18.2px] mt-[16px] mb-[10px]">
                    Select course
                  </p>
                  <div className="flex gap-[20px] max-sm:w-full max-sm:flex-wrap w-[494px]">
                    <div className="flex items-center gap-[6.5px]">
                      <input
                        type="radio"
                        onChange={handleChangeGeneral}
                        value="Full Stack Development"
                        name="course"
                        id="course"
                      />
                      <label
                        htmlFor="course"
                        className="text-[14px] leading-[16.8px]"
                      >
                        Full Stack Development
                      </label>
                    </div>
                    <div className="flex items-center gap-[6.5px]">
                      <input
                        type="radio"
                        onChange={handleChangeGeneral}
                        value="Backend Mastery"
                        name="course"
                        id="course"
                      />
                      <label
                        htmlFor="course"
                        className="text-[14px] leading-[16.8px]"
                      >
                        Backend Mastery
                      </label>
                    </div>
                    <div className="flex items-center gap-[6.5px]">
                      <input
                        type="radio"
                        onChange={handleChangeGeneral}
                        name="course"
                        id="course"
                        value="Frontend Mastery"
                      />
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
                      name="batchId"
                      onChange={handleChangeGeneral}
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[45px] bg-[white]"
                    >
                      <option value="">Select Batch</option>
                      {batches.map((batch, index) => (
                        <option key={batch._id} value={batch.batchId}>
                          {batch.batchId}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={clicked}
                    className="text-[14px] max-sm:w-[100%] leading-[16.8px] text-white bg-black px-[15px] rounded-[4px] mt-[36px] py-[10px]"
                  >
                    Send Announcement
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {active === "doubt clearing session" && (
          <>
            <div className="mb-[21.5px] flex items-center mt-[12px]">
              <Image
                src="/images/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("announcements")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="h-auto pb-[36.88px] max-sm:px-[20px] w-full bg-white rounded-[8px] pt-[37.12px] px-[31.48px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Send Announcement
              </h1>
              <div className="flex flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[32.88px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <div className="flex max-md:flex-wrap gap-[16px]">
                    <div className="max-sm:w-full">
                      <p className="text-[14px] leading-[18.2px] mb-[10px]">
                        Enter heading
                      </p>
                      <input
                        type="text"
                        name="heading"
                        onChange={handleChangedoubtClearing}
                        placeholder="Enter heading"
                        id=""
                        className="w-[254px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                        required
                      />
                    </div>
                    <div className="max-sm:w-full">
                      <p className="text-[14px] leading-[18.2px] mb-[10px]">
                        Select course{" "}
                      </p>
                      <div className="w-[367px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                        <select
                          type="text"
                          onChange={handleChangedoubtClearing}
                          name="course"
                          id=""
                          className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                        >
                          <option value="">Select Course</option>
                          <option value="Full stack development">
                            Full stack development
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="max-sm:w-full">
                      <p className="text-[14px] leading-[18.2px] mb-[10px]">
                        Enter topic
                      </p>
                      <input
                        type="text"
                        name="topic"
                        required
                        placeholder="Enter topic"
                        id=""
                        onChange={handleChangedoubtClearing}
                        className="w-[254px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                      />
                    </div>
                  </div>
                  <div className="flex mt-[16px] max-sm:flex-col gap-[16px]">
                    <div>
                      <p className="text-[14px] leading-[18.2px] mb-[10px]">
                        Session start time
                      </p>
                      <div className="flex gap-[8px]">
                        <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                          <input
                            type="time"
                            className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                            name="startTime"
                            id=""
                            onChange={handleTimeChange}
                          />
                        </div>
                        <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                          <select
                            name=""
                            id=""
                            className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                            onChange={handlePeriodChange}
                            value={period}
                          >
                            <option value="PM">PM</option>
                            <option value="AM">AM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[14px] leading-[18.2px] mb-[10px]">
                        Session end time
                      </p>
                      <div className="flex gap-[8px]">
                        <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                          <input
                            type="time"
                            className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                            name=""
                            onChange={handleTimeChangeEnd}
                            id=""
                          />
                        </div>
                        <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                          <select
                            type="text"
                            name=""
                            id=""
                            onChange={handlePeriodChangeEnd}
                            className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                          >
                            <option value="PM">PM</option>
                            <option value="AM">AM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-[16px] text-[14px] leading-[18.2px] mb-[10px]">
                    Enter message (optional){" "}
                  </p>
                  <div className="relative max-hamburger:w-[100%] w-[639px]">
                    <textarea
                      placeholder="Enter message"
                      onChange={handleChangeTextAreaSession}
                      maxLength={250}
                      className="w-[639px] max-hamburger:w-[100%] h-[138px] rounded-[4px] resize-none border-[0.5px] py-[11.5px] px-[12.74px] border-[#00000080]"
                      name="message"
                      id=""
                    ></textarea>
                    <p className="text-[12px] text-[#2C2E32] absolute bottom-[18px] right-[18px]">
                      {sessionCount} / 250
                    </p>
                  </div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Send link (optional)
                  </p>
                  <input
                    type="text"
                    name="link"
                    id=""
                    onChange={handleChangedoubtClearing}
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />

                  <p className="text-[14px] mt-[16px] leading-[18.2px] mb-[10px]">
                    Select batch
                  </p>
                  <div className="w-[407px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      name="batchId"
                      onChange={handleChangedoubtClearing}
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[45px] bg-[white]"
                    >
                      <option value="">Select Batch</option>
                      {batches.map((batch, index) => (
                        <option key={batch._id} value={batch.batchId}>
                          {batch.batchId}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={handleSubmit2}
                    disabled={sessionclicked}
                    className="text-[14px] max-sm:w-full leading-[16.8px] text-white bg-black px-[15px] rounded-[4px] mt-[36px] py-[10px]"
                  >
                    Send Announcement
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
