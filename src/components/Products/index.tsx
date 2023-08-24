import { useContext, useRef, useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { ProductBox } from '../ProductBox'
import orangeProduct from '../../assets/productOrange.png'
import purpleProduct from '../../assets/productPurple.png'
import tealProduct from '../../assets/productTeal.png'
import { Container, ProductCarousel, SideControl } from './styles'

export function Products() {
  const theme = useContext(ThemeContext)
  const [currentCarouselPage, setCurrentCarouselPage] = useState(0)
  const carousel = useRef<HTMLElement>(null)
  const carouselBullets = useRef<HTMLElement>(null)

  function handleLeftScroll() {
    if (currentCarouselPage >= 0) {
      setCurrentCarouselPage((prevState) => prevState - 1)

      if (carousel.current) {
        carousel.current.scrollLeft -= carousel.current.offsetWidth + 19
      }
    }
  }

  function handleRightScroll() {
    if (currentCarouselPage <= 3) {
      setCurrentCarouselPage((prevState) => prevState + 1)
    }

    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth + 19
    }
  }

  useEffect(() => {}, [currentCarouselPage])

  return (
    <Container>
      <h1>Cuide bem do seu pet com Yanno</h1>

      <ProductCarousel>
        <SideControl onClick={handleLeftScroll}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme?.colors['indigo-500']}
          />
        </SideControl>
        <div ref={carousel}>
          <ProductBox productImage={tealProduct} />
          <ProductBox productImage={orangeProduct} />
          <ProductBox productImage={purpleProduct} />
          <ProductBox productImage={tealProduct} />
          <ProductBox productImage={orangeProduct} />
          <ProductBox productImage={purpleProduct} />
          <ProductBox productImage={tealProduct} />
          <ProductBox productImage={orangeProduct} />
          <ProductBox productImage={purpleProduct} />
          <ProductBox productImage={tealProduct} />
          <ProductBox productImage={orangeProduct} />
          <ProductBox productImage={purpleProduct} />
        </div>
        <SideControl onClick={handleRightScroll}>
          <ArrowRight
            size={24}
            weight="bold"
            color={theme?.colors['indigo-500']}
          />
        </SideControl>
      </ProductCarousel>

      <footer ref={carouselBullets}>
        <div className="active" />
        <div />
        <div />
        <div />
      </footer>
    </Container>
  )
}
