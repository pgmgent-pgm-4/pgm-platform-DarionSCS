import React from "react";
import GET_BLOGITEMS_QUERY from "../graphQL/queries";
import { useQuery } from "@apollo/client";

// adjust later using real data
export default function BlogCard() {
  const { loading, error, data } = useQuery(GET_BLOGITEMS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching blog items:", error);
    return <p>Error : {error.message}</p>;
  }

  return (
    <section className="flex flex-wrap mt-8 gap-8 justify-center">
      {/*       <div className=" md:w-5/12 p-8 bg-gray-100 rounded">
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
      </div> */}
      {data.blogItem.map(
        ({ titleBlog, redirectBlog, descriptionBlog }, index) => (
          <div key={index} className="md:w-5/12 p-8 bg-gray-100 rounded">
            <h2 className="text-2xl font-bold mb-2">{titleBlog}</h2>
            <p className="text-gray-700 mb-4">{descriptionBlog}</p>
            <a href={redirectBlog} className="text-black font-bold">
              →
            </a>
          </div>
        )
      )}
    </section>
  );
}
