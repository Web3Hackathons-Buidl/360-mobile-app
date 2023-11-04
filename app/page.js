import HomeHero from "@/components/HomeHero";
import HomeMain from "@/components/HomeMain";
import FooterNav from "@/components/common/FooterNav";
import Header from "@/components/common/Header";
import MainContainer from "@/components/common/MainContainer";

export default function Home() {
  return (
    <MainContainer marginTop={"main"}>
      <Header title={"hi casmir ✌🏽"} />
      <HomeHero />
      <HomeMain />
      <FooterNav />
    </MainContainer>
  );
}
