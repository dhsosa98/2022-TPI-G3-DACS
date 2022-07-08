import Container from "./Container";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function FormularioEvento({initialValues, handleSubmit, isEdit}) {
  const history = useHistory();
  return (
    <Container>
      <div className="sm:mt-0">
      <div className="whitespace-nowrap flex mb-2 mt-6 items-center">

        </div>
        <div className="md:mt-0 md:col-span-2 ">
        <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize={true}>
        <Form>
            <div className="shadow overflow-hidden sm:rounded-lg ">
              <div className="px-4 py-5 bg-[#ffffffd8] sm:p-6">
              <h1 className="font-bold text-center text-3xl mb-1 ml-1 text-[#000000cb]">
            <Link to={"/admin/lista-eventos"}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline hover:bg-[#059090] hover:text-white rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                  </svg>
              </Link>  
              {!isEdit ? "Cargar un Evento" : "Editar un Evento"}
              </h1>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
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

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Numero de Asiento
                    </label>
                    <Field
                      type="number"
                      name="seat"
                      id="seat"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Fecha
                    </label>
                    <Field
                      type="date"
                      name="dateShow"
                      id="dateShow"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6">
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
