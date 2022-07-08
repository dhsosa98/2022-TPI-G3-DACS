import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteShow, getShows } from "../services/shows";
import {useSelector} from "react-redux";
import Pagination from "./Pagination";
import ModalConfirmar from "./ModalesConfirmacionBorrar/ModalConfirmarBorrarEvento";

export const ShowTable = (props) => {
  const [shows, setShows] = useState([]);
  const [cantElements, setCantElements] = useState(0);
  const {page, size} = useSelector(state => state.pagination);
  const [eliminar, setEliminar] = useState();
  const [id, setId] = useState();

  const fetchShows = async () => {
    const response = await getShows(page, size);
    setShows(response.rows);
    setCantElements(response.count);

  };

  useEffect(() => {
    fetchShows();
  }, [page, size]);
  return (
    <section className=" flex-grow bg-[#ffffffcc] text-black pb-10">
      {eliminar && <ModalConfirmar id={id} open={eliminar} setOpen={setEliminar} message='evento'/>}
      <div className="container p-2 mx-auto sm:p-4 text-gray-900">
        <div className="whitespace-nowrap flex mb-2 mt-6 items-center">
          <Link to={"/admin"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline hover:bg-[#059090] hover:text-white rounded-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </Link>
          <h2 className="text-2xl font-semibold leading-tight inline text-center ml-2">
            Shows
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left text-white whitespace-nowrap">
            <thead>
              <tr className="bg-[#059090]">
                <th className="p-3">Nombre</th>
                <th className="p-3">Fecha del Evento</th>
                <th className="p-3">Asiento</th>
                <th className="p-3">Monto</th>
                <th className="p-3">Editar</th>
                <th className="p-3">Eliminar</th>
              </tr>
            </thead>
            <tbody className="border-b bg-[#ffffffcc] border-gray-400 text-black">
              {shows.map((show) => (
                <tr key={show.id}>
                  <td className="px-3 py-2">{show.name}</td>
                  <td className="px-3 py-2">{show.dateShow}</td>
                  <td className="px-3 py-2">{show.seat}</td>
                  <td className="px-3 py-2">{show.amount}</td>
                  <td className="px-3 py-2">
                    <Link to={"/admin/editar-evento/" + show.id}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </Link>
                  </td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() => {setEliminar(true);setId(show.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={"/admin/crear-evento"}>
            <button className=" w-full p-2 flex items-center justify-center mt-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-[#00adad] hover:bg-[#00adad86]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              Nuevo Evento
            </button>
          </Link>
        </div>
        <Pagination cantItems={cantElements} />
      </div>
    </section>
  );
};
