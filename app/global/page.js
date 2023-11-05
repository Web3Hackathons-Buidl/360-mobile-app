"use client";
import FooterNav from "@/components/common/FooterNav";
import Header from "@/components/common/Header";
import MainContainer from "@/components/common/MainContainer";
import DecommasData from "../data/page";
import handler from "../api/whoami.js";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
// import Metamask from "@/components/Metamask";

const Global = () => {
  return (
    <MainContainer marginTop={"main"}>
      <Header title={"Global"} />
      {/* <Metamask /> */}
      <DecommasData title={"Decommas"} />
      <div className="mt-[628px]"></div>
      <FooterNav />
    </MainContainer>
  );
};

export default Global;
