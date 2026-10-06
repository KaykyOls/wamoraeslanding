function ContatoSection() {
  return (
    <section id="contato">
      <h2 className="titulo-secao">Fale Conosco</h2>

      <div className="contato-wrapper">
        <div className="formulario-contato">
          <h2>Envie uma mensagem</h2>

          <form id="formContato">
            <div className="grupo-campo">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(XX) 9 XXXX-XXXX"
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar">
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="info-contato">
          <h2>Informações</h2>

          <p>
            <strong>Endereço:</strong>
            <br />
            Rua São João Batista, 473
            <br />
            Centro, São João de Meriti/RJ
            <br />
            CEP: 25515-520
          </p>

          <p>
            <strong>Telefone:</strong>
            <br />
            (21) 2756-4682
            <br />
            (21) 2756-6714
          </p>

          <p>
            <strong>E-mail:</strong>
            <br />
            contato@wamoraes.com.br
          </p>

          <p>
            <strong>Horário de atendimento:</strong>
            <br />
            Segunda a Sexta: 8h às 18h
            <br />
            Sábado: 8h às 13h
          </p>

          <div className="redes-sociais">
            <h3>Nossas Redes Sociais</h3>

            <a
              href="https://www.instagram.com/moraeswa/"
              className="link-social"
              target="_blank"
              rel="noreferrer"
            >
              📷 Instagram — @wamoraes
            </a>

            <a
              href="https://web.facebook.com/wamoraesautopecas/"
              className="link-social"
              target="_blank"
              rel="noreferrer"
            >
              📘 Facebook — W.A Moraes Peças
            </a>

            <a
              href="https://wa.me/552127566714"
              className="link-social"
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp — (21) 2756-6714
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContatoSection