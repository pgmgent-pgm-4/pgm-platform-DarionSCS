// src/components/Blog.js
import React from "react";
import { gql, useQuery } from "@apollo/client";

// Correct GraphQL query
const GET_BLOGITEMS_QUERY = gql`
  query Assets {
    blogItem {
      imgBlog {
        url
      }
      titleBlog
      redirectBlog
      descriptionBlog
    }
  }
`;

// React component to fetch and display data
function Blog() {
  const { loading, error, data } = useQuery(GET_BLOGITEMS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching blog items:", error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data.blogItem.map(
        ({ imgBlog, titleBlog, redirectBlog, descriptionBlog }, index) => (
          <div key={index}>
            <img src={imgBlog.url} alt={titleBlog} />
            <h3>{titleBlog}</h3>
            <p>{descriptionBlog}</p>
            <a href={redirectBlog}>Read more</a>
          </div>
        )
      )}
    </div>
  );
}

export default Blog;
