import { useState } from "react";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getTravelWay } from "../services/travelWays";
import { images } from "./Transportes";

const Transporte = () => {
  const [transporte, setTransporte] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  const fetchTransporte = async () => {
    const response = await getTravelWay(id);
    setTransporte(response);
  };

  useEffect(() => {
    fetchTransporte();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center">
      <>
        <button
          className=" px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86] self-start mt-[20px]"
          onClick={() => history.goBack()}
        >
          {" "}
          Volver
        </button>

        <div key={transporte.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg shadow-black p-5">
            <div className="flex flex-wrap justify-center">
              <div className="w-full p-3">
                <img src={images[id - 1]} alt="hotel" className="w-full" />
              </div>
              <div className="w-full">
                <h1 className="text-center text-bold text-2xl">
                  {transporte.name}
                </h1>
                <div className="w-full p-3">
                  <p className="text-center text-gray-600 sm:text-base text-sm">
                    Viaje mas comodo en {transporte.name}
                  </p>
                </div>
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
export default Transporte;
