import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../vite-env.d";
import Container from "./Container";

export default function FormularioPaquete() {
  const [tickets, setTickets] = useState([])

  const fetchTickets = async () => {
    const response = await axios.get(API_BASE_URL+"/tickets");
    setTickets(response.data);
  }

  useEffect(() => {
    fetchTickets();
  }, []);

  const [hotels, setHotels] = useState([])

  const fetchHotels = async () => {
    const response = await axios.get(API_BASE_URL+"/hotels");
    setHotels(response.data);
  }

  useEffect(() => {
    fetchHotels();
  }, []);

  const [insurances, setInsurances] = useState([])

  const fetchInsurances = async () => {
    const response = await axios.get(API_BASE_URL+"/insurances");
    setInsurances(response.data);
  }

  useEffect(() => {
    fetchInsurances();
  }, []);

  const [shows, setShows] = useState([])

  const fetchShows = async () => {
    const response = await axios.get(API_BASE_URL+"/shows");
    setShows(response.data);
  }

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <Container>
      <div className="sm:mt-0">
        <h1 className="font-bold text-center text-3xl mb-5 text-[#000000cb]">
          Cargar un paquete
        </h1>
        <div className="md:mt-0 md:col-span-2 ">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-lg ">
              <div className="px-4 py-5 bg-[#ffffffd8] sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pasaje
                    </label>
                  <select
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <option value="">Seleccione un medio de transporte</option>
                      {tickets.map(ticket => (
                        <option key={ticket.id} value={ticket.id}>
                          {ticket.name}
                        </option>
                        ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Hotel
                    </label>
                  <select
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <option value="">Seleccione algun hotel</option>
                      {hotels.map(hotel => (
                        <option key={hotel.id} value={hotel.id}>
                          {hotel.name}
                        </option>
                        ))}
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Seguro
                    </label>
                  <select
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <option value="">Seleccione algun seguro</option>
                      {insurances.map(insurance => (
                        <option key={insurance.id} value={insurance.id}>
                          {insurance.name}
                        </option>
                        ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Espectaculo
                    </label>
                  <select
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <option value="">Seleccione algun Espectaculo</option>
                      {shows.map(show => (
                        <option key={show.id} value={show.id}>
                          {show.name}
                        </option>
                        ))}
                    </select>
                  </div>
                  
                </div>
              </div>
              <div className="px-4 py-3 bg-[#ffffffd8] text-right sm:px-6 gap-1 sm:justify-start justify-center flex flex-row-reverse">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#afafaf] hover:bg-[#00000086] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#00adad] hover:bg-[#00adad86] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cargar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}