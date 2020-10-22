import React from "react";
import Card from "./../components/Card/Card";
import SearchBar from "../components/SearchBar/SearchBar";
import List from "../components/List/List";

const Home: React.FC = () => {
  return (
    <>
      <SearchBar />
      <div className="flex flex-wrap place-content-center">
          <div className="mt-8 " > <Card /> </div>
          <div className="mt-8 ml-8"> <List /></div>
      </div>
    </>
  );
};

export default Home;
