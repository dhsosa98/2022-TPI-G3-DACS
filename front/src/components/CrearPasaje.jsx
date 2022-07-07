import FormularioPasaje from "./FormularioPasaje";
import { createTicket } from "../services/tickets";


export const CrearPasaje = () => {
    const initialValues = {
        seat: "",
        depurateDate: "",
        returnDate: "",
        travelWayId: "",
        amount: "",
      }
    
      const handleSubmit =  async (values) => {
        try{
        const { seat, depurateDate, returnDate, travelWayId, amount } = values;
        console.log(values)
        const response = await createTicket(seat, depurateDate, returnDate, travelWayId, amount)
        }catch(error){
          console.log(error)
        }
      }
    return (
        <FormularioPasaje initialValues={initialValues} handleSubmit={handleSubmit} />
    )
}