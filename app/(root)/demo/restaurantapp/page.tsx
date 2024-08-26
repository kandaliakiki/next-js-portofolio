import DemoDisplay from "@/components/display/DemoDisplay";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  const websiteUrl = "https://restaurantapp.kikisitestudio.xyz"; // Define the URL as a variable

  return (
    <section className="text-white text-center font-dosis">
      <h1 className="uppercase text-4xl font-bold ">Demo PC</h1>
      <DemoDisplay videoUrl="https://www.youtube.com/embed/NLCy5dysmig?si=-mPYru6FRHQn2hhC&autoplay=1&loop=1&playlist=NLCy5dysmig"></DemoDisplay>
      <h1 className="uppercase text-4xl font-bold mt-20">Demo Mobile </h1>
      <DemoDisplay videoUrl="https://www.youtube.com/embed/u8raXQd0P74?si=81fZ4PKzcvvrW-pu&&loop=1&playlist=u8raXQd0P74"></DemoDisplay>

      <Button className="mt-3 h-16 w-1/2 mx-auto mb-10 text-white text-2xl p-0 bg-sky-900">
        <Link
          href={websiteUrl} // Use the variable here
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