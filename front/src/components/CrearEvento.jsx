import { createShow } from "../services/shows";
import FormularioEvento from "./FormularioEvento";
import ModalExito from "./ModalExito";
import ModalError from "./ModalError";
import { useState } from "react";

export const CrearEvento = () => {
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
    const initialValues = {
        name: "",
        seat: "",
        dateShow: "",
        amount: "",
      }
    
      const handleSubmit =  async (values, {resetForm}) => {
        try{
        const { name, seat, dateShow, amount } = values;
        console.log(values)
        const response = await createShow(name, seat, dateShow, amount)
        setSuccess(true)
        resetForm()
        }catch(error){
          console.log(error)
          setErrorForm(true)
        }
      }
    return (
      <>
        <FormularioEvento initialValues={initialValues} handleSubmit={handleSubmit} />
        {success && (
                    <ModalExito
                      open={success}
                      setOpen={setSuccess}
                      message={"Evento agregado correctamente"}
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