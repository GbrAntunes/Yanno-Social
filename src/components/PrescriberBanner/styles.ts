import styled from 'styled-components'
import petHugImage from '../../assets/prescriberBanner.png'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1340px;
  margin-bottom: 5.625rem;
  background: url(${petHugImage});
  border-radius: 10px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};

  main {
    padding: 5.375rem 0 5.75rem 3.125rem;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors['indigo-900']} 0%,
      ${({ theme }) => theme.colors['violet-700']} 24%,
      #0000 100%
    );

    h1 {
      font-size: 2.25rem;
      margin-bottom: 1.25rem;
    }

    p {
      width: 28.125rem;
      font-size: 1.375rem;
      margin-bottom: 2.5rem;
    }
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
      background: ${({ theme }) => theme.colors['indigo-900']};
    }
  }
`
