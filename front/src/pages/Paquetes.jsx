import React, { useEffect, useState } from "react";
import { getPackages } from "../services/packages";
import { Link } from "react-router-dom";
import { images } from "./Hoteles";import Paquete from "./Paquete";
;

const Paquetes = () => {
  const [paquetes, setPaquetes] = useState([]);

  async function fetchPaquetes() {
    const data = await getPackages();
    setPaquetes(data.slice(0, 12));
  }

  useEffect(() => {
    fetchPaquetes();
  }, []);

  console.log(paquetes);

  return (
    <section className=" bg-[#ffffffcc] text-black p-10 m-10 rounded-lg ">
      <h1 className="font-bold text-center text-6xl mb-5 text-[#000000cb]">
        PAQUETES😎
      </h1>
      <h1 className="text-center text-bold text-2xl mt-[20px]">
        Lista de paquetes
      </h1>

      <div className="flex flex-wrap justify-center p-5 gap-10 ">
        {paquetes.map((paquete, count) => (
          <>
            <div key={paquete.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div className="bg-white  rounded-lg shadow-sm  p-5 group relative">
                <div className="flex flex-wrap justify-center group-hover:opacity-60 group-hover:transition group-hover:ease-in group-hover:duration-100">
                  <p className="text-center text-gray-600 sm:text-base text-sm">
                    Paquete {paquete.id}
                  </p>
                  <div className="w-full p-3">
                    <img src={images[count]} alt="paquete" className="w-full" />
                  </div>
                  <div className="w-full p-3">
                    <h1 className="text-center text-bold sm:text-2xl text-xl mb-[5px]">
                      {paquete.name.slice(0, 20)}
                      {paquete.name.length > 20 ? "..." : ""}
                    </h1>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      {paquete.show !== null && (
                        <span className="font-bold">
                          Evento: <span className="font-normal">{paquete.show.name}</span>
                        </span>
                      )}
                    </p>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      {paquete.hotel !== null && (
                        <span className=" font-bold">
                          Hotel: <span className="font-normal">{paquete.hotel.name}</span>
                        </span>
                      )}
                    </p>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      {paquete.ticket !== null && (
                        <span className=" font-bold">
                          Transporte: <span className="font-normal">{paquete.ticket.travelWay.name}</span>
                        </span>
                      )}
                    </p>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      {paquete.ticket !== null && (
                        <span className=" font-bold">
                          Seguro: <span className="font-normal">{paquete.insurance.name}</span>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="group-hover:grid group-hover:hover:transition group-hover:hover:ease-in group-hover:hover:scale-105 group-hover:hover:duration-300 group-hover:hover:delay-150 hidden absolute top-0 bottom-[125px] right-0 left-0 justify-center items-center">
                  <Link
                    to={`/paquetes/${paquete.id}`}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86]"
                  >
                    Mas informacion
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Paquetes;
