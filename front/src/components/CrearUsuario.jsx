import FormularioUsuario from "./FormularioUsuario";
import { createUser } from "../services/users";


export const CrearUsuario = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        cuit: "",
        email: "",
        roleId: "",
        password: "",
      }
    
      const handleSubmit =  async (values) => {
        try{
        const { firstName, lastName, cuit, email, roleId, password} = values;
        console.log(values)
        const response = await createUser(firstName, lastName, cuit, email, Number(roleId), password)
        }catch(error){
          console.log(error)
        }
      }
    return (
        <FormularioUsuario initialValues={initialValues} handleSubmit={handleSubmit} />
    )
}