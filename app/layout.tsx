import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FacebookSDK from "@/components/FacebookSDK";
import TikTokEmbed from "@/components/TikTokEmbed";
import PageTransition from "@/components/PageTransition";
import Script from "next/script";

const GTM_IDS = ["GTM-MVTM7PRT", "GTM-MW7PK4VX"];

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "PSV Group - ผู้ให้บริการวัสดุก่อสร้างครบวงจร",
  description:
    "บริษัท พี.เอส.วี กรุ๊ป จำกัด ผู้ประกอบการค้าวัสดุก่อสร้าง ทราย ดิน หิน ลูกรัง มานานกว่า 30 ปี รับถมที่ทั้งกรุงเทพและปริมณฑล",
  keywords:
    "ทราย, ดิน, หิน, ลูกรัง, วัสดุก่อสร้าง, รับถมที่, กรุงเทพ, PSV Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {GTM_IDS.map((id) => (
          <Script id={`gtm-${id}`} key={id} strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`}
          </Script>
        ))}
      </head>
      <body
        className={`${kanit.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {GTM_IDS.map((id) => (
          <noscript key={id}>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${id}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ))}
        <PageTransition />
        <FacebookSDK />
        <TikTokEmbed />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
