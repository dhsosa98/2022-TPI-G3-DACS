import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPackage } from "../services/packages";
import { images } from "./Hoteles";

const Paquete = () => {
  const [paquete, setPaquete] = useState([]);
  const { id } = useParams();

  const fetchPaquete = async () => {
    const data = await getPackage(id);
    setPaquete(data);
  };

  useEffect(() => {
    fetchPaquete();
  }, []);

  console.log(paquete);
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <Link
          to={`/paquetes/`}
          className=" px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86] self-start mt-[20px]"
        >
          Volver
        </Link>

        <div key={paquete.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg shadow-black p-5">
            <div className="flex flex-wrap justify-center">
              <div className="w-full">
                <img src={images[id - 1]} alt="hotel" className="w-full" />
              </div>
              <div className="w-full p-3">
                <h1 className="text-center mb-[10px] text-bold text-2xl">
                  {paquete.name}
                </h1>
                <p className=" text-gray-600 sm:text-base text-sm">
                  <p className="text-center text-gray-600 sm:text-base text-sm">
                    {paquete.show !== null && (
                      <span className="font-bold">
                        Evento:{" "}
                        <span className="font-normal">{paquete.show.name}</span>
                      </span>
                    )}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Paquete;
