import styled from "styled-components";
import { MouseEvent } from "react";

interface Props {
  imageUrl: string;
  isSelected: boolean;
  handleClick: (arg: MouseEvent) => void;
}

export default function PoseCard({ imageUrl, isSelected, handleClick }: Props) {
  return (
    <Wrapper onClick={handleClick}>
      <img src={imageUrl} alt="result" width={100} height={100} />
      {isSelected && <Cover>^</Cover>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-color: yellow;
  width: 200px;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
`;

const Text = styled.div`
  align-self: flex-start;
  font-size: 15px;
  padding-top: 60px;
`;

const Cover = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: gray;
  opacity: 0.5;
`;
