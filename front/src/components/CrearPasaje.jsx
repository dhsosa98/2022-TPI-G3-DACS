import FormularioPasaje from "./FormularioPasaje";
import { createTicket } from "../services/tickets";


export const CrearPasaje = () => {
    const initialValues = {
        seat: "",
        departureDate: "",
        returnDate: "",
        travelWayId: "",
        amount: "",
      }
    
      const handleSubmit =  async (values) => {
        try{
        const { seat, departureDate, returnDate, travelWayId, amount } = values;
        console.log(values)
        const response = await createTicket(seat, departureDate, returnDate, Number(travelWayId), amount)
        }catch(error){
          console.log(error)
        }
      }
    return (
        <FormularioPasaje initialValues={initialValues} handleSubmit={handleSubmit} />
    )
}