import { useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import yellowCapsule from '../../assets/yellowCapsule.png'

import { Container, PillSection, SideControl } from './styles'
import { GradientGroup } from '../GradientGroup'

export function CapsuleSection() {
  const theme = useContext(ThemeContext)
  const [carrosselPages] = useState([
    {
      title: 'Um suplemento que vale por todos',
      content: `O A-Z PET é indicado para reforçar o aporte nutricional dos
      nutrientes da fórmula para cães e gatos, em qualquer idade, de todas
      as raças e tamanhos. Esses suplementos são úteis quando há
      necessidade de fornecer nutrientes adicionais para ajudar na
      manutenção da saúde dos pets.`,
      button: {
        label: 'Saiba mais',
        target: '#',
      },
      cards: [
        {
          title: '12 vitaminas',
          content:
            '12 minerais e 9 aminoácidos, além dos nutrientes taurina, luteína e betaclucana.',
        },
        {
          title: 'Cápsula Softgel',
          content: 'com aroma sabor carne',
        },
      ],
      colors: {
        base: theme?.colors['indigo-500'],
        gradients: ['#bc94f8', '#a26ee5', '#9e84d9'],
      },
    },
    {
      title: 'Transforme o pelo do seu pet com um único suplemento',
      content: `O Pelo & Pele é indicado para o fortalecimento e manutenção da estrutura e função da pele e pelos de cães e gatos, em qualquer idade, de todas as raças e tamanhos.`,
      button: {
        label: 'Saiba mais',
        target: '#',
      },
      cards: [
        {
          title: 'Colágeno',
          content: 'levedo de cerveja, ômega 3, vitaminas e minerais',
        },
        {
          title: 'Cápsula Softgel',
          content: 'com aroma sabor carne',
        },
      ],
      colors: {
        base: theme?.colors['teal-400'],
        gradients: ['#4FC9C0', '#4FC9C0', '#00A9A4'],
      },
    },
    {
      title: 'Um aliado nutricional para uma vida plena',
      content: `A fórmula Ômega 3 é indicada para cães e gatos, em qualquer idade e de todas as raças, que necessitem reforçar o aporte nutricional de ômega3 EPA+DHA, considerados essenciais para a saúde dos cães.`,
      button: {
        label: 'Saiba mais',
        target: '#',
      },
      cards: [
        {
          title: '3 óleos essenciais',
          content: 'Óleo de Peixe, óleo de salmão e óleo de krill',
        },
        {
          title: 'Cápsula Softgel',
          content: 'com aroma sabor carne',
        },
      ],
      colors: {
        base: theme?.colors['orange-500'],
        gradients: ['#FE7E00', '#FFB9B9', '#D65500'],
      },
    },
  ])
  const [currentPage, setCurrentPage] = useState(0)

  function handleNextPage() {
    setCurrentPage(
      currentPage === carrosselPages.length - 1 ? 0 : currentPage + 1,
    )
  }

  function handlePreviousPage() {
    setCurrentPage(
      currentPage === 0 ? carrosselPages.length - 1 : currentPage - 1,
    )
  }

  return (
    <Container iconColor={carrosselPages[currentPage].colors.base || '#000'}>
      <GradientGroup colors={carrosselPages[currentPage].colors.gradients} />

      <SideControl onClick={handlePreviousPage}>
        <ArrowLeft
          size={24}
          weight="bold"
          color={carrosselPages[currentPage].colors.base}
        />
      </SideControl>

      <main>
        <section>
          <h1>{carrosselPages[currentPage].title}</h1>
          <p>{carrosselPages[currentPage].content}</p>
          <button>
            <div>{carrosselPages[currentPage].button.label}</div>
            <span>
              <ArrowRight size={24} color="#fff" />
            </span>
          </button>
        </section>

        <PillSection
          textColor={carrosselPages[currentPage].colors.base || '#000'}
        >
          <img src={yellowCapsule} alt="" />

          <div className="bigger-card">
            <h1>{carrosselPages[currentPage].cards[0].title}</h1>
            <p>{carrosselPages[currentPage].cards[0].content}</p>
          </div>
          <div className="smaller-card">
            <h1>{carrosselPages[currentPage].cards[1].title}</h1>
            <p>{carrosselPages[currentPage].cards[1].content}</p>
          </div>
        </PillSection>
      </main>

      <SideControl onClick={handleNextPage}>
        <ArrowRight
          size={24}
          weight="bold"
          color={carrosselPages[currentPage].colors.base}
        />
      </SideControl>
    </Container>
  )
}
