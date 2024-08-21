import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Support() {
  const whatsappNumber = "7275629690"; 
  return (
    <>
      <Navbar />
      <main className="px-[60px] max-md:px-[40px] max-sm:px-[20px] pt-[56px] relative h-[calc(100vh-84px)] max-[1440px]:h-auto">
        <div className="flex max-xl:flex-col gap-[20px]">
          <div className="w-full bg-white rounded-[6px] pt-[31.5px] pl-[25px] pb-[33px] pr-[29px] max-[500px]:p-[20px]">
            <h1 className="text-[20px] leading-[26px] font-semibold mb-[24.5px]">
              I have a doubt
            </h1>
            <div className="w-full flex items-center max-[500px]:flex-col pl-[42px] gap-[15.54px] py-[45.27px] max-[500px]:px-[10px] max-[1300px]:pl-[20px] border-[1px] border-[#00000033]">
              <Image src="/whatsapp.svg" className="max-[500px]:w-[70px]" width={111.46} height={111.46} />
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="text-[20px] capitalize max-[500px]:text-center max-sm:text-sm leading-[26px] underline capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clear your doubts on WhatsApp{" "}
                <Image
                  src="/open.svg"
                  className="inline ml-[9px]"
                  width={27.21}
                  height={27.21}
                />
              </a>
            </div>
          </div>
          <div className="w-full bg-white rounded-[6px] pt-[31.5px] pl-[25px] pb-[33px] pr-[29px] max-[500px]:p-[20px]">
            <h1 className="text-[20px] leading-[26px] font-semibold mb-[24.5px]">
              I need help with something else
            </h1>
            <div className="w-full flex items-center max-[500px]:flex-col gap-[15.54px] py-[45.27px] pl-[42px] border-[1px] max-[500px]:pl-0 border-[#00000033]">
              <Image src="/mdi_support.svg" className="max-[500px]:w-[70px]" width={111.46} height={111.46} />
              <p className="text-[20px] max-[500px]:text-center capitalize max-sm:text-sm leading-[26px] underline capitalize">
                Contact support
                <Image
                  src="/open.svg"
                  className="inline ml-[9px]"
                  width={27.21}
                  height={27.21}
                />
              </p>
            </div>
          </div>
        </div>
        <section className="max-sm:px-[20px] max-sm:h-auto max-sm:p-[20px] max-[1440px]:w-full max-[1440px]:static max-[1440px]:mt-[60px] pt-[25.14px] pb-[36px] border-[2px] border-[#672B094D] rounded-[6px] pb-[36px] pl-[25.1px] h-[131px] absolute bottom-[60px] w-[calc(100%-120px)] bg-[#FFEAC9]">
          <p className="text-[20px] leading-[26px] pl-[2.78px] mb-[22.86px] max-smallerphone:mb-[7px] font-bold capitalize text-[#672B09]">
            Mail Us
          </p>
          <p className="text-[16px] leading-[20.8px] text-[#672B09]">
            Facing issues? Get help at
            <a
              href="mailto:help@parallel.com"
              className="font-bold border-b-[1px] mr-[8px] ml-[4px] border-[#672B09]">
              help@parallel.com
            </a>
            We’ll get back to you within 48 hours.
          </p>
        </section>
      </main>
    </>
  );
}
