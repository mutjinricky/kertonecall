import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface Props {
  canBack: boolean;
  moveStep: (arg: number) => void;
}

function Header({ canBack, moveStep }: Props) {
  return (
    <Wrapper>
      <Text>사진을 찍어주세요</Text>
      {/* {canBack && (
        <StyledArrow
          onClick={() => moveStep(-1)}
          style={{ fontSize: "30px" }}
        />
      )} */}
    </Wrapper>
  );
}

const StyledArrow = styled(ArrowBackIosNewIcon)`
  position: absolute;
  right: 10px;
  color: black;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100px;
  /* background-color: ${(props) => props.theme.colors.primary}; */
`;

const Text = styled.div`
  padding: 35px;
  font-weight: bold;
  font-size: 30px;
  font-family: var(--font-nanum2);
  /* background-color: ${(props) => props.theme.colors.primary}; */
`;

export default Header;
