function Navbar() {
  return (
    <div className="cabecalho-fixo">
      <header>
        <div className="header-topo">
          <a href="#inicio" className="logo">
            <img
              src="/imagens/W_AMORAESLOGO.png"
              alt="W.A Moraes Peças e Acessórios Automotivos"
              className="logo-icone"
            />

            <div className="logo-texto">
              <span>W.A Moraes</span>
              <small>Peças e Acessórios Automotivos</small>
            </div>
          </a>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar