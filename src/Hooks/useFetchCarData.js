import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCarData = () => {
  const [carData, setCarData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/retrieve");
        const data = response.data;
        if (data.length === 0) {
          setError("There are no cars available at this moment");
        } else {
          setCarData(data);
          setError(null); // Clear any previous errors
        }
      } catch (error) {
        console.log(`Error fetching car data: ${error}`);
        setError("Error fetching car data");
      }
    };
    fetchCarData();
  }, []);
  return { carData, error }
};

export default useFetchCarData;
