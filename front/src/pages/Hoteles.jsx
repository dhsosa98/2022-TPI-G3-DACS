import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getHotels } from "../services/hotels";
import h1 from '../../public/images/hotels/1.jpg'
import h2 from '../../public/images/hotels/2.jpg'
import h3 from '../../public/images/hotels/3.jpg'
import h4 from '../../public/images/hotels/4.jpg'
import h5 from '../../public/images/hotels/5.jpg'
import h6 from '../../public/images/hotels/6.jpg'
import h7 from '../../public/images/hotels/7.jpg'
import h8 from '../../public/images/hotels/8.jpg'
import h9 from '../../public/images/hotels/9.jpg'
import h10 from '../../public/images/hotels/10.jpg'
import h11 from '../../public/images/hotels/11.jpg'
import h12 from '../../public/images/hotels/12.jpg'

export const images = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12]

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
    <>
      <h1 className="font-bold text-center text-6xl mb-5 text-[#000000cb] mt-[40px]">
        HOTELES
      </h1>

      <div className="flex flex-wrap justify-center">
        {hotels.map((hotel, count) => (
          <>
            <div key={hotel.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg shadow-black p-5 group relative">
                <div className="flex flex-wrap justify-center group-hover:opacity-60 group-hover:transition group-hover:ease-in group-hover:duration-100">
                  <div className="w-full p-3">
                    <img src={images[count]} alt="hotel" className="w-full" />
                  </div>
                  <div className="w-full p-3">
                    <h1 className="text-center text-bold sm:text-2xl text-xl mb-[5px] mt-[20px]">
                      {hotel.name}
                    </h1>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      <span className=" font-bold">Teléfono:</span> {hotel.phone}
                    </p>
                    <p className="text-center text-gray-600 sm:text-base text-sm">
                      <span className=" font-bold">Dirección:</span>{" "}
                      {hotel.address}
                    </p>
                  </div>
                </div>
                <div className="group-hover:grid group-hover:hover:transition group-hover:hover:ease-in group-hover:hover:scale-105 group-hover:hover:duration-300 group-hover:hover:delay-150 hidden absolute top-0 bottom-[125px] right-0 left-0 justify-center items-center">
                <Link  to={`/hoteles/${hotel.id}`} className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86]">
                  Ver Hotel
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

export default Hoteles;
