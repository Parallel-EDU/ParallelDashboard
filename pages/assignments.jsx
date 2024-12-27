import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/style.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Learn() {
  const [remark, setRemark] = useState(false);
  const [assignment, setAssignment] = useState(false);
  const [assignmentData, setAssignmentData] = useState([]);
  const [allAssignmentData, setAllAssignmentData] = useState([]);
  const [Completed, setCompleted] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Select date");
  const [formData, setformData] = useState({
    batchId: "",
    SID: "",
    studentName: "",
    title: "",
    topic: "",
    description: "",
    link: "",
    dateAssign: "",
  });
  const [userData, setUserData] = useState(null);
  const [tokenId, settokenId] = useState(null);

  function formatedDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
  const [selectedAssignment, setSelectedAssignment] = useState([]);
  const handleViewAssignment = (id) => {
    const results = allAssignmentData.filter((assignment) =>
      assignment._id.includes(id)
    );
    setSelectedAssignment(results);
    setAssignment(true);
  };
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
  const viewUnSubmitted = () =>{
    const results = allAssignmentData.filter((assignment) =>
      assignment._id.includes(id)
    );
    setSelectedAssignment(results);
  }
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
        if (results.length > 0) {
          const user = results[0];
          setUserData(user);
          setformData({
            ...formData,
            batchId: user.batchId,
            SID: user.SID,
            studentName: user.name,
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [tokenId]);
  const handleSubmit = async (value) => {
    setformData({
      ...formData,
      description: value.description,
      title: value.title,
      topic: value.topic,
      dateAssign: value.dateAssign,
    });
    if (formData.link === "") {
      alert("Please, Paste the Assignment Link");
    } else {
      try {
        const response = await axios.post(
          "/api/platform/assignments/submitAssignment",
          formData
        );
        alert("Assignment Submitted");
      } catch (error) {
        alert("Server error, Try again later");
      }
      console.log(formData);
    }
  };

  const [recentAssignments, setRecentAssignments] = useState([]);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(
        `/api/platform/assignments/route?batchId=${userData.batchId}`
      );
      const data = response.data.data;

      setAssignmentData(data);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  const fetchSubmitted = async () => {
    try {
      const response = await axios.get(
        `/api/platform/assignments/submitAssignment?SID=${userData.SID}`
      );
      const data = response.data.data;

      setCompleted(data);
    } catch (error) {
      console.error("Error fetching submitted assignments:", error);
    }
  };

  useEffect(() => {
    fetchAssignments();
    fetchSubmitted();
  }, [userData]);

  useEffect(() => {
    if (assignmentData.length > 0 && Completed.length > 0) {
      const mergedDocs = [];
      const recent = [];

      assignmentData.forEach((doc1) => {
        const matchingDoc = Completed.find(
          (doc2) =>
            doc2.topic === doc1.topic &&
            doc2.title === doc1.title &&
            doc2.dateAssign === doc1.dateAssign &&
            doc2.description === doc1.description
        );

        const assignDate = new Date(doc1.dateAssign);
        const currentDate = new Date();
        const timeDifference = currentDate - assignDate;
        const isWithin24Hours = timeDifference <= 24 * 60 * 60 * 1000;

        if (isWithin24Hours) {
          recent.push(doc1);
        }

        if (matchingDoc) {
          mergedDocs.push(matchingDoc);
        } else {
          mergedDocs.push(doc1);
        }
      });

      setAllAssignmentData(mergedDocs);
      setRecentAssignments(recent);
    }
  }, [assignmentData, Completed]);
  return (
    <>
      <Navbar />
      <main className="pt-[63.51px] px-[60px] max-sm:px-[20px] max-md:px-[40px] pb-[85px]">
        {recentAssignments.length > 0 ? (
          recentAssignments.map((assignment, index) => (
            <div className="w-full pt-[25.52px] mb-[20px] pl-[29.45px] max-md:p-[20px] pb-[52.49px] rounded-[6px] bg-white">
              <div key={index}>
                <p className="p-[8px] bg-[#0C6926] rounded-[24px] inline text-[14px] text-white leading-[18.2px]">
                  New Assignment
                </p>
                <h1 className="font-semibold mt-[28.72px] text-[20px] leading-[26px]">
                  {assignment.title}
                </h1>
                <p className="mt-[20.14px] max-sm:w-full w-[587px]">
                  {assignment.description}
                </p>
              </div>
              <button className="py-[10px] px-[24px] border-[1px] border-black rounded-[6px] text-base font-semibold mt-[28.72px] mb-[33.75px]">
                View Resources
              </button>
              <div className="pt-[33.74px] max-md:flex-col flex gap-[25.55px] border-t-[1px] border-[#00000033]">
                <div>
                  <p className="text-[#2C2E32] mb-[10px] text-[14px]">
                    Paste link to submit assignment
                  </p>
                  <input
                    type="text"
                    onChange={(e) =>
                      setformData({ ...formData, link: e.target.value })
                    }
                    className="border-[0.5px] rounded-[4px] py-[18.5px] px-[16.27px] w-[309px] max-sm:w-full italic text-[14px] border-[#00000080]"
                    placeholder="Click to paste link"
                    name=""
                    id=""
                  />
                </div>
                <button
                  onClick={() => handleSubmit(assignment)}
                  className="bg-[#30E29D] max-sm:w-full mt-[37.46px] py-[10px] px-[24px] rounded-[6px] text-base font-semibold h-[43.07px]"
                >
                  Submit Assignment
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full py-[25.52px] mb-[20px] pl-[29.45px] rounded-[6px] bg-white">
            <p>No New Assignments</p>
          </div>
        )}

        <div className="mt-[34.99px]">
          <h1 className="font-semibold text-[20px] leading-[26px] mb-[19px]">
            Previous assignments
          </h1>
          <div className="pt-[14px] relative h-[77px] pb-[15px] pl-[21px] pr-[31px] rounded-[8px] flex justify-between max-md:p-[20px] max-sm:h-auto max-sm:items-start gap-[12px] max-sm:flex-col items-center bg-white">
            <label
              htmlFor="calender"
              className="h-[48px] flex items-center relative justify-between border-[#0000004D] border-[1px] py-[12px] px-[14.28px] w-[244px] rounded-[6px]"
            >
              <input
                type="date"
                onChange={(e) => setSelectedDate(e.target.value)}
                name="calender"
                className="h-[48px] pl right-0 absolute pl-[80px] opacity-0 flex items-center justify-between border-[#0000004D] border-[1px] py-[12px] pr-[14.28px] rounded-[6px]"
                id="calender"
              />
              <p className="text-[14px]">{selectedDate}</p>
              <Image src="/images/calender.svg" width={24} height={24} />
            </label>
            <div
              onClick={() => setIsSubmitted(!isSubmitted)}
              className="flex items-center gap-[4px]"
            >
              <input type="checkbox" name="unsubmitted" id="unsubmitted" />
              <label
                htmlFor="unsubmitted"
                className="text-[14px] max-[350px]:text-[12px]"
              >
                Show only unsubmitted assignments
              </label>
            </div>
          </div>
        </div>
        <div className="h-[609px] pb-[20px] overflow-scroll w-full bg-white mt-[18.5px] rounded-[8px]">
          <div className="flex fixed z-10 sticky top-0 bg-white items-center pl-[11.5px] h-[45px] border-b-[0.5px] max-[1290px]:w-[1189px] border-[#00000033]">
            <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-[1500px]:mr-[10px]">
              Date
            </p>
            <p className="text-[14px] leading-[16.8px] opacity-70 w-[97px] mr-[50px] max-[1500px]:w-[120px] max-[1500px]:mr-[10px]">
              Topic
            </p>
            <p className="text-[14px] leading-[16.8px] opacity-70 w-[271px] mr-[7.26px] max-[1420px]:w-[220px] max-[1420px]:truncate">
              Assignment
            </p>
            <p className="text-[14px] leading-[16.8px] opacity-70 mr-[37px]">
              Date assigned
            </p>
            <p className="text-[14px] leading-[16.8px] opacity-70 mr-[242px] max-[1450px]:mr-[210.5px] max-[1365px]:mr-[165.5px]">
              Date submitted
            </p>
            <p className="text-[14px] leading-[16.8px] opacity-70 border-l-[1px] border-[#00000033] pt-[14.5px] pb-[13.5px] pl-[26.53px]">
              Grade assignment
            </p>
          </div>

          {allAssignmentData.map((assignment, index) => (
            <div
              key={index}
              className="flex items-center justify-between pl-[11.5px] pr-[39px] max-[1320px]:px-[10px] h-[59px] border-b-[0.5px] border-[#00000033] max-[1290px]:w-[1189px]"
            >
              <div className="flex items-center">
                <p className="text-[12px] leading-[14.4px] opacity-70 w-[104px] mr-[25.9px] max-[1500px]:mr-[10px]">
                  02/20/2024
                </p>
                <p className="text-[14px] leading-[16.8px] w-[97px] mr-[50px] max-[1500px]:w-[120px] max-[1500px]:mr-[10px]">
                  {assignment.topic}
                </p>
                <p className="text-[14px] leading-[16.8px] w-[271px] mr-[7.26px] max-[1420px]:w-[220px] max-[1420px]:truncate">
                  {assignment.title}
                </p>
                <p className="text-[14px] leading-[16.8px] mr-[52px]">
                  {assignment.dateAssign}
                </p>
                <p className="text-[14px] leading-[16.8px] mr-[55px] max-[1365px]:mr-[10px]">
                  {assignment.createdAt
                    ? formatedDate(assignment.createdAt)
                    : "DD/MM/YY "}
                  <button
                    onClick={() => handleViewAssignment(assignment._id)}
                    className="bg-[#30E29D] px-[10px] rounded-[6px] text-base font-semibold h-[29px] ml-[61.3px] max-[1450px]:ml-[30px]"
                  >
                    View Assignment
                  </button>
                </p>
                <div className=" flex items-center gap-[22.09px] max-[1300px]:gap- border-l-[1px] border-[#00000033] py-[17.41px] pl-[26.53px]">
                  <div className="flex gap-[4.76px]">
                    <Image
                      src="/images/blank.svg"
                      width={24.17}
                      height={24.17}
                    />
                    <Image
                      src="/images/blank.svg"
                      width={24.17}
                      height={24.17}
                    />
                    <Image
                      src="/images/blank.svg"
                      width={24.17}
                      height={24.17}
                    />
                    <Image
                      src="/images/blank.svg"
                      width={24.17}
                      height={24.17}
                    />
                    <Image
                      src="/images/blank.svg"
                      width={24.17}
                      height={24.17}
                    />
                  </div>
                  <p
                    onClick={() => setRemark(true)}
                    className="text-[14px] leading-[16.8px] font-bold opacity-70 cursor-pointer text-[14px] underline"
                  >
                    View Remarks
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      {assignment && (
        <div className="fixed top-0 bg-[#00000066] w-full h-[100vh] z-50 flex justify-center items-center">
          {selectedAssignment.map((assignment, index) => (
            <div className="w-[887px] max-lg:w-[95%] bg-white relative rounded-[6px] pt-[53.01px] max-md:px-[20px] max-md:py-[30px] pb-[51.06px] pl-[48px]">
              <Image
                src="/images/close.svg"
                className="absolute cursor-pointer max-md:right-[20px] max-md:top-[20px] right-[60.02px] top-[53.01px]"
                onClick={() => setAssignment(false)}
                width={40}
                height={40}
              />
              <h1 className="text-[20px] w-[541.83px] max-md:w-[90%] leading-[26px] font-semibold mb-[20px]">
                {assignment.title}
              </h1>
              <p className="mb-[20px] max-md:w-full w-[587px] text-base">
                {assignment.description}
              </p>
              <button className="bg-white mb-[31px] text-black font-semibold border-[1px] border-[black] px-[24px] py-[12.04px] rounded-[6px] text-[16px] leading-[19.2px]">
                View Resources
              </button>
              {assignment.createdAt ? (
                <div className="pt-[31px] max-md:w-full border-t-[1px] w-[649px] border-[#00000033]">
                  <p className="text-[#2C2E32] mb-[10px] text-[14px]">
                    Submitted link{" "}
                  </p>
                  <input
                    type="text"
                    value={assignment.link}
                    className="border-[0.5px] max-sm:w-full rounded-[4px] py-[18.5px] px-[16.27px] w-[309px] italic text-[14px] border-[#00000080]"
                    placeholder="https/sdgsdklhglhfldfh/.sdkghsihgfhjhh"
                    name=""
                    id=""
                  />
                </div>
              ) : (
                <div className="pt-[33.74px] max-md:flex-col flex gap-[25.55px] border-t-[1px] border-[#00000033]">
                  <div>
                    <p className="text-[#2C2E32] mb-[10px] text-[14px]">
                      Paste link to submit assignment
                    </p>
                    <input
                      type="text"
                      onChange={(e) =>
                        setformData({ ...formData, link: e.target.value })
                      }
                      className="border-[0.5px] rounded-[4px] py-[18.5px] px-[16.27px] w-[309px] max-sm:w-full italic text-[14px] border-[#00000080]"
                      placeholder="Click to paste link"
                      name=""
                      id=""
                    />
                  </div>
                  <button
                    onClick={() => handleSubmit(assignment)}
                    className="bg-[#30E29D] max-sm:w-full mt-[37.46px] py-[10px] px-[24px] rounded-[6px] text-base font-semibold h-[43.07px]"
                  >
                    Submit Assignment
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}{" "}
      {remark && (
        <div className="fixed top-0 bg-[#00000066] w-full h-[100vh] z-50 flex justify-center items-center">
          <div className="w-[657px] max-md:w-[95%] bg-white relative rounded-[6px] pt-[35px] max-md:p-[20px] pb-[23px] pl-[37px]">
            <Image
              src="/images/close.svg"
              className="absolute cursor-pointer right-[39px] top-[25.01px]"
              onClick={() => setRemark(false)}
              width={40}
              height={40}
            />
            <h1 className="text-[20px] max-md:mt-[15px] leading-[26px] font-semibold mb-[26px]">
              Assignment Remark
            </h1>
            <p className="border-[1px] max-md:w-full mb-[31px] pl-[19.1px] pr-[15.81px] pt-[18.81px] pb-[31.19px] border-[#00000033] w-[581px] rounded-[6px] text-[14px] leading-[21px]">
              Tellus eget aliquam velit sagittis a diam. Neque at rhoncus leo
              neque risus aliquam. Fermentum ultricies mauris donec curabitur
              platea enim sed pretium. Imperdiet tellus adipiscing orci lorem
              ultricies diam nec interdum. Massa lacus elementum nulla cras
              ullamcorper nunc duis turpis. Facilisis id sed vivamus iaculis.
              Risus dui tortor vitae turpis diam dolor cursus quis. Laoreet
              dictum scelerisque netus quisque facilisi mauris elementum. Vel
              nibh nec mauris nulla tristique tempor facilisi elit arcu. Vitae
              elit vivamus enim leo amet ligula a fusce turpis sit purus.
            </p>
            <button
              onClick={() => setRemark(false)}
              className="bg-black max-sm:w-full text-white px-[15px] py-[10px] rounded-[4px] text-[14px] leading-[16.8px]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
