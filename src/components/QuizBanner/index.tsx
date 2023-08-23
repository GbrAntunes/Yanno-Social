import petKissing from '../../assets/petKissing.png'
import { ArrowRight } from '@phosphor-icons/react'

import { Container } from './styles'

export function QuizBanner() {
  return (
    <Container>
      <main>
        <h1>Suplementos que fazem toda a diferença!</h1>
        <p>
          Responda nosso quiz e descubra o que seu pet precisa para uma vida
          mais saudável!
        </p>
        <button>
          <div>Responder Quiz</div>
          <span>
            <ArrowRight size={26} color="#fff" />
          </span>
        </button>
      </main>
      <img src={petKissing} alt="Tutora beijando seu pet" />
    </Container>
  )
}
