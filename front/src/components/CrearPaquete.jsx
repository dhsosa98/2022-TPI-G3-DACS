import { createPackage } from "../services/packages";
import FormularioPaquete from "./FormularioPaquete";
import ModalExito from "./ModalExito";
import ModalError from "./ModalError";
import { useState } from "react";

export const CrearPaquete = () => {
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  const initialValues = {
    name: "",
    quantPeople: "",
    ticketId: "",
    hotelId: "",
    insuranceId: "",
    showId: "",
    total: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
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
      const response = await createPackage(
        name,
        Number(quantPeople),
        Number(ticketId),
        Number(hotelId),
        Number(insuranceId),
        Number(showId),
        total
      );
      setSuccess(true);
      resetForm();
    } catch (error) {
      console.log(error);
      setErrorForm(true);
    }
  };
  return (
    <>
      <FormularioPaquete
        initialValues={initialValues}
        handleSubmit={handleSubmit}
      />
      {success && (
        <ModalExito
          open={success}
          setOpen={setSuccess}
          message={"Paquete agregado correctamente"}
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
