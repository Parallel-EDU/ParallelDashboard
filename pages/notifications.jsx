import Navbar from "../components/navbar";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [noNotification, setnoNotification] = useState(false);
  const scrollRef = useRef(null);

  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  function formatCustomDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();

    const getDaySuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const dayWithSuffix = day + getDaySuffix(day);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];

    const year = date.getFullYear();

    return `${dayWithSuffix} ${month} ${year}`;
  }
  const groupNotificationsByDate = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const todayGroup = [];
    const yesterdayGroup = [];
    const olderGroup = [];

    notifications.forEach((notif) => {
      const notifDate = new Date(notif.time);
      if (notifDate.toDateString() === today.toDateString()) {
        todayGroup.push(notif);
      } else if (notifDate.toDateString() === yesterday.toDateString()) {
        yesterdayGroup.push(notif);
      } else {
        olderGroup.push(notif);
      }
    });

    return { todayGroup, yesterdayGroup, olderGroup };
  };

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const response = await axios.get("/api/platform/notifications/route");
        if (response.data.data.length > 0) {
          setNotifications(response.data.data);
        } else {
          setnoNotification(true);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
        setnoNotification(true); // Handle error by showing no notifications
      }
    }
    fetchNotifications();
  }, []);

  const handleNotificationClick = (notif) => {
    setSelectedNotification(notif);
  };

  const { todayGroup, yesterdayGroup, olderGroup } = groupNotificationsByDate();

  return (
    <>
      <Navbar />
      <section className="pt-[51.08px] max-sm:py-[30px] max-md:px-[40px] max-sm:px-[20px] px-[60px] pb-[123px]">
        {noNotification ? (
          <section>
            <h1 className="text-[20px] leading-[26px] font-semibold mb-[28.92px]">
              Notifications
            </h1>
            <div className="w-full max-md:w-full py-[32px] rounded-[5px] bg-[white] px-[20px]">
              <p className="text-left">No Notifications For Now</p>
            </div>
          </section>
        ) : selectedNotification ? (
          <>
            <Image
              src="back.svg"
              className="mb-[28.02px] cursor-pointer"
              onClick={() => setSelectedNotification(null)}
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
                  {formatCustomDate(selectedNotification.time)}
                </p>
              </div>
              <p className="text-base max-hamburger:mb-[20px] max-lg:w-full mb-[42px] w-[808px]">
                {selectedNotification.description}
              </p>
              <button className="h-[43px] max-sm:w-full w-[134px] bg-[#30E29D] rounded-[6px] text-base font-semibold">
                Join in zoom
              </button>
              <span
                onClick={() => setSelectedNotification(null)}
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
        ) : (
          <>
            <h1 className="text-[20px] leading-[26px] font-semibold mb-[28.92px]">
              Notifications
            </h1>
            <div className="w-full h-[567px] rounded-[5px] bg-[white] pt-[0px] pl-[37px] pr-[61px]">
              <div
                ref={scrollRef}
                className="h-[505px] overflow-y-scroll w-full mt-[31px]"
              >
                <div className="mt-[37px]">
                  {todayGroup.length > 0 && (
                    <>
                      <h2 className="text-[18px] font-semibold mb-[10px]">
                        Today
                      </h2>
                      {todayGroup.map((notif) => (
                        <NotificationItem
                          key={notif.id}
                          notif={notif}
                          onClick={handleNotificationClick}
                          formatTime={formatTime}
                          status={true}
                        />
                      ))}
                    </>
                  )}
                </div>
                <div className="mt-[37px]">
                  {yesterdayGroup.length > 0 && (
                    <>
                      <h2 className="text-[18px] font-semibold mt-[20px] mb-[10px]">
                        Yesterday
                      </h2>
                      {yesterdayGroup.map((notif) => (
                        <NotificationItem
                          key={notif.id}
                          notif={notif}
                          onClick={handleNotificationClick}
                          formatTime={formatTime}
                        />
                      ))}
                    </>
                  )}
                </div>
                <div className="mt-[37px]">
                  {olderGroup.length > 0 && (
                    <>
                      <h2 className="text-[18px] font-semibold mt-[20px] mb-[10px]">
                        Earlier
                      </h2>
                      {olderGroup.map((notif) => (
                        <NotificationItem
                          key={notif.id}
                          notif={notif}
                          onClick={handleNotificationClick}
                          formatTime={formatTime}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}

function NotificationItem({ notif, onClick, formatTime, status }) {
  return (
    <div className="cursor-pointer" onClick={() => onClick(notif)}>
      <h1 className="text-[16px] leading-[20.8px] pb-[16px]">{notif.date}</h1>
      <div className="py-[10px] max-hamburger:flex-col max-hamburger:items-start max-hamburger:gap-[12px] max-hamburger:h-auto flex items-center pr-[15px] justify-between h-[82px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4]">
        <div className="flex max-hamburger:flex-col max-hamburger:items-start gap-[24px] items-center">
          <div className="w-[645.83px] max-[450px]:flex-col max-[450px]:items-start max-[450px]:gap-[12px] max-xl:w-[500px] max-hamburger:w-full max-md:whitespace-normal max-xl:truncate flex gap-[37px] items-center">
            <div
              className={`${
                status ? "" : "opacity-0"
              } h-[34px] text-[14px] leading-[18.2px] text-white rounded-[24px] bg-[#0C6926] p-[8px]`}
            >
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
        {/* <div className="border-[1px] max-[450px]:w-full max-[450px]:text-center w-[131px] h-[29px] text-[14px] border-black py-[5px] px-[10px] rounded-[4px] cursor-pointer opacity-1">
                        Join with Meet
                      </div> */}
      </div>
    </div>
  );
}

export default Notifications;
