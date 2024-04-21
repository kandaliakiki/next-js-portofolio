import type { Metadata } from "next";
import { Dosis, Inter, Patua_One } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const dosis = Dosis({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "fallback",
  variable: "--dosis",
});

export const patua = Patua_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "fallback",
  variable: "--patua",
});

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
    <html lang="en" className="bg-dark-1">
      <body className={dosis.variable}>
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
