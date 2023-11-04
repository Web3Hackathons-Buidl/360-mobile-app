import { menuAccounts } from "@/public/data";
import Image from "next/image";

const MenuMain = ({ goProfileAndWithdraw }) => {
  const goProfile = (id) => {
    if (id === 1) goProfileAndWithdraw(1);
  };

  return (
    <div className="mb-6">
      <h4 className="text-main font-montserrat text-sm font-semibold ml-12 mb-4">
        Accounts
      </h4>

      <div className="bg-white rounded-3xl">
        {menuAccounts.slice(0, 5).map((menuAccount) => (
          <div key={menuAccount.id}>
            <div
              className="flex items-center justify-between p-3 cursor-pointer"
              onClick={() => goProfile(menuAccount.id)}
            >
              <div className="flex items-center justify-between gap-3">
                <Image src={menuAccount.logo} alt="account logo" />
                <p className="text-main font-montserrat text-sm leading-6 font-medium">
                  {menuAccount.name}
                </p>
              </div>
              <div className="flex items-center justify-between">
                {menuAccount.notification && (
                  <p className="rounded-lg bg-[#00B8B9] px-1 pt-[2px] text-white font-gilroy text-[13px] leading-4">
                    {menuAccount?.notification}+
                  </p>
                )}
                <Image src={menuAccount.next} alt="right arrow" />
              </div>
            </div>
            {menuAccount.id >= 1 && menuAccount.id <= 4 && (
              <hr className="border-b- border-gray-100 ml-12" />
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl mt-4">
        {menuAccounts.slice(5, 6).map((menuAccount) => (
          <div key={menuAccount.id}>
            <div className="flex items-center justify-between p-3 cursor-pointer">
              <div className="flex items-center justify-between gap-3">
                <Image src={menuAccount.logo} alt="account logo" />
                <p className="text-main font-montserrat text-sm leading-6 font-medium">
                  {menuAccount.name}
                </p>
              </div>
              <Image src={menuAccount.next} alt="right arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuMain;
