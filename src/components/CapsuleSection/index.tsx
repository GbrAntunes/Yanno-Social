import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import yellowCapsule from '../../assets/yellowCapsule.png'

import { Container, PillSection, SideControl } from './styles'
import { GradientGroup } from '../GradientGroup'

export function CapsuleSection() {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <GradientGroup />

      <SideControl>
        <ArrowLeft
          size={24}
          weight="bold"
          color={theme?.colors['indigo-300']}
        />
      </SideControl>

      <main>
        <section>
          <h1>Um suplemento que vale por todos</h1>
          <p>
            O A-Z PET é indicado para reforçar o aporte nutricional dos
            nutrientes da fórmula para cães e gatos, em qualquer idade, de todas
            as raças e tamanhos. Esses suplementos são úteis quando há
            necessidade de fornecer nutrientes adicionais para ajudar na
            manutenção da saúde dos pets.
          </p>
          <button>
            <div>Saiba mais</div>
            <span>
              <ArrowRight size={24} color="#fff" />
            </span>
          </button>
        </section>

        <PillSection>
          <img src={yellowCapsule} alt="" />

          <div className="bigger-card">
            <h1>12 vitaminas</h1>
            <p>
              12 minerais e 9 aminoácidos, além dos nutrientes taurina, luteína
              e betaclucana.
            </p>
          </div>
          <div className="smaller-card">
            <h1>Cápsula Softgel</h1>
            <p>com aroma sabor carne</p>
          </div>
        </PillSection>
      </main>

      <SideControl>
        <ArrowRight
          size={24}
          weight="bold"
          color={theme?.colors['indigo-300']}
        />
      </SideControl>
    </Container>
  )
}
