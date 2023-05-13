import styled from "styled-components";

interface Props {}

function Header({}: Props) {
  return <Wrapper>헤더</Wrapper>;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
  background-color: #bbdeff;
`;

export default Header;
