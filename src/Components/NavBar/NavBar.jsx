import './NavBar.css';
// import './background.css'
import { SearchBar } from '../SearchBar/SearchBar';
import { User } from '../User/User';
export function NavBar(){
    const logoPath = "https://www.uniminuto.edu/sites/default/files/2023-02/uniminuto%20blanco_2.png";
    return (
        <header>
        <nav className='nav-parent'>
            <ul className='nav-form'>
            
                <img src={logoPath} className='logoNav'></img>
                <SearchBar name="Busqueda"/>
                <User name="pruebas" username="instagram"/>
            </ul>
            



        </nav>
    </header>);
}