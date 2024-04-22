import { topbarLinks } from "@/constants";
import Image from "next/image";
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
      <h1 className=" uppercase text-white font-dosis text-4xl tracking-wider text-center mt-5 max-md:hidden">
        Kandaliakiki
      </h1>
      <div>
        <div className="flex gap-5">
          <Link
            href="https://www.linkedin.com/in/kandalia-kiki-a28680166/"
            target="_blank"
          >
            <Image
              alt="linkedin logo"
              src="/svg/linkedin.svg"
              width={60}
              height={60}
            ></Image>
          </Link>
          <Link
            className="mt-2"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=62895327367697&text=Hi%20i%20want%20you%20to%20make%20me%20a%20website%20!%20%F0%9F%98%80"
          >
            <Image
              alt="whatsapp logo"
              src="/svg/whatsapp.svg"
              width={43}
              height={43}
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
