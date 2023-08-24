import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1388px;
  margin-bottom: 2.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1.25rem;
  }

  & > footer {
    display: flex;
    gap: 0.75rem;

    div {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors['gray-500']};
      cursor: pointer;
    }

    .active {
      background: ${({ theme }) => theme.colors['gray-100']};
      cursor: default;
    }
  }
`

export const SideControl = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;
  border-radius: 20px;
  padding: 0.25rem;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors['violet-50']};
`

export const ProductCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  margin-bottom: 0.75rem;

  & > div {
    display: flex;
    gap: 1.25rem;
    max-width: 1217px;

    scroll-behavior: smooth;
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
