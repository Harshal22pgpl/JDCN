import RelatedLink from "@/app/components/RelatedLink/RelatedLink";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import React from "react";

export default function page() {
  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];

  return (
    <div>
      <SliderMain images={images} heading="high performance computing" />
      <div className="w-full mx-auto flex relative mt-2 ">
        <div className="w-2/3 px-20 py-1 ">
          <div className="my-4">
            <h1 className=" text-purple-600 text-lg font-bold my-2">
              HPC(Sankha)
            </h1>
            <p className=" text-justify">
              The High Performance Computing (Sankha) is based on a
              heterogeneous and hybrid configuration of Intel Xeon Sandy Bridge
              Processors. It consists of 1 Master Node, 3 Storage Nodes and 32
              Compute Nodes with total computing capacity of approximately 2
              TeraFLOPS performance. All nodes have 64GB of RAM. All nodes are
              interconnected with High Speed infiniband switches by Mellanox and
              Gigabit Ethernet Switches. The system uses Gluster parallel File
              system.
            </p>
          </div>
          <div className="my-4">
            <h1 className=" text-purple-600 text-lg font-bold my-2">
              HPC(Sankha)
            </h1>
            <p className=" text-justify">
              The High Performance Computing (Sankha) is based on a
              heterogeneous and hybrid configuration of Intel Xeon Sandy Bridge
              Processors. It consists of 1 Master Node, 3 Storage Nodes and 32
              Compute Nodes with total computing capacity of approximately 2
              TeraFLOPS performance. All nodes have 64GB of RAM. All nodes are
              interconnected with High Speed infiniband switches by Mellanox and
              Gigabit Ethernet Switches. The system uses Gluster parallel File
              system.
            </p>
          </div>
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
