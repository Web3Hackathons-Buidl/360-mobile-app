import HomeMain from "@/components/HomeMain";
import LiveStockHero from "@/components/LiveStockHero";
import LiveStockMain from "@/components/LiveStockMain";
import FooterNav from "@/components/common/FooterNav";
import Header from "@/components/common/Header";
import MainContainer from "@/components/common/MainContainer";

const LiveStock = () => {
  return (
    <MainContainer marginTop={"main"}>
      <Header title={"live stock 📊"} />
      <LiveStockHero />

      <LiveStockMain />
      <FooterNav />
    </MainContainer>
  );
};

export default LiveStock;
