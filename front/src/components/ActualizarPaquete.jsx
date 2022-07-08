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
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
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
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setErrorForm(true);
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
      {success && (
        <ModalExito
          open={success}
          setOpen={setSuccess}
          message={"El Paquete ha sido actualizado correctamente"}
        />
      )}

      {errorForm && (
        <ModalError
          open={errorForm}
          setOpen={setErrorForm}
          message={{
            title: "Ha ocurrido un error",
            description: "Faltan campos, o ya existen",
          }}
        />
      )}
    </>
  );
};
