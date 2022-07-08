import FormularioSeguro from "./FormularioSeguro";
import { createInsurance } from "../services/insurances";
import ModalExito from "./ModalExito";
import ModalError from "./ModalError";
import { useState } from "react";

export const CrearSeguro = () => {
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
    const initialValues = {
        name: "",
        amount: "",
      }
    
      const handleSubmit =  async (values, {resetForm}) => {
        try{
        const { name, amount } = values;
        console.log(values)
        const response = await createInsurance(name, amount)
        setSuccess(true)
        resetForm()
        }catch(error){
          console.log(error)
          setErrorForm(true)
        }
      }
    return (
      <>
        <FormularioSeguro initialValues={initialValues} handleSubmit={handleSubmit} />
        {success && (
          <ModalExito
            open={success}
            setOpen={setSuccess}
            message={"Seguro agregado correctamente"}
          />
          )}

        {errorForm && (
        <ModalError
          open={errorForm}
          setOpen={setErrorForm}
          message={{
            title: "Ha ocurrido un error",
            description:
              "Faltan campos, o ya existen",
          }}
        />
        )}
        </>
    )
}