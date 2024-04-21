import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import Head from "next/head";
import { dosis, patua } from "@/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kandaliakiki Portfolio",
  description: "NextJS Developer",
  icons: {
    icon: "/images/icon.png", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dosis.variable} ${patua.variable} bg-dark-1`}>
      <body>
        <Topbar></Topbar>
        <main className="flex flex-row">
          <section className="main-container">
            <div className="w-full ">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
