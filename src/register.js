import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [form, setForm] = useState({
        mail: "",
        password: ""
    });

    const registro = async () => {
        await axios.post('http://localhost:3000/register', form);
    }

    const handleRegistro = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }

    return (
        <div className="App">
            <h1>Registrarse</h1>
            <form onSubmit={registro}>
                <label>Correo</label>
                <input onChange={handleRegistro} name='mail' type='email' />
                <label>Contraseña</label>
                <input onChange={handleRegistro} name='password' type='password' />
                <button type='submit'>Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default Register;