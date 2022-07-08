import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getShows } from "../services/shows";
import s1 from "../../public/images/shows/1.jpg";
import s2 from "../../public/images/shows/2.jpg";
import s3 from "../../public/images/shows/3.jpg";
import s4 from "../../public/images/shows/4.jpg";
import s5 from "../../public/images/shows/5.jpg";
import s6 from "../../public/images/shows/6.jpg";
import s7 from "../../public/images/shows/7.jpg";
import s8 from "../../public/images/shows/8.jpg";
import s9 from "../../public/images/shows/9.jpg";
import s10 from "../../public/images/shows/10.jpg";
import s11 from "../../public/images/shows/11.jpg";
import s12 from "../../public/images/shows/12.jpg";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";

export const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12];

const Eventos = () => {
  const [shows, setShows] = useState([]);
  const [cantElements, setCantElements] = useState(0);
  const { page, size } = useSelector((state) => state.pagination);

  async function fetchShows() {
    const data = await getShows(page, size);
    setShows(data.rows);
    setCantElements(data.count);
  }

  useEffect(() => {
    fetchShows();
  }, [page, size]);

  return (
    <section className=" bg-[#ffffffcc] text-black sm:p-10 py-10 sm:m-10 m-3 rounded-lg ">
      <h1 className="font-bold text-center sm:text-6xl text-3xl text-[#000000cb] ">
        EVENTOS
      </h1>

      <div className="flex flex-wrap justify-center p-5 gap-10">
        {shows?.map((show, count) => (
          <>
            <div key={show?.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div className="bg-white rounded-lg p-5 group relative">
                <div className="flex flex-wrap justify-center group-hover:opacity-60 group-hover:transition group-hover:ease-in group-hover:duration-100">
                  <div className="w-full p-3">
                    <img
                      src={images[count % 12]}
                      alt="show"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full p-3">
                    <h1 className="text-center text-bold sm:text-2xl text-xl mb-[5px]">
                      {show?.name}
                    </h1>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      <span className=" font-bold">Fecha:</span>{" "}
                      {new Date(show.dateShow).toLocaleDateString()}
                    </p>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      <span className=" font-bold">Asientos disp:</span>{" "}
                      {show?.seat}
                    </p>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      <span className=" font-bold">Precio:</span>
                      {" $"}
                      {show?.amount}
                    </p>
                  </div>
                </div>
                <div className="group-hover:grid group-hover:hover:transition group-hover:hover:ease-in group-hover:hover:scale-105 group-hover:hover:duration-300 group-hover:hover:delay-150 hidden absolute top-0 bottom-[125px] right-0 left-0 justify-center items-center">
                  <Link
                    to={`/eventos/${show?.id}`}
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
      <Pagination cantItems={cantElements} />
    </section>
  );
};

export default Eventos;
