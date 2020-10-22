import React from "react";
import {useRecoilValue} from "recoil";
import {useQuery} from "@apollo/client";
import {GET_COUNTRIES_LIST} from "../../queries/GetContriesList/GetCountriesList";
import {
    languageState,
    currencyState,
    regionState
} from "../../globalRecoilState/Atoms/Atoms";

const List: React.FC = () => {
    const languageFilter = useRecoilValue<string>(languageState);
    const currencyFilter = useRecoilValue<string>(currencyState);
    const regionFilter = useRecoilValue<string>(regionState);

    const {data} = useQuery(GET_COUNTRIES_LIST, {
        variables: {
            offset: 0,
            first: 10,
            filter: {
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

    return (
        <>
            {
                languageFilter && (<table className="p-8  table-auto">
                    <thead>
                    <tr>
                        <th className="px-4 py-2">Nombre del pais</th>
                        <th className="px-4 py-2">Capital</th>
                        <th className="px-4 py-2">Bandera</th>
                        <th className="px-4 py-2">Moneda</th>

                        <th className="px-4 py-2">Denominación</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data && data.Country.map((country: any, index: any) =>
                            <tr key={index}>
                                <td className="border px-4 py-2">{country.name}</td>
                                <td className="border px-4 py-2">{country.capital}</td>
                                <td className="border px-4 py-2"> {country &&
                                country.flag &&
                                country.flag.emoji}</td>
                                <td className="border px-4 py-2">{
                                    country &&
                                    country.currencies &&
                                    country.currencies[0].symbol
                                }</td>

                                <td className="border px-4 py-2">{country.demonym}</td>

                            </tr>
                        )}
                    </tbody>
                </table>)
            }
        </>
    );
};

export default List;
