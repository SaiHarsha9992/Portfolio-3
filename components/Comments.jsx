import React from "react";
import { MarqueeDemo } from "./magicui/marqueedemo";

export default function CommentsSection() {
  return (
    <div className="flex flex-col items-center px-4 max-w-8xl mx-auto pt-24">
      <h2 className="text-5xl font-bold text-center mb-8 text-white">
        People Comments
      </h2>
      <div className="w-full">
        <MarqueeDemo />
      </div>
    </div>
  );
}
