import { Banner, Container, Footer } from './styles'

import dogRunning from '../../assets/dog-running.png'
import productKit from '../../assets/product-kit.png'

export function Header() {
  return (
    <Container>
      <Banner>
        <div>
          <h1>Mais Histórias para você viver perto do seu pet.</h1>
          <button>Compre agora</button>
        </div>

        <div className="images">
          <img src={dogRunning} alt="Cachorro correndo em um gramado" />
          <img src={productKit} alt="Kit de produtos Yanno" />
        </div>
      </Banner>

      <Footer>
        <div className="bullets">
          <div className="active" />
          <div />
          <div />
          <div />
        </div>
      </Footer>
    </Container>
  )
}
