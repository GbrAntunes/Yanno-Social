import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  margin: 140px auto;
  max-width: 1340px;
  background: linear-gradient(180deg, #e1e2e6 0%, #dddee3 49.78%, #d1d5d8 100%);
  border-radius: 0.625rem;
  overflow: hidden;

  main {
    padding: 4.0625rem 3.125rem;
    color: ${(props) => props.theme.colors['indigo-900']};

    h1 {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
    }

    button {
      display: flex;
      align-items: center;

      border: none;
      border-radius: 1.25rem;
      padding: 0.25rem;
      padding-left: 26px;

      font-family: Poppins, sans-serif;
      color: ${(props) => props.theme.colors['indigo-900']};

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 0.75rem;

        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;
        background: ${(props) => props.theme.colors['blue-500']};
      }
    }
  }

  img {
    height: 380px;
    width: auto;
  }
`
