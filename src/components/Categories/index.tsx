import {
  CategoriesContainer,
  Category,
  CategoryCall,
  Container,
} from './styles'

import orangePill from '../../assets/orange-pill.svg'
import purplePill from '../../assets/purple-pill.svg'
import cyanPill from '../../assets/cyan-pill.svg'
import pawnShake from '../../assets/pawnShake.png'

export function Categories() {
  return (
    <Container>
      <CategoryCall>
        <p>
          O que seu <strong>pet</strong> precisa
        </p>
        <img src={pawnShake} alt="" />
      </CategoryCall>

      <CategoriesContainer>
        <Category variant="orange">
          <img src={orangePill} alt="" />
          <h1>Ômega 3</h1>
          <p>Previne doenças e melhora a disposição do seu pet.</p>
          <button>Confira</button>
        </Category>
        <Category variant="purple">
          <img src={purplePill} alt="" />
          <h1>AZ PET</h1>
          <p>Todos os nutrientes essenciais diários para a saúde do seu pet.</p>
          <button>Confira</button>
        </Category>
        <Category variant="teal">
          <img src={cyanPill} alt="" />
          <h1>Pelo & Pele</h1>
          <p>Especialmente para fortalecer a pele e os pelos do seu pet.</p>
          <button>Confira</button>
        </Category>
      </CategoriesContainer>
    </Container>
  )
}
