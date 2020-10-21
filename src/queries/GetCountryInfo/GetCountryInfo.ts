import { gql } from "@apollo/client";

const GET_COUNTRY_INFO = gql`
  query Country($name: String!, $alpha2Code: String!) {

    searchByName: Country(name: $name) {
      name
      capital
      currencies {
        name
        symbol
      }
      area
      populationDensity
      nativeName
      numericCode
      population
      flag {
        svgFile
        emoji
      }
    }

    searchByAlpha2Code: Country(alpha2Code: $alpha2Code) {
      name
      capital
      currencies {
        name
        symbol
      }
      area
      populationDensity
      nativeName
      numericCode
      population
      flag {
        svgFile
        emoji
      }
    }
  }
`;
export { GET_COUNTRY_INFO };
