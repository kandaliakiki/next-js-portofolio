import WebsiteDisplay from "@/components/display/WebsiteDisplay";
import { websiteDisplayLists } from "@/constants";
import React from "react";

const Home = () => {
  return (
    <>
      <h1 className="uppercase text-white font-patua text-4xl tracking-wider text-center">
        Kandaliakiki
      </h1>
      <section>
        <div className="grid grid-cols-2 max-lg:grid-cols-1  text-white gap-3 mt-5">
          {websiteDisplayLists.map((list) => (
            <WebsiteDisplay
              key={list.projectName}
              projectName={list.projectName}
              detail1={list.detail1}
              detail2={list.detail2}
              bgImageUrl={list.bgImageUrl}
              tech={list.tech}
              url={list.url}
            ></WebsiteDisplay>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
