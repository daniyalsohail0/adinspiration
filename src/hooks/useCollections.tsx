import React, { useState, useEffect } from "react";
import axios from "axios";

const useCollections = () => {
  const [collections, setCollections] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/api/v1/collections")
        .then((res) => setCollections(res.data))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return collections;
};

export default useCollections;
