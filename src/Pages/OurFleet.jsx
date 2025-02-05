import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CarContainer from "../components/CarContainer/CarContainer";
import { fleet } from "../scss/fleet.module.scss";
import useFetchCarData from '../Hooks/useFetchCarData'

function OurFleet() {

  const { carData, error } = useFetchCarData();

  return (
    <>
      <Navbar />
      {error ? (
        <p>{error}</p>
      ) : (
        <div className={fleet}>
          {carData.map((car, key) => (
            <CarContainer
              make={car.Make}
              model={car.Model}
              key={key}
              transmission={car.Transmission}
              year={car.Year}
              fuel={car.Fuel}
              image={car.Image}
            />
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}

export default OurFleet;
