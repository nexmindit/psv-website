"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

const AW_CONVERSION_ID = "AW-11409769274";
const AW_CONVERSION_LABEL = "MpSoCIPjydcbELqGzcAq";

export default function GoogleAdsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      // Track the conversion event
      (window as any).gtag("event", "conversion", {
        send_to: `${AW_CONVERSION_ID}/${AW_CONVERSION_LABEL}`,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${AW_CONVERSION_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${AW_CONVERSION_ID}');
            
            // Event snippet for การดูหน้าเว็บ conversion page
            gtag('event', 'conversion', {'send_to': '${AW_CONVERSION_ID}/${AW_CONVERSION_LABEL}'});
          `,
        }}
      />
    </>
  );
}
