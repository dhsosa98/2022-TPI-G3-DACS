import { PlayIcon } from "@heroicons/react/solid";
import Logo from "../../public/icons/android/logo.png";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { registerUser } from "../services/auth";
import { useState } from "react";
import * as yup from "yup";

export default function Registro() {
  const [error, setError] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    cuit: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values) => {
    try {
      const response = await registerUser(
        values.firstName,
        values.lastName,
        values.cuit,
        values.email,
        values.password
      );
      if (response.status === 201) {
        setConfirm("Usuario registrado exitosamente");
        return;
      }
    } catch (error) {
      if (error.response.status === 409) {
        setError("El usuario ya existe");
        return;
      }
    }
  };

  const SignUpSchema = yup.object().shape({
    cuit: yup
      .string()
      .min(11, "CUIT debe tener 11 digitos")
      .required("CUIT es requerido"),
    email: yup.string().required("Correo requerido"),
    password: yup
      .string()
      .min(6, "La contraseña debe tener almenos 6 caracteres")
      .required("Contraseña requerida"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Repita la contraseña"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignUpSchema}
      >
        {({ errors, touched }) => (
          <div className="border-4 min-h-full w-[30rem] rounded-3xl mt-[80px] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#ffffffcc]">
            <div className="max-w-md w-full space-y-8">
              <div>
                <img
                  className="mx-auto h-20 w-auto"
                  src={Logo}
                  alt="Fantur Logo"
                />
                <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
                  Crea tu cuenta
                </h2>
                <p className="font-medium mt-2 text-center text-sm text-gray-600">
                  Es rapido, facil, y gratis:)
                </p>
              </div>

              <Form className="space-y-6" action="#" method="POST">
                {error && <p className=" text-center text-red-600">{error}</p>}
                {confirm && <p className=" text-center text-green-600">{confirm}</p>}
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="p-1">
                    <label htmlFor="email-address" className="sr-only">
                      Nombre
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-firstname"
                      required
                      className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Nombre"
                    />
                  </div>

                  <div className="p-1">
                    <label htmlFor="email-address" className="sr-only">
                      Apellido
                    </label>
                    <Field
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="given-lastname"
                      required
                      className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Apellido"
                    />
                  </div>

                  <div className="p-1">
                    <label htmlFor="email-address" className="sr-only">
                      CUIT
                    </label>
                    <Field
                      id="cuit"
                      name="cuit"
                      type="text"
                      autoComplete="given-cuit"
                      required
                      className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
                        touched.cuit && errors.cuit
                          ? "border-red-600"
                          : "border-gray-300"
                      } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                      placeholder="CUIT"
                    />
                    <ErrorMessage
                      name="cuit"
                      render={(msg) => <p className=" text-red-500">{msg}</p>}
                    />
                  </div>

                  <div className="p-1">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <Field
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
                        touched.email && errors.email
                          ? "border-red-600"
                          : "border-gray-300"
                      } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      render={(msg) => <p className=" text-red-500">{msg}</p>}
                    />
                  </div>

                  <div className="p-1">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
                        touched.password && errors.password
                          ? "border-red-600"
                          : "border-gray-300"
                      } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                      placeholder="Contraseña"
                    />
                    <ErrorMessage
                      name="password"
                      render={(msg) => <p className=" text-red-500">{msg}</p>}
                    />
                  </div>

                  <div className="p-1">
                    <label htmlFor="password" className="sr-only">
                      Confirme la contraseña
                    </label>
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="current-password"
                      required
                      className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
                        touched.password && errors.password
                          ? "border-red-600"
                          : "border-gray-300"
                      } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                      placeholder="Repita Contraseña"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      render={(msg) => <p className=" text-red-500">{msg}</p>}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00adad] hover:bg-[#00adad86] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <PlayIcon
                        className="h-5 w-5 text-[#FFF] group-hover:text-white"
                        aria-hidden="true"
                      />
                    </span>
                    Registrarte
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
