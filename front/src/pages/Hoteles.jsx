import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getHotels } from "../services/hotels";
import h1 from "../../public/images/hotels/1.jpg";
import h2 from "../../public/images/hotels/2.jpg";
import h3 from "../../public/images/hotels/3.jpg";
import h4 from "../../public/images/hotels/4.jpg";
import h5 from "../../public/images/hotels/5.jpg";
import h6 from "../../public/images/hotels/6.jpg";
import h7 from "../../public/images/hotels/7.jpg";
import h8 from "../../public/images/hotels/8.jpg";
import h9 from "../../public/images/hotels/9.jpg";
import h10 from "../../public/images/hotels/10.jpg";
import h11 from "../../public/images/hotels/11.jpg";
import h12 from "../../public/images/hotels/12.jpg";
import h13 from "../../public/images/hotels/13.jpg";
import h14 from "../../public/images/hotels/14.jpg";
import h15 from "../../public/images/hotels/15.jpg";
import Pagination from "../components/Pagination";

export const images = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12];

const Hoteles = () => {
  const [hotels, setHotels] = useState([]);

  async function fetchHotels() {
    const data = await getHotels();
    setHotels(data);
  }

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <section className=" bg-[#ffffffcc] text-black sm:p-10 py-10 sm:m-10 m-3 rounded-lg ">
      <h1 className="font-bold text-center sm:text-6xl text-3xl text-[#000000cb] ">
        HOTELES
      </h1>
      <div className="flex flex-wrap justify-center p-5 gap-10 ">
        {hotels.map((hotel, count) => (
          <>
            <div key={hotel.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div className="bg-white  rounded-lg shadow-sm  p-5 group relative">
                <div className="flex flex-wrap justify-center group-hover:opacity-60 group-hover:transition group-hover:ease-in group-hover:duration-100">
                  <div className="w-full p-3">
                    <img src={images[count % 12]} alt="hotel" className="w-full" />
                  </div>
                  <div className="w-full p-3">
                    <h1 className="text-center text-bold sm:text-2xl text-xl mb-[5px]">
                      {hotel.name}
                    </h1>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      <span className=" font-bold">Teléfono:</span>{" "}
                      {hotel.phone}
                    </p>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      <span className=" font-bold">Dirección:</span>{" "}
                      {hotel.address}
                    </p>
                  </div>
                </div>
                <div className="group-hover:grid group-hover:hover:transition group-hover:hover:ease-in group-hover:hover:scale-105 group-hover:hover:duration-300 group-hover:hover:delay-150 hidden absolute top-0 bottom-[125px] right-0 left-0 justify-center items-center">
                  <Link
                    to={`/hoteles/${hotel.id}`}
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
      <Pagination />
    </section>
  );
};

export default Hoteles;
