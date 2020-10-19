import { gql } from "@apollo/client";

const GET_LISTS = gql`
  query Country {
    Language {
      name
    }
    Currency {
      name
    }
    Region {
      name
    }
  }
`;
export { GET_LISTS };
