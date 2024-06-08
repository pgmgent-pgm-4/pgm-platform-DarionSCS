import React from "react";
import GET_BLOGITEMS_QUERY from "../../graphQL/queries";
import { useQuery } from "@apollo/client";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";

// change max to 4 blogposts later
export default function BlogCard() {
  const { loading, error, data } = useQuery(GET_BLOGITEMS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching blog items:", error);
    return <p>Error : {error.message}</p>;
  }

  return (
    <section className="flex flex-wrap mt-8 gap-8 justify-center">
      {
        // copy of array using spread
        [...data.blogItem]
          // randomly sort the array
          .sort(() => Math.random() - 0.5)
          .slice(0, 4) // only select the first 4 items
          .map(({ blogTitle, blogDescription, id }, index) => (
            <div
              key={index}
              className="md:w-5/12 p-8 dark:bg-gray-800  bg-gray-100 rounded shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-2">{blogTitle}</h2>
              <p className="text-gray-700 dark:text-white mb-4">
                {blogDescription}
              </p>

              <Link
                to={`${ROUTES.blog.path}/${id}`}
                className="text-blue-500 font-bold hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))
      }
    </section>
  );
}
