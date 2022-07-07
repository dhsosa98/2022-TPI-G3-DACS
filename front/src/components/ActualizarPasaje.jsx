import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTicketById, updateTicket } from "../services/tickets";
import FormularioPasaje from "./FormularioPasaje";

export const ActualizarPasaje = (props) => {
    const {id} = useParams();
    const initialValues = {
        seat: "",
        depurateDate: "",
        returnDate: "",
        travelWayId: "",
        amount: "",
      }
    const [ticket, setTicket] = useState(initialValues);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const getTicket = async () => {
            try{
            const response = await getTicketById(id);
            setTicket(response);
            }
            catch(error){
                setError(true);
            }
        }
        getTicket();
    },[])

    const handleSubmit =  async (values) => {
        try{
        const { seat, depurateDate, returnDate, travelWayId, amount } = values;
        console.log(values)
        const response = await updateInsurance(seat, depurateDate, returnDate, travelWayId, amount, id)
        }catch(error){
          console.log(error)
        }
    }

    return (
        <>
        {!error ? <FormularioPasaje initialValues={ticket} handleSubmit={handleSubmit} isEdit={true} /> : <h1>No existe ese pasaje</h1>}
        </>
    )
}