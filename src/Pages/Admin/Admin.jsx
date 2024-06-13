import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import InfoCard from '../../components/InfoCard/InfoCard';
import { dashboard } from "./admin.module.scss";
import placeholder from "../../../images/placeholder.jpg";

function Admin() {
  return (
    <>
    <Navbar />
    <div className={dashboard}>
    <InfoCard title="Cars in fleet" infoNumber={60} image={placeholder}  bgcolor="blue"/>
    <InfoCard title="Cars available" infoNumber={60} image={placeholder}  bgcolor="blue"/>
    <InfoCard title="Total Revenue" infoNumber={60} image={placeholder}  bgcolor="blue"/>
    </div>
    </>
  )
}

export default Admin