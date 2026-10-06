import Hero from '../components/Hero'
import Apresentacao from '../components/Apresentacao'
import Destaques from '../components/Destaques'
import ProdutosSection from '../components/ProdutosSection'
import ContatoSection from '../components/ContatoSection'

function LandingPage() {
  return (
    <main id="inicio">
      <Hero />
      <Apresentacao />
      <Destaques />
      <ProdutosSection />
      <ContatoSection />
    </main>
  )
}

export default LandingPage