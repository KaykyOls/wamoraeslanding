import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <header>
        <div className="header-topo">
          <NavLink to="/" className="logo">
            <img
              src="public/imagens/W_AMORAESLOGO.png"
              alt="W.A Moraes Peças e Acessórios Automotivos"
              className="logo-icone"
            />

            <div className="logo-texto">
              <span>W.A Moraes</span>
              <small>Peças e Acessórios Automotivos</small>
            </div>
          </NavLink>
        </div>
      </header>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Início</NavLink>
          </li>
          <li>
            <NavLink to="/sobre">Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/produtos">Produtos</NavLink>
          </li>
          <li>
            <NavLink to="/novidades">Novidades</NavLink>
          </li>
          <li>
            <NavLink to="/contato">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar