import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import GET_BLOGITEMS_QUERY from "../../graphQL/queries";
export default function BlogDetail() {
  const { id } = useParams(); //id from url
  const { loading, error, data } = useQuery(GET_BLOGITEMS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching blog details:", error);
    return <p>Error: {error.message}</p>;
  }

  const blogItem = data.blogItem.find((item) => item.id === id); //find the blog item by id

  if (!blogItem) return <p>Blog item not found</p>;

  const { blogImg, blogTitle, blogDescription } = blogItem; //destructure the blog item

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl  font-bold text-center mb-6">{blogTitle}</h1>
      <div className="bg-white dark:bg-gray-800  dark:text-white p-6 rounded-lg shadow-md">
        {/* only if blogimg exists render the img */}
        {blogImg && (
          <img
            src={blogImg.url}
            alt={blogTitle}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        )}
        <p className="text-gray-700 mt-2 dark:text-white">{blogDescription}</p>
      </div>
    </div>
  );
}
