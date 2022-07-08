import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById, updateUser } from "../services/users";
import FormularioUsuario from "./FormularioUsuario";

export const ActualizarUsuario = (props) => {
    const {id} = useParams();
    const initialValues = {
        firstName: "",
        lastName: "",
        cuit: "",
        email: "",
        roleId: "",
      }
    const [user, setUser] = useState(initialValues);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const getUser = async () => {
            try{
            const response = await getUserById(id);
            setUser(response);
            }
            catch(error){
                setError(true);
            }
        }
        getUser();
    },[])

    const handleSubmit =  async (values) => {
        try{
        const { firstName, lastName, cuit, email, roleId } = values;
        console.log(values)
        const response = await updateUser(firstName, lastName, cuit, email, roleId, id)
        }catch(error){
          console.log(error)
        }
    }

    return (
        <>
        {!error ? <FormularioUsuario initialValues={user} handleSubmit={handleSubmit} isEdit={true} /> : <h1>No existe este usuario</h1>}
        </>
    )
}