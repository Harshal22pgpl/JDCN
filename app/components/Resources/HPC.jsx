"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function HPC() {
  const [collegeNameIndex, setCollegeNameIndex] = useState(0);

  const collegeNames = [" LNCT ", "एसकेसी एलएनसीटी "];
  return (
    <div>
      <div
        className=" w-full h-80 bg-cover capitalize flex justify-center items-center"
        style={{ backgroundImage: `url('about-banner.jpg')` }}
      >
        <h2 className="font-bold text-4xl uppercase  text-white text-center">
          HIGH PERFORMANCE COMPUTING
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-[70px] ">
        <div className="col-span-2 text-justify ml-24 mt-20 ">
          <h4 className="text-red-900 text-[20px] font-bold"> HPC(Sankha)</h4>
          <p className="text-[12px]">
            The High Performance Computing (Sankha) is based on a heterogeneous
            and hybrid configuration of Intel Xeon Sandy Bridge Processors. It
            consists of 1 Master Node, 3 Storage Nodes and 32 Compute Nodes with
            total computing capacity of approximately 2 TeraFLOPS performance.
            All nodes have 64GB of RAM. All nodes are interconnected with High
            Speed infiniband switches by Mellanox and Gigabit Ethernet Switches.
            The system uses Gluster parallel File system.
          </p>
          <h4 className="text-red-900 text-[20px] mt-8 font-bold">
            HPC(Jamuna)
          </h4>
          <p className="text-[12px] ">
            The High Performance Computing (Jamuna) is based on a heterogeneous
            and hybrid configuration of Intel Xeon Skylake processors. The
            system was designed and implemented by HPE. It consists of 1 Master
            Node, 1 Login Nodes, 1 Analytics Node, 4 Storage Nodes and 20
            Compute Nodes. All nodes have 128GB of RAM. All nodes are
            interconnected with high performance fabrics by Intel (Intel OPA)
            and Gigabit Ethernet Switches. The system uses Gluster parallel File
            system.
          </p>
        </div>
        <div className=" mt-20 h-[350px] w-[270px]">
          <ul className="border border-gray-400 p-[15px] ">
            <h5 className=" text-[20px] mb-3">RELATED LINKS</h5>
            <li className=" py-[10px] text-red-800 text-[12px] ">
              {" "}
              <a href="">About</a>
            </li>{" "}
            <hr />
            <li className=" py-[10px] text-[12px] hover:text-red-800 ">
              <a href="">Account and Log-in</a>
            </li>{" "}
            <hr />
            <li className=" py-[10px] text-[12px] hover:text-red-800 ">
              {" "}
              <a href="">Job Scripts</a>
            </li>{" "}
            <hr />
            <li className=" py-[10px] text-[12px] hover:text-red-800 ">
              <a href="">FAQs</a>{" "}
            </li>{" "}
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
}
