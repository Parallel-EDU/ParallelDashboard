import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import style from "../../styles/style.module.css";
import TrainerNavbar from "../../components/trainerbar";
import axios from "axios";

export default function Jobs() {
  const [active, setactive] = useState("");
  const [item, setItem] = useState("");
  const [batches, setBatches] = useState([]);
  const [selectedbatch, setselectedBatch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBatches, setFilteredBatches] = useState([]);
  const [studentsData, setstudentsData] = useState([]);
  const [searchTermStudent, setsearchTermStudent] = useState("");
  const [searchStudent, setsearchStudent] = useState([]);

  useEffect(() => {
    async function fetchBatches() {
      const res = await axios.get(`/api/batch/`);
      setBatches(res.data);
      console.log(res.data);
    }
    fetchBatches();
  }, []);

  const handleSelect = (value) => {
    setactive("view details");
    setItem(value);
    console.log(value);
    async function fetchBatches() {
      const res = await axios.get(`/api/batch/${value}`);
      setselectedBatch(res.data);
    }
    async function fetchstudents() {
      const res = await axios.get(`/api/onboarding/personalInfo/route`);
      setstudentsData(res.data);
    }
    fetchBatches();
    fetchstudents();
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

  useEffect(() => {
    const results = studentsData.filter(
      (student) =>
        student.name?.toLowerCase().includes(searchTermStudent.toLowerCase()) ||
        student.batchId?.toLowerCase().includes(searchTermStudent.toLowerCase())
    );

    setsearchStudent(results);
  }, [searchTermStudent, studentsData]);
  return (
    <>
      <TrainerNavbar />

      <main className="relative px-[59.5px] pb-[78px] pt-[0] max-md:px-[40px] max-sm:px-[20px]">
        {active === "" && (
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
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
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
                        <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                          {batch.batchId}{" "}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                          {batch.course === "Full Stack Development"
                            ? "FSD"
                            : batch.course}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                          {batch.students}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70">
                          | {batch.startDate}
                        </p>
                      </div>
                      <button
                        onClick={() => handleSelect(batch._id)}
                        className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                      >
                        View Details
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
                        <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                          {batch.batchId}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                          {batch.course === "Full Stack Development"
                            ? "FSD"
                            : batch.course}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                          {batch.students}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70">
                          | {batch.startDate}
                        </p>
                      </div>
                      <button
                        onClick={() => handleSelect(batch._id)}
                        className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
            </div>
          </>
        )}
        {active === "view details" && (
          <>
            <div className="mb-[21.5px] flex items-center mt-[12px]">
              <Image
                src="/images/drop.svg"
                className="cursor-pointer rotate-90"
                width={17}
                height={9.08}
              />
              <p
                onClick={() => setactive("")}
                className="cursor-pointer text-[16px] max-sm:ml-[7.21px] leading-[19.2px] border-b-[1.8px] ml-[11.21px] border-black h-[17px] font-semibold"
              >
                Go back
              </p>
            </div>
            <div className="h-auto pb-[36.88px] w-full bg-white rounded-[8px] pt-[37.12px] px-[31.48px]">
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Batch Information
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Batch ID
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedbatch.batchId}
                    disabled
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Course enrolled in
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedbatch.course}
                    disabled
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    No of students
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedbatch.students}
                    disabled
                    id=""
                    className="w-[103px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Progress
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedbatch.progress}
                    disabled
                    id=""
                    className="w-[144px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="pb-[32px] border-b-[0.5px] border-[#00000033] max-xl:flex-wrap flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Instructor 1
                  </p>
                  <input
                    type="text"
                    value={selectedbatch.instructor1}
                    disabled
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Instructor 2
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedbatch.instructor2}
                    disabled
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Batch Start date
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedbatch.startDate}
                    disabled
                    id=""
                    className="w-[142px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Batch End date
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedbatch.endDate}
                    disabled
                    id=""
                    className="w-[142px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                Batch Links
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    WhatsApp Group Link
                  </p>
                  <input
                    type="text"
                    value={selectedbatch.whatsapp}
                    disabled
                    name=""
                    id=""
                    className="w-[407px] max-lg:w-[350px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    GitHub Link{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedbatch.github}
                    disabled
                    id=""
                    className="w-[407px] max-lg:w-[350px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
            </div>
            <h1 className="mt-[39.5px] mb-[15.41px] text-[20px] leading-[26px]">
              Students
            </h1>
            <div className="mb-[13px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[34px] max-sm:gap-[8px] items-center">
              <input
                type="search"
                name=""
                onChange={(e) => setsearchTermStudent(e.target.value)}
                className="w-[483px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search student name, instructor, batch ID"
                id=""
              />
              <Image
                src="/images/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[28px] absolute left-[467.88px]"
                width={24}
                height={24}
              />
            </div>
            <div className="pb-[75px] h-[533px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
                  Student name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[30px]">
                  Course
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 mr-[7px]">
                  UIN | College | passing Year | Contact number | Email
                </p>
              </div>
              {searchTermStudent === ""
                ? studentsData.map((student, index) => (
                    <div
                      key={student._id}
                      className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]"
                    >
                      <div className="flex items-center">
                        <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                          {index + 1}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                          {student.name}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                          {student.course}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70 w-[472px] mr-[7px]">
                          {student._id.slice(0, 8)} | {student.college} |{" "}
                          {student.yearOfPass} | {student.phoneNumber} |{" "}
                          {student.email}
                        </p>
                      </div>
                    </div>
                  ))
                : searchStudent.map((student, index) => (
                    <div
                      key={student._id}
                      className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]"
                    >
                      <div className="flex items-center">
                        <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                          {index + 1}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                          {student.name}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                          {student.course}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70 w-[472px] mr-[7px]">
                          {student._id.slice(0, 8)} | {student.college} |{" "}
                          {student.yearOfPass} | {student.phoneNumber} |{" "}
                          {student.email}
                        </p>
                      </div>
                    </div>
                  ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
