import styled from "styled-components";

interface Props {}

function Header({}: Props) {
  return (
    <Wrapper>
      <Text>네컷 하자</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Text = styled.div`
  padding: 35px;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
`;

export default Header;
