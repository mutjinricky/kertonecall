import styled from "styled-components";
import BottomButtons from "./BottomButton";

interface Props {
  setStep: (arg: number) => void;
}

export default function Result({ setStep }: Props) {
  return (
    <Wrapper>
      <Text>유사도</Text>
      <Score>45%</Score>
      <Text2>어색한 듯 친한 듯, 더 친해지자!</Text2>
      <img src="logo192.png" alt="result" />
      <BottomButtons>
        <BottomButtons.button handleClick={() => {}}>
          사진 저장하기
        </BottomButtons.button>
        <BottomButtons.button handleClick={() => {}}>
          다시 사진 찍기
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
  font-size: 32px;
  font-weight: bold;
  padding-top: 30px;
`;
const Text2 = styled.div`
  font-size: 24px;
  padding-top: 10px;
`;

const Score = styled.div`
  font-size: 96px;
  padding-top: 5px;
`;
