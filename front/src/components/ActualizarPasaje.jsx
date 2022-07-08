import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTicketById, updateTicket } from "../services/tickets";
import FormularioPasaje from "./FormularioPasaje";

export const ActualizarPasaje = (props) => {
  const { id } = useParams();
  const initialValues = {
    seat: "",
    departureDate: "",
    returnDate: "",
    travelWayId: "",
    amount: "",
  };
  const [ticket, setTicket] = useState(initialValues);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  useEffect(() => {
    const getTicket = async () => {
      try {
        const response = await getTicketById(id);
        setTicket(response);
      } catch (error) {
        setError(true);
      }
    };
    getTicket();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const { seat, departureDate, returnDate, travelWayId, amount } = values;
      console.log(values);
      const response = await updateTicket(
        seat,
        departureDate,
        returnDate,
        Number(travelWayId),
        amount,
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
        <FormularioPasaje
          initialValues={ticket}
          handleSubmit={handleSubmit}
          isEdit={true}
        />
      ) : (
        <h1>No existe ese pasaje</h1>
      )}
      {success && (
        <ModalExito
          open={success}
          setOpen={setSuccess}
          message={"El Pasaje ha sido actualizado correctamente"}
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
