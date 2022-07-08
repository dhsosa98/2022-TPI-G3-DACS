import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotelById, updateHotel } from "../services/hotels";
import FormularioHotel from "./FormularioHotel";

export const ActualizarHotel = (props) => {
    const {id} = useParams();
    const initialValues = {
        name: "",
        address: "",
        phone: "",
      }
    const [hotel, setHotel] = useState(initialValues);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const getHotel = async () => {
            try{
            const response = await getHotelById(id);
            setHotel(response);
            }
            catch(error){
                setError(true);
            }
        }
        getHotel();
    },[])

    const handleSubmit =  async (values) => {
        try{
        const { name, address, phone } = values;
        console.log(values)
        const response = await updateHotel(name, address, phone, id)
        }catch(error){
          console.log(error)
        }
    }

    return (
        <>
        {!error ? <FormularioHotel initialValues={hotel} handleSubmit={handleSubmit} isEdit={true} /> : <h1>No existe este hotel</h1>}
        </>
    )
}