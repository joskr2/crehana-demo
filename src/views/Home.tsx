import React from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar/SearchBar";

const Home: React.FC = () => {
  return (
    <>
      <SearchBar
        languageOptions={["ES", "EN", "PT"]}
        currencyOptions={["S/", "$/", "D/"]}
        regionOptions={["region1", "region2", "region3"]}
      />
      <Card/>
    </>
  );
};

export default Home;
