import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteBooking, getBookings } from "../services/reserves";
import { getPackage } from "../services/packages";


const Reservas = () => {
    const [bookings, setBookings] = useState([]);

    const fetchBookings = async () => {
        const response = await getBookings();
        console.log(response);
        setBookings(response);
    }

    const handleDelete = async (id) =>{
        const response = await deleteBooking(id)
    }

    useEffect(()=>{
        fetchBookings();
    },[])
    return (
        <section className=" flex-grow bg-[#ffffffcc] text-black pb-10">
        <div className="container p-2 mx-auto sm:p-4 text-gray-900">
        <div className="whitespace-nowrap flex mb-2 mt-6 items-center">
        <Link to={"/"}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline hover:bg-[#059090] hover:text-white rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
            </Link>
            <h2 className="text-2xl font-semibold leading-tight inline text-center ml-2">Mis Reservas</h2>
        </div>

	<div className="overflow-x-auto">
        
		<table className="w-full p-6 text-xs text-left text-white whitespace-nowrap">
			<thead>
				<tr className="bg-[#059090]">
					<th className="p-3">Paquete</th>
					<th className="p-3"></th>
                    <th className="p-3"></th>
					<th className="p-3">Pagar Reserva</th>
					<th className="p-3">Cancelar</th>
		
				</tr>
			</thead>
			<tbody className="border-b bg-[#ffffffcc] border-gray-400 text-black">
            {bookings.map((booking) => (
                    <tr key={booking.id}>
                        <td className="px-3 py-2">{booking.pack.name}</td>
                        <td className="px-3 py-2"></td>
                        <td className="px-3 py-2">{booking.phone}</td>
                        <td className="px-3 py-2"><Link to={'/compra-paquete?packageId='+booking.packId}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg></Link></td>
                        <td className="px-3 py-2"><button onClick={()=>{handleDelete(booking.packId)}}> 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg></button></td>
                       
                    </tr>
                ))}

			
			</tbody>
			
		</table>
        <Link to={"/paquetes"}>
        <button className=" w-fit p-2 flex items-center justify-center mt-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86]">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> Reservar un paquete
        </button>
        </Link>
	</div>
</div>
</section>

    )
}
export default Reservas;