import { DownArrow, UpArrow } from "@/public/assets/icons";
import { SmallAvatar } from "@/public/assets/images";
import Image from "next/image";

const MenuHero = ({ goProfileAndWithdraw }) => {
  return (
    <div className="mt-5 mb-8">
      <div className="bg-white rounded-3xl p-4 flex items-center justify-start gap-4">
        <Image src={SmallAvatar} alt="avatar" className="rounded-xl" />
        <div className="flex flex-col items-start justify-center">
          <h4 className="text-main font-montserrat text-sm leading-6 font-semibold">
            Casmir Patterson
          </h4>
          <p className="text-main-light font-montserrat text-[13px] leading-4 font-medium">
            @askcasmir
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-[15px]">
        <div className="bg-white rounded-3xl flex flex-col items-start justify-center gap-4 p-4 w-[148px] h-[116px] cursor-pointer">
          <Image src={UpArrow} alt="increase" />
          <h4 className="text-main font-montserrat text-sm font-semibold">
            Deposit
          </h4>
        </div>
        <div
          className="bg-white rounded-3xl flex flex-col items-start justify-center gap-4 p-4 w-[148px] h-[116px] cursor-pointer"
          onClick={() => goProfileAndWithdraw(2)}
        >
          <Image src={DownArrow} alt="decrees" />
          <h4 className="text-main font-montserrat text-sm font-semibold">
            Withdraw
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MenuHero;
