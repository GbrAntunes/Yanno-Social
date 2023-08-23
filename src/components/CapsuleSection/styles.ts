import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 6.75rem;
  max-width: 1340px;
  padding: 1.75rem 5rem;
  border-radius: 1.25rem;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  gap: 2rem;

  main {
    display: flex;

    section {
      h1 {
        font-size: 2.375rem;
        font-weight: 700;
        margin-bottom: 1.25rem;
        margin-top: 1.875rem;
      }

      p {
        font-size: 1.125rem;
        font-weight: 500;
        margin-bottom: 2.75rem;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: space-between;

        border: none;
        border-radius: 20px;
        padding: 0.25rem;

        font-family: Inter, sans-serif;
        font-size: 1rem;
        color: ${(props) => props.theme.colors['indigo-900']};

        div {
          margin-left: 2rem;
        }

        span {
          display: flex;
          align-items: center;
          justify-content: center;

          margin-left: 0.75rem;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          background: ${(props) => props.theme.colors['indigo-500']};
        }
      }
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
  background: ${(props) => props.theme.colors.white};
`

export const PillSection = styled.div`
  display: flex;
  margin-left: 5rem;
  gap: 2rem;
  position: relative;

  img {
    position: absolute;
    left: 25%;
    top: 10%;
  }

  div {
    border-radius: 0.625rem;
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors['indigo-500']};
    padding: 1.25rem;

    h1 {
      font-weight: 500;
      font-size: 2rem;
    }
  }

  .bigger-card {
    width: 14.375rem;
    height: 12.625rem;
    align-self: end;
  }

  .smaller-card {
    width: 12.5rem;
    height: 10.75rem;
  }
`
