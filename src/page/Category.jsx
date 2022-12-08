import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AllGame from "../components/homepage/AllGame";
import { useParams } from "react-router-dom";

const Category = ({ data }) => {
  const [filter, setFilter] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const faceData = (params) => {
      try {
        axios.get(`https://mcpedls.com/c1/${params.cat}`).then((res) => {
          setFilter(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    faceData(params);
  }, [params]);

  console.log(filter);

  return (
    <>
      <AllGame
        data={filter && filter}
        title={params.cat.replaceAll("%", " ")}
      />
    </>
  );
};

export default Category;
