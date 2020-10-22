import React from "react";
import Card from "./../components/Card/Card";
import SearchBar from "../components/SearchBar/SearchBar";
import List from "../components/List/List";

const Home: React.FC = () => {
  return (
    <>
      <SearchBar />
      <Card />
      <List />
    </>
  );
};

export default Home;
