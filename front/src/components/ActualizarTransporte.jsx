import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTravelWayById, updateTravelWay } from "../services/travelWays";
import FormularioTransporte from "./FormularioTransporte";

export const ActualizarTransporte = (props) => {
    const {id} = useParams();
    const initialValues = {
        name: "",
      }
    const [travelWay, setTravelWay] = useState(initialValues);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const getTravelWay = async () => {
            try{
            const response = await getTravelWayById(id);
            setTravelWay(response);
            }
            catch(error){
                setError(true);
            }
        }
        getTravelWay();
    },[])

    const handleSubmit =  async (values) => {
        try{
        const { name } = values;
        console.log(values)
        const response = await updateTravelWay(name, id)
        }catch(error){
          console.log(error)
        }
    }

    return (
        <>
        {!error ? <FormularioTransporte initialValues={travelWay} handleSubmit={handleSubmit} isEdit={true} /> : <h1>No existe ese medio de transporte</h1>}
        </>
    )
}