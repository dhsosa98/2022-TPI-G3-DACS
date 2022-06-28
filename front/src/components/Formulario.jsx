export default function Formu() {
    return (
      <>
        <div className="mt-10 sm:mt-0">
            <div className="mt-5 md:mt-0 md:col-span-2 ">
              <form action="#" method="POST" >
                <div className="shadow overflow-hidden sm:rounded-lg ">
                  <div className="px-4 py-5 bg-[#ffffffd8] sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Nombre
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Apellido
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      
  
                      <div className="col-span-6">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                          Mensaje
                        </label>
                       
                        <textarea
                          type="about"
                          name="about"
                          id="about"
                          autoComplete="street-address"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        />
                      </div>
  
                     
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-[#ffffffd8] text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

  
     
      </>
    )
  }
  