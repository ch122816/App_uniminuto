import { FiHexagon } from "react-icons/fi";
import './User.css';
export function User ({username, name, email}){

    return(
          

    
        <article className='md-followCard' >
        <section className='md-followCard-header'>
        
            <img
            className='md-followCard-avatar'
            alt={username}
            src='src\assets\Gato-Singapura.jpg'></img>
            
            <div className='md-followCard-containerText'>
                
                <strong className='md-followCard-userName'>
                    {name}
                </strong>
                <span className='md-followCard-email'>
                {email}
                </span>
            </div>
            <aside >
                <button >
                <FiHexagon />
                </button>
            </aside> 
        </section>
         
        </article>
        
    )
}