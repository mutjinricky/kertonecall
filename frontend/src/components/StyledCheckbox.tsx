import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";

interface Props {
  isChecked: boolean;
  setIsChecked: (arg: boolean) => void;
  text: string;
  desc: string;
}

export default function StyledCheckbox({
  isChecked,
  setIsChecked,
  text,
  desc,
}: Props) {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>{text}</Text>
        <Description>{desc}</Description>
      </TextWrapper>
      <Checkbox
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
`;
const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #1a77cc;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  font-family: var(--font-noto);
  padding-top: 10px;
`;

const Description = styled.div`
  color: gray;
  font-size: 15px;
  padding-top: 3px;
  font-size: 13px;
`;
