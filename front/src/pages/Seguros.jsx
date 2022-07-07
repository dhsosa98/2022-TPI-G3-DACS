import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteInsurance, getInsurances } from "../services/insurances";
import t1 from "../../public/images/insurances/1.jpg";
import t2 from "../../public/images/insurances/2.jpg";
import t3 from "../../public/images/insurances/3.jpg";

const Insurance = (props) => {
  const images = [t1, t2, t3];

  const [insurances, setInsurances] = useState([]);

  const fetchInsurances = async () => {
    const response = await getInsurances();
    setInsurances(response);
  };

  const handleDelete = async (id) => {
    const response = await deleteInsurance(id);
  };

  useEffect(() => {
    fetchInsurances();
  }, []);
  return (
    <>
      <h1 className="font-bold text-center text-6xl mb-5 text-[#000000cb] mt-[40px]">
        SEGUROS
      </h1>

      <div className="flex flex-wrap justify-center p-5">
        {insurances.map((insurances, count) => (
          <>
            <div key={insurances.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg shadow-black p-5 group relative">
                <div className="flex flex-wrap justify-center group-hover:opacity-60 group-hover:transition group-hover:ease-in group-hover:duration-100">
                  <div className="w-full p-3">
                    <img src={images[count]} alt="hotel" className="w-full" />
                  </div>
                  <div className="w-full p-3">
                    <h1 className="text-center text-bold sm:text-2xl text-xl mb-[5px]">
                      {insurances.name}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Insurance;
