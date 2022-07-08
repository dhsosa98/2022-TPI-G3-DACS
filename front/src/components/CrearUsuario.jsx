import FormularioUsuario from "./FormularioUsuario";
import { createUser } from "../services/users";
import ModalExito from "./ModalExito";
import ModalError from "./ModalError";
import { useState } from "react";

export const CrearUsuario = () => {
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
    const initialValues = {
        firstName: "",
        lastName: "",
        cuit: "",
        email: "",
        roleId: "",
        password: "",
      }
    
      const handleSubmit =  async (values, {resetForm}) => {
        try{
        const { firstName, lastName, cuit, email, roleId, password} = values;
        console.log(values)
        const response = await createUser(firstName, lastName, cuit, email, Number(roleId), password)
        setSuccess(true)
        resetForm()
        }catch(error){
          console.log(error)
          setErrorForm(true)
        }
      }
    return (
      <>
        <FormularioUsuario initialValues={initialValues} handleSubmit={handleSubmit} />
        {success && (
          <ModalExito
            open={success}
            setOpen={setSuccess}
            message={"Usuario agregado correctamente"}
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