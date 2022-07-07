import { Link } from "react-router-dom"
import soyadmin from '../../public/images/soyadmin.png'
import lobito from '../../public/images/lobito.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
export default function Home() {
  return (
<>
    <div className="flex items-center justify-center mx-auto my-auto">
      <div className="p-6 text-center">
      <h1 className="text-4xl font font-extrabold tracking-tight text-[#ffffff] sm:text-6xl drop-shadow-2xl">
        SOS ADMIN PIBE!
      </h1>
      <p className="mt-4 text-xl text-[#ffffff] drop-shadow-2xl shadow-black">
        Oatata😎😎
      </p>
      <img src={lobito} alt="" className="p-6"/>
      </div>
      <img src={soyadmin} alt="" className="p-6"/>
    </div>
</>
  )
}
