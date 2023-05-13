import styled from "styled-components";
import { useState } from "react";
import BottomButtons from "./BottomButton";
import PoseCard from "./PoseCard";

interface Props {
  moveStep: (arg: number) => void;
  setPose: (arg: string) => void;
}

export default function SelectPose({ moveStep, setPose }: Props) {
  const arr = [0, 1, 2, 3, 4, 5, 6];
  const [selectedPose, setSelectedPose] = useState(-1);

  const handleClickPoseCard = (index: number) => {
    setSelectedPose(index);
    setPose("logo192.png");
  };

  return (
    <Wrapper>
      <PoseCardsWrapper>
        {arr.map((item, index) => {
          return (
            <PoseCard
              imageUrl="logo192.png"
              isSelected={selectedPose === index}
              handleClick={() => handleClickPoseCard(index)}
            />
          );
        })}
      </PoseCardsWrapper>
      <BottomButtons>
        <BottomButtons.button handleClick={() => moveStep(1)}>
          촬영 시작하기
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

const PoseCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  row-gap: 10px;
  column-gap: 10px;
  width: 100%;
  padding-bottom: 100px;
`;
