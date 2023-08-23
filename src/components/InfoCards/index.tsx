import orangeDog from '../../assets/orange-dog.png'
import blueDog from '../../assets/blue-dog.png'
import tealDog from '../../assets/teal-dog.png'

import { ArrowRight } from '@phosphor-icons/react'

import { Card, Container } from './styles'

export function InfoCards() {
  return (
    <Container>
      <Card variant="orange">
        <div>
          <p>Pouca disposição?</p>

          <button>
            <div>Saiba mais</div>
            <span>
              <ArrowRight size={24} color="#fff" />
            </span>
          </button>
        </div>

        <img src={orangeDog} alt="" />
      </Card>

      <Card variant="purple">
        <div>
          <p>Baixa imunidade?</p>

          <button>
            <div>Saiba mais</div>
            <span>
              <ArrowRight size={24} color="#fff" />
            </span>
          </button>
        </div>

        <img src={blueDog} alt="" />
      </Card>

      <Card variant="teal">
        <div>
          <p>Alergias e queda de pelos?</p>

          <button>
            <div>Saiba mais</div>
            <span>
              <ArrowRight size={24} color="#fff" />
            </span>
          </button>
        </div>

        <img src={tealDog} alt="" />
      </Card>
    </Container>
  )
}
