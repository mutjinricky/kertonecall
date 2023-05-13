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
      setPose("sample.jpeg");
      moveStep(2);
    } else {
      moveStep(1);
    }
  };
  return (
    <Wrapper>
      <Text>인원을 선택해주세요</Text>
      <Box sx={{ minWidth: "90%" }}>
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

const Text = styled.div`
  width: 90%;
  font-size: 20px;
  padding-top: 60px;
  font-family: var(--font-nanum);
  font-weight: bold;
  color: #1a77cc;
`;

export default SelectOptions;
