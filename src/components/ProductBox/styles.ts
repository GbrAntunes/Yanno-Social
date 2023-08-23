import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1340px;

  display: flex;
  flex-direction: column;

  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme.colors['gray-500']};

  & > div {
    position: relative;

    div {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 0.625rem;
      left: 1.375rem;

      span {
        border-radius: 1.25rem;
        background: ${(props) => props.theme.colors['violet-50']};
        padding: 0.125rem 0.75rem;
        font-size: 0.75rem;
        color: ${(props) => props.theme.colors['indigo-900']};

        & + span {
          margin-top: 0.75rem;
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 8px;
      position: absolute;
      top: 12px;
      right: 12px;
      border: none;
    }
  }

  h1 {
    background: ${(props) => props.theme.colors['teal-50']};
    color: ${(props) => props.theme.colors['gray-50']};
    font-size: 1.125rem;
    font-weight: 400;
    border: 1px solid ${(props) => props.theme.colors['gray-500']};
    padding: 14px 20px;
  }

  footer {
    display: flex;
    padding: 12px 16px;
    justify-content: space-between;

    button {
      border: none;
    }

    div.price {
      display: flex;
      align-items: flex-end;
      margin-right: 1rem;
      margin-left: 0.5rem;
      padding: 0.25rem 0;

      div {
        display: flex;
        flex-direction: column;
        margin-right: 0.5rem;

        & > small {
          font-size: 0.75rem;
          color: ${(props) => props.theme.colors['gray-100']};
          text-decoration: line-through;
        }

        strong {
          font-size: 1.25rem;

          &:before {
            content: 'R$';
            font-size: 1rem;
            font-weight: 600;
          }
        }
      }

      span {
        background: ${({ theme }) => theme.colors['teal-500']};
        border-radius: 0.25rem;
        color: ${({ theme }) => theme.colors.white};
        padding: 0.1875rem 0.375rem;
        font-size: 0.75rem;
        font-weight: 500;
      }
    }

    div.quantitySelector {
      display: flex;
      flex: 1;
      justify-content: space-between;

      padding-left: 0.5rem;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.colors['gray-500']};

      button {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        line-height: 0;

        &:last-child {
          background: ${({ theme }) => theme.colors['green-600']};
          height: 100%;
          width: 3.125rem;
          border-radius: 0;
        }
      }
    }
  }
`
