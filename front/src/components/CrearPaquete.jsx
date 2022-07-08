
import { createPackage } from "../services/packages";
import FormularioPaquete from "./FormularioPaquete";


export const CrearPaquete = () => {
    const initialValues = {
        name: "",
        quantPeople: "",
        ticketId: "",
        hotelId: "",
        insuranceId: "",
        showId: "",
        total: "",
      }
    
      const handleSubmit =  async (values) => {
        try{
        const { name, quantPeople, ticketId, hotelId, insuranceId, showId, total } = values;
        console.log(values)
        const response = await createPackage(name, Number(quantPeople), Number(ticketId), Number(hotelId), Number(insuranceId), Number(showId), total)
        }catch(error){
          console.log(error)
        }
      }
    return (
        <FormularioPaquete initialValues={initialValues} handleSubmit={handleSubmit} />
    )
}