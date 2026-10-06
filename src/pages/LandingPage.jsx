import Hero from '../components/Hero'
import Apresentacao from '../components/Apresentacao'
import Destaques from '../components/Destaques'
import ProdutosSection from '../components/ProdutosSection'

function LandingPage() {
  return (
    <main>
      <Hero />
      <Apresentacao />
      <Destaques />
      <ProdutosSection />
    </main>
  )
}

export default LandingPage