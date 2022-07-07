import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { images } from "./Hoteles";
import { getHotelById } from "../services/hotels";

const Hotel = () => {
  const [hotel, setHotel] = useState([]);
  const { id } = useParams();

  const fetchHotel = async () => {
    const response = await getHotelById(id);
    setHotel(response);
  };

  useEffect(() => {
    fetchHotel();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center">
      <>
        <Link
          to={`/hoteles/`}
          className=" px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86] self-start mt-[20px]"
        >
          Volver
        </Link>

        <div key={hotel.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg shadow-black p-5">
            <div className="flex flex-wrap justify-center">
              <div className="w-full">
                <img src={images[id - 1]} alt="hotel" className="w-full" />
              </div>
              <div className="w-full p-3">
                <h1 className="text-center mb-[10px] text-bold text-2xl">
                  {hotel.name}
                </h1>
                <p className=" text-gray-600 sm:text-base text-sm">
                  <span className=" font-bold">Teléfono:</span> {hotel.phone}
                </p>
                <p className=" text-gray-600 sm:text-base text-sm">
                  <span className=" font-bold">Dirección:</span> {hotel.address}
                </p>
                <p className=" text-gray-600 sm:text-base text-sm">
                  <span className=" font-bold">Descripción:</span> Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Error veritatis
                  amet odio aliquam, at quia molestias ut, asperiores possimus
                  nihil totam sed et ab, nesciunt enim voluptate. Asperiores,
                  corrupti atque!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
export default Hotel;
