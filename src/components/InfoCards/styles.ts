import styled from 'styled-components'

interface CardProps {
  variant: 'orange' | 'purple' | 'teal'
}

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 3.75rem;
  max-width: 1340px;

  display: flex;
  justify-content: space-between;
`

export const Card = styled.div<CardProps>`
  display: flex;
  justify-content: space-between;
  width: 26.875rem;

  border-radius: 0.625rem;
  overflow: hidden;
  font-size: 1.375rem;

  ${({ variant, theme }) => {
    if (variant === 'purple') {
      return `
        background-color: ${theme.colors['indigo-100']};
      `
    }

    if (variant === 'orange') {
      return `
        background-color: ${theme.colors['red-300']};
      `
    }

    if (variant === 'teal') {
      return `
        background-color: ${theme.colors['teal-200']};
      `
    }
  }}

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 1.5rem;
    padding-bottom: 1.25rem;
    padding-top: 1.5rem;

    p {
      flex: 1;
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
    }
  }

  & > img {
    margin-left: 2.75rem;
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
      margin-left: 0.5rem;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 0.75rem;

      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      ${({ variant, theme }) => {
        if (variant === 'purple') {
          return `
        background-color: ${theme.colors['indigo-500']};
      `
        }

        if (variant === 'orange') {
          return `
        background-color: ${theme.colors['orange-500']};
      `
        }

        if (variant === 'teal') {
          return `
        background-color: ${theme.colors['teal-500']};
      `
        }
      }}
    }
  }
`
