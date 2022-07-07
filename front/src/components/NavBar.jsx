import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Logo from "../../public/icons/android/logo.png";
import { Link, NavLink } from "react-router-dom";
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
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import ModalCerrarSesion from "./ModalCerrarSesion";
import { useState } from "react";

const resources = [
  {
    name: "Hoteles",
    description: "Vea los hoteles disponibles.",
    href: "/hoteles",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Eventos",
    description: "Vea los eventos disponibles.",
    href: "/eventos",
    icon: CalendarIcon,
  },
  {
    name: "Medios de transporte",
    description: "Vea las formas de viaje disponibles.",
    href: "/transportes",
    icon: TruckIcon,
  },
  {
    name: "Paquetes",
    description: "Vea los paquetes disponibles.",
    href: "/paquetes",
    icon: ArchiveIcon,
  },
  {
    name: "Seguros de viaje",
    description: "Vea los seguros disponibles.",
    href: "/seguros",
    icon: HeartIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const { auth, logout, isAdmin } = useContext(AuthContext);
  return (
    <Popover className="relative bg-[#ffffff]">
      {({ open, close }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {isOpen && <ModalCerrarSesion open={isOpen} setOpen={setIsOpen}/>}
            <div className="flex justify-between items-center border-gray-100 py-2 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/">
                  <span className="sr-only">Fantur</span>
                  <img className="h-12 w-[120px]" src={Logo} alt="" />
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Abrir Menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <NavLink
                  to="/"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Inicio
                </NavLink>
                <NavLink
                  to="/quienesSomos"
                  activeStyle={{ color: "#e5463f", textDecoration: "none" }}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Quienes somos?
                </NavLink>
                <NavLink
                  to="/contacto"
                  activeStyle={{ color: "#e5463f", textDecoration: "none" }}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Contacto
                </NavLink>

                <Popover className="relative">
                  {({ open, close }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 "
                        )}
                      >
                        <span>Informacion</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-500"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-16 mt-3 px-2 w-screen max-w-sm sm:px-0">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <NavLink
                                  onClick={() => close()}
                                  activeStyle={{
                                    backgroundColor: "#0ed4d4f9",
                                    textDecoration: "none",
                                  }}
                                  key={item.name}
                                  to={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-[#00ffff41]"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-indigo-600 "
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4 ">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {!auth ? (
                  <>
                <NavLink
                  activeStyle={{ color: "#e5463f", textDecoration: "none" }}
                  to="/iniciarsesion"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Ingresar
                </NavLink>
                <NavLink
                  activeStyle={{
                    backgroundColor: "#e5463f",
                    textDecoration: "none",
                  }}
                  to="/registrarse"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86]"
                >
                  Registrarse
                </NavLink></>) : (
                  <>
                  {isAdmin && <NavLink
   
                  to="/admin"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-[#000000] hover:text-white hover:bg-[#00adad86]"
                >
                  Vista Admininstrador
                </NavLink>}
                  <button onClick={()=>{
                     setIsOpen(true)
                  }} 
                    
                    
                    className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#7a3e3e] hover:bg-[#a05252]">
                    Cerrar Sesion
                  </button>
                  </>)}
              </div>
            </div>
          </div>
         
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-40 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-12 w-auto"
                        src={Logo}
                        alt="Fantur Logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <NavLink
                      onClick={() => close()}
                      activeStyle={{ color: "#e5463f", textDecoration: "none" }}
                      to="/quienessomos"
                      className="text-base font-medium text-gray-900 hover:text-[#009999]"
                    >
                      Quienes Somos?
                    </NavLink>

                    <NavLink
                      onClick={() => close()}
                      activeStyle={{ color: "#e5463f", textDecoration: "none" }}
                      to="/contacto"
                      className="text-base font-medium text-gray-900 hover:text-[#009999]"
                    >
                      Contacto
                    </NavLink>
                    {resources.map((item) => (
                      <NavLink
                        onClick={() => close()}
                        activeStyle={{
                          color: "#e5463f",
                          textDecoration: "none",
                        }}
                        key={item.name}
                        to={item.href}
                        className="-m-3 p-3 flex items-start rounded-lg hover:text-[#009999]"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  {!auth ? (
                  <div>
                    <NavLink
                      onClick={() => close()}
                      activeStyle={{
                        backgroundColor: "#e5463f",
                        textDecoration: "none",
                      }}
                      to="/iniciarsesion"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86]"
                    >
                      Ingresar
                    </NavLink>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      No tienes cuenta?{" "}
                      <NavLink
                        onClick={() => close()}
                        activeStyle={{
                          color: "#e5463f",
                          textDecoration: "none",
                        }}
                        to="/registrarse"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Registrarse
                      </NavLink>
                    </p>
                  </div>) : (
                      <button onClick={()=>{logout()}} className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86]">
                        Cerrar Sesion
                      </button>
                      )}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
