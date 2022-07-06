import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getShow } from "../services/shows";
import { images } from "./Eventos";


const Evento = () => {
    const [show, setShow] = useState([]);
    const {id} = useParams();

    const fetchShow = async () => {
        const response = await getShow(id)
        setShow(response)
    }

    useEffect(() => {
        fetchShow()
    }, []);
    return (
        <div className="flex flex-wrap justify-center items-center">
          <>
          
              <Link to={`/eventos/`} className=" px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86] self-start mt-[20px]">
                Volver
              </Link>
    
            <div key={show.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg shadow-black p-5">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full p-3">
                    <img src={images[id-1]} alt="show" className="w-full" />
                  </div>
                  <div className="w-full p-3">
                    <h1 className="text-center mb-[10px] text-bold text-2xl">
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
                    <p className=" text-gray-600 sm:text-base text-sm">
                      <span className=" font-bold">Descripción:</span>{" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis amet odio aliquam, at quia molestias ut, asperiores possimus nihil totam sed et ab, nesciunt enim voluptate. Asperiores, corrupti atque!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
      </div>
    );
    }
export default Evento;