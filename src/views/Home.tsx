import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useQuery } from "@apollo/client";
import { GET_LISTS } from "./../queries/GetLists/GetLists";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar/SearchBar";
import {
  currencyListState,
  laguageListState,
  regionListState,
} from "../globalRecoilState/Atoms/Atoms";

const Home: React.FC = () => {
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
    <>
      <SearchBar
        languageOptions={laguageList}
        currencyOptions={currencyList}
        regionOptions={regionList}
      />
      <Card
        svg=""
        name=""
        alphaCode=""
        capital=""
        currencyName=""
        currencySymbol=""
        area=""
        gini=""
        peopleDensidity=""
        naiveName=""
        cod={""}
        numberOfHabitants={""}
      />
    </>
  );
};

export default Home;
