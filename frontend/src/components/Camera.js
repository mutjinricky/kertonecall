import styled from "styled-components";
import BottomButtons from "./BottomButton";
import { useRef, useEffect, useState } from "react";

function Camera({ moveStep }) {
  const videoRef = useRef(null);

  useEffect(() => {
    async function loadVideo() {
      const video = videoRef.current;

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        video.srcObject = stream;
      } catch (error) {
        console.log(error);
      }
    }

    loadVideo();

    // const handleCanPlay = () => {
    //   videoRef.current.play();
    // };

    // videoRef.current.addEven2tListener("canplaythrough", handleCanPlay);

    // return () => {
    //   videoRef.current.srcObject = null;
    //   videoRef.current.removeEventListener("canplaythrough", handleCanPlay);
    //   if (stream) {
    //     stream.getTracks().forEach((track) => track.stop());
    //   }
    // };
  }, []);

  const handleCapture = () => {
    try {
      const canvas = document.createElement("canvas");
      const video = videoRef.current;
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataUrl = canvas.toDataURL("image/png");

      console.log(imageDataUrl);
      const stream = videoRef.current.srcObject;
      stream.getTracks().forEach((track) => {
        console.log(track);
        track.stop();
      });
      moveStep(1);
    } catch {}
  };

  return (
    <Wrapper>
      <Text>포즈를 맞춰주세요</Text>
      <CameraWrapper>
        <PoseWrapper>
          <img src="sample.jpeg" alt="result" width="100%" />
        </PoseWrapper>
        <video ref={videoRef} width="100%" autoPlay muted playsInline />
      </CameraWrapper>
      <BottomButtons>
        <BottomButtons.button handleClick={handleCapture}>
          촬영하기
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
  gap: 20px;
  padding-top: 15vh;
`;

const CameraWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 0;
  padding-bottom: 50.63%;
  border-radius: 15px;
  overflow: hidden;
`;

const PoseWrapper = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-color: black;
`;

const Text = styled.div`
  font-size: 18px;
  padding-top: 60px;
`;

export default Camera;
