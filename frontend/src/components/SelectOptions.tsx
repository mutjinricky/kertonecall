import styled from "styled-components";
import BottomButtons from "./BottomButton";

interface Props {
  setStep: (arg: number) => void;
  members: number;
  setMembers: (arg: number) => void;
  isChallengeMode: boolean;
  setIsChallengeMode: (arg: boolean) => void;
}

function SelectOptions({ members, setMembers, setStep }: Props) {
  return (
    <Wrapper>
      <Text>인원을 선택해주세요</Text>

      <BottomButtons>
        <BottomButtons.button handleClick={() => console.log("hello")}>
          포즈 선택하기
        </BottomButtons.button>
      </BottomButtons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

const Text = styled.div`
  align-self: flex-start;
  font-size: 15px;
  padding-top: 60px;
`;

export default SelectOptions;
