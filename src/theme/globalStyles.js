import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: hsl(236, 33%, 92%)
  }

  .list-item:hover .remove-icon{
    display: block
  }
`;
export default GlobalStyle;
