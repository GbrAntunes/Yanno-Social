import styled from 'styled-components'

export const Container = styled.div`
  margin: 80px auto;
  max-width: 1340px;

  display: flex;
  justify-content: space-between;
`

export const BenefitsCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${(props) => props.theme.colors['indigo-900']};

  background: ${(props) => props.theme.colors['cyan-50']};
  padding: 12px;
  border-radius: 10px 1px 10px 5px;
  font: Roboto, sans-serif;

  img {
    width: 32px;
    height: 32px;
  }

  & > div {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: 500;
    }
  }
`
