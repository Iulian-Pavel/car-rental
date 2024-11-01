import { useState } from "react";

const useCarForm = () => {
  const [carForm, setCarForm] = useState({
    make: "",
    model: "",
    year: "",
    fuelType: "",
    transmissionType: "",
    price: "",
    linkToImage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarForm((prev) => ({ ...prev, [name]: value }));
  };

  return { carForm, setCarForm, handleInputChange };
};

export default useCarForm;