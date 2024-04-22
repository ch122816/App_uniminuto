import './LoginPage.css'
import FirstBar from '../../Components/FirstBar/FirstBar';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/inicio");
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

  

        const user = { email: 'jefferson.herrera@uniminuto.edu.co', password: 'cami1228' };

        if (email === user.email && password === user.password) {
            // // Para guardar el JWT en sessionStorage
            // sessionStorage.setItem('jwt', 'tu_jwt_aqui');

            // // Para recuperar el JWT de sessionStorage
            // const jwt = sessionStorage.getItem('jwt');

            // <NavLink to={}></NavLink> 
            <link rel="Inscription" href="../Inscription/iscription.jsx" />
            setError(false)
            return
        }

        setError(true)

    }

    return (
        
        <section>
            <FirstBar/>

            <form onSubmit={handleSubmit} className="container-f">
                <h1 className='h1'>PRACTICAS PRO</h1>

                <h2 className='h2'>Usuario</h2>

                <input
                    value={email}
                    autoComplete="email"
                    className="login-container"
                    name="email"
                    onSubmit={handleSubmit}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    required
                    type="email" />
                <h2 className='h2'>Contraseña</h2>

                <input
                    value={password}
                    className="login-container"
                    maxLength={250}
                    name="password"
                    onSubmit={handleSubmit}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    type='password'
                    required />
                <br></br>
                <br></br>
                <button className="mybutton" type="submit" onClick={handleClick}> Ingresar </button>
                <div>
                    <br></br>
                    <a className='h3' href="forgot-password.html">Olvidé mi contraseña</a>
                </div>
                <div>
                    <a className='h3' href="user-manual.html">Manual de usuario</a>
                </div>
                <div>
                    <a className='h3' href="video-tutorial.html">Video tutorial</a>
                </div>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
            
        </section>
        
    )
}

