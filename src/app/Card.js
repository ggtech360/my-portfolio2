import React from "react";

export default function Card({ children }) {
  return (
    <div className="w-fit p-2 bg-slate-100 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
      {children}
    </div>
  );
}
