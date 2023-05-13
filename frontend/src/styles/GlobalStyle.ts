import { createGlobalStyle } from "styled-components";

const theme = {
  // media: {
  //   mobile: "@media (max-width: 767px)",
  //   desktop: "@media (min-width: 768px)",
  // },
  colors: {
    primary: "#bbdeff",
    secondary: "#E8E1D7",
    danger: "#dc3545",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.secondary};
  }
`;

export { GlobalStyle };
