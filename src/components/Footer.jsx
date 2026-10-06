function Footer() {
  return (
    <footer>
      <div className="footer-conteudo">
        <div className="footer-bloco">
          <h4>W.A Moraes</h4>
          <p>Peças e Acessórios Automotivos</p>
          <p>Qualidade e confiança para o seu veículo.</p>
        </div>

        <div className="footer-bloco">
          <h4>Endereço</h4>
          <address>
            Rua São João Batista, 473
            <br />
            Centro, São João de Meriti/RJ
            <br />
            CEP: 25515-520
          </address>
        </div>

        <div className="footer-bloco">
          <h4>Contato</h4>
          <p>📞 (21) 2756-4682</p>
          <p>📞 (21) 2756-6714</p>
          <p>✉️ contato@wamoraes.com.br</p>
        </div>
      </div>

      <p className="footer-copy">
        © 2026 W.A Moraes Peças e Acessórios Automotivos — Todos os direitos
        reservados.
      </p>
    </footer>
  )
}

export default Footer