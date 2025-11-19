import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FacebookSDK from "@/components/FacebookSDK";
import TikTokEmbed from "@/components/TikTokEmbed";
import PageTransition from "@/components/PageTransition";

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
      <body
        className={`${kanit.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
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
