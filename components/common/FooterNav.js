"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { LiaSignalSolid } from "react-icons/lia";

const FooterNav = () => {
  const pathname = usePathname();

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white shadow-2xl -mx-4 h-[72px] flex items-center justify-between px-3 text-xl text-[#1410293d] rounded-3xl">
      <Link
        href="/"
        className={`${
          pathname === "/" ? "bg-[#00b8b908] text-[#00b8b9]" : ""
        } w-[66px] h-[52px] rounded-xl flex justify-center items-center`}
      >
        <IoHome />
      </Link>
      <Link
        href="/livestock"
        className={`${
          pathname === "/livestock" ? "bg-[#00b8b908] text-[#00b8b9]" : ""
        } w-[66px] h-[52px] rounded-xl flex justify-center items-center`}
      >
        <LiaSignalSolid />
      </Link>
      <Link
        href="/global"
        className={`${
          pathname === "/global" ? "bg-[#00b8b908] text-[#00b8b9]" : ""
        } w-[66px] h-[52px] rounded-xl flex justify-center items-center`}
      >
        <AiOutlineGlobal />
      </Link>
      <Link
        href="/menu"
        className={`${
          pathname === "/menu" ? "bg-[#00b8b908] text-[#00b8b9]" : ""
        } w-[66px] h-[52px] rounded-xl flex justify-center items-center`}
      >
        <FiSettings />
      </Link>
    </div>
  );
};

export default FooterNav;
