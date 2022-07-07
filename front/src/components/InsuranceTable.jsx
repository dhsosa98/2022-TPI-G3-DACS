import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteInsurance, getInsurances } from "../services/insurances";

export const InsuranceTable = (props) => {
    const [insurances, setInsurances] = useState([]);

    const fetchInsurances = async () => {
        const response = await getInsurances()
        setInsurances(response);
    }

    const handleDelete = async (id) =>{
        const response = await deleteInsurance(id)
    }

    useEffect(()=>{
        fetchInsurances();
    },[])
    return (
        <table className=" bg-white">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {insurances.map((insurance) => (
                    <tr key={insurance.id}>
                        <td><img src=''/></td>
                        <td>{insurance.name}</td>
                        <td>{insurance.amount}</td>
                        <td><Link to={'/formu-seguro/'+insurance.id}>Editar</Link></td>
                        <td><button onClick={()=>{handleDelete(insurance.id)}}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}