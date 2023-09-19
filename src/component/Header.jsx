function Header() {
    return (
        <div className="container">
            {/* <button type="button" className="boton" data-bs-toggle="dropdown" aria-expanded="false">
Enviar
</button> */}
            <ul className="ul-menu">
                <li><a class="dropdown-item" href="#">Home</a></li>
                <li><a className="dropdown-item" href="#">Egg</a></li>
                <li><a className="dropdown-item" href="#">Argentina Programa 4.0</a></li>
                <li><a className="dropdown-item" href="#">Codo a Codo 4.0</a></li>
            </ul>
            <h1 className="titulo">Programacion 4.0</h1>
        </div>

    )
}
export default Header
