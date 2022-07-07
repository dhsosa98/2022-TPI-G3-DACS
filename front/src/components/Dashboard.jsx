import React from "react";
import hoteles from "../../public/images/hotels/3.jpg"
import eventos from "../../public/images/shows/5.jpg"
import pasajes from "../../public/images/pasajes.jpg"
import seguros from "../../public/images/seguros.jpg"
import paquetes from "../../public/images/paquetes.jpg"
import usuarios from "../../public/images/usuarios.jpg"
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
                <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-24 sm:gap-y-10 sm:gap-x-6 gap-y-6 max-w-[50vw] mx-auto">
                    <div className=" relative bg-white rounded-lg">
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-100 via-gray-400 to-opacity-30 group-hover:opacity-20 absolute top-0 left-0 "></div>
                            <h1 className="text-center text-2xl pt-2 text-[#000000]">Hoteles</h1>
                            {/* <img className="w-full rounded-lg" src={hoteles} alt="Hotel" /> */}
                            <OfficeBuildingIcon className=" text-[#1885b8]" />
                            <div className="absolute bottom-5 p-8 w-full opacity-0 group-hover:opacity-100">
                                <NavLink to='/admin/lista-hoteles'><button className=" font-medium leading-4 text-gray-800 bg-white py-3 w-full rounded-md">Lista Hoteles</button></NavLink>
                                <NavLink to='/admin/crear-hotel'><button className=" bg-transparent font-medium leading-4 border-2 border-white py-3 w-full mt-2 text-[#000000] rounded-md">Agregar Hoteles</button></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className=" relative bg-white rounded-lg">
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-100 via-gray-400 to-opacity-30 group-hover:opacity-20 absolute top-0 left-0 h-full w-full"></div>
                            <h1 className=" text-center text-2xl pt-2 text-[#000000]">Eventos</h1>
                            {/* <img className="w-full rounded-lg" src={eventos} alt="Evento" /> */}
                            <CalendarIcon className=" text-[#1885b8]" />
                            <div className="absolute bottom-5 p-8 w-full opacity-0 group-hover:opacity-100">
                            <NavLink to='/admin/lista-eventos'><button className=" font-medium leading-4 text-gray-800 bg-white py-3 w-full">Lista Eventos</button></NavLink>
                            <NavLink to='/admin/crear-evento'><button className=" bg-transparent font-medium leading-4 border-2 border-white py-3 w-full mt-2 text-[#000000] rounded-md">Agregar Evento</button></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className=" relative bg-white rounded-lg">
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-100 via-gray-400 to-opacity-30 group-hover:opacity-20 absolute top-0 left-0 h-full w-full"></div>
                            <h1 className="text-center text-2xl pt-2 text-[#000000]">Pasajes</h1>
                            {/* <img className=" w-full rounded-lg" src={pasajes} alt="Pasajes" /> */}
                            <TicketIcon className=" text-[#1885b8]" />
                            <div className="absolute bottom-5 p-8 w-full opacity-0 group-hover:opacity-100">
                                <NavLink to='/admin/lista-pasajes'><button className=" font-medium leading-4 text-gray-800 bg-white py-3 w-full rounded-md">Lista Pasajes</button></NavLink>
                                <NavLink to='/admin/crear-pasaje'><button className=" bg-transparent font-medium leading-4 border-2 border-white py-3 w-full mt-2 text-[#000000] rounded-md">Agregar Pasajes</button></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className=" relative bg-white rounded-lg">
                        <div className=" relative group ">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-100 via-gray-400 to-opacity-30 group-hover:opacity-20 absolute top-0 left-0 h-full w-full"></div>
                            <h1 className="text-center text-2xl pt-2 text-[#000000]">Seguros</h1>
                            {/* <img className=" w-full rounded-lg" src={seguros} alt="Seguros" /> */}
                            <HeartIcon className=" text-[#1885b8]" />
                            <div className="absolute bottom-5 p-8 w-full opacity-0 group-hover:opacity-100">
                            <NavLink to='/admin/lista-seguros'><button className=" font-medium leading-4 text-gray-800 bg-white py-3 w-full rounded-md">Lista Seguros</button></NavLink>
                            <NavLink to='/admin/crear-seguro'><button className=" bg-transparent font-medium leading-4 border-2 border-white py-3 w-full mt-2 text-[#000000] rounded-md">Agregar Seguro</button></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className=" relative bg-white rounded-lg">
                        <div className=" relative group ">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-100 via-gray-400 to-opacity-30 group-hover:opacity-20 absolute top-0 left-0 h-full w-full"></div>
                            <h1 className="text-center text-2xl pt-2 text-[#000000]">Usuarios</h1>
                            {/* <img className=" w-full rounded-lg" src={usuarios} alt="Usuarios" /> */}
                            <UserIcon className=" text-[#1885b8]"/>
                            <div className="absolute bottom-5 p-8 w-full opacity-0 group-hover:opacity-100">
                            <NavLink to='/admin/lista-usuarios'><button className=" font-medium leading-4 text-gray-800 bg-white py-3 w-full rounded-md">Lista Usuarios</button></NavLink>
                            <NavLink to='/admin/crear-usuario'><button className=" bg-transparent font-medium leading-4 border-2 border-white py-3 w-full mt-2 text-[#000000] rounded-md">Agregar Usuario</button></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className=" relative bg-white rounded-lg ">
                        <div className=" relative group ">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-100 via-gray-400 to-opacity-30 group-hover:opacity-20 absolute top-0 left-0 h-full w-full"></div>
                            <h1 className="text-center text-2xl pt-2 text-[#000000]">Paquetes</h1>
                            {/* <img className=" w-full rounded-lg" src={paquetes} alt="Paquetes" /> */}
                            <ArchiveIcon className=" text-[#1885b8]" />
                            <div className="absolute bottom-5 p-8 w-full opacity-0 group-hover:opacity-100 text-sm">
                            <NavLink to='/admin/lista-paquetes'><button className=" font-medium leading-4 text-gray-800 bg-white py-3 w-full rounded-md">Lista Paquetes</button></NavLink>
                            <NavLink to='/admin/crear-paquete'><button className=" bg-transparent font-medium leading-4 border-2 border-white py-3 w-full mt-2 text-[#000000] rounded-md">Agregar Paquete</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>);
};