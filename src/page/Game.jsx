import React, { useContext, useEffect, useState } from "react";
import AllGame from "../components/homepage/AllGame";
import { SearchContext } from "../contex/SearchContex";

const Game = ({ data }) => {
  const [filter, setFilter] = useState([]);
  const { city } = useContext(SearchContext);



  useEffect(() => {
    if (city) {
      const updateItem = data.filter((item) =>
        item.title.toLowerCase().includes(city.toLowerCase())
      );
      setFilter(updateItem);
    } else {
      setFilter(data);
    }
  }, [city, data]);

  console.log(filter);

  return (
    <>
      <AllGame data={filter && filter} />
    </>
  );
};

export default Game;
