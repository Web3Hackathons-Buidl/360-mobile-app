import { EthereumIcon, USDIcon } from "@/public/assets/icons";
import Image from "next/image";
import { HiOutlineArrowSmDown } from "react-icons/hi";

const WithdrawHeader = ({ goProfileAndWithdraw }) => {
  return (
    <div>
      <HiOutlineArrowSmDown
        className="rotate-90 text-2xl -ml-4 cursor-pointer"
        onClick={() => goProfileAndWithdraw(0)}
      />

      <div className="flex flex-col items-center justify-center -mt-9">
        <h4 className="text-main font-montserrat text-base leading-7 font-semibold">
          Withdraw ETH
        </h4>
        <p className="text-main-light font-gilroy text-[13px] leading-4">
          $61,512.06
        </p>
      </div>

      <div className="flex items-center justify-between gap-1 mt-7">
        <div className="bg-white rounded-tl-xl rounded-bl-xl rounded-tr-[4px] rounded-br-[4px] py-[10px] pl-4 pr-3 w-[154px] h-[72px]">
          <h4 className="text-main font-gilroy text-base leading-7">
            1,200.00
          </h4>
          <div className="flex items-center justify-between">
            <p
              className="text-main-light font-montserrat text-sm leading-6 font-semibold uppercase"
              style={{ letterSpacing: "1px" }}
            >
              USD
            </p>
            <Image src={USDIcon} alt="currency" />
          </div>
        </div>
        <div className="bg-white rounded-tl-[4px] rounded-bl-[4px] rounded-tr-xl rounded-br-xl py-[10px] pl-4 pr-3 w-[153px] h-[72px]">
          <h4 className="text-main font-gilroy text-base leading-7">0.48</h4>
          <div className="flex items-center justify-between">
            <p
              className="text-main-light font-montserrat text-sm leading-6 font-semibold uppercase"
              style={{ letterSpacing: "1px" }}
            >
              ETH
            </p>
            <Image src={EthereumIcon} alt="currency" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl flex items-center justify-between py-3 px-4 mt-4 mb-8">
        <p className="text-main font-montserrat text-sm leading-6 font-semibold">
          Enter the whole amount
        </p>
        <div className="flex items-center justify-center">
          <p className="text-main font-gilroy text-sm leading-6">$61,512</p>
          <p className="text-main-light font-gilroy text-sm leading-6">.06</p>
        </div>
      </div>
    </div>
  );
};

export default WithdrawHeader;
