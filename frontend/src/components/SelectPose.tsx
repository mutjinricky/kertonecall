import styled from "styled-components";
import { useState } from "react";
import BottomButtons from "./BottomButton";
import PoseCard from "./PoseCard";

interface Props {
  moveStep: (arg: number) => void;
  setPose: (arg: string) => void;
}

export default function SelectPose({ moveStep, setPose }: Props) {
  const arr = [
    "pose1/1.jpeg",
    "pose1/2.jpeg",
    "pose1/3.jpeg",
    "pose1/3.jpeg",
    "pose1/3.jpeg",
    "pose1/3.jpeg",
    "pose1/3.jpeg",
  ];
  const [selectedPose, setSelectedPose] = useState(-1);

  const handleClickPoseCard = (index: number) => {
    setSelectedPose(index);
    setPose(arr[index]);
  };

  const handleSelectPose = () => {
    if (selectedPose === -1) return;
    moveStep(1);
  };

  return (
    <Wrapper>
      <PoseCardsWrapper>
        {arr.map((item, index) => {
          return (
            <PoseCard
              key={index}
              imageUrl={item}
              isSelected={selectedPose === index}
              handleClick={() => handleClickPoseCard(index)}
            />
          );
        })}
      </PoseCardsWrapper>
      <BottomButtons>
        <BottomButtons.button
          disabled={selectedPose === -1}
          handleClick={handleSelectPose}
        >
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
  width: 80%;
`;

const PoseCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding-bottom: 100px;
`;
