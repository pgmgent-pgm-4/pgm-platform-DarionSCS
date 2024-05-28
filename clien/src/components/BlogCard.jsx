import React from "react";

// adjust later using real data
export default function BlogCard() {
  return (
    <section className="flex flex-wrap mt-8 gap-8 justify-center">
      <div className=" md:w-5/12 p-8 bg-gray-100 rounded">
        <h2 className="text-2xl font-bold mb-2">
          Open Days, info sessions and fairs
        </h2>
        <p className="text-gray-700 mb-4">
          Meet us during a one-on-one videocall, an open class, info session
          online or on campus, or at a fair.
        </p>
        <a href="#" className="text-black font-bold">
          →
        </a>
      </div>
    </section>
  );
}
