import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const WebsiteDisplay = ({
  projectName,
  tech,
  bgImageUrl,
  detail1,
  detail2,
  url,
  demoUrl,
}: {
  projectName: string;
  tech: string;
  bgImageUrl: string;
  detail1: string;
  detail2: string;
  url: string;
  demoUrl: string;
}) => {
  return (
    <div className="flex flex-col">
      <Link href={url} target="_blank" className="relative h-full">
        <Image
          alt="website image"
          src={bgImageUrl}
          fill
          className="object-contain aspect-video"
        />
        <div className="aspect-video  w-full h-full">
          <div className="w-full h-full relative flex flex-col bg-white transition-all duration-300 opacity-0 hover:opacity-80 text-black justify-center items-center">
            <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-dosis text-dark-1 max-sm:text-2xl max-[1055px]:text-3xl text-4xl inline font-semibold  text-center">
              <span className="uppercase">{projectName} &nbsp;</span>
              <span className="text-gray-500">({tech})</span>
            </div>
            <p className="font-dosis text-dark-1 max-sm:text-sm text-lg font-semibold text-center mt-24 -mb-1">
              {detail1}
            </p>
            <p className="font-dosis text-dark-1 max-sm:text-sm text-lg font-semibold text-center ">
              {detail2}
            </p>
          </div>
        </div>
      </Link>

      <Button
        className={`mt-3 h-16  w-1/2 mx-auto mb-10 text-white text-2xl max-lg:text-lg p-0 ${
          demoUrl === "" ? "bg-gray-400" : "bg-sky-900"
        }`}
        disabled={demoUrl === ""}
      >
        <Link
          href={`/demo/${demoUrl}`}
          target="_blank"
          className="w-full h-full  rounded-md flex justify-center items-center "
        >
          <p className=" text-center ">
            {demoUrl === "" ? "NO DEMO" : "VIEW DEMO"}
          </p>
        </Link>
      </Button>
    </div>
  );
};

export default WebsiteDisplay;
