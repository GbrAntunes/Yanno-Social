import styled from 'styled-components'

interface CategoryProps {
  variant: 'orange' | 'purple' | 'teal'
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1340px;
`

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-left: 4.75rem;
`

export const Category = styled.div<CategoryProps>`
  padding: 1.25rem;
  border-radius: 0.625rem;
  width: 19.25rem;
  font-size: 1.125rem;
  display: flex;
  flex-direction: column;

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

  img {
    margin-bottom: 1.25rem;
    width: 3.25rem;
    height: auto;
  }

  h1 {
    margin-bottom: 0.375rem;
    font-size: 1.5rem;
  }

  p {
    flex: 1;
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }

  button {
    padding: 6px 20px;
    border-radius: 50px;
    border: none;
    align-self: start;
  }
`

export const CategoryCall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Inter, sans-serif;
  font-size: 42px;
  max-width: 300px;

  img {
    width: 300px;
    height: auto;
    border-radius: 50px;
  }
`
