import FormularioSeguro from "./FormularioSeguro";
import { createInsurance } from "../services/insurances";


export const CrearSeguro = () => {
    const initialValues = {
        name: "",
        amount: "",
      }
    
      const handleSubmit =  async (values) => {
        try{
        const { name, amount } = values;
        console.log(values)
        const response = await createInsurance(name, amount)
        }catch(error){
          console.log(error)
        }
      }
    return (
        <FormularioSeguro initialValues={initialValues} handleSubmit={handleSubmit} />
    )
}