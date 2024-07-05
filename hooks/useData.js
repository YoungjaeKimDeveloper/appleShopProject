import React, { useEffect, useState } from "react";
import apiClient from "../utiles/api-client";

const useData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await apiClient.get(url);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error };
};

export default useData;
