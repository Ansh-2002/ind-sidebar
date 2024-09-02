import Image from "next/image";
import React from "react";

const DownloadAppCard: React.FC = () => {
  return (
    <div className="my-12 w-full p-4">
      <a
        className="border-1 border bg-gray-100 flex flex-col gap-2.5 rounded-xl p-2.5"
        title="DOWNLOAD APP"
        href="https://indmoney.onelink.me/MgHh/gqtmfeis"
      >
        <div className="flex items-end gap-2.5">
          <p className="font-medium text-xs leading-5">DOWNLOAD APP</p>
          <p className="text-xs font-[300] leading-5 text-green-600">
            1 Crore+ Downloads.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              alt="Apple Logo"
              loading="lazy"
              width={32}
              height={32}
              decoding="async"
              src="https://indcdn.indmoney.com/cdn-cgi/image/quality=auto,format=auto,width=48/https://indcdn.indmoney.com/cdn/images/seo/website/apple_round_logo.png"
              style={{ color: "transparent" }}
            />
            <div className="flex items-center justify-center gap-1">
              <p className="text-[13px] font-[300] leading-5">4.7</p>
              <div className="flex flex-row">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "rgb(255, 196, 13)" }}
                    />
                  </svg>
                ))}
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.248 5.32138L9.18495 4.94455L7.57099 1.19682C7.45798 0.934395 7.08592 0.934395 6.97294 1.19682L5.35898 4.94452L1.29597 5.32138C1.01146 5.34775 0.896503 5.70162 1.11114 5.89018L4.1767 8.58323L3.27955 12.5639C3.21673 12.8426 3.51776 13.0613 3.76341 12.9154L7.27197 10.8321L10.7805 12.9154C11.0262 13.0613 11.3272 12.8426 11.2644 12.5639L10.3672 8.58323L13.4328 5.89018C13.6474 5.70162 13.5324 5.34775 13.248 5.32138Z"
                    fill="#BDBDBD"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              alt="Play Store Logo"
              loading="lazy"
              width={32}
              height={32}
              decoding="async"
              src="https://indcdn.indmoney.com/cdn-cgi/image/quality=auto,format=auto,width=48/https://indcdn.indmoney.com/cdn/images/seo/website/playstore_round_logo.png"
              style={{ color: "transparent" }}
            />
            <div className="flex items-center justify-center gap-1">
              <p className="text-[13px] font-[300] leading-5">4.6</p>
              <div className="flex flex-row">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      style={{ fill: "rgb(255, 196, 13)" }}
                    />
                  </svg>
                ))}
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.248 5.32138L9.18495 4.94455L7.57099 1.19682C7.45798 0.934395 7.08592 0.934395 6.97294 1.19682L5.35898 4.94452L1.29597 5.32138C1.01146 5.34775 0.896503 5.70162 1.11114 5.89018L4.1767 8.58323L3.27955 12.5639C3.21673 12.8426 3.51776 13.0613 3.76341 12.9154L7.27197 10.8321L10.7805 12.9154C11.0262 13.0613 11.3272 12.8426 11.2644 12.5639L10.3672 8.58323L13.4328 5.89018C13.6474 5.70162 13.5324 5.34775 13.248 5.32138Z"
                    fill="#FFC40D"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DownloadAppCard;
