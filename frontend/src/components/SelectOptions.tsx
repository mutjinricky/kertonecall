import styled from "styled-components";
import BottomButtons from "./BottomButton";
import StyledCheckbox from "./StyledCheckbox";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  moveStep: (arg: number) => void;
  members: number;
  setMembers: (arg: number) => void;
  isChallengeMode: boolean;
  setIsChallengeMode: (arg: boolean) => void;
  isRandom: boolean;
  setIsRandom: (arg: boolean) => void;
  setPose: (arg: string) => void;
}

function SelectOptions({
  members,
  setMembers,
  moveStep,
  isChallengeMode,
  setIsChallengeMode,
  isRandom,
  setIsRandom,
  setPose,
}: Props) {
  const handleSelectPose = () => {
    if (isRandom) {
      const num = Math.floor(Math.random() * 3) + 1;
      setPose(`pose1/${num}.jpeg`);
      moveStep(2);
    } else {
      moveStep(1);
    }
  };
  return (
    <Wrapper>
      <Titles>
        <Title>Photose</Title>
        <Subtitle>소중한 만남의 기록, 포토의 포즈로부터</Subtitle>
      </Titles>
      <Text>인원을 선택해주세요</Text>
      <Box sx={{ minWidth: "100%" }}>
        <FormControl fullWidth>
          <Select
            value={String(members)}
            onChange={(event: SelectChangeEvent) =>
              setMembers(Number(event?.target.value))
            }
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <StyledCheckbox
        isChecked={isChallengeMode}
        setIsChecked={setIsChallengeMode}
        text="챌린지 모드"
        desc="유사도가 70% 이상이면 성공이에요"
      />
      <StyledCheckbox
        isChecked={isRandom}
        setIsChecked={setIsRandom}
        text="랜덤 모드"
        desc="포토즈가 포즈를 랜덤으로 골라줘요"
      />
      <BottomButtons>
        <BottomButtons.button handleClick={handleSelectPose}>
          포즈 선택하기
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
  gap: 15px;
  padding-top: 100px;
`;

const Text = styled.div`
  width: 100%;
  font-size: 20px;
  padding-top: 60px;
  padding-bottom: 10px;
  font-family: var(--font-noto);
  font-weight: bold;
  color: #1a77cc;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #1a77cc;
  font-family: var(--font-inter);
`;

const Subtitle = styled.div`
  text-align: center;
  font-family: var(--font-noto);
  font-weight: bold;
  color: gray;
`;

export default SelectOptions;
