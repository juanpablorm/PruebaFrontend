import { useEffect, useState } from "react";

function Page() {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setAuthenticated(true);
      }
    }, []);

    return (
      <div>
        <h1>Página Protegida</h1>
        {authenticated && <p>Bienvenido, has iniciado sesión con éxito.</p> }
      </div>
    );
  }
  
  export default Page;