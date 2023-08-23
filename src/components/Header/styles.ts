import styled from 'styled-components'

export const Container = styled.header`
  background: ${(props) => props.theme.colors['orange-500']};
`

export const Banner = styled.main`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1340px;

  h1 {
    font: Inter, sans-serif;
    font-size: 2.375rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors['indigo-900']};
    margin-bottom: 32px;
  }

  button {
    padding: 16px 39px;
    border: none;
    border-radius: 32px;
    font-size: 1.125rem;
  }

  .images {
    display: flex;
    align-items: center;

    img + img {
      height: 683px;
      width: auto;
      margin-left: -300px;
    }

    img {
      height: 300px;
      width: auto;
    }
  }
`

export const Footer = styled.footer`
  background: ${(props) => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;

  .bullets {
    display: flex;
    gap: 14px;
    padding: 16px 0;

    div {
      cursor: pointer;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background: ${(props) => props.theme.colors['red-300']};

      &.active {
        background: ${(props) => props.theme.colors['orange-500']};
      }
    }
  }
`
