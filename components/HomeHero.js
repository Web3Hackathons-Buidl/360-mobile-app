import { HomeHeroBG } from "@/public/assets/images";
import Heading from "@/universal/Heading";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";

const HomeHero = () => {
  return (
    <div
      className="my-8 p-4 -mx-4 rounded-3xl text-white bg-gradient-to-br from-[#2D2F33] via-[#282A2E] to-[#212429]"
      style={{
        boxShadow:
          "8px 8px 24px 0px rgba(9, 13, 20, 0.40), -4px -4px 8px 0px rgba(224, 224, 255, 0.04), 0px 1px 1px 0px rgba(9, 13, 20, 0.40)",
      }}
    >
      <div className="flex items-center justify-between mb-6 pl-6 relative z-10">
        <Heading textSize={"24"} color={"white"} marginLeft={"ml"}>
          $61,576.60
        </Heading>
        <Image src={HomeHeroBG} alt="" className="absolute -top-5 -left-4" />
        <BsThreeDots className="text-2xl" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-[23px] pl-4 py-[14px] pr-5 rounded-xl bg-gradient-to-br from-[#0FA] via-[#4579F5] to-[#9C42F5] shadow-md">
          <div className="flex items-end gap-[2px]">
            <p className="font-montserrat font-bold leading-7">$</p>
            <h2 className="font-gilroy text-3xl tracking-tighter">72.9</h2>
          </div>
          <HiOutlineArrowSmDown className="text-2xl" />
        </div>
        <div className="flex items-center justify-between gap-3 pl-4 py-[14px] pr-5 rounded-xl bg-gradient-to-br from-[#0BF] via-[#9C42F5] to-[#5D2DE1] shadow-md">
          <div className="flex items-end gap-[2px]">
            <p className="font-montserrat font-bold leading-7">$</p>
            <h2 className="font-gilroy text-3xl tracking-tighter">11,3k</h2>
          </div>
          <HiOutlineArrowSmUp className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
