import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { ProductBox } from '../ProductBox'
import orangeProduct from '../../assets/productOrange.png'
import purpleProduct from '../../assets/productPurple.png'
import tealProduct from '../../assets/productTeal.png'
import { Container, ProductCarrousel, SideControl } from './styles'

export function Products() {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <h1>Cuide bem do seu pet com Yanno</h1>

      <ProductCarrousel>
        <SideControl>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme?.colors['indigo-500']}
          />
        </SideControl>
        <div>
          <ProductBox productImage={tealProduct} />
          <ProductBox productImage={orangeProduct} />
          <ProductBox productImage={purpleProduct} />
        </div>
        <SideControl>
          <ArrowRight
            size={24}
            weight="bold"
            color={theme?.colors['indigo-500']}
          />
        </SideControl>
      </ProductCarrousel>

      <footer>
        <div className="active" />
        <div />
        <div />
        <div />
      </footer>
    </Container>
  )
}
