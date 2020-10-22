import React from "react";
import { useRecoilValue} from "recoil";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_LIST } from "../../queries/GetContriesList/GetCountriesList";
import {
  languageState,
  currencyState,
  regionState,
} from "../../globalRecoilState/Atoms/Atoms";

const List: React.FC = () => {
  const languageFilter = useRecoilValue<string>(languageState);
  const currencyFilter = useRecoilValue<string>(currencyState);
  const regionFilter = useRecoilValue<string>(regionState);

  const { data } = useQuery(GET_COUNTRIES_LIST, {
    variables: {
        offset: 0,
        first: 10,
        filter:{
            officialLanguages:{
                name:languageFilter
            },
            currencies:{
                code:currencyFilter
            },
            regionalBlocs:{
                name:regionFilter
            }
        }
    },
  });

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Nombre del pais</th>
          <th className="px-4 py-2">Capital</th>
          <th className="px-4 py-2">Bandera</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Peru</td>
          <td className="border px-4 py-2">Lima</td>
          <td className="border px-4 py-2">emoji de Bandera</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border px-4 py-2">Chile</td>
          <td className="border px-4 py-2">Santiago</td>
          <td className="border px-4 py-2">emoji de Bandera</td>
          {console.log(data,languageFilter,currencyFilter,regionFilter)}
        </tr>
        <tr>
          <td className="border px-4 py-2">Bolivia</td>
          <td className="border px-4 py-2">La Paz</td>
          <td className="border px-4 py-2">emoji de Bandera</td>
        </tr>
      </tbody>
    </table>
  );
};

export default List;
