import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTravelWayById, updateTravelWay } from "../services/travelWays";
import FormularioTransporte from "./FormularioTransporte";
import ModalError from "./ModalError";
import ModalExito from "./ModalExito";

export const ActualizarTransporte = (props) => {
  const { id } = useParams();
  const initialValues = {
    name: "",
  };
  const [travelWay, setTravelWay] = useState(initialValues);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  useEffect(() => {
    const getTravelWay = async () => {
      try {
        const response = await getTravelWayById(id);
        setTravelWay(response);
      } catch (error) {
        setError(true);
      }
    };
    getTravelWay();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const { name } = values;
      console.log(values);
      const response = await updateTravelWay(name, id);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setErrorForm(true);
    }
  };

  return (
    <>
      {!error ? (
        <FormularioTransporte
          initialValues={travelWay}
          handleSubmit={handleSubmit}
          isEdit={true}
        />
      ) : (
        <h1>No existe ese medio de transporte</h1>
      )}
      {success && (
        <ModalExito
          open={success}
          setOpen={setSuccess}
          message={"Método de transporte actualizado correctamente"}
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
