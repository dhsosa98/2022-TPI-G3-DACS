import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../vite-env.d";
import Container from "./Container";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";

export default function FormularioPasaje({initialValues, handleSubmit, isEdit}) {
  const history = useHistory();
  const [travelWays, setTravelWays] = useState([])

  const fetchTravelWays = async () => {
    const response = await axios.get(API_BASE_URL+"/travelWays");
    setTravelWays(response.data);
  }

  useEffect(() => {
    fetchTravelWays();
  }, []);
  return (
    <Container>
      <div className="sm:mt-0">
        <h1 className="font-bold text-center text-3xl mb-5 text-[#000000cb]">
        {!isEdit ? "Cargar un Pasaje" : "Editar un Pasaje"}
        </h1>
        <div className="md:mt-0 md:col-span-2 ">
        <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize={true}>
        <Form>
            <div className="shadow overflow-hidden sm:rounded-lg ">
              <div className="px-4 py-5 bg-[#ffffffd8] sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Asiento
                    </label>
                    <Field
                      type="number"
                      name="seat"
                      id="seat"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Fecha de ida
                    </label>
                    <Field
                      type="date"
                      name="depurateDate"
                      id="depurateDate"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Fecha de vuelta
                    </label>
                    <Field
                      type="date"
                      name="returnDate"
                      id="returnDate"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Medio de transporte
                    </label>
                    <Field
                    as='select'
                          type="number"
                          name="travelWayId"
                          id="travelWayId"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="">Seleccione un medio de transporte</option>
                          {travelWays.map(travelWay => (
                            <option key={travelWay.id} value={travelWay.id}>
                              {travelWay.name}
                            </option>
                          ))}
                        </Field>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                     Precio
                    </label>
                    <Field
                      type="number"
                      name="amount"
                      id="amount"
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