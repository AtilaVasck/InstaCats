import './header.css'
import CatIconLogo from '/img-logo.png'

const header = () => {
    return ( 
    <header className='meuHeader'>
    <img src={CatIconLogo} alt="catLogo" className='img-logo' /> 
        <nav>
                <a >LOGIN</a>
                <a >REGISTRAR</a>
        </nav>
    </header>
    )
}

export default header;