import { Dosis, Patua_One } from "next/font/google";

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
