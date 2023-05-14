import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ReactNode } from "react";

interface Props {
  moveStep: (arg: number) => void;
  children: ReactNode;
  isRandom: boolean;
}

function Header({ moveStep, children, isRandom }: Props) {
  const handleArrow = () => {
    if (isRandom) {
      moveStep(-2);
    } else {
      moveStep(-1);
    }
  };
  return (
    <Wrapper>
      <StyledArrow onClick={handleArrow} style={{ fontSize: "25px" }} />
      <Text>{children}</Text>
    </Wrapper>
  );
}

const StyledArrow = styled(ArrowBackIosNewIcon)`
  position: absolute;
  left: 0px;
  color: black;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80px;
  /* background-color: ${(props) => props.theme.colors.primary}; */
`;

const Text = styled.div`
  height: 80px;
  line-height: 80px;
  font-weight: bold;
  font-size: 25px;
  font-family: var(--font-noto);
  /* background-color: ${(props) => props.theme.colors.primary}; */
`;

export default Header;
