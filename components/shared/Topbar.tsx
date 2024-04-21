import { topbarLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="topbar">
      {topbarLinks.map((link) => (
        <Link key={link.label} href={link.route}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Topbar;
