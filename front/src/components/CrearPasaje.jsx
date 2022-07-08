import FormularioPasaje from "./FormularioPasaje";
import { createTicket } from "../services/tickets";
import ModalExito from "./ModalExito";
import ModalError from "./ModalError";
import { useState } from "react";

export const CrearPasaje = () => {
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  const initialValues = {
    seat: "",
    departureDate: "",
    returnDate: "",
    travelWayId: "",
    amount: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { seat, departureDate, returnDate, travelWayId, amount } = values;
      console.log(values);
      const response = await createTicket(
        seat,
        departureDate,
        returnDate,
        Number(travelWayId),
        amount
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
      <FormularioPasaje
        initialValues={initialValues}
        handleSubmit={handleSubmit}
      />
      {success && (
        <ModalExito
          open={success}
          setOpen={setSuccess}
          message={"Pasaje agregado correctamente"}
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
