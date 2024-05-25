import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const inicioSesion = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', form, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data.token) {
        console.log("Hola1");
        localStorage.setItem('token', response.data.token);
        window.location.href = '/protected';
      } else {
        console.log(response.data.message);
        console.log("Hola");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleInicioSesion = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className="App">
      <h1>Inicio de Sesión</h1>
      <form onSubmit={inicioSesion}>
        <label>Correo</label>
        <input onChange={handleInicioSesion} name='email' type='email'/>
        <label>Contraseña</label>
        <input onChange={handleInicioSesion} name='password' type='password'/>
        <button type='submit'>Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;