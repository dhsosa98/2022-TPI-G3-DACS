import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowById, updateShow } from "../services/shows";
import FormularioEvento from "./FormularioEvento";

export const ActualizarEvento = (props) => {
    const {id} = useParams();
    const initialValues = {
        name: "",
        seat: "",
        dataShow: "",
        amount: "",
      }
    const [shows, setShow] = useState(initialValues);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const getShow = async () => {
            try{
            const response = await getShowById(id);
            setShow(response);
            }
            catch(error){
                setError(true);
            }
        }
        getShow();
    },[])

    const handleSubmit =  async (values) => {
        try{
        const { name, seat, dateShow, amount } = values;
        console.log(values)
        const response = await updateShow(name, seat, dateShow, amount, id)
        }catch(error){
          console.log(error)
        }
    }

    return (
        <>
        {!error ? <FormularioEvento initialValues={shows} handleSubmit={handleSubmit} isEdit={true} /> : <h1>No existe ese Evento</h1>}
        </>
    )
}