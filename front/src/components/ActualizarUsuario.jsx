import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById, updateUser } from "../services/users";
import FormularioUsuario from "./FormularioUsuario";
import ModalError from "./ModalError";
import ModalExito from "./ModalExito";

export const ActualizarUsuario = (props) => {
  const { id } = useParams();
  const initialValues = {
    firstName: "",
    lastName: "",
    cuit: "",
    email: "",
    roleId: "",
  };
  const [user, setUser] = useState(initialValues);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await getUserById(id);
        setUser(response);
      } catch (error) {
        setError(true);
      }
    };
    getUser();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const { firstName, lastName, cuit, email, roleId } = values;
      console.log(values);
      const response = await updateUser(
        firstName,
        lastName,
        cuit,
        email,
        Number(roleId),
        id
      );
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setErrorForm(true);
    }
  };

  return (
    <>
      {!error ? (
        <FormularioUsuario
          initialValues={user}
          handleSubmit={handleSubmit}
          isEdit={true}
        />
      ) : (
        <h1>No existe este usuario</h1>
      )}
      {success && (
        <ModalExito
          open={success}
          setOpen={setSuccess}
          message={"Usuario actualizado correctamente"}
        />
      )}

      {errorForm && (
        <ModalError
          open={errorForm}
          setOpen={setErrorForm}
          message={{
            title: "Ha ocurrido un error",
            description: "Faltan campos, o ya existen",
          }}
        />
      )}
    </>
  );
};
