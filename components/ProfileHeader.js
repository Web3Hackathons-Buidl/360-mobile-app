import { Avatar } from "@/public/assets/images";
import Image from "next/image";
import { HiOutlineArrowSmDown } from "react-icons/hi";

const ProfileHeader = ({ goProfileAndWithdraw }) => {
  return (
    <div>
      <HiOutlineArrowSmDown
        className="rotate-90 text-2xl -ml-4 mb-8 cursor-pointer"
        onClick={() => goProfileAndWithdraw(0)}
      />
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative">
          <Image src={Avatar} alt="profile picture" className="rounded-3xl" />
          <div className="bg-[#16B8B8] rounded-full w-5 h-5 border-4 border-[#F5F7FA] absolute top-[1px] left-[75px]"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4
            className="text-main font-montserrat text-xl font-semibold"
            style={{ letterSpacing: "-0.4px" }}
          >
            Casmir Patterson
          </h4>
          <p className="text-main-light font-montserrat text-sm leading-6 font-semibold">
            @askcasmir
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
