import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getShows } from "../services/shows";
import s1 from '../../public/images/shows/1.jpg'
import s2 from '../../public/images/shows/2.jpg'
import s3 from '../../public/images/shows/3.jpg'
import s4 from '../../public/images/shows/4.jpg'
import s5 from '../../public/images/shows/5.jpg'
import s6 from '../../public/images/shows/6.jpg'
import s7 from '../../public/images/shows/7.jpg'
import s8 from '../../public/images/shows/8.jpg'


export const images = [s1, s2, s3, s4, s5, s6, s7, s8]


const Eventos = () => {
  const [shows, setShows] = useState([]);

  async function fetchShows() {
    const data = await getShows();
    setShows(data);
  }

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <>
      <h1 className="font-bold text-center text-6xl mb-5 text-[#000000cb] mt-[40px]">
        EVENTOS
      </h1>

      <div className="flex flex-wrap justify-center p-5">
        {shows.map((show, count) => (
          <>
            <div key={show.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg shadow-black p-5 group relative">
                <div className="flex flex-wrap justify-center group-hover:opacity-60 group-hover:transition group-hover:ease-in group-hover:duration-100">
                  <div className="w-full p-3">
                    <img src={images[count]} alt="show" className="w-full" />
                  </div>
                  <div className="w-full p-3">
                    <h1 className="text-center text-bold sm:text-2xl text-xl mb-[5px]">
                      {show.name}
                    </h1>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      <span className=" font-bold">Fecha:</span>{" "}
                      {new Date(show.dateShow).toLocaleDateString()} 
                    </p>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      <span className=" font-bold">Asientos disp:</span>{" "}
                      {show.seat} 
                    </p>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      <span className=" font-bold">Precio:</span>{" $"}
                      {show.amount}
                    </p>
                  </div>
                </div>
                <div className="group-hover:grid group-hover:hover:transition group-hover:hover:ease-in group-hover:hover:scale-105 group-hover:hover:duration-300 group-hover:hover:delay-150 hidden absolute top-0 bottom-[125px] right-0 left-0 justify-center items-center">
                <Link  to={`/eventos/${show.id}`} className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86]">
                  Mas informacion
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

export default Eventos;
