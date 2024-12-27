import Image from "next/image";
import { useState, useEffect } from "react";
import TrainerNavbar from "../../components/trainerbar";
import axios from "axios";

export default function Jobs() {
  const [active, setactive] = useState("schedule");
  const [batches, setBatches] = useState([]);
  const [selectedbatch, setselectedBatch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBatches, setFilteredBatches] = useState([]);
  const [timeMonday, setTimeMonday] = useState("");
  const [periodMonday, setPeriodMonday] = useState("PM");
  const [timeEndMonday, setTimeEndMonday] = useState("");
  const [periodEndMonday, setPeriodEndMonday] = useState("PM");
  const [timeTuesday, setTimeTuesday] = useState("");
  const [periodMTuesday, setPeriodMTuesday] = useState("PM");
  const [timeEndTuesday, setTimeEndTuesday] = useState("");
  const [periodEndTuesday, setPeriodEndTuesday] = useState("PM");
  const [timeWednesday, setTimeWednesday] = useState("");
  const [periodWednesday, setPeriodWednesday] = useState("PM");
  const [timeEndWednesday, setTimeEndWednesday] = useState("");
  const [periodEndWednesday, setPeriodEndWednesday] = useState("PM");
  const [timeThursday, setTimeThursday] = useState("");
  const [periodThursday, setPeriodThursday] = useState("PM");
  const [timeEndThursday, setTimeEndThursday] = useState("");
  const [periodEndThursday, setPeriodEndThursday] = useState("PM");
  const [timeFriday, setTimeFriday] = useState("");
  const [periodFriday, setPeriodFriday] = useState("PM");
  const [timeEndFriday, setTimeEndFriday] = useState("");
  const [periodEndFriday, setPeriodEndFriday] = useState("PM");

  const [Monday, setMonday] = useState({
    batchId: "",
    sessionType: "",
    sessionName: "",
    startTime: "",
    endTime: "",
    day: "Monday",
  });
  const [Tuesday, setTuesday] = useState({
    batchId: "",
    sessionType: "",
    sessionName: "",
    startTime: "",
    endTime: "",
    day: "Tuesday",
  });
  const [Wednesday, setWednesday] = useState({
    batchId: "",
    sessionType: "",
    sessionName: "",
    startTime: "",
    endTime: "",
    day: "Wednesday",
  });
  const [Thursday, setThursday] = useState({
    batchId: "",
    sessionType: "",
    sessionName: "",
    startTime: "",
    endTime: "",
    day: "Thursday",
  });
  const [Friday, setFriday] = useState({
    batchId: "",
    sessionType: "",
    sessionName: "",
    startTime: "",
    endTime: "",
    day: "Friday",
  });

  useEffect(() => {
    async function fetchBatches() {
      const res = await axios.get(`/api/batch/`);
      setBatches(res.data);
      console.log(res.data);
    }
    fetchBatches();
  }, []);
  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/trainer/schedule", Monday);
      handleDeleteMonday();
    } catch (error) {
      console.log("Incorrect password", error.message);
    }
    try {
      const response = await axios.post("/api/trainer/schedule", Tuesday);
      handleDeleteTuesday();
    } catch (error) {
      console.log("Incorrect password", error.message);
    }
    try {
      const response = await axios.post("/api/trainer/schedule", Wednesday);
      handleDeleteWednesday();
    } catch (error) {
      console.log("Incorrect password", error.message);
    }
    try {
      const response = await axios.post("/api/trainer/schedule", Thursday);
      handleDeleteThursday();
    } catch (error) {
      console.log("Incorrect password", error.message);
    }
    try {
      const response = await axios.post("/api/trainer/schedule", Friday);
      handleDeleteFriday();
    } catch (error) {
      console.log("Incorrect password", error.message);
    }
    setactive("done");
  };
  const handleTimeChangeMonday = (e) => {
    setTimeMonday(e.target.value);
    setMonday({
      ...Monday,
      startTime: `${e.target.value} ${periodMonday}`,
    });
  };

  const handlePeriodChangeMonday = (e) => {
    setPeriodMonday(e.target.value);
    setMonday({
      ...Monday,
      startTime: `${timeMonday} ${e.target.value}`,
    });
  };
  const handleTimeChangeEndMonday = (e) => {
    setTimeEndMonday(e.target.value);
    setMonday({
      ...Monday,
      endTime: `${e.target.value} ${periodEndMonday}`,
    });
  };

  const handlePeriodChangeEndMonday = (e) => {
    setPeriodEndMonday(e.target.value);
    setMonday({
      ...Monday,
      endTime: `${timeEndMonday} ${e.target.value}`,
    });
  };
  const handleTimeChangeTuesday = (e) => {
    setTimeTuesday(e.target.value);
    setTuesday({
      ...Tuesday,
      startTime: `${e.target.value} ${periodMTuesday}`,
    });
  };

  const handlePeriodChangeTuesday = (e) => {
    setPeriodMTuesday(e.target.value);
    setTuesday({
      ...Tuesday,
      startTime: `${timeTuesday} ${e.target.value}`,
    });
  };
  const handleTimeChangeEndTuesday = (e) => {
    setTimeEndTuesday(e.target.value);
    setTuesday({
      ...Tuesday,
      endTime: `${e.target.value} ${periodEndTuesday}`,
    });
  };

  const handlePeriodChangeEndTuesday = (e) => {
    setPeriodEndTuesday(e.target.value);
    setTuesday({
      ...Tuesday,
      endTime: `${timeEndTuesday} ${e.target.value}`,
    });
  };
  const handleTimeChangeWednesday = (e) => {
    setTimeWednesday(e.target.value);
    setWednesday({
      ...Wednesday,
      startTime: `${e.target.value} ${periodWednesday}`,
    });
  };

  const handlePeriodChangeWednesday = (e) => {
    setPeriodWednesday(e.target.value);
    setWednesday({
      ...Wednesday,
      startTime: `${timeWednesday} ${e.target.value}`,
    });
  };
  const handleTimeChangeEndWednesday = (e) => {
    setTimeEndWednesday(e.target.value);
    setWednesday({
      ...Wednesday,
      endTime: `${e.target.value} ${periodEndWednesday}`,
    });
  };

  const handlePeriodChangeEndWednesday = (e) => {
    setPeriodEndWednesday(e.target.value);
    setWednesday({
      ...Wednesday,
      endTime: `${timeEndWednesday} ${e.target.value}`,
    });
  };
  const handleTimeChangeThursday = (e) => {
    setTimeThursday(e.target.value);
    setThursday({
      ...Thursday,
      startTime: `${e.target.value} ${periodThursday}`,
    });
  };

  const handlePeriodChangeThursday = (e) => {
    setPeriodThursday(e.target.value);
    setThursday({
      ...Thursday,
      startTime: `${timeThursday} ${e.target.value}`,
    });
  };
  const handleTimeChangeEndThursday = (e) => {
    setTimeEndThursday(e.target.value);
    setThursday({
      ...Thursday,
      endTime: `${e.target.value} ${periodEndThursday}`,
    });
  };

  const handlePeriodChangeEndThursday = (e) => {
    setPeriodEndThursday(e.target.value);
    setThursday({
      ...Thursday,
      endTime: `${timeEndThursday} ${e.target.value}`,
    });
  };
  const handleTimeChangeFriday = (e) => {
    setTimeFriday(e.target.value);
    setFriday({
      ...Friday,
      startTime: `${e.target.value} ${periodFriday}`,
    });
  };

  const handlePeriodChangeFriday = (e) => {
    setPeriodFriday(e.target.value);
    setFriday({
      ...Friday,
      startTime: `${timeFriday} ${e.target.value}`,
    });
  };
  const handleTimeChangeEndFriday = (e) => {
    setTimeEndFriday(e.target.value);
    setFriday({
      ...Friday,
      endTime: `${e.target.value} ${periodEndFriday}`,
    });
  };

  const handlePeriodChangeEndFriday = (e) => {
    setPeriodEndFriday(e.target.value);
    setFriday({
      ...Friday,
      endTime: `${timeEndFriday} ${e.target.value}`,
    });
  };
  const handleClick = (batch) => {
    setactive("Add next week Schedule");
    setselectedBatch(batch);
    setMonday({ ...Monday, batchId: batch });
    setTuesday({ ...Tuesday, batchId: batch });
    setWednesday({ ...Wednesday, batchId: batch });
    setThursday({ ...Thursday, batchId: batch });
    setFriday({ ...Friday, batchId: batch });
  };
  const handleChangeMonday = (event) => {
    setMonday({ ...Monday, [event.target.name]: event.target.value });
  };
  const handleChangeTuesday = (event) => {
    setTuesday({ ...Tuesday, [event.target.name]: event.target.value });
  };
  const handleChangeWednesday = (event) => {
    setWednesday({ ...Wednesday, [event.target.name]: event.target.value });
  };
  const handleChangeThursday = (event) => {
    setThursday({ ...Thursday, [event.target.name]: event.target.value });
  };
  const handleChangeFriday = (event) => {
    setFriday({ ...Friday, [event.target.name]: event.target.value });
  };
  const handleDeleteMonday = () => {
    setMonday({
      batchId: "",
      sessionType: "",
      sessionName: "",
      startTime: "",
      endTime: "",
      day: "Monday",
    });
    setTimeMonday("");
    setTimeEndMonday("");
    setPeriodMonday("PM");
    setPeriodEndMonday("PM");
  };
  const handleDeleteTuesday = () => {
    setTuesday({
      batchId: "",
      sessionType: "",
      sessionName: "",
      startTime: "",
      endTime: "",
      day: "Tuesday",
    });
    setTimeTuesday("");
    setTimeEndTuesday("");
    setPeriodTuesday("PM");
    setPeriodEndTuesday("PM");
  };
  const handleDeleteWednesday = () => {
    setWednesday({
      batchId: "",
      sessionType: "",
      sessionName: "",
      startTime: "",
      endTime: "",
      day: "Wednesday",
    });
    setTimeWednesday("");
    setTimeEndWednesday("");
    setPeriodWednesday("PM");
    setPeriodEndWednesday("PM");
  };
  const handleDeleteThursday = () => {
    setThursday({
      batchId: "",
      sessionType: "",
      sessionName: "",
      startTime: "",
      endTime: "",
      day: "Thursday",
    });
    setTimeThursday("");
    setTimeEndThursday("");
    setPeriodThursday("PM");
    setPeriodEndThursday("PM");
  };
  const handleDeleteFriday = () => {
    setFriday({
      batchId: "",
      sessionType: "",
      sessionName: "",
      startTime: "",
      endTime: "",
      day: "Friday",
    });
    setTimeFriday("");
    setTimeEndFriday("");
    setPeriodFriday("PM");
    setPeriodEndFriday("PM");
  };
  useEffect(() => {
    const results = batches.filter(
      (batch) =>
        batch.batchId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        batch.students?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        batch.instructor1?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        batch.instructor2?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        batch.course?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredBatches(results);
  }, [searchTerm, batches]);
  return (
    <>
      <TrainerNavbar />

      <main className="relative px-[59.5px] pb-[78px] pt-[0] max-md:px-[40px] max-sm:px-[20px]">
        {active === "schedule" && (
          <>
            <div className="mb-[13px] bg-white pl-[19.08px] max-md:flex-col max-md:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[34px] max-sm:gap-[8px] items-center">
              <input
                type="text"
                name=""
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[483px] max-lg:w-[350px] max-md:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search student name, instructor, batch ID"
                id=""
              />
              <Image
                src="/images/search.svg"
                className="cursor-pointer max-lg:left-[330px] max-md:right-[24px] max-md:left-auto max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[28px] absolute left-[467.88px]"
                width={24}
                height={24}
              />
              <div className="w-[244px] px-[14.28px] max-md:w-full  border-[1px] border-[#0000004D] rounded-[8px]">
                <select
                  className="h-[48px] w-full"
                  onChange={(e) => setSearchTerm(e.target.value)} // Set searchTerm when an option is selected
                >
                  <option value="Full Stack Development">
                    Full Stack Development
                  </option>
                  <option value="Frontend Mastery">Frontend Mastery</option>
                  <option value="Backend Mastery">Backend Mastery</option>
                  <option value="">All</option>
                </select>
              </div>
            </div>
            <div className="pb-[75px] max-xl:overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px] max-[1350px]:w-[200px]">
                  Batch ID
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[30px]">
                  Course
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                  No of students
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[80px]">
                  | Start date{" "}
                </p>
              </div>
              {searchTerm === ""
                ? batches.map((batch, index) => (
                    <div
                      key={batch._id}
                      className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]"
                    >
                      <div className="flex items-center">
                        <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                          {index + 1}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                          {batch.batchId}{" "}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                          {batch.course === "Full Stack Development"
                            ? "FSD"
                            : batch.course}{" "}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                          {batch.students}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70">
                          | {batch.startDate}
                        </p>
                      </div>
                      <button
                        onClick={() => handleClick(batch.batchId)}
                        className="w-[210px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                      >
                        Add next week Schedule{" "}
                      </button>
                    </div>
                  ))
                : filteredBatches.map((batch, index) => (
                    <div
                      key={batch._id}
                      className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]"
                    >
                      <div className="flex items-center">
                        <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                          {index + 1}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                          {batch.batchId}{" "}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                          {batch.course === "Full Stack Development"
                            ? "FSD"
                            : batch.course}{" "}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                          {batch.students}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70">
                          | {batch.startDate}
                        </p>
                      </div>
                      <button
                        onClick={() => handleClick(batch.batchId)}
                        className="w-[210px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                      >
                        Add next week Schedule{" "}
                      </button>
                    </div>
                  ))}
            </div>
          </>
        )}
        {active === "Add next week Schedule" && (
          <div className="w-full pt-[16.08px] max-[1400px]:px-[59px] max-md:px-[40px] max-sm:px-[20px] pl-[59px] pb-[47px] bg-white rounded-[8px]">
            <div className="py-[24px] w-[1127px] max-[1400px]:w-full border-b-[1px] border-[#00000033]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Monday
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[28px] mb-[16px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session type{" "}
                  </p>
                  <div className="w-[204px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      type="text"
                      name="sessionType"
                      onChange={handleChangeMonday}
                      value={Monday.sessionType}
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] text-[14px] bg-[white]"
                    >
                      <option value="Select session type">
                        Select session type
                      </option>
                      <option value="Teaching">Teaching</option>
                    </select>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Session name
                  </p>
                  <input
                    type="text"
                    name="sessionName"
                    value={Monday.sessionName}
                    onChange={handleChangeMonday}
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session start time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        value={timeMonday}
                        onChange={handleTimeChangeMonday}
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        value={periodMonday}
                        onChange={handlePeriodChangeMonday}
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
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
                        value={timeEndMonday}
                        onChange={handleTimeChangeEndMonday}
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        value={periodEndMonday}
                        onChange={handlePeriodChangeEndMonday}
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="PM">PM</option>
                        <option value="AM">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-[112px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]">
                Add Session{" "}
              </button>
            </div>
            <div className="py-[24px] w-[1127px] border-b-[1px] border-[#00000033] max-[1400px]:w-full">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Tuesday
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[28px] mb-[16px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session type{" "}
                  </p>
                  <div className="w-[204px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      type="text"
                      name="sessionType"
                      value={Tuesday.sessionType}
                      onChange={handleChangeTuesday}
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] text-[14px] bg-[white]"
                    >
                      <option value="">Select session type</option>
                      <option value="Teaching">Teaching</option>
                    </select>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Session name
                  </p>
                  <input
                    type="text"
                    name="sessionName"
                    value={Tuesday.sessionName}
                    onChange={handleChangeTuesday}
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session start time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        value={timeTuesday}
                        onChange={handleTimeChangeTuesday}
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        value={periodMTuesday}
                        onChange={handlePeriodChangeTuesday}
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
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
                        value={timeEndTuesday}
                        onChange={handleTimeChangeEndTuesday}
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        value={periodEndTuesday}
                        onChange={handlePeriodChangeEndTuesday}
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="PM">PM</option>
                        <option value="AM">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-[112px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]">
                Add Session{" "}
              </button>
            </div>
            <div className="py-[24px] w-[1127px] border-b-[1px] border-[#00000033] max-[1400px]:w-full">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Wednesday
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[28px] mb-[16px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session type{" "}
                  </p>
                  <div className="w-[204px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      type="text"
                      name="sessionType"
                      value={Wednesday.sessionType}
                      onChange={handleChangeWednesday}
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] text-[14px] bg-[white]"
                    >
                      <option value="">Select session type</option>
                      <option value="Teaching">Teaching</option>
                    </select>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Session name
                  </p>
                  <input
                    type="text"
                    name="sessionName"
                    value={Wednesday.sessionName}
                    onChange={handleChangeWednesday}
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session start time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        value={timeWednesday}
                        onChange={handleTimeChangeWednesday}
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        value={periodWednesday}
                        onChange={handlePeriodChangeWednesday}
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
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
                        value={timeEndWednesday}
                        onChange={handleTimeChangeEndWednesday}
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        value={periodEndWednesday}
                        onChange={handlePeriodChangeEndWednesday}
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="PM">PM</option>
                        <option value="AM">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-[112px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]">
                Add Session{" "}
              </button>
            </div>
            <div className="py-[24px] w-[1127px] border-b-[1px] border-[#00000033] max-[1400px]:w-full">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Thursday
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[28px] mb-[16px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session type{" "}
                  </p>
                  <div className="w-[204px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      type="text"
                      name="sessionType"
                      value={Thursday.sessionType}
                      onChange={handleChangeThursday}
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] text-[14px] bg-[white]"
                    >
                      <option value="">Select session type</option>
                      <option value="Teaching">Teaching</option>
                    </select>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Session name
                  </p>
                  <input
                    type="text"
                    name="sessionName"
                    value={Thursday.sessionName}
                    onChange={handleChangeThursday}
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session start time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        value={timeThursday}
                        onChange={handleTimeChangeThursday}
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        value={periodThursday}
                        onChange={handlePeriodChangeThursday}
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
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
                        value={timeEndThursday}
                        onChange={handleTimeChangeEndThursday}
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        value={periodEndThursday}
                        onChange={handlePeriodChangeEndThursday}
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="PM">PM</option>
                        <option value="AM">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-[112px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]">
                Add Session{" "}
              </button>
            </div>
            <div className="py-[24px] w-[1127px] border-b-[1px] border-[#00000033] max-[1400px]:w-full">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Friday
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[28px] mb-[16px]">
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session type{" "}
                  </p>
                  <div className="w-[204px] max-hamburger:w-[100%] px-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                    <select
                      type="text"
                      name="sessionType"
                      value={Friday.sessionType}
                      onChange={handleChangeFriday}
                      id=""
                      className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] text-[14px] bg-[white]"
                    >
                      <option value="">Select session type</option>
                      <option value="Teaching">Teaching</option>
                    </select>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Session name
                  </p>
                  <input
                    type="text"
                    name="sessionName"
                    value={Friday.sessionName}
                    onChange={handleChangeFriday}
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[45px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div>
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Session start time
                  </p>
                  <div className="flex gap-[8px]">
                    <div className="w-[100px] h-[45px] overflow-hidden rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <input
                        type="time"
                        className="w-[140px] h-[45px] relative left-[calc(50%-15px)]"
                        value={timeFriday}
                        onChange={handleTimeChangeFriday}
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        value={periodFriday}
                        onChange={handlePeriodChangeFriday}
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
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
                        value={timeEndFriday}
                        onChange={handleTimeChangeEndFriday}
                        id=""
                      />
                    </div>
                    <div className="w-[75px] max-hamburger:w-[100%] pr-[11.6px] pl-[15.71px] rounded-[4px] bg-[white] border-[0.5px] border-[#00000080]">
                      <select
                        type="text"
                        value={periodEndFriday}
                        onChange={handlePeriodChangeEndFriday}
                        id=""
                        className="w-full max-hamburger:w-[100%] rounded-[4px] h-[44px] bg-[white]"
                      >
                        <option value="PM">PM</option>
                        <option value="AM">AM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-[112px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]">
                Add Session{" "}
              </button>
            </div>

            <button
              onClick={() => setactive("generate schedule")}
              className="w-[157px] mt-[51px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]"
            >
              Generate Schedule
            </button>
          </div>
        )}
        {active === "generate schedule" && (
          <div className="w-full pt-[49.08px] max-md:pl-[40px] max-sm:pl-[20px] pl-[59px] pb-[47px] bg-white rounded-[8px]">
            <h1 className="text-[20px] mb-[29.16px] leading-[26px] font-semibold">
              {selectedbatch} Schedule
            </h1>
            <div className="pb-[75px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]">
                  Day
                </p>
                <p className="text-[14px] leading-[16.8px] w-[160px] mr-[7px]">
                  Session type
                </p>
                <p className="text-[14px] leading-[16.8px] w-[300px] mr-[50px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                  Session name
                </p>
                <p className="text-[14px] leading-[16.8px] w-[150px] mr-[27px]">
                  Session start time
                </p>
                <p className="text-[14px] leading-[16.8px]">Session end time</p>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]">
                    Monday
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                    {Monday.sessionType}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    {Monday.sessionName}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                    {Monday.startTime}
                  </p>
                  <p className="text-[16px] leading-[19.2px]">
                    {Monday.endTime}
                  </p>
                </div>
                <div className="flex gap-[28px] items-center">
                  <button
                    onClick={() => setactive("Add next week Schedule")}
                    className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Update
                  </button>
                  <Image
                    src="/images../../delete.svg"
                    className="cursor-pointer"
                    onClick={handleDeleteMonday}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              {/* <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]"></p>
                  <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                    {Monday.sessionType}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    {Monday.sessionName}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                    {Monday.startTime}
                  </p>
                  <p className="text-[16px] leading-[19.2px]">
                    {Monday.startTime}
                  </p>
                </div>
                <div className="flex gap-[28px] items-center">
                  <button
                    onClick={() => setactive("Add next week Schedule")}
                    className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Update
                  </button>
                  <Image
                    src="/images../../delete.svg"
                    className="cursor-pointer"
                    onClick={handleDeleteFriday}
                    width={24}
                    height={24}
                  />
                </div>
              </div> */}
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]">
                    Tuesday
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                    {Tuesday.sessionType}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    {Tuesday.sessionName}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                    {Tuesday.startTime}
                  </p>
                  <p className="text-[16px] leading-[19.2px]">
                    {Tuesday.endTime}
                  </p>
                </div>
                <div className="flex gap-[28px] items-center">
                  <button
                    onClick={() => setactive("Add next week Schedule")}
                    className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Update
                  </button>
                  <Image
                    src="/images../../delete.svg"
                    className="cursor-pointer"
                    onClick={handleDeleteTuesday}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]">
                    Wednesday
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                    {Wednesday.sessionType}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    {Wednesday.sessionName}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                    {Wednesday.startTime}
                  </p>
                  <p className="text-[16px] leading-[19.2px]">
                    {Wednesday.endTime}
                  </p>
                </div>
                <div className="flex gap-[28px] items-center">
                  <button
                    onClick={() => setactive("Add next week Schedule")}
                    className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Update
                  </button>
                  <Image
                    src="/images../../delete.svg"
                    className="cursor-pointer"
                    onClick={handleDeleteWednesday}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]">
                    Thursday
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                    {Thursday.sessionType}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    {Thursday.sessionName}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                    {Thursday.startTime}
                  </p>
                  <p className="text-[16px] leading-[19.2px]">
                    {Thursday.endTime}
                  </p>
                </div>
                <div className="flex gap-[28px] items-center">
                  <button
                    onClick={() => setactive("Add next week Schedule")}
                    className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Update
                  </button>
                  <Image
                    src="/images../../delete.svg"
                    className="cursor-pointer"
                    onClick={handleDeleteThursday}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]">
                <div className="flex items-center">
                  <p className="text-[12px] leading-[14.4px] w-[104px] mr-[25px] max-xl:w-[30px]">
                    Friday
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[160px] mr-[7px]">
                    {Friday.sessionType}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px] max-[1350px]:w-[200px] max-[1370px]:w-[200px] max-[1370px]:truncate">
                    {Friday.sessionName}
                  </p>
                  <p className="text-[16px] leading-[19.2px] w-[150px] mr-[27px]">
                    {Friday.startTime}
                  </p>
                  <p className="text-[16px] leading-[19.2px]">
                    {Friday.endTime}
                  </p>
                </div>
                <div className="flex gap-[28px] items-center">
                  <button
                    onClick={() => setactive("Add next week Schedule")}
                    className="w-[75px] py-[5px] bg-white text-black border-black border-[1px] rounded-[4px] text-[16px] leading-[19.2px]"
                  >
                    Update
                  </button>
                  <Image
                    src="/images../../delete.svg"
                    className="cursor-pointer"
                    onClick={handleDeleteFriday}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[17px] max-sm:pr-[20px] max-[400px]:flex-col">
              <button
                onClick={handleSubmit}
                className="w-[130px] mt-[51px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]"
              >
                Send Schedule
              </button>
              <button
                onClick={() => setactive("Add next week Schedule")}
                className="w-[121px] mt-[51px] max-[400px]:mt-0 h-[37px] max-sm:w-full text-black border-[1px] border-black bg-[#fff] rounded-[6px] text-[14px] leading-[16.8px]"
              >
                Edit Schedule
              </button>
            </div>
          </div>
        )}
        {active === "done" && (
          <div className="w-full flex justify-center pt-[55px] h-[630px] max-sm:px-[20px] max-[360px]:px-[10px] pb-[47px] bg-white rounded-[8px]">
            <div className="w-[483px] h-[419px] border-[1px] max-sm:px-[20px] border-[#00000033] rounded-[6px] max-[360px]:px-[10px] pt-[30px] flex flex-col items-center">
              <Image src="/images/done.svg" width={193.08} height={193.08} />
              <h1 className="text-[20px] leading-[26px] mt-[36.92px] font-semibold">
                Schedule Sent to Batch {selectedbatch}
              </h1>
              <button
                onClick={() => setactive("schedule")}
                className="w-[247px] capitalize mt-[44px] h-[37px] max-sm:w-full text-white bg-[#000] rounded-[6px] text-[14px] leading-[16.8px]"
              >
                Send schedule to another batch
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
