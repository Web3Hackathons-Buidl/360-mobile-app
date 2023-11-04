import { homeTokens } from "@/public/data";
import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";
import HomeDropdown from "./HomeDropdown";

const HomeMain = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h3
          className="text-main font-montserrat text-xl font-semibold"
          style={{ letterSpacing: "-0.4px" }}
        >
          Tokens
        </h3>
        <HomeDropdown />
        {/* <div className="flex items-center justify-between gap-1 pl-4 py-1.5 pr-2 rounded-xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-2xl">
          <p className="text-white font-montserrat text-sm leading-6 font-semibold ">
            All
          </p>
          <MdKeyboardArrowDown className="text-2xl text-gray-300" />
        </div> */}
      </div>

      {homeTokens.map((token) => (
        <div
          className={`flex items-center justify-between ${
            token.id === 2
              ? "my-10"
              : token.id === 3
              ? "mb-10"
              : token.id === 4
              ? "mb-8"
              : ""
          }`}
          key={token.id}
        >
          <div className="flex items-center justify-between gap-4">
            <Image src={token.image} alt="crypto currency" />
            <div className="flex flex-col items-start justify-center">
              <h4 className="text-main font-montserrat text-base leading-7 font-semibold">
                {token.tokenName}
              </h4>
              <p className="text-main-light font-montserrat text-[14px] leading-4 font-medium">
                {token.tokenPath}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center">
            <h4
              className="text-main font-gilroy text-base uppercase"
              style={{ letterSpacing: "-0.4px" }}
            >
              {token.mainBalance}
            </h4>
            <div className="flex items-center justify-between font-gilroy text-[13px] leading-4">
              <MdPlayArrow
                className={`${
                  token.id === 3
                    ? "rotate-90 text-[#FF5E00]"
                    : "-rotate-90 text-[#00B8B9]"
                }`}
              />
              <p
                className={`${
                  token.id === 3 ? "text-[#FF5E00]" : "text-[#00B8B9]"
                }`}
              >
                {token.percent}%
              </p>
              <hr className="border-2 rounded-full border-gray-400 mx-2" />
              <p className="text-main-light">${token.balance}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeMain;
