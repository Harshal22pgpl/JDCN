import React from "react";
import styles from "./NewCard.module.css";
import Link from "next/link";

export default function NewCard() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.card}`}>
        <div className={`${styles.lines}`}></div>
        <div className={`${styles.imgBx}`}>
          <img src="/logo.png" className={`${styles.img}`} alt="" />
        </div>
        <div className={`${styles.content} `}>
          <div className={`${styles.details}`}>
            <h2 className=" text-[#45f3ff] font-bold ">Design</h2>
            <p className={`${styles.para} text-white opacity-0`}>
              {" "}
              Lorem ipsum dolor sit amemet voluptatibus suscipit. Lorem ipsum
              dolor sit. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
              dolor sit amet.
            </p>
            <Link
              className={`${styles.link} px-2 py-3 bg-[#45f3ff] text-[#292929]  font-bold opacity-0 rounded-md `}
              href="#"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
