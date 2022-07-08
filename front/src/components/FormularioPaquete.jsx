import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../vite-env.d";
import Container from "./Container";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";

export default function FormularioPaquete({initialValues, handleSubmit, isEdit}) {
  const [tickets, setTickets] = useState([])
  const history = useHistory();

  const fetchTickets = async () => {
    const response = await axios.get(API_BASE_URL+"/tickets");
    console.log(response.data);
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
        <div className="md:mt-0 md:col-span-2 ">
        <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize={true}>
        <Form>
            <div className="shadow overflow-hidden sm:rounded-lg ">
              <div className="px-4 py-5 bg-[#ffffffd8] sm:p-6">
              <h1 className="font-bold text-center text-3xl mb-5 text-[#000000cb]">
              {!isEdit ? "Cargar un Paquete" : "Editar un Paquete"}
               </h1>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>

                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />

                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cantidad de Personas
                    </label>

                    <Field
                      type="number"
                      name="quantPeople"
                      id="quantPeople"
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
                    <Field
                    as='select'
                      type="number"
                      name="ticketId"
                      id="last-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <option value="">Seleccione un Pasaje</option>
                      {tickets.map(ticket => (
                        <option key={ticket.id} value={ticket.id}>
                          {ticket?.travelWay?.name}-{ticket.seat}
                        </option>
                        ))}
                    </Field>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Hotel
                    </label>
                    <Field
                    as='select'
                      type="number"
                      name="hotelId"
                      id="hotelId"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <option value="">Seleccione algun hotel</option>
                      {hotels.map(hotel => (
                        <option key={hotel.id} value={hotel.id}>
                          {hotel.name}
                        </option>
                        ))}
                    </Field>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Seguro
                    </label>
                    <Field
                    as='select'select
                      type="number"
                      name="insuranceId"
                      id="insuranceId"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <option value="">Seleccione algun seguro</option>
                      {insurances.map(insurance => (
                        <option key={insurance.id} value={insurance.id}>
                          {insurance.name}
                        </option>
                        ))}
                    </Field>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Espectaculo
                    </label>
                    <Field
                    as='select'select
                      type="number"
                      name="showId"
                      id="showId"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <option value="">Seleccione algun Espectaculo</option>
                      {shows.map(show => (
                        <option key={show.id} value={show.id}>
                          {show.name}
                        </option>
                        ))}
                     </Field>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Total
                    </label>

                    <Field
                      type="number"
                      name="total"
                      id="total"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />

                  </div>
                  
                </div>
              </div>
              <div className="px-4 py-3 bg-[#ffffffd8] text-right sm:px-6 gap-1 sm:justify-start justify-center flex flex-row-reverse">
                <button
                  onClick={()=>history.goBack()}
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
            </Form>
          </Formik>
        </div>
      </div>
    </Container>
  );
}