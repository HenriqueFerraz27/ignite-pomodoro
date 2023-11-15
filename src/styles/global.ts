import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    box-sizing: border-box;
    outline: 2px solid transparent;
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.brand.light};
  }

  body {
    color: ${({ theme }) => theme.colors.base.text.base};
    background-color: ${({ theme }) => theme.colors.base.background};
  }

  @media (max-width: 1024px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    background-color: transparent;
    border: none;
  }

  a {
    text-decoration: none;
  }

  button,
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  strong {
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`
