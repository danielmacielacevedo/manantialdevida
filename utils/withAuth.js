import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import esMiembroAutorizado from "daniel/pages/api/MiembrosAutorizados";
import { UserContext } from "daniel/pages/UserProvider";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const { user } = useContext(UserContext);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
      const checkAuthorization = async () => {
        // Verificar si el usuario ha iniciado sesión
        if (!user) {
          // Redireccionar al usuario a la página de inicio de sesión
          router.push("/miembros/entrar");
        } else {
          // Verificar si el usuario está autorizado
          const authorized = await esMiembroAutorizado(user.id);
          setIsAuthorized(authorized);
          if (!authorized) {
            // Redireccionar al usuario a una página de acceso no autorizado
            router.replace("/acceso-no-autorizado");
          }
        }
      };

      checkAuthorization();
    }, [user, router]);

    // Renderizar el componente envuelto si el usuario está autorizado
    return isAuthorized ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default withAuth;
