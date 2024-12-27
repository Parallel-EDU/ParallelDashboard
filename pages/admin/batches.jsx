import Image from "next/image";
import { useEffect, useState } from "react";
import AdminNavbar from "../../components/adminbar";
import axios from "axios";
import { set } from "mongoose";

export default function Jobs() {
  const [active, setactive] = useState("");
  const [filter, setfilter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("Select session type");
  const [isOpenYear, setIsOpenYear] = useState(false);
  const [year, setyear] = useState("Select year");
  const [isOpenMonth, setIsOpenMonth] = useState(false);
  const [month, setmonth] = useState("Select month");
  const [form, setForm] = useState({
    batchId: "",
    course: "",
    students: "",
    startDate: "",
    endDate: "",
    instructor1: "",
    instructor2: "",
    progress: "",
    whatsapp: "",
    github: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const [item2, setItem2] = useState("");
  const [batches, setBatches] = useState([]);
  const [selectedbatch, setselectedBatch] = useState([]);
  const [searchTermBatches, setSearchTermBatches] = useState("");
  const [filteredBatches, setFilteredBatches] = useState([]);
  const [studentsData, setstudentsData] = useState([]);
  const [newStudentsData, setnewStudentsData] = useState([]);
  const [searchTermNewStudent, setsearchTermNewStudent] = useState("");
  const [searchTermStudent, setsearchTermStudent] = useState("");
  const [searchnewStudent, setsearchnewStudent] = useState([]);
  const [searchStudent, setsearchStudent] = useState([]);
  const [BatchesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [addStudents, setAddStudents] = useState(false);

  const totalPages = Math.ceil(batches.length / BatchesPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    async function fetchBatches() {
      const res = await axios.get(`/api/batch/`);
      setBatches(res.data);
      console.log(res.data);
    }
    fetchBatches();
  }, []);
  const handleSelect2 = (value, batchId) => {
    setactive("view details");
    const studentOfThisBatch = [];
    setItem2(value);
    console.log(value);
    async function fetchBatches() {
      const res = await axios.get(`/api/batch/${value}`);
      setselectedBatch(res.data);
    }
    async function fetchstudents() {
      const res = await axios.get(`/api/onboarding/personalInfo/route`);
      const data = res.data;
      data.forEach((student) => {
        if (student.batchId === batchId) {
          studentOfThisBatch.push(student);
        }
      });
      setstudentsData(studentOfThisBatch);
    }
    fetchBatches();
    fetchstudents();
  };
  const handleAddStudents = () => {
    setAddStudents(true);
    const studentOfThisBatch = [];
    async function fetchstudents() {
      const res = await axios.get(`/api/onboarding/personalInfo/route`);
      const data = res.data;
      data.forEach((student) => {
        if (student.batchId === undefined) {
          studentOfThisBatch.push(student);
        }
      });
      setnewStudentsData(studentOfThisBatch);
    }
    fetchstudents();
  };

  useEffect(() => {
    const results = batches.filter(
      (batch) =>
        batch.batchId
          ?.toLowerCase()
          .includes(searchTermBatches.toLowerCase()) ||
        batch.students
          ?.toLowerCase()
          .includes(searchTermBatches.toLowerCase()) ||
        batch.instructor1
          ?.toLowerCase()
          .includes(searchTermBatches.toLowerCase()) ||
        batch.instructor2
          ?.toLowerCase()
          .includes(searchTermBatches.toLowerCase()) ||
        batch.course?.toLowerCase().includes(searchTermBatches.toLowerCase())
    );

    setFilteredBatches(results);
  }, [searchTermBatches, batches]);

  useEffect(() => {
    const results = studentsData.filter(
      (student) =>
        student.name?.toLowerCase().includes(searchTermStudent.toLowerCase()) ||
        student.batchId?.toLowerCase().includes(searchTermStudent.toLowerCase())
    );

    setsearchStudent(results);
  }, [searchTermStudent, studentsData]);

  useEffect(() => {
    const results = newStudentsData.filter(
      (student) =>
        student.name
          ?.toLowerCase()
          .includes(searchTermNewStudent.toLowerCase()) ||
        student.batchId
          ?.toLowerCase()
          .includes(searchTermNewStudent.toLowerCase())
    );

    setsearchnewStudent(results);
  }, [searchTermNewStudent, newStudentsData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/batch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Batch created successfully", data);
      setactive("");
    } catch (error) {
      console.error("Failed to create batch", error);
    }
  };
  const handleClearFilter = () => {
    setItem("Select Course");
    setSearchTermBatches("");
    setmonth("Select Month");
    setyear("Select Year");
    setfilter(false);
  };
  const handleSelectMonth = (value) => {
    setmonth(value);
    setIsOpenMonth(false);
    setSearchTermBatches(value);
  };
  const handleSelectYear = (value) => {
    setyear(value);
    setIsOpenYear(false);
    setSearchTermBatches(value);
  };
  const handleSelect = (value) => {
    setItem(value);
    setIsOpen(false);
    setSearchTermBatches(value);
  };

  const handleReduce = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleIncrease = () => {
    if (currentPage === totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleAddSelectedStudent = async (value) => {
    const data = {
      batchId: form.batchId,
      course: form.course,
    };

    try {
      const response = await fetch(`/api/onboarding/personalInfo/${value}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        console.log(result.user);
      } else {
        alert("Failed to update user");
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
    async function fetchstudents() {
      const res = await axios.get(`/api/onboarding/personalInfo/route`);
      const studentOfThisBatch = [];
      const data = res.data;
      data.forEach((student) => {
        if (student.batchId === form.batchId) {
          studentOfThisBatch.push(student);
        }
      });
      setstudentsData(studentOfThisBatch);
    }
    fetchstudents();
    handleAddStudents();
  };
  return (
    <>
      <AdminNavbar />

      <main className="relative px-[59.5px] pb-[78px] pt-[0] max-md:px-[40px] max-sm:px-[20px]">
        {active === "" && (
          <>
            <div className="mb-[13px] justify-between bg-white pl-[19.08px] max-md:flex-col max-md:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[30.92px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center gap-[27.5px]">
              <div className="flex max-[500px]:flex-col max-[500px]:items-start max-[500px]:w-full gap-[16px] max-sm:gap-[8px] items-center gap-[27.5px]">
                <input
                  type="text"
                  name=""
                  onChange={(e) => setSearchTermBatches(e.target.value)}
                  className="w-[365px] max-[500px]:pr-[40px] max-[800px]:w-[310px] max-[500px]:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] max-sm:pr-0 border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                  placeholder="Search by student name, PAN number"
                  id=""
                />
                <Image
                  src="/images/search.svg"
                  className="cursor-pointer max-[500px]:left-auto max-[500px]:right-[34px] max-[800px]:left-[290px] max-hamburger:top-[27px] max-sm:top-[27px] absolute left-[347.88px]"
                  width={24}
                  height={24}
                />
                <div
                  onClick={() => setfilter(true)}
                  className="cursor-pointer h-[44px] max-[500px]:hidden border-[1px] px-[16px] border-[black] rounded-[9px] py-[13px] flex gap-[8px]"
                >
                  <Image src="/images/filter-fill.svg" width={18} height={18} />
                  <p className="text-[14px] leading-[16.94px]">Filter by</p>
                </div>
              </div>
              <div className="flex items-center max-[500px]:w-full gap-[16px]">
                <button
                  onClick={() => setactive("add details")}
                  className="h-[37px] w-[99px] max-[500px]:w-full bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                >
                  Add Batch
                </button>
                <div
                  onClick={() => setfilter(true)}
                  className="cursor-pointer h-[44px] max-[500px]:w-full max-[500px]:justify-center max-[500px]:flex hidden border-[1px] px-[16px] border-[black] rounded-[9px] py-[13px] flex gap-[8px]"
                >
                  <Image src="/images/filter-fill.svg" width={18} height={18} />
                  <p className="text-[14px] leading-[16.94px]">Filter by</p>
                </div>
              </div>
            </div>
            <div className="h-[533px] pb-[20px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1109px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[300px] mr-[50px]">
                  Batch ID
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[260px] mr-[30px]">
                  Instructor
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                  No of students
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70">
                  | Start Date &nbsp;&nbsp;| Course
                </p>
              </div>
              {searchTermBatches === ""
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
                          {batch.instructor1}{" "}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                          {batch.students}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70">
                          | {batch.startDate} |{" "}
                          {batch.course === "Full Stack Development"
                            ? "FSD"
                            : batch.course}
                        </p>
                      </div>
                      <button
                        onClick={() => handleSelect2(batch._id, batch.batchId)}
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
                          {batch.batchId}{" "}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                          {batch.instructor1}{" "}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70 w-[102px] mr-[7px]">
                          {batch.students}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70">
                          | {batch.startDate} |{" "}
                          {batch.course === "Full Stack Development"
                            ? "FSD"
                            : batch.course}
                        </p>
                      </div>
                      <button
                        onClick={() => handleSelect2(batch._id, batch.batchId)}
                        className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
              {searchTermBatches === "" && totalPages !== 1 && (
                <div className="pagination flex gap-[16px] max-smallerphone:gap-[8px] max-lg:relative max-lg:top-0 max-lg:mt-[30px] max-lg:left-[0px] max-sm:left-[0px] absolute right-[60px] bottom-[31px]">
                  <div
                    onClick={handleReduce}
                    className="w-[32px] h-[32px] flex max-smallerphone:pr-0 pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer"
                  >
                    <Image src="/images/Group 4.svg" width={14.13} height={14.13} />
                  </div>
                  <Pagination
                    BatchesPerPage={BatchesPerPage}
                    totalBatches={batches.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                  <div
                    onClick={handleIncrease}
                    className="w-[32px] rotate-180 h-[32px] max-smallphone:pr-0 flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer"
                  >
                    <Image src="/images/Group 4.svg" width={14.13} height={14.13} />
                  </div>
                </div>
              )}
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
            <div className="h-auto pb-[36.88px] w-full bg-white rounded-[8px] pt-[37.12px] max-sm:px-[20px] px-[31.48px]">
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
                    id=""
                    className="w-[103px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="pb-[32px] max-xl:flex-wrap border-b-[0.5px] border-[#00000033] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Instructor 1
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedbatch.instructor1}
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
                    id=""
                    value={selectedbatch.instructor2}
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
                    id=""
                    value={selectedbatch.startDate}
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
                    id=""
                    value={selectedbatch.endDate}
                    className="w-[142px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                Batch Links
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-lg:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-lg:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    WhatsApp Group Link
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedbatch.whatsapp}
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-lg:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    GitHub Link{" "}
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedbatch.github}
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
            </div>
            <h1 className="mt-[39.5px] mb-[15.41px] text-[20px] leading-[26px]">
              Students
            </h1>
            <div className="mb-[13px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[34px] max-sm:gap-[8px] items-center">
              <input
                type="text"
                name=""
                onChange={(e) => setsearchTermStudent(e.target.value)}
                className="w-[483px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search student name, instructor, batch ID"
                id=""
              />
              <Image
                src="/images/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:top-[] max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[28px] absolute left-[467.88px]"
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
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[] mr-[7px]">
                  UIN | College | passing Year
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
                          {student.yearOfPass}
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
                          {student.yearOfPass}
                        </p>
                      </div>
                    </div>
                  ))}
            </div>
          </>
        )}
        {active === "add details" && (
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
            <div className="h-auto pb-[36.88px] w-full bg-white rounded-[8px] pt-[37.12px] max-sm:px-[20px] px-[31.48px]">
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
                    name="batchId"
                    onChange={() => handleChange(event)}
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
                    onChange={() => handleChange(event)}
                    name="course"
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
                    onChange={() => handleChange(event)}
                    name="students"
                    id=""
                    className="w-[103px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <div className="pb-[32px] max-xl:flex-wrap border-b-[0.5px] border-[#00000033] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Instructor 1
                  </p>
                  <input
                    type="text"
                    name="instructor1"
                    onChange={() => handleChange(event)}
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
                    name="instructor2"
                    onChange={() => handleChange(event)}
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
                    name="startDate"
                    onChange={() => handleChange(event)}
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
                    name="endDate"
                    onChange={() => handleChange(event)}
                    id=""
                    className="w-[142px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                Batch Links
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-lg:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-lg:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    WhatsApp Group Link
                  </p>
                  <input
                    type="text"
                    name="whatsapp"
                    onChange={() => handleChange(event)}
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-lg:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    GitHub Link{" "}
                  </p>
                  <input
                    type="text"
                    name="github"
                    onChange={() => handleChange(event)}
                    id=""
                    className="w-[407px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
              </div>
            </div>
            <h1 className="mt-[39.5px] mb-[15.41px] text-[20px] leading-[26px]">
              Students
            </h1>
            <div className="mb-[13px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[34px] max-sm:gap-[8px] items-center">
              <input
                type="text"
                name=""
                onChange={(e) => setsearchTermNewStudent(e.target.value)}
                onClick={handleAddStudents}
                className="w-[483px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search student name, instructor, batch ID"
                id=""
              />
              <Image
                src="/images/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:top-[] max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[28px] absolute left-[467.88px]"
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
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[] mr-[7px]">
                  UIN | College | Passing Year
                </p>
              </div>
              {studentsData.map((student, index) => (
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
                      {student.yearOfPass}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleSubmit(event)}
              className="h-[37px] w-[99px] mt-[28px] max-[500px]:w-full bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
            >
              Add Batch
            </button>
          </>
        )}
        {filter && (
          <div className="absolute top-[85px] z-[99] shadow-xl h-[170px] max-xl:h-auto py-[34px] pl-[47px] pr-[73px] max-[1330px]:px-[20px] max-[1330px]:py-[32px] rounded-[8px] bg-[white] w-[calc(100%-120px)] max-md:w-[calc(100%-80px)] max-sm:w-[calc(100%-40px)]">
            <div className="flex justify-between max-xl:flex-col">
              <div className="flex max-lg:flex-wrap gap-[20px]">
                <div className="max-sm:w-full relative">
                  <p className="text-[18.67px] leading-[22.4px] mb-[12px]">
                    Filter by course
                  </p>
                  <Image
                    src="/images/drop.svg"
                    className={
                      isOpen
                        ? "absolute rotate-180 max-md:right-[20px] right-[20.5px] cursor-pointer top-[65.5px]"
                        : "absolute right-[20.5px] max-md:right-[20px] cursor-pointer top-[65.5px]"
                    }
                    width={15}
                    height={8.55}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="pl-[23.5px] max-sm:w-full h-[68px] bg-white cursor-pointer w-[333px] border-[1px] border-[#00000033] rounded-[6px] py-[22px] text-[20px] leading-[24px]"
                  >
                    {" "}
                    {item}
                  </div>{" "}
                  {isOpen && (
                    <div className="bg-white max-md:w-[calc(100%-80px)] rounded-[4px] max-sm:w-[calc(100%-40px)] absolute border-[1px] border-[#00000033] top-[103px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() => handleSelect("Full Stack Development")}
                          className="pl-[23.5px] w-[330px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          Full Stack Development
                        </li>
                        <li
                          onClick={() => handleSelect("Frontend Mastery")}
                          className="pl-[23.5px] w-[330px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          Frontend Mastery
                        </li>
                        <li
                          onClick={() => handleSelect("Backend Mastery")}
                          className="pl-[23.5px] w-[330px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          Backend Mastery
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="max-sm:w-full relative">
                  <p className="text-[18.67px] leading-[22.4px] mb-[12px]">
                    Filter by year
                  </p>
                  <Image
                    src="/images/drop.svg"
                    className={
                      isOpen
                        ? "absolute rotate-180 max-md:right-[20px] right-[20.5px] cursor-pointer top-[65.5px]"
                        : "absolute right-[20.5px] max-md:right-[20px] cursor-pointer top-[65.5px]"
                    }
                    width={15}
                    height={8.55}
                    onClick={() => setIsOpenYear(!isOpenYear)}
                  />
                  <div
                    onClick={() => setIsOpenYear(!isOpenYear)}
                    className="pl-[23.5px] max-sm:w-full h-[68px] bg-white cursor-pointer w-[221px] border-[1px] border-[#00000033] rounded-[6px] py-[22px] text-[20px] leading-[24px]"
                  >
                    {" "}
                    {year}
                  </div>{" "}
                  {isOpenYear && (
                    <div className="bg-white h-[210px] overflow-scroll max-md:w-[calc(100%-80px)] rounded-[4px] max-sm:w-[calc(100%-40px)] absolute border-[1px] border-[#00000033] top-[103px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() => handleSelectYear("2024")}
                          className="pl-[23.5px] w-[220px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          2024
                        </li>
                        <li
                          onClick={() => handleSelectYear("2023")}
                          className="pl-[23.5px] w-[220px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          2023
                        </li>
                        <li
                          onClick={() => handleSelectYear("2022")}
                          className="pl-[23.5px] w-[220px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          2022
                        </li>
                        <li
                          onClick={() => handleSelectYear("2021")}
                          className="pl-[23.5px] w-[220px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          2021
                        </li>
                        <li
                          onClick={() => handleSelectYear("2020")}
                          className="pl-[23.5px] w-[220px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          2020
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="max-sm:w-full relative">
                  <p className="text-[18.67px] leading-[22.4px] mb-[12px]">
                    Filter by month
                  </p>
                  <Image
                    src="/images/drop.svg"
                    className={
                      isOpen
                        ? "absolute rotate-180 max-md:right-[20px] right-[20.5px] cursor-pointer top-[65.5px]"
                        : "absolute right-[20.5px] max-md:right-[20px] cursor-pointer top-[65.5px]"
                    }
                    width={15}
                    height={8.55}
                    onClick={() => setIsOpenMonth(!isOpenMonth)}
                  />
                  <div
                    onClick={() => setIsOpenMonth(!isOpenMonth)}
                    className="pl-[23.5px] max-sm:w-full h-[68px] bg-white cursor-pointer w-[249px] border-[1px] border-[#00000033] rounded-[6px] py-[22px] text-[20px] leading-[24px]"
                  >
                    {" "}
                    {month}
                  </div>{" "}
                  {isOpenMonth && (
                    <div className="bg-white h-[210px] overflow-scroll max-md:w-[calc(100%-80px)] rounded-[4px] max-sm:w-[calc(100%-40px)] absolute border-[1px] border-[#00000033] top-[103px] z-[22222] cursor-pointer">
                      <ul>
                        <li
                          onClick={() => handleSelectMonth("January")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          January
                        </li>
                        <li
                          onClick={() => handleSelectMonth("February")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          February
                        </li>
                        <li
                          onClick={() => handleSelectMonth("March")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          March
                        </li>
                        <li
                          onClick={() => handleSelectMonth("April")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          April
                        </li>
                        <li
                          onClick={() => handleSelectMonth("May")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          May
                        </li>
                        <li
                          onClick={() => handleSelectMonth("June")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          June
                        </li>
                        <li
                          onClick={() => handleSelectMonth("July")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          July
                        </li>
                        <li
                          onClick={() => handleSelectMonth("August")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          August
                        </li>
                        <li
                          onClick={() => handleSelectMonth("September")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          September
                        </li>
                        <li
                          onClick={() => handleSelectMonth("October")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          October
                        </li>
                        <li
                          onClick={() => handleSelectMonth("November")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          November
                        </li>
                        <li
                          onClick={() => handleSelectMonth("December")}
                          className="pl-[23.5px] w-[245px] border-b-[0.5px] hover:bg-[#0000001A] hover:border-[#0000001A] transition-all max-md:w-full cursor-pointer py-[22px] text-[20px] leading-[24px]"
                        >
                          December
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex max-[350px]:flex-col mt-[46.5px] gap-[12px]">
                <button
                  onClick={handleClearFilter}
                  className="bg-[white] h-[43px] text-black border-[1px] border-black px-[16px] py-[13px] rounded-[4px] text-[14px] leading-[16.8px]"
                >
                  Clear filters
                </button>
                <button
                  onClick={() => setfilter(false)}
                  className="bg-[black] h-[43px] text-white px-[16px] py-[13px] rounded-[4px] text-[14px] leading-[16.8px]"
                >
                  Apply filters{" "}
                </button>
              </div>
            </div>{" "}
          </div>
        )}{" "}
        {addStudents && (
          <div
            onMouseLeave={() => setAddStudents(false)}
            className="absolute top-[665px] max-md:top-[1250px] z-[99] shadow-xl overflow-scroll rounded-[8px] bg-[white] w-[992px] h-[295px] max-xl:w-[calc(100%-120px)] max-md:w-[calc(100%-80px)] max-sm:w-[calc(100%-40px)]"
          >
            {searchTermNewStudent === ""
              ? newStudentsData.map((student, index) => (
                  <div
                    key={student._id}
                    className="flex items-center justify-between pl-[19.5px] pr-[28px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[992px]"
                  >
                    <div className="flex items-center">
                      <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                        {student.name}
                      </p>
                      <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                        {student.course}
                      </p>
                      <p className="text-[14px] leading-[16.8px] opacity-70 w-[200px] mr-[53px]">
                        {student._id.slice(0, 8)} | {student.college} |{" "}
                        {student.yearOfPass}
                      </p>
                    </div>
                    <button
                      onClick={() => handleAddSelectedStudent(student._id)}
                      className="w-[44px] h-[34px] text-[28px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                    >
                      +{" "}
                    </button>
                  </div>
                ))
              : searchnewStudent.map((student, index) => (
                  <div
                    key={student._id}
                    className="flex items-center justify-between pl-[19.5px] pr-[28px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[992px]"
                  >
                    <div className="flex items-center">
                      <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                        {student.name}
                      </p>
                      <p className="text-[16px] leading-[19.2px] w-[260px] mr-[30px]">
                        {student.course}
                      </p>
                      <p className="text-[14px] leading-[16.8px] opacity-70 w-[200px] mr-[53px]">
                        {student._id.slice(0, 8)} | {student.college} |{" "}
                        {student.yearOfPass}
                      </p>
                    </div>
                    <button
                      onClick={() => handleAddSelectedStudent(student._id)}
                      className="w-[44px] h-[34px] text-[28px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                    >
                      +{" "}
                    </button>
                  </div>
                ))}{" "}
          </div>
        )}{" "}
      </main>
    </>
  );
}
const Pagination = ({
  BatchesPerPage,
  totalBatches,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalBatches / BatchesPerPage);

  if (totalPages > 1) {
    if (currentPage > 2) pageNumbers.push(1);

    if (currentPage > 3) pageNumbers.push("...");

    if (currentPage > 1) pageNumbers.push(currentPage - 1);

    pageNumbers.push(currentPage);

    if (currentPage < totalPages) pageNumbers.push(currentPage + 1);

    if (currentPage < totalPages - 2) pageNumbers.push("...");

    if (currentPage < totalPages - 1) pageNumbers.push(totalPages);
  }

  return (
    <div className="flex gap-[8px] max-smallerphone:gap-[6px]">
      {pageNumbers.map((number, index) => (
        <p
          key={index}
          className={`${
            number === currentPage
              ? "bg-black text-white"
              : "bg-[transparent] text-black"
          } text-[17.23px] max-smallphone:text-base cursor-pointer leading-[16px]`}
        >
          {number === "..." ? (
            <span className="h-[23px] w-[32px] flex justify-center items-end">...</span>
          ) : (
            <span
              className="w-[32px] h-[32px] flex items-center border-[1.23px] border-black max-smallphone:w-[30px] justify-center"
              onClick={() => paginate(number)}
            >
              {number}
            </span>
          )}
        </p>
      ))}
    </div>
  );
};
