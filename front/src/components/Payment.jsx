import Cards from "react-credit-cards";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "react-credit-cards/es/styles-compiled.css";
import { useEffect } from "react";
import { getPackage } from "../services/packages";
import { useState } from "react";
import { images } from "../pages/Hoteles";
import { useLocation } from "react-router-dom";
import { createSales } from "../services/sales";
import ModalExito from "./ModalExito";
import ModalError from "./ModalError";
import * as yup from "yup";

export const Payment = () => {
    const location = useLocation()
  const initialCard = {
    number: "",
    cvc: "",
    expiry: "",
    name: "",
  };
  const [success, setSuccess] = useState(false);
  const search = new URLSearchParams(location.search);
  const packageId = search.get("packageId");
  const [error, setError] = useState(null);
  const [afipError, setAfipError] = useState(null);

  const [pack, setPack] = useState({
    name: "",
    description: "",
    price: "",
    show: "",
    hotel: "",
    ticket: "",
    insurance: ""
  });

  useEffect(() => {
   async function getPackageById(){
    try{
    const response = await getPackage(packageId);
    setPack(response);
    }
    catch(err){
        setError(true)
    }
   } 
   getPackageById()
  }, []);

  const handleSubmit = async (values) => {
    try {
        const {number, cvc, expiry, name} = values
        const sale = {
            packageId: Number(packageId),
            payment: 
            {
                cardNumber: number.split(' ').join(''),
                cvv: Number(cvc),
                ownerName: name,
                expirationDate: expiry,
                paymentMethod: 'card',
                amount: pack?.total,
            }
        }
        const response = await createSales(sale)
        console.log(response)
        setSuccess(true)
    }
    catch (error) {
        console.log(error)
        setAfipError(true)
    }
 };

  if (error){
    return <div>Error el paquete no existe</div>
  }

  const cardSchema = yup.object().shape({
    number: yup.string().required("El numero de tarjeta es requerido").min(18, "El numero de tarjeta debe tener 15 o 16 digitos").max(19, "El numero de tarjeta debe tener 15 o 16 digitos"),
    cvc: yup.number().required("El cvc es requerido"),
    expiry: yup.string().required("La fecha de expiracion es requerida"),
    name: yup.string().required("El nombre del titular es requerido"),
  })


  return (
    <Formik initialValues={initialCard} onSubmit={handleSubmit} validationSchema={cardSchema}>
      {({ values, handleSubmit }) => (
        <section className=" flex-grow bg-[#ffffffcc] text-black sm:m-10 m-2">
          <div className="p-4 container flex flex-col items-center mx-auto space-y-6 ">
          <h1 className="font-bold text-center sm:text-3xl text-3xl text-[#000000cb] ">Datos de Reserva</h1>
            <div className=" bg-white rounded-lg p-5 flex gap-7 flex-wrap justify-center items-center container max-w-lg ">
                {success && <ModalExito open={success} setOpen={setSuccess} message={"Pago Realizado con Éxito."} />}
                {afipError && <ModalError open={afipError} setOpen={setAfipError} message={{title: "Ha ocurrido un error", description: "No está habilitado para comprar este paquete"}} />}
            <div className="flex flex-wrap justify-center ">
                  <div className="w-full p-3 flex justify-center">
                    <img src={images[pack?.id % 12]} alt="pack" className="max-w-[30vw]" />
                  </div>
                  <p className="text-center text-gray-600 text-4xl">
                    Paquete {pack?.id}
                  </p>
                  <div className="w-full p-3 flex flex-col justify-center items-center">
                    <div className="text-center text-gray-600 sm:text-base text-sm flex gap-2">
                      {pack?.show !== null && (
                        <>
                        <span className="font-bold">
                          Evento: <span className="font-normal">{pack?.show?.name}</span>
                        </span>
                        <span className="font-bold">
                          Asiento: <span className="font-normal">{pack?.show?.seat}</span>
                        </span>
                        <span className="font-bold">
                          Fecha: <span className="font-normal">{new Date(pack?.show?.dateShow).toLocaleDateString()}</span>
                        </span>
                        </>
                      )}
                    </div>
                    <div className="text-center text-gray-600 sm:text-base text-sm flex gap-2">
                      {pack?.hotel !== null && (
                        <>
                        <span className=" font-bold">
                          Hotel: <>
                          <span className="font-normal">{pack?.hotel?.name}</span>
                          </>
                        </span>
                        <span className=" font-bold">
                          Direccion: <>
                          <span className="font-normal">{pack?.hotel?.address}</span>
                          </>
                        </span>
                        <span className=" font-bold">
                          Telefono: <>
                          <span className="font-normal">{pack?.hotel?.phone}</span>
                          </>
                        </span>
                        </>
                      )}
                    </div>
                    <div className="text-center text-gray-600 sm:text-base text-sm flex gap-2">
                      {pack?.ticket !== null && (
                        <>
                        <span className=" font-bold">
                          Transporte: <span className="font-normal">{pack?.ticket?.travelWay?.name}</span>
                        </span>
                        <span className=" font-bold">
                        Asiento: <span className="font-normal">{pack?.ticket?.seat}</span>
                        </span>
                        <span className=" font-bold">
                        Fecha de Ida: <span className="font-normal">{new Date(pack?.ticket?.departureDate).toLocaleDateString()}</span>
                        </span>
                        <span className=" font-bold">
                        Fecha de Vuelta: <span className="font-normal">{new Date(pack?.ticket?.returnDate).toLocaleDateString()}</span>
                        </span>
                      </>
                      )}
                    </div>
                    <div className="text-center text-gray-600 sm:text-base text-sm flex gap-2">
                      {pack?.insurance !== null && (
                        <span className=" font-bold">
                          Seguro: <span className="font-normal">{pack?.insurance?.name}</span>
                        </span>
                      )}
                    </div>
                    
                    <p className="text-center text-gray-600 text-xl">
                    Cantidad de personas: <span className=" font-bold">{pack?.quantPeople}</span>
                  </p>
                    <p className="text-center text-gray-600 text-4xl">
                    Total: <span className=" font-bold">{'$'}{pack?.total}</span>
                  </p>
                  </div>
                </div>
            </div>
            <h1 className="font-bold text-center sm:text-3xl text-3xl text-[#000000cb] ">Datos de pago</h1>
            <div className=" bg-white rounded-lg p-5 flex gap-7 flex-wrap justify-center items-center container max-w-lg ">
              <Cards
                cvc={values.cvc}
                expiry={values.expiry}
                name={values.name}
                focused={values.cvc}
                number={values.number}
              />
              <Form className=" gap-2 grid grid-cols-1 col-span-6 justify-center items-center">
                <label>Numero de Tarjeta</label>
                <Field
                  name="number"
                  value={values.number
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                  maxLength="19"
                  type=""
                  placeholder="Nro de Tarjeta"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                />
                 <ErrorMessage
                    name="number"
                    render={(msg) => <p className=" text-red-500">{msg}</p>}
                  />
                <label>Nombre de Tarjeta</label>
                <Field
                  name="name"
                  placeholder="Nombre"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                />
                 <ErrorMessage
                    name="name"
                    render={(msg) => <p className=" text-red-500">{msg}</p>}
                  />
                <div className=" flex gap-2">
                  <div>
                    <label>Fecha de Vencimiento</label>
                    <Field
                      name="expiry"
                      placeholder="MM/AA"
                      maxLength="5"
                      value={values.expiry.length<=2 ? values.expiry.replace(/\//g, "").replace(/(\d{2})/g, "$1/").trim() : values.expiry}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                    />
                     <ErrorMessage
                    name="expiry"
                    render={(msg) => <p className=" text-red-500">{msg}</p>}
                  />
                  </div>
                  <div>
                    <label>CVC</label>
                    <Field
                      name="cvc"
                      placeholder="CVC"
                      maxLength="4"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                    />
                     <ErrorMessage
                    name="cvc"
                    render={(msg) => <p className=" text-red-500">{msg}</p>}
                  />
                  </div>
                </div>
              </Form>
            </div>
              <button onClick={handleSubmit} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86]">
                Pagar
              </button>
          </div>
        </section>
      )}
    </Formik>
  );
};
