import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import InfoCard from "../../components/InfoCard/InfoCard";
import Axios from "axios";
import axiosInstance from "../../utils/interceptors";
import useCarForm from "../../Hooks/useCarForm";
import {
  dashboard,
  button,
  modal,
  modal_inputs,
  modal_close,
} from "./admin.module.scss";
import placeholder from "../../../images/placeholder.jpg";

const AddCarModal = ({ isOpen, onClose, onSubmit, carForm, onChange }) => (
  <div className={isOpen ? modal : modal_close}>
    <div className={modal_inputs}>
      <button onClick={onClose}>X</button>
      <input type="text" name="make" placeholder="Make" onChange={onChange} />
      <input type="text" name="model" placeholder="Model" onChange={onChange} />
      <input type="text" name="year" placeholder="Year" onChange={onChange} />
      <input type="text" name="fuelType" placeholder="Fuel Type" onChange={onChange} />
      <input type="text" name="transmissionType" placeholder="Transmission Type" onChange={onChange} />
      <input type="text" name="price" placeholder="Price" onChange={onChange} />
      <input type="text" name="linkToImage" placeholder="Link to Image" onChange={onChange} />
      <button onClick={onSubmit}>Add Car</button>
    </div>
  </div>
);

const RemoveCarModal = ({ isOpen, onClose, onSubmit, onChange }) => (
  <div className={isOpen ? modal : modal_close}>
    <div className={modal_inputs}>
      <button onClick={onClose}>X</button>
      <input type="text" name="make" placeholder="Make" onChange={onChange} />
      <input type="text" name="model" placeholder="Model" onChange={onChange} />
      <input type="text" name="year" placeholder="Year" onChange={onChange} />
      <button onClick={onSubmit}>Remove Car</button>
    </div>
  </div>
);

function Admin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const {carForm, handleInputChange, setCarForm} = useCarForm();

  const addCar = async () => {
    try {
      await axiosInstance.post("/insert", carForm);
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  const removeCar = async () => {
    const { make, model, year } = carForm;
    try {
      const response = await Axios.delete("http://localhost:3001/remove", {
        data: { make, model, year },
      });
      console.log("Car deleted successfully:", response.data);
    } catch (error) {
      console.error("Error removing car:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className={dashboard}>
        <InfoCard title="Cars in fleet" infoNumber={60} image={placeholder} bgcolor="blue" />
        <InfoCard title="Cars available" infoNumber={60} image={placeholder} bgcolor="blue" />
        <InfoCard title="Total Revenue" infoNumber={60} image={placeholder} bgcolor="blue" />
      </div>
      <button onClick={() => setIsModalOpen(true)} style={{ backgroundColor: "green" }} className={button}>
        Add car
      </button>
      <button onClick={() => setIsDeleteModalOpen(true)} style={{ backgroundColor: "red" }} className={button}>
        Remove car
      </button>

      <AddCarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addCar}
        carForm={carForm}
        onChange={handleInputChange}
      />
      <RemoveCarModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onSubmit={removeCar}
        onChange={handleInputChange}
      />
    </>
  );
}

export default Admin;
