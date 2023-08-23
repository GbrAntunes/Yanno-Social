import styled from 'styled-components'

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors['indigo-900']};

  & > main {
    margin: 0 auto;
    max-width: 1340px;
    padding-top: 3.125rem;
    font-family: Poppins, sans-serif;
    color: ${({ theme }) => theme.colors.white};

    & > img {
      margin-bottom: 2.5rem;
    }

    & > div {
      display: flex;
      justify-content: space-between;
    }

    h2 {
      color: ${({ theme }) => theme.colors['orange-500']};
      font-size: 1.25rem;
      font-weight: 700;
    }

    footer {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 3rem;
      padding-bottom: 1.25rem;

      main {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2.875rem;

        h2 {
          margin-bottom: 1.25rem;
        }

        div.links {
          display: flex;
          gap: 1.25rem;
        }

        div.payments {
          display: flex;
          flex-direction: column;
          align-items: center;

          div {
            display: flex;
            gap: 30px;
          }
        }

        div.companies {
          display: flex;
          gap: 4.5rem;

          h2 {
            font-size: 0.875rem;
            margin-bottom: 0.875rem;
          }
        }
      }

      small {
        font-size: 0.75rem;
        font-family: Inter, sans-serif;
      }
    }
  }
`
