import { LockClosedIcon } from '@heroicons/react/solid'
import Logo from '../../public/icons/android/logo.png'
import {Link} from 'react-router-dom'
import {Field, Form, Formik} from 'formik'
import { fetchUser } from '../services/auth'
import { useContext } from 'react'
import { AuthContext } from '../contexts/Auth'
export default function Login() {
  const {login} = useContext(AuthContext)
   const handleSubmit = async (values) => {
   const response = await fetchUser(values.email, values.password)
   login(response.data.access_token)
}
  const initialValues = {email: "", password: ""} 
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <div className="border-4 min-h-full w-[30rem] rounded-3xl mt-[80px] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#ffffffcc]">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src={Logo}
              alt="Fantur Logo"
            />
            <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Ingresa a tu cuenta</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              O{' '}
              <Link to="/registrarse" className="font-medium text-indigo-600 hover:text-indigo-500">
                registrate gratis!
              </Link>
            </p>
          </div>
          <Form>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className='mb-3'>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <Field
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00adad] hover:bg-[#00adad86] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-[#FFF] group-hover:text-white" aria-hidden="true" />
                </span>
                Ingresar
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  )
}
