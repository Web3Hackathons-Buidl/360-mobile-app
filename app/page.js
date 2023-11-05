import HomeHero from "@/components/HomeHero";
import HomeMain from "@/components/HomeMain";
import FooterNav from "@/components/common/FooterNav";
import Header from "@/components/common/Header";
import MainContainer from "@/components/common/MainContainer";
import { MetamaskProvider } from "../hooks/useMetamask";
import { AppProps } from "next/app";

export default function Home({ Component, pageProps }) {
  return (
    <MetamaskProvider>
      <MainContainer marginTop={"main"}>
        <Header title={"hi casmir ✌🏽"} />
        <HomeHero />
        <HomeMain />
        <FooterNav />
      </MainContainer>
      <Component {...pageProps} />
    </MetamaskProvider>
  );
}
