import Image from "next/image";
import { useState, useEffect } from "react";
import AdminNavbar from "../../components/adminbar";
import axios from "axios";

export default function Jobs() {
  const [active, setactive] = useState("");
  const [selectedtrainersData, setselectedtrainersData] = useState([]);
  const [trainersData, setTrainersData] = useState([]);
  const [searchTermTrainer, setsearchTermTrainer] = useState("");
  const [searchTrainer, setsearchTrainer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [trainersPerPage] = useState(10);
  const indexOfLasttrainers = currentPage * trainersPerPage;
  const indexOfFirsttrainers = indexOfLasttrainers - trainersPerPage;
  const currenttrainers = trainersData.slice(
    indexOfFirsttrainers,
    indexOfLasttrainers
  );
  const totalPages = Math.ceil(trainersData.length / trainersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    const results = trainersData.filter(
      (trainer) =>
        trainer.name?.toLowerCase().includes(searchTermTrainer.toLowerCase()) ||
        trainer.batchId
          ?.toLowerCase()
          .includes(searchTermTrainer.toLowerCase()) ||
        trainer.course?.toLowerCase().includes(searchTermTrainer.toLowerCase())
    );

    setsearchTrainer(results);
  }, [searchTermTrainer, trainersData]);
  useEffect(() => {
    async function fetchTrainers() {
      const res = await axios.get(`/api/admin/trainer`);
      setTrainersData(res.data);
    }
    fetchTrainers();
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText("http://localhost:3000/trainer/onboarding");
  };
  const handleSelecttrainer = (value) => {
    setactive("view trainer details");
    console.log(value);
    async function fetchtrainers() {
      const res = await axios.get(`/api/trainer/display/${value}`);
      setselectedtrainersData(res.data);
    }
    fetchtrainers();
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

  return (
    <>
      <AdminNavbar />

      <main className="relative px-[59.5px] pb-[78px] pt-[0] max-md:px-[40px] max-sm:px-[20px]">
        {active === "" && (
          <>
            <div className="h-[169px] pl-[22px] max-sm:p-[20px] max-sm:h-auto pt-[27.12px] bg-white rounded-[8px]">
              <h1 className="text-[20px] leading-[26px] font-bold mb-[18px]">
                Trainer onboarding
              </h1>
              <p className="text-[14px] leading-[16.8px] opacity-80 mr-[50px]">
                Onboarding link
              </p>
              <div className="flex mt-[8px] max-sm:flex-col gap-[14px]">
                <input
                  type="text"
                  value="http://localhost:3000/trainer/onboarding"
                  className="w-[407px] max-sm:w-full h-[45px] rounded-[6px] border-[##0000004D] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                  placeholder=""
                  disabled
                  id=""
                />
                <button
                  onClick={copyCode}
                  className="h-[45px] w-[95px] max-sm:w-full bg-black text-white rounded-[6px] text-[14px] leading-[16.8px]"
                >
                  Copy Link
                </button>
              </div>
            </div>
            <div className="my-[14px] bg-white pl-[19.08px] max-sm:flex-col max-sm:items-start relative pt-[15px] pb-[14px] max-md:px-[20px] max-sm:px-[15px] pr-[22.92px] rounded-[6px] flex gap-[16px] max-sm:gap-[8px] items-center gap-[27.5px]">
              <input
                type="text"
                onChange={(e) => setsearchTermTrainer(e.target.value)}
                name=""
                className="w-[483px] max-sm:w-full h-[48px] rounded-[9px] bg-[#F8F8F8] border-[#00000033] border-[1px] placeholder:text-[#000000B2] text-[14px] leading-[16.8px] pl-[18.63px] pr-[14px]"
                placeholder="Search trainer name"
                id=""
              />
              <Image
                src="/images/search.svg"
                className="cursor-pointer max-sm:right-[24px] max-sm:left-auto max-sm:right-[30px] max-hamburger:right-[34px] max-hamburger:top-[27px] max-sm:top-[27px] absolute left-[465.88px]"
                width={24}
                height={24}
              />
            </div>
            <div className="h-[533px] pb-[20px] overflow-scroll w-full bg-white rounded-[8px]">
              <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] min-w-[1189px] border-[#00000033]">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                  Slno.
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[200px] mr-[85px]">
                  Trainer name
                </p>
                <p className="text-[14px] leading-[16.8px] opacity-70 w-[250px] mr-[47px]">
                  Course
                </p>
                <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                  UIN
                </span>
                <p className="text-[14px] leading-[16.8px] opacity-70">
                  | Contact Number &nbsp; | Email
                </p>
              </div>
              {searchTermTrainer === ""
                ? currenttrainers.map((trainer, index) => (
                    <div
                      key={trainer._id}
                      className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1189px]"
                    >
                      <div className="flex items-center">
                        <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                          {index + 1}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[200px] mr-[85px]">
                          {trainer.name}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[290px] mr-[7px]">
                          {trainer.course}
                        </p>
                        <span className="text-[14px] leading-[16.8px] opacity-70 w-[102px]">
                          {trainer._id.slice(0, 8)}
                        </span>
                        <p className="text-[14px] leading-[16.8px] opacity-70">
                          | {trainer.phoneNumber} | {trainer.email}
                        </p>
                      </div>
                      <button
                        onClick={() => handleSelecttrainer(trainer._id)}
                        className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                      >
                        View Details{" "}
                      </button>
                    </div>
                  ))
                : searchTrainer.map((trainer, index) => (
                    <div
                      key={trainer._id}
                      className="flex items-center justify-between pl-[11.5px] pr-[39px] h-[59px] border-b-[0.5px] border-[#00000033] min-w-[1109px]"
                    >
                      <div className="flex items-center">
                        <p className="text-[12px] leading-[14.4px] opacity-70 w-[52px] mr-[15px] max-xl:w-[30px]">
                          {index + 1}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[300px] mr-[50px]">
                          {trainer.name}
                        </p>
                        <p className="text-[16px] leading-[19.2px] w-[260px] mr-[40px]">
                          {trainer.course}
                        </p>
                        <p className="text-[14px] leading-[16.8px] opacity-70 w-[236px]">
                          {trainer._id.slice(0, 8)} | {trainer.college} |{" "}
                          {trainer.yearOfPass}
                        </p>
                      </div>
                      <button
                        onClick={() => handleSelecttrainer(trainer._id)}
                        className="w-[111px] py-[5px] bg-black text-white rounded-[6px] text-[16px] leading-[19.2px]"
                      >
                        View Details{" "}
                      </button>
                    </div>
                  ))}
            </div>
            {searchTermTrainer === "" && totalPages !== 1 && (
              <div className="pagination flex gap-[16px] max-smallerphone:gap-[8px] max-lg:relative max-lg:top-0 max-lg:mt-[30px] max-lg:left-[0px] max-sm:left-[0px] absolute right-[60px] bottom-[31px]">
                <div
                  onClick={handleReduce}
                  className="w-[32px] h-[32px] flex max-smallerphone:pr-0 pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer"
                >
                  <Image src="/images/Group 4.svg" width={14.13} height={14.13} />
                </div>
                <Pagination
                  trainersPerPage={trainersPerPage}
                  totaltrainers={trainersData.length}
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
          </>
        )}
        {active === "view trainer details" && (
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
            <div className="h-auto pb-[36.88px] w-full bg-white rounded-[8px] pt-[36px] max-sm:px-[20px] px-[31.48px]">
              <div className="w-[210px] h-[196px] border-[1px] rounded-[14px] border-[#D8D8D8] flex items-center justify-center mb-[32px]">
                <Image src="/images/profile.png" width={147.1} height={147.1} />
              </div>
              <h1 className="text-[20px] leading-[26px] font-semibold">
                Trainer information
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">Name</p>
                  <input
                    type="text"
                    name=""
                    value={selectedtrainersData.name}
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    UIN
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedtrainersData._id}
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Course
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedtrainersData.course}
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
              </div>
              <div className="pb-[32px] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Email
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={selectedtrainersData.email}
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Phone number
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedtrainersData.phoneNumber}
                    id=""
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
              </div>
              <div className="flex gap-[33px] max-sm:flex-col max-xl:flex-wrap max-hamburger:gap-[20px] pb-[32px] border-b-[0.5px] border-[#00000033]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">DOB</p>
                  <input
                    type="text"
                    name=""
                    value={selectedtrainersData.dob}
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    GitHub profile
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={selectedtrainersData.github}
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    LinkedIn profile
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={selectedtrainersData.linkedin}
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                Account information
              </h1>
              <div className="flex gap-[33px] max-sm:flex-col max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Email
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedtrainersData.email}
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Phone number
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedtrainersData.phoneNumber}
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
              </div>
              <div className="pb-[32px] border-b-[0.5px] border-[#00000033] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[33px]">
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Password
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={selectedtrainersData.password}
                    className="w-[309px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                Address
              </h1>
              <div className="pb-[24px] mt-[24px] flex items-end max-hamburger:items-start max-hamburger:flex-col gap-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    State
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedtrainersData.state}
                    id=""
                    className="w-[154px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    City
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedtrainersData.city}
                    id=""
                    className="w-[154px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
                <div className="max-hamburger:w-full">
                  <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                    Postal ZIP code
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={selectedtrainersData.zipCode}
                    className="w-[235px] max-hamburger:w-full pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
              </div>
              <div className="pb-[32px] border-b-[0.5px] border-[#00000033] max-hamburger:items-start max-hamburger:flex-col gap-[24px]">
                <p className="text-[14px] leading-[15px] mb-[10px] text-[#2C2E32]">
                  Enter house address
                </p>
                <textarea
                  className="w-[593px] max-md:w-full h-[119px] pt-[11.5px] pl-[12.74px] border-[0.5px] border-[#00000080] rounded-[4px] resize-none"
                  name=""
                  value={selectedtrainersData.address}
                  id=""
                  ></textarea>
              </div>
              <h1 className="mt-[32px] text-[20px] leading-[26px] font-semibold">
                KYC information
              </h1>
              <div className="flex pr-[100px] flex-wrap gap-[24px] max-sm:flex-col max-hamburger:gap-[20px] mt-[18px] mb-[24px]">
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    PAN number
                  </p>
                  <input
                    type="text"
                    value={selectedtrainersData.panNumber}
                    name=""
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                    />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    PAN card photo
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[142px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/images/download.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                        />
                    </div>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[14px] leading-[18.2px] mb-[10px]">
                    Aadhaar number
                  </p>
                  <input
                    type="text"
                    name=""
                    value={selectedtrainersData.aadharNumber}
                    id=""
                    className="w-[309px] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] bg-[white] border-[0.5px] border-[#00000080]"
                  />
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Aadhaar card photo
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[142px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/images/download.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    10th Marks card photo
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[142px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/images/download.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                <div className="max-hamburger:w-[100%]">
                  <p className="text-[#2C2E32] text-[14px] leading-[18.2px] mb-[10px]">
                    Experience letter
                  </p>
                  <div className="flex gap-[10px]">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-[142px] bg-[#F6F6F6] max-hamburger:w-[100%] pl-[15.71px] rounded-[4px] h-[40px] border-[0.5px] border-[#00000080]"
                    />
                    <div className="flex justify-center items-center border-[0.5px] border-[#00000080] rounded-[4px] h-[40px] w-[51px]">
                      <Image
                        src="/images/download.svg"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
const Pagination = ({
  trainersPerPage,
  totaltrainers,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totaltrainers / trainersPerPage);

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
