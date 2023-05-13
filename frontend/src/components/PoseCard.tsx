import styled from "styled-components";
import { MouseEvent } from "react";
import CheckIcon from "@mui/icons-material/Check";

interface Props {
  imageUrl: string;
  isSelected: boolean;
  handleClick: (arg: MouseEvent) => void;
}

export default function PoseCard({ imageUrl, isSelected, handleClick }: Props) {
  return (
    <Wrapper onClick={handleClick}>
      <img src={imageUrl} alt="result" width="100%" />
      {isSelected && (
        <CheckWrapper>
          <Cover />
          <CheckIcon style={{ fontSize: "100px", color: "red", zIndex: 11 }} />
        </CheckWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  border-radius: 15px;
  overflow: hidden;
`;

const CheckWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: gray;
  opacity: 0.5;
`;
