import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import GET_BLOGITEMS_QUERY from "../../graphQL/queries";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";

function Blog() {
  const { loading, error, data } = useQuery(GET_BLOGITEMS_QUERY);
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching blog items:", error);
    return <p>Error: {error.message}</p>;
  }

  const filteredBlogItems = data.blogItem.filter(({ blogTitle }) =>
    blogTitle.toLowerCase().includes(searchQuery.toLowerCase())
  ); //filtering the blog items

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Blog</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search blogs..."
          className="border border-gray-300 p-2 rounded w-1/2"
          value={searchQuery} //value of the input field
          onChange={(e) => setSearchQuery(e.target.value)} //onchange event
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogItems.map(
          ({ blogImg, blogTitle, blogDescription, id }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              {blogImg && (
                <img
                  src={blogImg.url}
                  alt={blogTitle}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <h3 className="text-xl font-bold mt-4">{blogTitle}</h3>
              <p className="text-gray-700 dark:text-white mt-2">
                {blogDescription}
              </p>
              <Link to={`${ROUTES.blog.path}/${id}`}>
                <p className="text-blue-500 hover:underline mt-4 block">
                  Read more
                </p>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Blog;
