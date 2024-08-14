import React from "react";

export default function DeptFacultyCard({ name, post }) {
  return (
    <div className=" w-[400px]  h-40 p-4 bg-red-500 border-2 border-black">
      <h1>{name}</h1>
      <h2>{post}</h2>
    </div>
  );
}
