import { gql } from "@apollo/client";

const GET_COUNTRIES_LIST = gql`
    query countriesList($offset: Int!, $first: Int!, $filter: _CountryFilter) {
        getSelectedCountry:Country(offset: $offset, first: $first, filter: $filter) {
            name
            capital
            currencies {
                symbol
            }
            area
            populationDensity
            nativeName
            numericCode
            population
            demonym
            flag {
                emoji
            }
        }
        getAllCountries:Country{
            name
            capital
            currencies {
                symbol
            }
            area
            populationDensity
            nativeName
            numericCode
            population
            demonym
            flag {
                emoji
            }
        }
    }

`;
export { GET_COUNTRIES_LIST };
