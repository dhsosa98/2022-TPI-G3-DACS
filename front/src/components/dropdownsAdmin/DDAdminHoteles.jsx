import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon, OfficeBuildingIcon } from "@heroicons/react/solid";

const opcionesHoteles = [
    {
      name: "Ver Hoteles",
      description: "Ver lista hoteles.",
      href: "/admin/lista-hoteles",
      icon: OfficeBuildingIcon
    },
    {
      name: "Agregar Hotel",
      description: "Agregue un nuevo hotel",
      href: "/admin/crear-hotel",
      icon: OfficeBuildingIcon
    }];

    function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
    }
export const DDAdminHoteles = () =>{
return (
<>
<Popover className="relative">
                  {({ open, close }) => (
                    <>
                      <Popover.Button
                        
                        className="group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 ">
                        <span>Hoteles</span>
                        <ChevronDownIcon
                          className="h-5 w-5 group-hover:text-[#b60000]"
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
                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-16 mt-3 px-2 w-screen max-w-[280px] sm:px-0">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {opcionesHoteles.map((item) => (
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
                </>
              )}