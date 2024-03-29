import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, List, Text } from "components";

const LandingPageHeader = (props) => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              <Img className="h-10 w-10" src="images/img_home.svg" alt="home" />
              <Text
                className="text-orange-A700 text-xl w-auto"
                size="txtMarkoOneRegular20"
              >
                Relasto
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[492px] sm:w-full">
            <List
              className="sm:flex-col flex-row gap-10 grid grid-cols-3"
              orientation="horizontal"
            >
              <div
                className="common-pointer flex flex-row gap-1.5 items-start justify-start w-[77px]"
                onClick={() => navigate("/")}
              >
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Home
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_gray_600.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="common-pointer text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                  onClick={() => navigate("/listing")}
                >
                  Listing
                </Text>
                <Img
                  className="common-pointer h-4 w-4"
                  src="images/img_arrowdown_gray_600.svg"
                  alt="arrowdown"
                  onClick={() => navigate("/listingmapview")}
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="common-pointer text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                  onClick={() => navigate("/agentlist")}
                >
                  Agents
                </Text>
                <Img
                  className="common-pointer h-4 w-4"
                  src="images/img_arrowdown_gray_600.svg"
                  alt="arrowdown"
                  onClick={() => navigate("/agentprofile")}
                />
              </div>
            </List>
            <Text
              className="common-pointer text-base text-center text-gray-900 w-auto"
              size="txtManropeSemiBold16"
              onClick={() => navigate("/propertydetails")}
            >
              Property{" "}
            </Text>
            <Text
              className="common-pointer text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
              onClick={() => navigate("/blogpage")}
            >
              Blog
            </Text>
          </div>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[228px]">
            <Button
              className="bg-transparent cursor-pointer flex items-center justify-center min-w-[94px]"
              leftIcon={
                <Img
                  className="h-6 mb-px mr-2"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
            >
              <div className="font-bold font-manrope text-gray-900 text-left text-lg">
                Search
              </div>
            </Button>
            <Button
              className="common-pointer bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full"
              onClick={() => googleSignIn()}
            >
              Log in
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
