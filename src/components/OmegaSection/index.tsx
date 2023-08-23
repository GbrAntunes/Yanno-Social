import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ArrowRight } from '@phosphor-icons/react'
import { Banner, Container, PillButton } from './styles'

export function OmegaSection() {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <Banner className="purple">
        <h1>Ômega 3</h1>
        <p>
          O ômega 3 é um produto canino com uma fórmula inovadora e exclusiva,
          desenvolvida para promover a saúde dos seus cães.
        </p>
        <PillButton>
          <div>Saiba mais</div>
          <span>
            <ArrowRight size={28} color={theme?.colors.white} />
          </span>
        </PillButton>
      </Banner>

      <Banner className="teal">
        <h1>Ômega 3</h1>
        <p>
          O ômega 3 é um produto canino com uma fórmula inovadora e exclusiva,
          desenvolvida para promover a saúde dos seus cães.
        </p>
        <PillButton color={theme?.colors['teal-400']}>
          <div>Saiba mais</div>
          <span>
            <ArrowRight size={28} color={theme?.colors.white} />
          </span>
        </PillButton>
      </Banner>
    </Container>
  )
}
