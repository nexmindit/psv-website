"use client";

import Script from "next/script";

export default function TikTokEmbed() {
  return (
    <Script
      src="https://www.tiktok.com/embed.js"
      strategy="lazyOnload"
      onLoad={() => {
        // TikTok embed script will automatically render the embeds
        console.log("TikTok embed script loaded");
      }}
    />
  );
}
