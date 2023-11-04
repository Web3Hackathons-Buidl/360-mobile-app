"use client";

import Welcome from "@/components/Welcome";
import MainContainer from "@/components/common/MainContainer";
import { ProfilePicture } from "@/public/assets/icons";
import Heading from "@/universal/Heading";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";

const SignUp = () => {
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
            Sign Up
          </Heading>
          <div className="bg-white my-8 p-4 rounded-3xl flex items-center gap-4">
            <Image src={ProfilePicture} alt="set a profile picture" />
            <p className="font-montserrat text-main text-sm font-semibold">
              Set a profile picture
            </p>
          </div>
          <form className="bg-white pl-4 py-3 rounded-3xl">
            <div className="pt-3 pb-8 flex items-center justify-between relative">
              <label
                htmlFor="name"
                className="font-montserrat text-main-light text-sm leading-6 font-medium absolute z-10"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id=""
                className="outline-none border-b pl-5 absolute right-0 left-8 top-3"
              />
            </div>
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
          <div className="mt-[150px]">
            <p className="text-center font-montserrat text-main-light text-sm leading-6 font-medium">
              Terms & Privacy Policy
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="font-montserrat text-main-light text-sm leading-6 font-medium">
                  Already a Member?
                </p>
                <Link
                  href="/signin"
                  className="font-montserrat text-[#00B8B9] text-sm leading-6 font-semibold"
                >
                  Sign in
                </Link>
              </div>
              <button
                className="text-white text-center font-montserrat text-base leading-7 font-semibold rounded-xl px-[37px] py-[10px] bg-gradient-to-br from-[#0FA] via-[#4579F5] to-[#9C42F5] shadow-xl"
                onClick={welcome}
              >
                Sign up
              </button>
            </div>
          </div>
        </MainContainer>
      )}
    </>
  );
};

export default SignUp;
