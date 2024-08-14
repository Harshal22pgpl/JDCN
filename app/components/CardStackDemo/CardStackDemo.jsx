import React from "react";

import CardStack from "../Card-stack/Card-stack";
import { cn } from "@/app/utils/cn";

// Small utility to highlight the content of a specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
    
    {
      id: 5,
      name: "Sumit Kahar",
      designation: "Web Developer",
      content: (
        <p>
          A ship in port is safe, but that&apos;s not what ships are built for. Sail
          out to sea and do new things.
        </p>
      ),
    },
    
    {
      id: 7,
      name: "Rishab Mishra",
      designation: "Software Developer",
      content: (
        <p>
          We will always have STEM with us. Some things will drop out of the
          public eye and will go away, but there will always be science,
          engineering, and technology. 
        </p>
      ),
    },
    {
      id: 8,
      name: "Margaret Hamilton",
      designation: "Software Engineer",
      content: (
        <p>
          There was no choice but to be pioneers; no time to be beginners.
        </p>
      ),
    },
    {
      id: 9,
      name: "Vedant Kumar",
      designation: "Inventor",
      content: (
        <p>
          My brain is only a receiver, in the Universe, there is a core from which
          we obtain knowledge, strength, and inspiration.
        </p>
      ),
    },
    {
      id: 10,
      name: "Harshal Khairnar",
      designation: "Web Developer",
      content: (
        <p>
          Nothing in life is to be feared, it is only to be understood. Now is the
          time to understand more, so that we may fear less.
        </p>
      ),
    },
  ];
  
 
  

export function CardStackDemo() {
  return (
    <div className="   fixed bottom-0      right-4 flex flex-col  gap-4  items-center justify-center ">
      <CardStack items={CARDS} />
    </div>
  );
}
