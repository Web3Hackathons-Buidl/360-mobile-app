import { liveStockTokens } from "@/public/data";
import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";

const LiveStockMain = () => {
  return (
    <div>
      {liveStockTokens.map((token) => (
        <div
          className={`flex items-center justify-between ${
            token.id % 2 === 0 ? "my-10" : token.id === 6 ? "mb-11" : ""
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
              ${token.mainBalance}
            </h4>
            <div className="flex items-center justify-between font-gilroy text-[13px] leading-4">
              <MdPlayArrow
                className={`${
                  token.id === 2 || token.id === 4
                    ? "rotate-90 text-[#FF5E00]"
                    : "-rotate-90 text-[#00B8B9]"
                }`}
              />
              <p
                className={`${
                  token.id === 2 || token.id === 4
                    ? "text-[#FF5E00]"
                    : "text-[#00B8B9]"
                }`}
              >
                {token.percent}%
              </p>
              <hr className="border-2 rounded-full border-gray-400 mx-2" />
              <p className="text-main-light">MCap ${token.balance} Bn</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveStockMain;
