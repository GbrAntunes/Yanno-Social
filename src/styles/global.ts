import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font: 400 1rem Inter, sans-serif;
  }

  button {
    cursor: pointer;
    background: white;
    transition: 0.2s background;

    &:hover:enabled {
      background: ${(props) => props.theme.colors['gray-500']};
    }

    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  }
`
