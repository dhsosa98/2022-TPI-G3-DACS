import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInsuranceById, updateInsurance } from "../services/insurances";
import FormularioSeguro from "./FormularioSeguro";

export const ActualizarSeguro = (props) => {
  const { id } = useParams();
  const initialValues = {
    name: "",
    amount: "",
  };
  const [insurance, setInsurance] = useState(initialValues);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  useEffect(() => {
    const getInsurance = async () => {
      try {
        const response = await getInsuranceById(id);
        setInsurance(response);
      } catch (error) {
        setError(true);
      }
    };
    getInsurance();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const { name, amount } = values;
      console.log(values);
      const response = await updateInsurance(name, amount, id);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setErrorForm(true);
    }
  };

  return (
    <>
      {!error ? (
        <FormularioSeguro
          initialValues={insurance}
          handleSubmit={handleSubmit}
          isEdit={true}
        />
      ) : (
        <h1>No existe ese recurso</h1>
      )}
      {success && (
        <ModalExito
          open={success}
          setOpen={setSuccess}
          message={"El seguro ha sido actualizado correctamente"}
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
