import FormularioUsuario from "./FormularioUsuario";
import { createUser } from "../services/users";


export const CrearUsuario = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        cuit: "",
        email: "",
        roleId: "",
      }
    
      const handleSubmit =  async (values) => {
        try{
        const { firstName, lastName, cuit, email, roleId} = values;
        console.log(values)
        const response = await createUser(firstName, lastName, cuit, email, roleId)
        }catch(error){
          console.log(error)
        }
      }
    return (
        <FormularioUsuario initialValues={initialValues} handleSubmit={handleSubmit} />
    )
}