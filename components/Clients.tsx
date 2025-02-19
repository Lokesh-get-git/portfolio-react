"use client";

import React from "react";
import { skills } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        My domains and
        <span className="text-purple"> technical skills</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // Ensure the height and background are appropriate for responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={skills}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
