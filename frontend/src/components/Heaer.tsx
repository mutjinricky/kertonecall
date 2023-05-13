import styled from "styled-components";

interface Props {}

function Header({}: Props) {
  return <Wrapper>네컷 하자</Wrapper>;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  padding-top: 35px;
  padding-left: 20px;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
`;

export default Header;
