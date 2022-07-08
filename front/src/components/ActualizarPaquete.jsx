import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPackageById, updatePackage } from "../services/packages";
import FormularioPaquete from "./FormularioPaquete";

export const ActualizarPaquete = (props) => {
  const { id } = useParams();
  const initialValues = {
    name: "",
    quantPeople: "",
    ticketId: "",
    hotelId: "",
    insuranceId: "",
    showId: "",
    total: "",
  };
  const [pack, setPack] = useState(initialValues);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getPackage = async () => {
      try {
        const response = await getPackageById(id);
        setPack(response);
      } catch (error) {
        setError(true);
      }
    };
    getPackage();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const {
        name,
        quantPeople,
        ticketId,
        hotelId,
        insuranceId,
        showId,
        total,
      } = values;
      console.log(values);
      const response = await updatePackage(
        name,
        Number(quantPeople),
        Number(ticketId),
        Number(hotelId),
        Number(insuranceId),
        Number(showId),
        total,
        id
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!error ? (
        <FormularioPaquete
          initialValues={pack}
          handleSubmit={handleSubmit}
          isEdit={true}
        />
      ) : (
        <h1>No existe ese paquete</h1>
      )}
    </>
  );
};
