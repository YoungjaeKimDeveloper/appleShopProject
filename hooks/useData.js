import React, { useEffect, useState } from "react";
import apiClient from "../utiles/api-client";

const useData = (endpoint, customConfiguration, deps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await apiClient.get(endpoint, customConfiguration);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(
    () => {
      fetchData();
    },
    deps ? deps : []
  );

  return { data, error };
};

export default useData;
