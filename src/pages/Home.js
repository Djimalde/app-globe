import React from "react";
import Navigation from "../components/Navigation";
import Laugo from "../components/Laugo";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <div>
      <Laugo />
      <Navigation />
      <Countries />
    </div>
  );
};

export default Home;
