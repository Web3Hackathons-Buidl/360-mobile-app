"use client";

import MenuHero from "@/components/MenuHero";
import MenuMain from "@/components/MenuMain";
import Profile from "@/components/Profile";
import Withdraw from "@/components/Withdraw";
import FooterNav from "@/components/common/FooterNav";
import Header from "@/components/common/Header";
import MainContainer from "@/components/common/MainContainer";
import { useState } from "react";

const Menu = () => {
  const [profileAndWithdraw, setProfileAndWithdraw] = useState(0);

  const goProfileAndWithdraw = (id) => {
    setProfileAndWithdraw(id);
  };

  return (
    <MainContainer marginTop={"main"}>
      {profileAndWithdraw === 1 ? (
        <Profile goProfileAndWithdraw={goProfileAndWithdraw} />
      ) : profileAndWithdraw === 2 ? (
        <Withdraw goProfileAndWithdraw={goProfileAndWithdraw} />
      ) : (
        <>
          <Header title={"Menu"} />
          <MenuHero goProfileAndWithdraw={goProfileAndWithdraw} />
          <MenuMain goProfileAndWithdraw={goProfileAndWithdraw} />
          <FooterNav />
        </>
      )}
    </MainContainer>
  );
};

export default Menu;
