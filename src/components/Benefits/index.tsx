import { BenefitsCard, Container } from './styles'

import truckIcon from '../../assets/truck.svg'
import walletIcon from '../../assets/wallet.svg'
import percentageIcon from '../../assets/percentage.svg'
import shieldIcon from '../../assets/shield.svg'

export function Benefits() {
  return (
    <Container>
      <BenefitsCard>
        <img src={truckIcon} alt="ícone de caminhão" />
        <div>
          <strong>Frete grátis</strong>
          <p>para compras acima de R$ 150,00</p>
        </div>
      </BenefitsCard>

      <BenefitsCard>
        <img src={walletIcon} alt="ícone de caminhão" />
        <div>
          <strong>Parcele suas compras</strong>
          <p>parcele em até 5 vezes sem juros</p>
        </div>
      </BenefitsCard>

      <BenefitsCard>
        <img src={percentageIcon} alt="ícone de caminhão" />
        <div>
          <strong>Mais economia</strong>
          <p>Compre os nossos kits</p>
        </div>
      </BenefitsCard>

      <BenefitsCard>
        <img src={shieldIcon} alt="ícone de caminhão" />
        <div>
          <strong>Compra segura</strong>
          <p>Loja com SSL e proteção de dados</p>
        </div>
      </BenefitsCard>
    </Container>
  )
}
