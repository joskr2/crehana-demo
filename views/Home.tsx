import React from "react";
import SearchBar from "./../src/components/SearchBar/SearchBar";

const Home: React.FC = () => {
  return (
    <>
      <SearchBar
        languageOptions={["ES", "EN", "PT"]}
        currencyOptions={["S/", "$/", "D/"]}
        regionOptions={["region1", "region2", "region3"]}
      />
    </>
  );
};

export default Home;
