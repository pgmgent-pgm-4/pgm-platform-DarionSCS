import { gql, useQuery } from "@apollo/client";

// Correct GraphQL query
const GET_BLOGITEMS_QUERY = gql`
  query Blogs {
    blogItem {
      blogImg {
        url
      }
      blogTitle
      blogDescription
      id
    }
  }
`;

const GET_SERVICES_QUERY = gql`
  query Services {
    serviceItems {
      serviceLongDescription
      serviceMiniDescription
      serviceTitle
      id
    }
  }
`;

const GET_PORTFOLIO_ITEMS_QUERY = gql`
  query Portfolio {
    portfolioItems {
      id
      portfolioTitle
      portfolioDescription
      portfolioCreator
      portfolioImage {
        url
      }
      portfolioWebsite
      curriculumCategory {
        id
        curriculumCategoryColor {
          hex
        }
        curriculumCategoryTitle
      }
    }
  }
`;

const GET_CURRICULUM_QUERY = gql`
  query Curicculum {
    curriculumItems(first: 100) {
      curriculumTitle
      curriculumDescription
      curriculumHours
      curriculumPeriod
      curriculumPoints
      curriculumIsBackEnd
      curriculumIsFrontEnd
      curriculumCategory {
        id
      }
      id
    }
  }
`;

const GET_CURRICULUM_CATEGORY_QUERY = gql`
  query CuricculumCategories {
    curriculumCategories {
      curriculumCategoryTitle
      curriculumCategoryAbout
      curriculumCategoryColor {
        hex
      }
      id
    }
  }
`;

const GET_TEAM_QUERY = gql`
  query Team {
    teamItems {
      id
      teamName
      teamAbout
      teamImg {
        url
      }
      teamSubject {
        ... on CurriculumCategory {
          id
          curriculumCategoryTitle
          curriculumCategoryColor {
            hex
          }
        }
      }
    }
  }
`;

export default GET_BLOGITEMS_QUERY;
export {
  GET_SERVICES_QUERY,
  GET_PORTFOLIO_ITEMS_QUERY,
  GET_CURRICULUM_QUERY,
  GET_CURRICULUM_CATEGORY_QUERY,
  GET_TEAM_QUERY,
};
