import styled from "styled-components";
import { useRef, useEffect } from "react";
import BottomButtons from "./BottomButton";

interface Props {
  setStep: (arg: number) => void;
}

export default function SelectPose({ setStep }: Props) {
  const videoRef = useRef(null);

  // useEffect(() => {
  //   async function loadVideo() {
  //     const video = videoRef.current;

  //     try {
  //       const stream = await navigator.mediaDevices.getUserMedia({
  //         video: true,
  //       });
  //       video.srcObject = stream;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   loadVideo();

  //   const handleCanPlay = () => {
  //     videoRef.current.play();
  //   };

  //   videoRef.current.addEventListener("canplaythrough", handleCanPlay);

  //   return () => {
  //     videoRef.current.removeEventListener("canplaythrough", handleCanPlay);
  //   };
  // }, []);
  return (
    <Wrapper>
      <Text>인원을 선택해주세요</Text>
      {/* <video ref={videoRef} /> */}
      <BottomButtons>
        <BottomButtons.button handleClick={() => setStep(1)}>
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

const Text = styled.div`
  align-self: flex-start;
  font-size: 15px;
  padding-top: 60px;
`;
