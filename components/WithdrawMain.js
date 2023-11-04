import { dialPad } from "@/public/data";
import { useState } from "react";

const WithdrawMain = () => {
  const [num, setNum] = useState([]);

  const dialNum = (typed) => {
    setNum([...num, typed]);
  };

  let res = "";
  for (let i = 0; i < num.length; i++) res += num[i];

  return (
    <div>
      <div className="bg-[#14102905] rounded-xl flex items-center justify-between py-3 px-4 mt-4 mb-8">
        <input
          type="text"
          name="amount"
          value={res + (num.length > 0 ? " " + "ETH" : "")}
          id=""
          className="w-[130px] outline-none bg-[#14102905] text-[#00B8B9] font-gilroy leading-[27px]"
        />
        <p className="text-main font-gilroy leading-[27px] 168.75% */">=</p>
        <p className="text-main font-gilroy leading-[27px]">2,496.76 USD</p>
      </div>

      <button className="text-white text-center font-montserrat text-base leading-7 font-semibold rounded-xl w-full px-[37px] py-[10px] bg-gradient-to-br from-[#0FA] via-[#4579F5] to-[#9C42F5] shadow-xl mt-[109px] mb-8">
        Withdraw to bank
      </button>

      <div className="bg-[#EBEFF5] -mx-8 grid grid-cols-3 gap-[6px] px-[6px] pt-[6px] pb-[78px]">
        {dialPad.map((dial) => (
          <div
            className={`${
              dial.id !== 10 && dial.id !== 12 && "bg-white"
            } flex flex-col items-center justify-center rounded-xl w-[117px] h-[46px] cursor-pointer`}
            key={dial.id}
            onClick={() => dialNum(dial.number)}
          >
            <h3
              className="text-main font-gilroy text-2xl"
              style={{ letterSpacing: "-1px" }}
            >
              {dial.number}
            </h3>
            <p
              className="text-main font-montserrat text-[10px] font-bold leading-4 uppercase"
              style={{ letterSpacing: "2px" }}
            >
              {dial?.letter}
            </p>
            {dial?.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithdrawMain;
