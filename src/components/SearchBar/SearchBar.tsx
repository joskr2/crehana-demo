import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  searchState,
  languageState,
  currencyState,
  regionState,
  currencyListState,
  laguageListState,
  regionListState,
} from "../../globalRecoilState/Atoms/Atoms";

import { useQuery } from "@apollo/client";
import { GET_LISTS } from "./../../queries/GetLists/GetLists";

const SearchBar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearch] = useRecoilState<string>(searchState);
  const [language, setLanguage] = useRecoilState<string>(languageState);
  const [currency, setCurrency] = useRecoilState<string>(currencyState);
  const [region, setRegion] = useRecoilState<string>(regionState);

  const [laguageList, setLanguageList] = useRecoilState<string[]>(
    laguageListState
  );
  const [currencyList, setCurrencyList] = useRecoilState<string[]>(
    currencyListState
  );
  const [regionList, setRegionList] = useRecoilState<string[]>(regionListState);
  const { data } = useQuery(GET_LISTS);

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status

    const functionWithPromise = (item: any) => {
      //a function that returns a promise
      return Promise.resolve(item);
    };
    const anAsyncFunction = async (item: any) => {
      return functionWithPromise(item);
    };

    const getData = async () => {
      if (data !== undefined) {
        return Promise.all(
          data.Region!.map((a: { name: any }) => anAsyncFunction(a.name))
        );
      }
      return [""];
    };
    getData().then((data: any) => {
      if (isMounted) setRegionList(data);
    });

    return () => {
      isMounted = false;
    }; // use effect cleanup to set flag false, if unmounted
  }, [data, setRegionList]);

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status

    const functionWithPromise = (item: any) => {
      //a function that returns a promise
      return Promise.resolve(item);
    };
    const anAsyncFunction = async (item: any) => {
      return functionWithPromise(item);
    };

    const getData = async () => {
      if (data !== undefined) {
        return Promise.all(
          data.Currency!.map((a: { name: any }) => anAsyncFunction(a.name))
        );
      }
      return [""];
    };
    getData().then((data: any) => {
      if (isMounted) setCurrencyList(data);
    });

    return () => {
      isMounted = false;
    }; // use effect cleanup to set flag false, if unmounted
  }, [data, setCurrencyList]);

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status

    const functionWithPromise = (item: any) => {
      //a function that returns a promise
      return Promise.resolve(item);
    };
    const anAsyncFunction = async (item: any) => {
      return functionWithPromise(item);
    };

    const getData = async () => {
      if (data !== undefined) {
        return Promise.all(
          data.Language!.map((a: { name: any }) => anAsyncFunction(a.name))
        );
      }
      return [""];
    };
    getData().then((data: any) => {
      if (isMounted) setLanguageList(data);
    });

    return () => {
      isMounted = false;
    }; // use effect cleanup to set flag false, if unmounted
  }, [data, setLanguageList]);

  return (
    <div className="flex flex-wrap">
      <div className="p-8 flex-1 ">
        <div className="bg-white flex items-center rounded-full shadow-xl ">
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Buscar por pais o código"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="p-4 ">
            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className="  flex-grow">
          <select
            className=" transform translate-y-10  rounded-l-3xl py-4  text-white leading-tight focus:outline-none bg-blue-500 border-solid border-gray-800 align-middle items-center "
            id="select-1"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {laguageList.map((lg, index) => (
              <option key={index} value={lg}>
                {lg}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-grow">
          <select
            className=" transform translate-y-10   py-4  text-white leading-tight focus:outline-none bg-blue-500 border-solid border-gray-800 align-middle items-center "
            id="select-1"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {currencyList.map((cr, index) => (
              <option key={index} value={cr}>
                {cr}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-grow">
          <select
            className=" transform translate-y-10   rounded-r-3xl p-4  text-white leading-tight focus:outline-none bg-blue-500 border-solid border-gray-800 align-middle items-center "
            id="select-1"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            {regionList.map((rg, index) => (
              <option key={index} value={rg}>
                {rg}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
