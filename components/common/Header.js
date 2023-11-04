import { Menu, Search } from "@/public/assets/icons";
import Heading from "@/universal/Heading";
import Image from "next/image";

const Header = ({ title }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading textSize={"base"} color={"main"}>
        {title}
      </Heading>
      <div className="flex items-center justify-center gap-2">
        <Image src={Search} alt="search" />
        <Image src={Menu} alt="menu" />
      </div>
    </div>
  );
};

export default Header;
