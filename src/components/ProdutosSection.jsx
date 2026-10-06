const categorias = [
  {
    nome: 'Acessórios',
    descricao:
      'Acessórios para deixar seu veículo mais completo, confortável e personalizado.',
    icone: 'bi bi-car-front',
  },
  {
    nome: 'Freios',
    descricao:
      'Pastilhas, discos e outros componentes para garantir segurança e eficiência na frenagem.',
    icone: 'bi bi-disc',
  },
  {
    nome: 'Óleos',
    descricao:
      'Óleos e lubrificantes para manter o motor protegido e funcionando corretamente.',
    icone: 'bi bi-droplet',
  },
  {
    nome: 'Peças para Motor',
    descricao:
      'Velas, filtros, correias e muito mais para manter o motor do seu veículo funcionando bem.',
    icone: 'bi bi-gear',
  },
]

function ProdutosSection() {
  return (
    <section id="produtos">
      <h2 className="titulo-secao">Nossos Produtos</h2>

      <div className="container">
        <div className="row g-4">
          {categorias.map((categoria) => (
            <div className="col-12 col-md-6 col-lg-3" key={categoria.nome}>
              <article className="card card-produto-bs h-100">
                <div className="card-produto-img-placeholder">
                    <i className={categoria.icone}></i>
                </div>

                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">{categoria.nome}</h3>

                  <p className="card-text">
                    {categoria.descricao}
                  </p>

                  <button
                    className="btn-estoque mt-auto"
                    disabled
                  >
                    Fora de Estoque
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProdutosSection