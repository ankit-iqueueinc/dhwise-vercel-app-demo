import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Img, Text } from "components";

const LandingPageFooter = (props) => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-col gap-[43px] items-start justify-start w-[341px]">
              <div className="flex flex-row gap-[11px] h-10 md:h-auto items-center justify-start w-[341px]">
                <Img
                  className="h-10 w-10"
                  src="images/img_home.svg"
                  alt="home_One"
                />
                <Text
                  className="text-orange-A700 text-xl w-auto"
                  size="txtMarkoOneRegular20"
                >
                  Relasto
                </Text>
              </div>
              <div className="flex flex-col gap-7 h-[194px] md:h-auto items-start justify-start w-full">
                <Text
                  className="leading-[160.00%] text-base text-gray-900"
                  size="txtManropeSemiBold16"
                >
                  <>
                    59 Bervely Hill Ave, Brooklyn Town,
                    <br />
                    New York, NY 5630, CA, US
                  </>
                </Text>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    +(123) 456-7890
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    info@mail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-full">
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </div>
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_instagram_orange_a700_30x30.svg"
                    alt="instagram"
                  />
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_clock_orange_a700.svg"
                      alt="clock"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Features
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => navigate("/")}
                  >
                    Home v1
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => navigate("/")}
                  >
                    Home v2
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => navigate("/aboutus")}
                  >
                    About
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => navigate("/contactpage")}
                  >
                    Contact
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    Search
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Information
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => navigate("/listing")}
                  >
                    Listing v1
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => navigate("/listingmapview")}
                  >
                    Listing v2
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    Property Details
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => navigate("/agentlist")}
                  >
                    <>Agent List</>
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => navigate("/agentprofile")}
                  >
                    Agent Profile
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Documentation{" "}
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => navigate("/blogpage")}
                  >
                    Blog
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => navigate("/faq")}
                  >
                    FAQ
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => navigate("/privacypolicy")}
                  >
                    <>Privacy Policy</>
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => navigate("/license")}
                  >
                    License
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Others
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => googleSignIn()}
                  >
                    Log in
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => googleSignIn()}
                  >
                    Enter OTP
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => googleSignIn()}
                  >
                    New Password
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => googleSignIn()}
                  >
                    Reset Password
                  </Text>
                  <Text
                    className="common-pointer text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                    onClick={() => googleSignIn()}
                  >
                    Create Account
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="text-base text-gray-900 w-full"
            size="txtManropeSemiBold16"
          >
            © 2022. All rights reserved.
          </Text>
        </div>
      </footer>
    </>
  );
};

LandingPageFooter.defaultProps = {};

export default LandingPageFooter;
