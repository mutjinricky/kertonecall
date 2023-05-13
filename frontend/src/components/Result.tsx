import styled from "styled-components";
import BottomButtons from "./BottomButton";

interface Props {
  moveStep: (arg: number) => void;
  score: number;
  isChallengeMode: boolean;
}

export default function Result({ moveStep, score, isChallengeMode }: Props) {
  let grade;
  let color;
  let desc;
  if (score >= 70) {
    grade = "good";
    color = "#6BD783";
    desc = "일심동체! 우리는 한 마음 한 몸!";
  } else if (score >= 40) {
    grade = "normal";
    color = "#3B7BDB";
    desc = "어색한 듯 친한 듯, 더 친해지자!";
  } else {
    grade = "bad";
    color = "#EA6D6D";
    desc = "우리... 조금 더 친해지길 바라...";
  }

  return (
    <Wrapper>
      <Text>유사도</Text>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
        <Score style={{ color: color }}>{score}</Score>
        <Score style={{ fontSize: "56px", paddingBottom: "10px" }}>%</Score>
      </div>
      <Desc>{desc}</Desc>
      <ImageWrapper>
        <img src="logo192.png" alt="result" />
      </ImageWrapper>
      <BottomButtons>
        {(!isChallengeMode || grade === "good") && (
          <BottomButtons.button handleClick={() => {}}>
            사진 저장하기
          </BottomButtons.button>
        )}
        <BottomButtons.button
          danger={isChallengeMode && grade !== "good"}
          handleClick={() => {
            moveStep(-1);
          }}
        >
          다시 도전하기
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
  gap: 15px;
  padding-top: 150px;
`;

const ImageWrapper = styled.div`
  width: 90%;
  height: 0;
  padding-bottom: 50.63%;
  background-color: yellow;
  overflow: hidden;
`;

const Text = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-top: 30px;
  font-family: var(--font-noto);
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 60px;
  font-family: var(--font-noto);
`;

const Score = styled.div`
  font-size: 96px;
`;
