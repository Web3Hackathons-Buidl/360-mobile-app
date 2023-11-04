import { HiOutlineArrowSmDown } from "react-icons/hi";

export const liveStockHero = [
  {
    id: 1,
    text: "USD",
  },
  {
    id: 2,
    text: "Sort by Market Cap",
    icon: <HiOutlineArrowSmDown className="text-[#00b8b9] text-xl" />,
  },
  {
    id: 3,
    text: "% 24h",
  },
  {
    id: 4,
    text: "Lorem",
  },
];

import {
  Cosmos,
  Ethereum,
  Stellar,
  Tether,
  Waves,
  XRP,
} from "../assets/images";

export const liveStockTokens = [
  {
    id: 1,
    image: Ethereum,
    tokenName: "Ethereum",
    tokenPath: "ETH",
    mainBalance: "2,670.51",
    balance: "310",
    percent: "0.30",
  },
  {
    id: 2,
    image: Tether,
    tokenName: "Tether",
    tokenPath: "USDT",
    mainBalance: "1.001",
    balance: "61.2",
    percent: "0.05",
  },
  {
    id: 3,
    image: XRP,
    tokenName: "XRP",
    tokenPath: "XRP",
    mainBalance: "0.9466",
    balance: "43.7",
    percent: "0.67",
  },
  {
    id: 4,
    image: Stellar,
    tokenName: "Stellar",
    tokenPath: "XLM",
    mainBalance: "0.4073",
    balance: "9.40",
    percent: "2.86",
  },
  {
    id: 5,
    image: Cosmos,
    tokenName: "Cosmos",
    tokenPath: "ATOM",
    mainBalance: "13.70",
    balance: "2.89",
    percent: "0.79",
  },
  {
    id: 6,
    image: Waves,
    tokenName: "Waves",
    tokenPath: "WAVES",
    mainBalance: "15.54",
    balance: "1.63",
    percent: "2.38",
  },
];
