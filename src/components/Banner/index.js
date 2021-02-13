import React from "react";

import "./index.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="profile-round"></div>
        <div className="profile-details">
          <div className="heading">
            Rishav Thakur <FollowButton />
          </div>
          <div className="handle">@st_tronn</div>
          <div className="details">
            <span className="number">16</span>
            <span className="prop">Hums</span>
            <div className="dot"></div>
            <span className="number">422</span>
            <span className="prop">Followers</span>
          </div>
          <div className="desc">
            The purple in the sky ain't pretty as your eyes
          </div>
        </div>
      </div>
      <BannerMobile />
    </>
  );
};

const BannerMobile = () => {
  return (
    <div className="banner-ms">
      <span className="top">
        <div className="profile-round-ms"></div>
        <span>
          <div className="heading">Rishav Thakur</div>
          <div className="handle">@st_tronn</div>
        </span>
      </span>
      <div className="profile-details-ms">
        <div className="details">
          <span className="number">16</span>
          <span className="prop">Hums</span>
          <div className="dot"></div>
          <span className="number">422</span>
          <span className="prop">Followers</span>
        </div>
        <div className="desc">
          The purple in the sky ain't pretty as your eyes
        </div>
        <div className="button">Follow</div>
      </div>
    </div>
  );
};

const FollowButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="95"
    height="39"
    viewBox="0 0 96 40"
    fill="none"
  >
    <path
      d="M26.7578 26H28.5078V21.2812H33.3516V19.8047H28.5078V16.2344H33.7969V14.7266H26.7578V26ZM38.3672 26.1641C40.7188 26.1641 42.2656 24.5391 42.2656 21.8906V21.875C42.2656 19.2422 40.7031 17.625 38.3594 17.625C36.0234 17.625 34.4688 19.25 34.4688 21.875V21.8906C34.4688 24.5312 36.0078 26.1641 38.3672 26.1641ZM38.375 24.75C37.0547 24.75 36.1953 23.7109 36.1953 21.8906V21.875C36.1953 20.0781 37.0625 19.0391 38.3594 19.0391C39.6797 19.0391 40.5391 20.0781 40.5391 21.875V21.8906C40.5391 23.7031 39.6953 24.75 38.375 24.75ZM43.6328 26H45.3203V14.7266H43.6328V26ZM47.1172 26H48.8047V14.7266H47.1172V26ZM54.0703 26.1641C56.4219 26.1641 57.9688 24.5391 57.9688 21.8906V21.875C57.9688 19.2422 56.4062 17.625 54.0625 17.625C51.7266 17.625 50.1719 19.25 50.1719 21.875V21.8906C50.1719 24.5312 51.7109 26.1641 54.0703 26.1641ZM54.0781 24.75C52.7578 24.75 51.8984 23.7109 51.8984 21.8906V21.875C51.8984 20.0781 52.7656 19.0391 54.0625 19.0391C55.3828 19.0391 56.2422 20.0781 56.2422 21.875V21.8906C56.2422 23.7031 55.3984 24.75 54.0781 24.75ZM60.8594 26H62.6016L64.3125 19.8438H64.3516L66.0781 26H67.8359L70.0859 17.7812H68.4141L66.9141 24.25H66.875L65.1562 17.7812H63.5312L61.8203 24.25H61.7891L60.2891 17.7812H58.6016L60.8594 26Z"
      fill="#9592FF"
    />
    <path
      d="M20 1H76V-1H20V1ZM76 39H20V41H76V39ZM20 39C9.50659 39 1 30.4934 1 20H-1C-1 31.598 8.40202 41 20 41V39ZM95 20C95 30.4934 86.4934 39 76 39V41C87.598 41 97 31.598 97 20H95ZM76 1C86.4934 1 95 9.50659 95 20H97C97 8.40202 87.598 -1 76 -1V1ZM20 -1C8.40202 -1 -1 8.40202 -1 20H1C1 9.50659 9.50659 1 20 1V-1Z"
      fill="#9592FF"
    />
  </svg>
);

export default Banner;
