import styled from "styled-components";
import { ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
}

interface ButtonProps {
  children: string;
  handleClick: (arg: MouseEvent) => void;
  disabled?: boolean;
  danger?: boolean;
}

function BottomButtons({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

function Button({ children, handleClick, disabled, danger }: ButtonProps) {
  return (
    <StyledButton disabled={disabled} danger={danger} onClick={handleClick}>
      {children}
    </StyledButton>
  );
}

BottomButtons.button = Button;

const Wrapper = styled.div`
  z-index: 1;
  bottom: 0px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100vw;
  padding: 15px 0px;
  background-color: white;
`;

const StyledButton = styled.div<{ disabled?: boolean; danger?: boolean }>`
  width: 80%;
  height: 60px;
  background-color: ${(props) =>
    props.disabled
      ? "gray"
      : props.danger
      ? props.theme.colors.danger
      : props.theme.colors.primary};
  color: ${(props) => props.danger && "white"};
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  font-family: var(--font-noto);
`;

export default BottomButtons;
