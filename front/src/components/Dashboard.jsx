import React from "react";
import hoteles from "../../public/images/hotels/3.jpg"
import eventos from "../../public/images/shows/5.jpg"
import pasajes from "../../public/images/pasajes.jpg"
import seguros from "../../public/images/seguros.jpg"
import paquetes from "../../public/images/paquetes.jpg"
import usuarios from "../../public/images/usuarios.jpg"
import { NavLink } from "react-router-dom";

export const Dashboard = () => {
    return (
        <>
        <div className=" 2xl:container 2xl:mx-auto mb-10">
            <div className="lg:px-20 md:px-6 px-4">
                <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12">
                    <div className=" relative ">
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className="w-full rounded-lg" src={hoteles} alt="Hotel" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <NavLink to='/admin/lista-hoteles'><button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Lista Hoteles</button></NavLink>
                                <NavLink to='/admin/crear-hotel'><button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Agregar Hoteles</button></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className=" relative">
                        <div className=" relative group ">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className="w-full rounded-lg" src={eventos} alt="Evento" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                            <NavLink to='/admin/lista-pasajes'><button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Lista Pasajes</button></NavLink>
                            <NavLink to='/admin/crear-pasaje'><button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Agregar Pasajes</button></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className=" relative ">
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full rounded-lg" src={pasajes} alt="Pasajes" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <NavLink to='/admin/lista-pasajes'><button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Lista Pasajes</button></NavLink>
                                <NavLink to='/admin/crear-pasaje'><button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Agregar Pasajes</button></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className=" relative ">
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full rounded-lg" src={seguros} alt="Seguros" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                            <NavLink to='/admin/lista-seguros'><button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Lista Seguros</button></NavLink>
                            <NavLink to='/admin/crear-seguro'><button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Agregar Seguro</button></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className=" relative ">
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full rounded-lg" src={usuarios} alt="Usuarios" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                            <NavLink to='/admin/lista-usuarios'><button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Lista Usuarios</button></NavLink>
                            <NavLink to='/admin/crear-usuario'><button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Agregar Usuario</button></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className=" relative ">
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full rounded-lg" src={paquetes} alt="Paquetes" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                            <NavLink to='/admin/lista-paquetes'><button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Lista Paquetes</button></NavLink>
                            <NavLink to='/admin/crear-paquete'><button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Agregar Paquete</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>);
};