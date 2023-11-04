import FooterNav from "@/components/common/FooterNav";
import Header from "@/components/common/Header";
import MainContainer from "@/components/common/MainContainer";

const Global = () => {
  
  return (
    <MainContainer marginTop={"main"}>
      <Header title={"Global"} />
      <div className="mt-[628px]"></div>
      <FooterNav />
    </MainContainer>
  );
};

export default Global;
