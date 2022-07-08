import FormularioHotel from "./FormularioHotel";
import { createHotel } from "../services/hotels";
import { useState } from "react";
import ModalExito from "./ModalExito";
import ModalError from "./ModalError";

export const CrearHotel = () => {
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  const initialValues = {
    name: "",
    address: "",
    phone: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { name, address, phone } = values;
      console.log(values);
      const response = await createHotel(name, address, phone);
      setSuccess(true);
      resetForm();
    } catch (error) {
      setErrorForm(true);
    }
  };
  return (
    <>
      <FormularioHotel
        initialValues={initialValues}
        handleSubmit={handleSubmit}
      />
      {success && (
        <ModalExito
          open={success}
          setOpen={setSuccess}
          message={"Hotel agregado correctamente"}
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
