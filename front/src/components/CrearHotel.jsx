import FormularioHotel from "./FormularioHotel";
import { createHotel } from "../services/Hotels";


export const CrearHotel = () => {
    const initialValues = {
        name: "",
        address: "",
        phone: "",
      }
    
      const handleSubmit =  async (values) => {
        try{
        const { name, address, phone } = values;
        console.log(values)
        const response = await createHotel(name, address, phone)
        }catch(error){
          console.log(error)
        }
      }
    return (
        <FormularioHotel initialValues={initialValues} handleSubmit={handleSubmit} />
    )
}