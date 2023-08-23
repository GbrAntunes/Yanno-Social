import { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { Basket, Heart, Minus, Plus } from '@phosphor-icons/react'
import { Container } from './styles'

interface ProductBoxProps {
  flavor: string
  capsQuantity: number
  favorited: boolean
  description: string
  fullPrice: number
  discount: number
  productImage: string
}

export function ProductBox({
  flavor,
  capsQuantity,
  favorited,
  description,
  fullPrice,
  discount,
  productImage,
}: ProductBoxProps) {
  const theme = useContext(ThemeContext)
  const [itemQuantity, setItemQuantity] = useState(1)

  return (
    <Container>
      <div>
        <div>
          <span>Sabor carne</span>
          <span>60 Cápsulas</span>
        </div>

        <img src={productImage} alt="" />

        <button>
          <Heart size={24} color="#bbb" />
        </button>
      </div>
      <h1>Suplemento alimentar de ômega 3 para cães</h1>
      <footer>
        <div className="price">
          <div>
            <small>R$1699,00</small>
            <strong>9999,99</strong>
          </div>
          <span>%15</span>
        </div>
        <div className="quantitySelector">
          <button onClick={() => setItemQuantity(itemQuantity - 1)}>
            <Minus size={20} weight="bold" color={theme?.colors['green-600']} />
          </button>
          <span>{itemQuantity}</span>
          <button onClick={() => setItemQuantity(itemQuantity + 1)}>
            <Plus size={20} weight="bold" color={theme?.colors['green-600']} />
          </button>
          <button>
            <Basket size={26} weight="bold" color={theme?.colors.white} />
          </button>
        </div>
      </footer>
    </Container>
  )
}
