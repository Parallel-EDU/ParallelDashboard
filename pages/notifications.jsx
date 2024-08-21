import Navbar from "../components/navbar";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(true);
  const [notification, setNotification] = useState(true);
  const scrollRef = useRef(null);

  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Fetch notifications from the API
  useEffect(() => {
    async function fetchNotifications() {
      try {
        const response = await axios.get('/api/platform/notifications/route'); // Replace with your API endpoint
        setNotifications(response.data.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    }

    fetchNotifications();
  }, []);

  const handleNotificationClick = (notif) => {
    setSelectedNotification(notif);
    setNotification(true);
  };

  return (
    <>
      <Navbar />
      <section className="pt-[51.08px] max-sm:py-[30px] max-md:px-[40px] max-sm:px-[20px] px-[60px] pb-[123px]">
        {!notification && (
          <>
            <h1 className="text-[20px] leading-[26px] font-semibold mb-[28.92px]">
              Notifications
            </h1>
            <div className="w-full max-md:w-full h-[567px] rounded-[5px] bg-[white] pt-[0px] pl-[37px] max-sm:px-[20px] pr-[61px]">
              <div
                ref={scrollRef}
                className="h-[505px] max-sm:w-full overflow-y-scroll w-full mt-[31px]"
              >
                {notifications.map((notif, index) => (
                  <div className="mt-[37px]" key={index}>
                    <h1 className="text-[16px] leading-[20.8px] pb-[16px] border-b-[1px]">
                      {notif.date}
                    </h1>
                    <div
                      onClick={() => handleNotificationClick(notif)}
                      className="py-[10px] max-hamburger:flex-col max-hamburger:items-start max-hamburger:gap-[12px] max-hamburger:h-auto flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]"
                    >
                      <div className="flex max-hamburger:flex-col max-hamburger:items-start gap-[24px] items-center">
                        <div className="w-[645.83px] max-[450px]:flex-col max-[450px]:items-start max-[450px]:gap-[12px] max-xl:w-[500px] max-hamburger:w-full max-md:whitespace-normal max-xl:truncate flex gap-[37px] items-center">
                          <div className=" h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px]">
                            New
                          </div>
                          <h1 className="capitalize text-[20px] leading-[26px] max-md:whitespace-normal max-xl:truncate">
                            {notif.title}
                          </h1>
                        </div>
                        <p className="text-[14px] leading-[18.2px] opacity-60">
                          {formatTime(notif.time)}
                        </p>
                      </div>
                      <div
                        onClick={() => setNotification(true)}
                        className="border-[1px] max-[450px]:w-full max-[450px]:text-center w-[131px] h-[29px] text-[14px] border-black py-[5px] px-[10px] rounded-[4px] cursor-pointer opacity-1"
                      >
                        Join with Meet
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>{" "}
            <div className="flex gap-[16px] absolute right-[60px] max-sm:right-[20px] mt-[20px]">
              <div className="w-[32px] h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image src="/Group 4.svg" width={14.13} height={14.13} />
              </div>
              <div className="flex gap-[8px]">
                <p className="w-[32px] text-[17.23px] cursor-pointer bg-[#31E39E] leading-[16px] h-[32px] flex justify-center items-center text-black border-[#000]">
                  1
                </p>
                <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  2
                </p>
                <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  3
                </p>
                <p className="w-[25px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center cursor-pointer"></p>
                <p className="w-[32px] text-[17.23px] leading-[16px] h-[32px] flex justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                  42
                </p>
              </div>
              <div className="w-[32px] rotate-180 h-[32px] flex pr-[2.98px] justify-center items-center border-[1.23px] border-[#00000033] cursor-pointer">
                <Image src="/Group 4.svg" width={14.13} height={14.13} />
              </div>
            </div>
          </>
        )}

        {notification && selectedNotification && (
          <>
            <Image
              src="back.svg"
              className="mb-[28.02px] cursor-pointer"
              onClick={() => setNotification(false)}
              width={44.97}
              height={44.97}
            />
            <div className="max-sm:p-[20px] w-full bg-[white] rounded-[5px] max-hamburger:px-[35px] pt-[48.5px] pl-[50px] pb-[136px] pr-[43.5px]">
              <h1 className="capitalize text-[31px] max-sm:text-[24px] max-sm:leading-[30px] leading-[37px]">
                {selectedNotification.title}
              </h1>
              <div className="mt-[16px] max-hamburger:mb-[10px] flex gap-[29.43px] mb-[42.08px]">
                <p className="text-[14px] leading-[18.2px] opacity-60">
                  {formatTime(selectedNotification.time)}
                </p>
                <p className="text-[14px] leading-[18.2px] opacity-60">
                  12th April 2024
                </p>
              </div>
              <p className="text-base max-hamburger:mb-[20px] max-lg:w-full mb-[42px] w-[808px]">
                {selectedNotification.description}
              </p>
              <button className="h-[43px] max-sm:w-full w-[134px] bg-[#30E29D] rounded-[6px] text-base font-semibold">
                Join in zoom
              </button>
              <span
                onClick={() => setNotification(false)}
                className="hidden max-md:block"
              >
                <Image
                  src="/Vector (2).svg"
                  className="absolute max-md:right-[40px] max-sm:right-[20px] right-[50.33px] cursor-pointer top-[37.29px]"
                  width={23.35}
                  height={23.35}
                />{" "}
              </span>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Notifications;
