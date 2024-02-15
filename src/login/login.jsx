import './login.css'
import '../background/background.jsx'
import { useState} from 'react'
import { NavLink } from 'react-router-dom'

// const LoginForm = () => {
    export function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] =useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Email:', email)
        console.log('Password:', password)

        const user = { email: 'jefferson.herrera@uniminuto.edu.co', password: 'cami1228' };

        if (email === user.email && password === user.password){

            // <NavLink to={}></NavLink> 
            <link rel="Inscription" href="../Inscription/iscription.jsx" />
            setError(false)
            return 
        }

            setError(true)

    }

    return (
    <section>
        <form onSubmit={handleSubmit} className="container-f">
            <h1 className='h1'>PRACTICAS PRO</h1>

            <h2 className='h2'>Usuario</h2>

            <input
                value={email}
                autoComplete="email"
                className="login-container"
                name="email"
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
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type='password'
                required />
            <br></br>
            <br></br>
            <button className="mybutton" type="submit"> Ingresar </button>
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

export default LoginForm;