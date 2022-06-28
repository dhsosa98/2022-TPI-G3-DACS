import { PlayIcon } from '@heroicons/react/solid'
import Logo from '../../public/icons/android/logo.png'
export default function Registro() {
  return (
    <>
      <div className="border-4 min-h-full w-[30rem] rounded-3xl mt-[80px] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#ffffffcc]">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src={Logo}
              alt="Fantur Logo"
            />
            <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Crea tu cuenta</h2>
            <p className="font-medium mt-2 text-center text-sm text-gray-600">Es rapido, facil, y gratis:)</p>
          </div>
          
          <form className="space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">

                <div className='p-1'>
                <label htmlFor="email-address" className="sr-only">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  autoComplete="given-name"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nombre"
                />
                </div>
             
                <div className='p-1'>
                <label htmlFor="email-address" className="sr-only">
                  Apellido
                </label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Apellido"
                />
                </div>
             
                
                <div className='p-1'>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
                </div>
            
                
                <div className='p-1'>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00adad] hover:bg-[#00adad86] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <PlayIcon className="h-5 w-5 text-[#FFF] group-hover:text-white" aria-hidden="true" />
                </span>
                Registrarte
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
