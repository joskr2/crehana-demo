import React from "react";
import { useRecoilState } from "recoil";
import {
  searchState,
  languageState,
  currencyState,
  regionState,
} from "../../globalRecoilState/Atoms/Atoms";
interface Props {
  languageOptions: string[];
  currencyOptions: string[];
  regionOptions: string[];
}

const SearchBar: React.FC<Props> = ({
  languageOptions,
  currencyOptions,
  regionOptions,
}) => {

  const [search, setSearch] = useRecoilState<string>(searchState);
  const [language, setLanguage] = useRecoilState<string>(languageState);
  const [currency, setCurrency] = useRecoilState<string>(currencyState);
  const [region, setRegion] = useRecoilState<string>(regionState);

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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex transform translate-y-4">
        <div className="p-8  flex-grow">
          <select
            className="rounded-full w-full  py-4  text-white leading-tight focus:outline-none bg-blue-500 border-solid border-gray-800 align-middle items-center "
            id="select-1"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languageOptions.map((lg, index) => (
              <option key={index} value={lg}>
                {lg}
              </option>
            ))}
          </select>
        </div>
        <div className="p-8  flex-grow ">
          <select
            className="rounded-full w-full  py-4  text-white leading-tight focus:outline-none bg-blue-500 border-solid border-gray-800 align-middle items-center "
            id="select-1"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {currencyOptions.map((cr, index) => (
              <option key={index} value={cr}>
                {cr}
              </option>
            ))}
          </select>
        </div>
        <div className="p-8  flex-grow">
          <select
            className="rounded-full w-full  py-4  text-white leading-tight focus:outline-none bg-blue-500 border-solid border-gray-800 align-middle items-center "
            id="select-1"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            {regionOptions.map((rg, index) => (
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
