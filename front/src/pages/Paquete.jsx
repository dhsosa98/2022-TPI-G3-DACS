import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPackageById } from "../services/packages";
import { AuthContext } from "../contexts/Auth";
import { images } from "./Hoteles";
import { createBooking } from "../services/reserves";
import ModalExito from "../components/ModalExito";
import ModalError from "../components/ModalError";

const Paquete = () => {
  const [paquete, setPaquete] = useState({
    name: "",
    description: "",
    price: "",
    show: "",
    hotel: "",
    ticket: {
      travelWay: "",
    },
    insurance: "",
  });
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const { id } = useParams();
  const { auth } = useContext(AuthContext);

  const fetchPaquete = async () => {
    const data = await getPackageById(id);
    setPaquete(data);
  };

  useEffect(() => {
    fetchPaquete();
  }, []);

  const handleReserve = async () => {
    try {
      const response = await createBooking(id);
      setSuccess(true);
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage(true);
        return;
      }
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <Link
          to={`/paquetes/`}
          className=" px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86] self-start mt-[20px]"
        >
          Volver
        </Link>
        {success && (
          <ModalExito
            open={success}
            setOpen={setSuccess}
            message={"El paquete ha sido reservado exitosamente"}
          />
        )}
        {errorMessage && (
          <ModalError
            open={errorMessage}
            setOpen={setErrorMessage}
            message={{
              title: "Ya ha reservado este paquete",
              description:
                "Por favor elimínelo de sus reservas para poder continuar",
            }}
          />
        )}
        <div key={paquete.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg shadow-black p-5">
            <div className="flex flex-wrap justify-center">
              <div className="w-full">
                <img
                  src={images[(id - 1) % 12]}
                  alt="hotel"
                  className="w-full"
                />
              </div>
              <div className="w-full p-3">
                <h1 className="text-center mb-[10px] text-bold text-2xl">
                  {paquete.name}
                </h1>

                <p className="text-center text-gray-600 sm:text-base text-sm">
                  {paquete.show !== null && (
                    <span className="font-bold">
                      Evento:{" "}
                      <span className="font-normal">
                        {paquete.show.name}
                        <a
                          href={`/eventos/${paquete.show.id}`}
                          className="font-normal  text-blue-800"
                        >
                          {" "}
                          Mas info...
                        </a>
                      </span>
                    </span>
                  )}
                </p>

                <p className="text-center text-gray-600 sm:text-base text-sm">
                  {paquete.show !== null && (
                    <span className="font-bold">
                      Hotel:{" "}
                      <span className="font-normal">
                        {paquete.hotel.name}
                        <a
                          href={`/hoteles/${paquete.hotel.id}`}
                          className="font-normal  text-blue-800"
                        >
                          {" "}
                          Mas info...
                        </a>
                      </span>
                    </span>
                  )}
                </p>

                <p className="text-center text-gray-600 sm:text-base text-sm">
                  {paquete.show !== null && (
                    <span className="font-bold">
                      Transporte:{" "}
                      <span className="font-normal">
                        {paquete.ticket.travelWay.name}
                        <a
                          href={`/transportes/${paquete.ticket.travelWay.id}`}
                          className="font-normal  text-blue-800"
                        >
                          {" "}
                          Mas info...
                        </a>
                      </span>
                    </span>
                  )}
                </p>

                <p className="text-center text-gray-600 sm:text-base text-sm">
                  {paquete.show !== null && (
                    <span className="font-bold">
                      Seguro:{" "}
                      <span className="font-normal">
                        {paquete.insurance.name}
                      </span>
                    </span>
                  )}
                </p>
              </div>

              {auth ? (
                <button
                  className=" px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#007faded] hover:bg-[#00adad] self-start border-blue-500 "
                  onClick={handleReserve}
                >
                  Quiero reservarlo!
                </button>
              ) : (
                // <a href={`/compra-paquete?packageId=${id}`}>
                //   {" "}
                //   Quiero reservarlo!
                // </a>
                <button
                  className=" px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#007faded] hover:bg-[#00adad] self-start
              border-blue-500 "
                >
                  <a href="/iniciarsesion"> Quiero reservarlo!</a>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Paquete;
