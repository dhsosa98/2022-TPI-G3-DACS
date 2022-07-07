import { createShow } from "../services/shows";
import FormularioEvento from "./FormularioEvento";


export const CrearEvento = () => {
    const initialValues = {
        name: "",
        seat: "",
        dateShow: "",
        amount: "",
      }
    
      const handleSubmit =  async (values) => {
        try{
        const { name, seat, dateShow, amount } = values;
        console.log(values)
        const response = await createShow(name, seat, dateShow, amount)
        }catch(error){
          console.log(error)
        }
      }
    return (
        <FormularioEvento initialValues={initialValues} handleSubmit={handleSubmit} />
    )
}