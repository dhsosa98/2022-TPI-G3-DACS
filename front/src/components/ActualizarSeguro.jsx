import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInsuranceById, updateInsurance } from "../services/insurances";
import FormularioSeguro from "./FormularioSeguro";

export const ActualizarSeguro = (props) => {
    const {id} = useParams();
    const initialValues = {
        name: "",
        amount: "",
      }
    const [insurance, setInsurance] = useState(initialValues);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const getInsurance = async () => {
            try{
            const response = await getInsuranceById(id);
            setInsurance(response);
            }
            catch(error){
                setError(true);
            }
        }
        getInsurance();
    },[])

    const handleSubmit =  async (values) => {
        try{
        const { name, amount } = values;
        console.log(values)
        const response = await updateInsurance(name, amount, id)
        }catch(error){
          console.log(error)
        }
    }

    return (
        <>
        {!error ? <FormularioSeguro initialValues={insurance} handleSubmit={handleSubmit} isEdit={true} /> : <h1>No existe ese recurso</h1>}
        </>
    )
}