import { useState } from 'react'

function ContatoSection() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  })

  function formatarTelefone(valor) {
    let telefone = valor.replace(/\D/g, '')
    telefone = telefone.substring(0, 11)

    if (telefone.length > 10) {
      return telefone.replace(
        /^(\d{2})(\d{5})(\d{4}).*/,
        '($1) $2-$3'
      )
    }

    return telefone.replace(
      /^(\d{2})(\d{4})(\d{0,4}).*/,
      '($1) $2-$3'
    )
  }

  function handleChange(event) {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: name === 'telefone' ? formatarTelefone(value) : value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nome = form.nome.trim()
    const email = form.email.trim()
    const telefone = form.telefone.trim()
    const mensagem = form.mensagem.trim()

    if (nome === '') {
      alert('Por favor, preencha o campo Nome.')
      return
    }

    if (nome.length < 3) {
      alert('O nome deve ter pelo menos 3 letras.')
      return
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailValido.test(email)) {
      alert('Por favor, informe um e-mail válido (exemplo: nome@email.com).')
      return
    }

    const telefoneValido = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/

    if (!telefoneValido.test(telefone)) {
      alert('Telefone inválido. Exemplo: (21) 99999-9999')
      return
    }

    if (mensagem.length < 10) {
      alert('A mensagem deve ter pelo menos 10 caracteres.')
      return
    }

    alert(
      'Solicitação enviada com sucesso! Entraremos em contato em breve.'
    )

    setForm({
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
    })
  }

  return (
    <section id="contato">
      <h2 className="titulo-secao">Fale Conosco</h2>

      <div className="contato-wrapper">
        <div className="formulario-contato">
          <h2>Envie uma mensagem</h2>

          <form id="formContato" onSubmit={handleSubmit}>
            <div className="grupo-campo">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                value={form.nome}
                onChange={handleChange}
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(XX) 9 XXXX-XXXX"
                value={form.telefone}
                onChange={handleChange}
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Escreva sua mensagem aqui..."
                value={form.mensagem}
                onChange={handleChange}
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
              <i className="bi bi-instagram"></i> Instagram — @wamoraes
            </a>

            <a
              href="https://web.facebook.com/wamoraesautopecas/"
              className="link-social"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i> Facebook — W.A Moraes Peças
            </a>

            <a
              href="https://wa.me/552127566714"
              className="link-social"
              target="_blank"
              rel="noreferrer"
            >
             <i className="bi bi-whatsapp"></i> WhatsApp — (21) 2756-6714
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContatoSection