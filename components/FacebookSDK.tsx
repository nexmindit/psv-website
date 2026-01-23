"use client";

import Script from "next/script";

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}

export default function FacebookSDK() {
  return (
    <>
      <div id="fb-root"></div>
      <Script
        src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v24.0&appId=2021653498420708"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        onLoad={() => {
          if (typeof window !== "undefined" && window.FB) {
            window.FB.XFBML.parse();
          }
        }}
      />
    </>
  );
}
