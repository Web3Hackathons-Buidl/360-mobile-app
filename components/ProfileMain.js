import { profileAccount } from "@/public/data";
import Image from "next/image";

const ProfileMain = () => {
  return (
    <div className="mb-[260px]">
      <div className="bg-white rounded-3xl">
        {profileAccount.slice(0, 2).map((profileAccount) => (
          <div key={profileAccount.id}>
            <div className="flex items-center justify-between p-3 cursor-pointer">
              <div className="flex items-center justify-between gap-3">
                <Image src={profileAccount.logo} alt="account logo" />
                <p className="text-main font-montserrat text-sm leading-6 font-medium">
                  {profileAccount.name}
                </p>
              </div>
              <div className="flex items-center justify-between">
                {profileAccount.notification && (
                  <p className="rounded-lg bg-[#00B8B9] px-1 pt-[2px] text-white font-gilroy text-[13px] leading-4">
                    {profileAccount?.notification}+
                  </p>
                )}
                {profileAccount.next ? (
                  <div className="flex items-center justify-center gap-3">
                    <p className="text-main-light font-montserrat text-sm leading-6 font-medium">
                      {profileAccount?.password}
                    </p>
                    <Image src={profileAccount.next} alt="right arrow" />
                  </div>
                ) : profileAccount.email ? (
                  <p className="text-main-light font-montserrat text-sm leading-6 font-medium">
                    {profileAccount.email}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            {profileAccount.id === 1 && (
              <hr className="border-b- border-gray-100 ml-12" />
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl mt-8">
        {profileAccount.slice(2, 3).map((profileAccount) => (
          <div key={profileAccount.id}>
            <div className="flex items-center justify-between p-3 cursor-pointer">
              <div className="flex items-center justify-between gap-3">
                <Image src={profileAccount.logo} alt="account logo" />
                <p className="text-[#FF5E00] font-montserrat text-sm leading-6 font-medium">
                  {profileAccount.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileMain;
