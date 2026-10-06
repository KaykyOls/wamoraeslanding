const categorias = [
  {
    nome: 'Acessórios',
    descricao:
      'Acessórios para deixar seu veículo mais completo, confortável e personalizado.',
    icone: '🚗',
  },
  {
    nome: 'Freios',
    descricao:
      'Pastilhas, discos e outros componentes para garantir segurança e eficiência na frenagem.',
    icone: '🛞',
  },
  {
    nome: 'Óleos',
    descricao:
      'Óleos e lubrificantes para manter o motor protegido e funcionando corretamente.',
    icone: '🛢️',
  },
  {
    nome: 'Peças para Motor',
    descricao:
      'Velas, filtros, correias e muito mais para manter o motor do seu veículo funcionando bem.',
    icone: '⚙️',
  },
]

function ProdutosSection() {
  return (
    <section id="produtos">
      <h2 className="titulo-secao">Nossos Produtos</h2>

      <div className="produtos-grid">
        {categorias.map((categoria) => (
          <article className="card-produto" key={categoria.nome}>
            <div className="card-produto-img-placeholder">
              {categoria.icone}
            </div>

            <div className="card-produto-info">
              <h3>{categoria.nome}</h3>

              <p>{categoria.descricao}</p>

              <button className="btn-amarelo" disabled>
                Fora de Estoque
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProdutosSection