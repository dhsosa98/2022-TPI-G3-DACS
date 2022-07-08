import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotelById, updateHotel } from "../services/hotels";
import FormularioHotel from "./FormularioHotel";
import ModalError from "./ModalError";
import ModalExito from "./ModalExito";

export const ActualizarHotel = (props) => {
  const { id } = useParams();
  const initialValues = {
    name: "",
    address: "",
    phone: "",
  };
  const [hotel, setHotel] = useState(initialValues);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  useEffect(() => {
    const getHotel = async () => {
      try {
        const response = await getHotelById(id);
        setHotel(response);
      } catch (error) {
        setError(true);
      }
    };
    getHotel();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const { name, address, phone } = values;
      console.log(values);
      const response = await updateHotel(name, address, phone, id);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setErrorForm(true);
    }
  };

  return (
    <>
      {!error ? (
        <FormularioHotel
          initialValues={hotel}
          handleSubmit={handleSubmit}
          isEdit={true}
        />
      ) : (
        <h1>No existe este hotel</h1>
      )}
      {success && (
        <ModalExito
          open={success}
          setOpen={setSuccess}
          message={"El hotel ha sido actualizado correctamente"}
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
