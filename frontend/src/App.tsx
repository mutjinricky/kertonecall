import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import Header from "./components/Header";
import SelectOptions from "./components/SelectOptions";
import SelectPose from "./components/SelectPose";
import Camera from "./components/Camera";
import Result from "./components/Result";

function App() {
  const [step, setStep] = useState(0);
  const [members, setMembers] = useState(4);
  const [pose, setPose] = useState("sample.jpeg");
  const [isChallengeMode, setIsChallengeMode] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [score, setScore] = useState(50);

  const moveStep = (cnt: number) => {
    setStep(step + cnt);
  };

  return (
    <Wrapper>
      {(step === 1 || step === 2) && (
        <Header moveStep={moveStep} isRandom={isRandom}>
          {step === 1 ? "포즈를 선택해주세요" : "사진을 찍어주세요"}
        </Header>
      )}
      {step === 0 && (
        <SelectOptions
          moveStep={moveStep}
          members={members}
          setMembers={setMembers}
          isChallengeMode={isChallengeMode}
          setIsChallengeMode={setIsChallengeMode}
          isRandom={isRandom}
          setIsRandom={setIsRandom}
          setPose={setPose}
        />
      )}
      {step === 1 && <SelectPose moveStep={moveStep} setPose={setPose} />}
      {step === 2 && <Camera moveStep={moveStep} pose={pose} />}
      {step === 3 && (
        <Result
          moveStep={moveStep}
          score={score}
          isChallengeMode={isChallengeMode}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
