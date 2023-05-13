import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";

interface Props {
  isChallengeMode: boolean;
  setIsChallengeMode: (arg: boolean) => void;
}

export default function StyledCheckbox({
  isChallengeMode,
  setIsChallengeMode,
}: Props) {
  return (
    <Wrapper>
      <TextWrapper>
        챌린지 모드
        <Description>유사도가 80% 이상인 경우에만 촬영 성공</Description>
      </TextWrapper>
      <Checkbox
        checked={isChallengeMode}
        onChange={() => {
          setIsChallengeMode(!isChallengeMode);
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
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

const Description = styled.div`
  color: gray;
  font-size: 15px;
`;