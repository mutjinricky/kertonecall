import styled from "styled-components";
import BottomButtons from "./BottomButton";
import { useRef, useEffect } from "react";

function Camera({ moveStep, pose }) {
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
      const base64 = imageDataUrl.replace(/^data:.+;base64,/, "");
      const imageData = atob(base64.split(",")[1]);

      // Convert to ArrayBuffer
      const arrayBuffer = new ArrayBuffer(imageData.length);
      const view = new Uint8Array(arrayBuffer);
      for (let i = 0; i < imageData.length; i++) {
        view[i] = imageData.charCodeAt(i) & 0xff;
      }

      const blob = new Blob([arrayBuffer], { type: "image/png" });
      const formData = new FormData();
      formData.append("file", blob, "image.png");

      fetch("your-upload-api-url", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

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
          <img src={pose} alt="result" width="100%" />
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
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding-top: 15vh;
`;

const CameraWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
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
  font-weight: 600;
  font-size: 23px;
  padding-top: 60px;
  font-family: var(--font-noto);
`;

export default Camera;
