import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import Header from "./components/Heaer";
import SelectOptions from "./components/SelectOptions";
import SelectPose from "./components/SelectPose";
import Camera from "./components/Camera";
import Result from "./components/Result";

function App() {
  const [step, setStep] = useState(0);
  const [members, setMembers] = useState(4);
  const [pose, setPose] = useState("");
  const [isChallengeMode, setIsChallengeMode] = useState(false);

  const moveStep = (cnt: number) => {
    setStep(step + cnt);
  };

  return (
    <Wrapper>
      <Header />
      {step === 0 && (
        <SelectOptions
          moveStep={moveStep}
          members={members}
          setMembers={setMembers}
          isChallengeMode={isChallengeMode}
          setIsChallengeMode={setIsChallengeMode}
        />
      )}
      {step === 1 && <SelectPose moveStep={moveStep} setPose={setPose} />}
      {step === 2 && <Camera moveStep={moveStep} />}
      {step === 3 && <Result setStep={setStep} />}
      <div>ss</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
