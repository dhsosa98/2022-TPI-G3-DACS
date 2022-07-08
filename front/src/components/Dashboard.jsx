import React from "react";
import hoteles from "../../public/images/hotels/3.jpg";
import eventos from "../../public/images/shows/5.jpg";
import pasajes from "../../public/images/pasajes.jpg";
import seguros from "../../public/images/seguros.jpg";
import paquetes from "../../public/images/paquetes.jpg";
import usuarios from "../../public/images/usuarios.jpg";
import { NavLink } from "react-router-dom";
import {
  CalendarIcon,
  MenuIcon,
  XIcon,
  TruckIcon,
  ArchiveIcon,
  OfficeBuildingIcon,
  ThumbUpIcon,
  TicketIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/outline";

export const Dashboard = () => {
  return (
    <section className="bg-[#ffffffcc] text-black sm:p-10 p-4 sm:m-10 m-5 rounded-lg 2xl:container 2xl:mx-auto mb-10">
      <div className=" ">
        <div className="lg:px-20 md:px-6 sm:px-4">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-24 sm:gap-y-10 sm:gap-x-6 gap-y-6 max-w-[50vw] mx-auto">
            <div className="relative">
              <div className=" relative group">
                <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full"></div>
                <h1 className="text-center font-monstserrat text-2xl pt-2 text-[#000000]">
                  Hoteles
                </h1>
                <OfficeBuildingIcon className=" text-[#1885b8]" />
                <div className="absolute bottom-0 p-8 w-full opacity-0  group-hover:opacity-100">
                  <NavLink to="/admin/lista-hoteles">
                    <button className=" font-medium leading-4 bg-[#e5473fb2] hover:bg-[#19ca9eaf] text-white py-3 w-full rounded-md">
                      Lista Hoteles
                    </button>
                  </NavLink>
                  <NavLink to="/admin/crear-hotel">
                    <button className="font-medium leading-4 bg-[#e5473fb2] hover:bg-[#19ca9eaf] text-white py-3 w-full mt-2 rounded-md">
                      Agregar Hoteles
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className=" relative group">
                <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full"></div>
                <h1 className="text-center font-monstserrat text-2xl pt-2 text-[#000000]">
                  Eventos
                </h1>
                <CalendarIcon className=" text-[#1885b8]" />
                <div className="absolute bottom-0 p-8 w-full opacity-0  group-hover:opacity-100">
                  <NavLink to="/admin/lista-eventos">
                    <button className=" font-medium leading-4 bg-[#e5473fb2] hover:bg-[#19ca9eaf] text-white py-3 w-full rounded-md">
                      Lista Eventos
                    </button>
                  </NavLink>
                  <NavLink to="/admin/crear-evento">
                    <button className="font-medium leading-4 bg-[#e5473fb2] hover:bg-[#19ca9eaf] text-white py-3 w-full mt-2 rounded-md">
                      Agregar Eventos
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className=" relative group">
                <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full"></div>
                <h1 className="text-center font-monstserrat text-2xl pt-2 text-[#000000]">
                  Seguros
                </h1>
                <HeartIcon className=" text-[#1885b8]" />
                <div className="absolute bottom-0 p-8 w-full opacity-0  group-hover:opacity-100">
                  <NavLink to="/admin/lista-seguros">
                    <button className=" font-medium leading-4 bg-[#e5473fb2] hover:bg-[#19ca9eaf] text-white py-3 w-full rounded-md">
                      Lista Seguros
                    </button>
                  </NavLink>
                  <NavLink to="/admin/crear-seguro">
                    <button className="font-medium leading-4 bg-[#e5473fb2] hover:bg-[#19ca9eaf] text-white py-3 w-full mt-2 rounded-md">
                      Agregar Seguros
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className=" relative group">
                <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full"></div>
                <h1 className="text-center font-monstserrat text-2xl pt-2 text-[#000000]">
                  Usuarios
                </h1>
                <UserIcon className=" text-[#1885b8]" />
                <div className="absolute bottom-0 p-8 w-full opacity-0  group-hover:opacity-100">
                  <NavLink to="/admin/lista-usuarios">
                    <button className=" font-medium leading-4 bg-[#e5473fb2] hover:bg-[#19ca9eaf] text-white py-3 w-full rounded-md">
                      Lista Usuarios
                    </button>
                  </NavLink>
                  <NavLink to="/admin/crear-usuario">
                    <button className="font-medium leading-4 bg-[#e5473fb2] hover:bg-[#19ca9eaf] text-white py-3 w-full mt-2 rounded-md">
                      Agregar Usuarios
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className=" relative group">
                <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full"></div>
                <h1 className="text-center font-monstserrat text-2xl pt-2 text-[#000000]">
                  Paquetes
                </h1>
                <ArchiveIcon className=" text-[#1885b8]" />
                <div className="absolute bottom-0 p-8 w-full opacity-0  group-hover:opacity-100">
                  <NavLink to="/admin/lista-paquetes">
                    <button className=" font-medium leading-4 bg-[#e5473fb2] hover:bg-[#19ca9eaf] text-white py-3 w-full rounded-md">
                      Lista Paquetes
                    </button>
                  </NavLink>
                  <NavLink to="/admin/crear-paquete">
                    <button className="font-medium leading-4 bg-[#e5473fb2] hover:bg-[#19ca9eaf] text-white py-3 w-full mt-2 rounded-md">
                      Agregar Paquetes
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className=" relative group">
                <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full"></div>
                <h1 className="text-center font-monstserrat text-2xl pt-2 text-[#000000]">
                  Pasajes
                </h1>
                <TicketIcon className=" text-[#1885b8]" />
                <div className="absolute bottom-0 p-8 w-full opacity-0  group-hover:opacity-100">
                  <NavLink to="/admin/lista-pasajes">
                    <button className=" font-medium leading-4 bg-[#e5473fb2] hover:bg-[#19ca9eaf] text-white py-3 w-full rounded-md">
                      Lista Pasajes
                    </button>
                  </NavLink>
                  <NavLink to="/admin/crear-pasaje">
                    <button className="font-medium leading-4 bg-[#e5473fb2] hover:bg-[#19ca9eaf] text-white py-3 w-full mt-2 rounded-md">
                      Agregar Pasajes
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
