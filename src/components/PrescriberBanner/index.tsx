import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ArrowRight } from '@phosphor-icons/react'
import { Container } from './styles'

export function PrescriberBanner() {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <main>
        <h1>Prescreva produtos Yanno</h1>
        <p>
          Sendo um prescritor, você tem descontos exclusivos nos suplementos
          Yanno
        </p>
        <button>
          <div>Saiba mais</div>
          <span>
            <ArrowRight size={28} color={theme?.colors.white} />
          </span>
        </button>
      </main>
    </Container>
  )
}
