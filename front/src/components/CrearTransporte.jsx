import FormularioTransporte from "./FormularioTransporte";
import { createTravelWay } from "../services/travelWays";


export const CrearTransporte = () => {
    const initialValues = {
        name: "",
      }
    
      const handleSubmit =  async (values) => {
        try{
        const { name} = values;
        console.log(values)
        const response = await createTravelWay(name)
        }catch(error){
          console.log(error)
        }
      }
    return (
        <FormularioTransporte initialValues={initialValues} handleSubmit={handleSubmit} />
    )
}