import { useEffect } from "react";
import { useState } from "react";
import { getInsurances } from "../services/insurances";
import t1 from "../../public/images/insurances/1.jpg";
import t2 from "../../public/images/insurances/2.jpg";
import t3 from "../../public/images/insurances/3.jpg";
import t4 from "../../public/images/insurances/6.jpg";
import t5 from "../../public/images/insurances/7.jpg";
import t6 from "../../public/images/insurances/8.jpg";

const Insurance = (props) => {
  const images = [t1, t2, t3, t4, t5, t6];

  const [insurances, setInsurances] = useState([]);

  const fetchInsurances = async () => {
    const response = await getInsurances();
    setInsurances(response);
  };

  useEffect(() => {
    fetchInsurances();
  }, []);
  return (
    <section className=" bg-[#ffffffcc] text-black sm:p-10 py-10 sm:m-10 m-3 rounded-lg ">
      <h1 className="font-bold text-center sm:text-6xl text-3xl text-[#000000cb] ">
        SEGUROS
      </h1>

      <div className="flex flex-wrap justify-center p-5 gap-10">
        {insurances.map((insurances, count) => (
          <>
            <div key={insurances.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div className="bg-white  rounded-lg shadow-sm  p-5 group relative">
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
    </section>
  );
};

export default Insurance;
