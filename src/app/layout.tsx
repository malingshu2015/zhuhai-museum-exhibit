import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "珠海博物馆海昏侯文物特展",
  description: "在线探索千年汉韵——海昏侯刘贺墓出土文物精品",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}