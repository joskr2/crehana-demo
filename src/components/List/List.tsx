import React,{useEffect} from "react";
import { useRecoilValue,useRecoilState} from "recoil";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_LIST } from "../../queries/GetContriesList/GetCountriesList";
import {
  languageState,
  currencyState,
  regionState,
    setAllCountries
} from "../../globalRecoilState/Atoms/Atoms";

const List: React.FC = () => {
  const languageFilter = useRecoilValue<string>(languageState);
  const currencyFilter = useRecoilValue<string>(currencyState);
  const regionFilter = useRecoilValue<string>(regionState);
  const [getList,setGetList] = useRecoilState(setAllCountries)

  const { data } = useQuery(GET_COUNTRIES_LIST, {
    variables: {
        offset: 0,
        first: 10,
        filter:{
            OR: [
                {
                    currencies: {
                        name: currencyFilter
                    }
                },
                {
                    regionalBlocs: {
                        name: regionFilter
                    }
                },
                {
                    officialLanguages: {
                        name: languageFilter
                    }
                }
            ]
        }
    },
  });

    useEffect(() => {
        let isMounted = true;

        const getData = async () => {
            if (data) {
                return (await data) ;
            } else {
                return {};
            }
        };
        getData()
            .then((data: any) => {
                if (isMounted) setGetList(data);
            })
            .catch();

        return () => {
            isMounted = false;
        };
    }, [data, setGetList]);

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

  {data&&data.Country.map((country:any, index:any)=>
      <tr key={index}>
          <td className="border px-4 py-2">{country.name}</td>
          <td className="border px-4 py-2">{country.capital}</td>
          <td className="border px-4 py-2"> {country &&
          country.flag &&
          country.flag.emoji}</td>
      </tr>)}

      </tbody>
    </table>
  );
};

export default List;
