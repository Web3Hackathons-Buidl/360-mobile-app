"use client";

import Welcome from "@/components/Welcome";
import MainContainer from "@/components/common/MainContainer";
import Heading from "@/universal/Heading";
import Link from "next/link";
import { useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const welcome = () => {
    setShowWelcome(true);
  };

  return (
    <>
      {showWelcome ? (
        <Welcome />
      ) : (
        <MainContainer marginTop={"auth"}>
          <Heading textSize={"24"} color={"main"}>
            Sign In
          </Heading>
          <form className="bg-white mt-8 pl-4 py-3 rounded-3xl">
            <div className="py-5 flex items-center justify-between relative">
              <label
                htmlFor="email"
                className="font-montserrat text-main-light text-sm leading-6 font-medium absolute z-10"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="outline-none border-b pl-5 absolute right-0 left-8 top-5"
              />
            </div>
            <div className="pt-5 flex items-center justify-between">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                id=""
                placeholder="Password"
                className="outline-none"
              />
              <div className="pr-4" onClick={showPassword}>
                {showPass ? (
                  <PiEyeSlash className="text-xl" />
                ) : (
                  <PiEye className="text-xl" />
                )}
              </div>
            </div>
          </form>
          <div className="mt-[310px]">
            <p className="text-center font-montserrat text-main-light text-sm leading-6 font-medium">
              Forgot your password?
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="font-montserrat text-main-light text-sm leading-6 font-medium">
                  Not a member?
                </p>
                <Link
                  href="/signup"
                  className="font-montserrat text-[#00B8B9] text-sm leading-6 font-semibold"
                >
                  Register now
                </Link>
              </div>
              <button
                className="text-white text-center font-montserrat text-base leading-7 font-semibold rounded-xl px-[37px] py-[10px] bg-gradient-to-br from-[#0FA] via-[#4579F5] to-[#9C42F5] shadow-xl"
                onClick={welcome}
              >
                Sign in
              </button>
            </div>
          </div>
        </MainContainer>
      )}
    </>
  );
};

export default SignIn;
