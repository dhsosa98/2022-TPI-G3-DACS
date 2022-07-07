import { Link } from "react-router-dom"
import soyadmin from '../../public/images/soyadmin.png'
export default function Home() {
  return (

      <div className="sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-[#ffffff] sm:text-6xl drop-shadow-2xl">
              SOS ADMIN PIBE!
            </h1>
            <p className="mt-4 text-xl text-[#ffffff] drop-shadow-2xl shadow-black">
              Oaaaaaaaaaaaaaaaaaaaaatata noma endeci cajeta olo
            </p>
          </div>

              

              <Link
                to="/paquetes"
                className="mt-5 inline-block text-center bg-[#00adad] border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Ver paquetes!
              </Link>
            </div>
          </div>

  )
}
