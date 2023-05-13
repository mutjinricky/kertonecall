import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import Header from "./components/Heaer";
import SelectOptions from "./components/SelectOptions";
import SelectPose from "./components/SelectPose";
import Result from "./components/Result";

function App() {
  const [step, setStep] = useState(2);
  const [members, setMembers] = useState(4);
  const [isChallengeMode, setIsChallengeMode] = useState(false);
  return (
    <Wrapper>
      <Header />
      {step === 0 && (
        <SelectOptions
          setStep={setStep}
          members={members}
          setMembers={setMembers}
          isChallengeMode={isChallengeMode}
          setIsChallengeMode={setIsChallengeMode}
        />
      )}
      {step === 1 && <SelectPose setStep={setStep} />}
      {step === 2 && <Result setStep={setStep} />}
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
