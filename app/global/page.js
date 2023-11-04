"use client";
import FooterNav from "@/components/common/FooterNav";
import Header from "@/components/common/Header";
import MainContainer from "@/components/common/MainContainer";
import Data from "../data/page";

const Global = () => {
  return (
    <MainContainer marginTop={"main"}>
      <Header title={"Global"} />
      <Data />
      <div className="mt-[628px]"></div>
      <FooterNav />
    </MainContainer>
  );
};

export default Global;
