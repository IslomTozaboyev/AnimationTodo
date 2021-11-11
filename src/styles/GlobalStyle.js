import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.my-node-enter {
  opacity: 0;
  transform: translateX(350px);

}
.my-node-enter-active {
  transform: translateY(0px);
  opacity: 1;
  transition: all 500ms;
}
.my-node-exit {
  opacity: 1;
}
.my-node-exit-active {
  transform: translateX(-350px);
  opacity: 0;
  transition: all 500ms;
}


`;

export default GlobalStyle;
