import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getTravelWays } from "../services/travelWays";
import t1 from '../../public/images/travelWays/1.jpg'
import t2 from '../../public/images/travelWays/2.jpg'
import t3 from '../../public/images/travelWays/3.jpg'
import t4 from '../../public/images/travelWays/4.jpg'

export const images = [t1, t2, t3, t4]

const Transporte = () => {
  const [travelWays, setTravelWays] = useState([]);

  async function fetchTravelWays() {
    const data = await getTravelWays();
    setTravelWays(data);
  }

  useEffect(() => {
    fetchTravelWays();
  }, []);

  return (
    <>
      <h1 className="font-bold text-center text-6xl mb-5 text-[#000000cb] mt-[40px]">
        TRANSPORTE
      </h1>

      <div className="flex flex-wrap justify-center p-5">
        {travelWays.map((travelWay, count) => (
          <>
            <div key={travelWay.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg shadow-black p-5 group relative">
                <div className="flex flex-wrap justify-center group-hover:opacity-60 group-hover:transition group-hover:ease-in group-hover:duration-100">
                  <div className="w-full p-3">
                    <img src={images[count]} alt="hotel" className="w-full" />
                  </div>
                  <div className="w-full p-3">
                    <h1 className="text-center text-bold sm:text-2xl text-xl mb-[5px]">
                      {travelWay.name}
                    </h1>
                    <div className="w-full p-3">
                 
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      Viaje mas comodo en {travelWay.name}
                    </p>

                  </div>
                  </div>
                  
                </div>
                <div className="group-hover:grid group-hover:hover:transition group-hover:hover:ease-in group-hover:hover:scale-105 group-hover:hover:duration-300 group-hover:hover:delay-150 hidden absolute top-0 bottom-[125px] right-0 left-0 justify-center items-center">
                <Link  to={`/transporte/${travelWay.id}`} className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86]">
                  Ver forma de viaje
                </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Transporte;
