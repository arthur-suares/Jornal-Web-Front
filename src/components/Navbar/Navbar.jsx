import logo from '../../Images/orbit-logo.png'
import "./Navbar.css"

export function Navbar(){

    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i class="bi bi-search"></i>
                    <input type="texte" placeholder='Pesquise algo'/>
                </div>

                <img src={logo} alt="Logo do Jornal Web" />
                <button>Entrar</button>
            </nav>
        </>
    );
}