import styled from 'styled-components'
import purpleBannerImage from '../../assets/banner-purple-dogs.png'
import tealBannerImage from '../../assets/banner-teal-dog.png'

interface PillButtonProps {
  color?: string
}

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1340px;
  margin-bottom: 5.625rem;

  display: flex;
  justify-content: space-between;
`

export const Banner = styled.div`
  background: ${({ theme }) => theme.colors['gray-100']};
  border-radius: 0.625rem;
  width: 41.25rem;
  height: 22.5rem;
  padding: 3.4375rem 20.625rem 3.125rem 3.125rem;
  color: ${({ theme }) => theme.colors.white};

  &.purple {
    background: url(${purpleBannerImage});
  }

  &.teal {
    background: url(${tealBannerImage});
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 3.125rem;
    font-size: 1.25rem;
    font-weight: 500;
  }
`

export const PillButton = styled.button<PillButtonProps>`
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

    margin-left: 1.375rem;

    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    ${({ color, theme }) => {
      if (color) {
        return `
        background-color: ${color};
      `
      } else {
        return `
          background-color: ${theme.colors['indigo-900']};
        `
      }
    }}
  }
`
