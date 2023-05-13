//삭제해도 됨
import styled from "styled-components";
import { ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
}

interface ButtonProps {
  children: string;
  handleClick: (arg: MouseEvent) => void;
}

//수민
function BottomButtons2({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

function Button2({ children, handleClick }: ButtonProps) {
  return <StyledButton2 onClick={handleClick}>{children}</StyledButton2>;
}

BottomButtons2.button = Button2;
//

const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  gap: 15px;
  padding: 20px;
  width: 100vw;
`;

//수민
const StyledButton2 = styled.div`
  width: 90%;
  height: 60px;
  border-radius: 15px;
  background-color: #ea6d6d;
  text-align: center;
  line-height: 60px;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
`;
//

export default BottomButtons2;
