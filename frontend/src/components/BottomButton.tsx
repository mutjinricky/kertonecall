import styled from "styled-components";
import { ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
}

interface ButtonProps {
  children: string;
  handleClick: (arg: MouseEvent) => void;
}

function BottomButtons({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

function Button({ children, handleClick }: ButtonProps) {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}

BottomButtons.button = Button;

const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  width: 100vw;
  background-color: white;
`;

const StyledButton = styled.div`
  width: 90%;
  height: 60px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;
  line-height: 60px;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  font-family: var(--font-nanum);
`;

export default BottomButtons;
