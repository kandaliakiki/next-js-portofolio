import DemoDisplay from "@/components/display/DemoDisplay";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  const websiteUrl = "https://restaurantapp.webcraftgallery.store/";
  const videoUrlPC =
    "https://www.youtube.com/embed/NLCy5dysmig?si=-mPYru6FRHQn2hhC&autoplay=1&loop=1&playlist=NLCy5dysmig";
  const videoUrlMobile =
    "https://www.youtube.com/embed/u8raXQd0P74?si=81fZ4PKzcvvrW-pu&&loop=1&playlist=u8raXQd0P74";

  return (
    <section className="text-white text-center font-dosis">
      <h1 className="uppercase text-4xl max-lg:text-xl font-bold ">Demo PC</h1>
      <DemoDisplay videoUrl={videoUrlPC}></DemoDisplay>{" "}
      <h1 className="uppercase text-4xl max-lg:text-xl font-bold mt-20">
        Demo Mobile{" "}
      </h1>
      <DemoDisplay videoUrl={videoUrlMobile}></DemoDisplay>{" "}
      <Button className="mt-3 h-16 max-lg:h-10 w-1/2 mx-auto mb-10 text-white text-2xl max-lg:text-lg p-0 bg-sky-900">
        <Link
          href={websiteUrl}
          target="_blank"
          className="w-full h-full  rounded-md flex justify-center items-center "
        >
          <p className=" text-center ">VISIT WEB</p>
        </Link>
      </Button>
    </section>
  );
};

export default page;
