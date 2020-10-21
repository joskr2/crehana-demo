import React from "react";
import Card from "./../components/Card/Card";
import SearchBar from "../components/SearchBar/SearchBar";

const Home: React.FC = () => {
  return (
    <>
      <SearchBar />
      <Card/>
    </>
  );
};

export default Home;
