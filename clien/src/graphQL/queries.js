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

export default GET_BLOGITEMS_QUERY;
