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
}

function SelectOptions({
  members,
  setMembers,
  moveStep,
  isChallengeMode,
  setIsChallengeMode,
}: Props) {
  return (
    <Wrapper>
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
        isChallengeMode={isChallengeMode}
        setIsChallengeMode={setIsChallengeMode}
      />
      <BottomButtons>
        <BottomButtons.button handleClick={() => moveStep(1)}>
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
  padding: 20px;
`;

const Text = styled.div`
  align-self: flex-start;
  font-size: 20px;
  padding-top: 60px;
  padding-bottom: 10px;
  font-family: var(--font-nanum);
  font-weight: bold;
  color: #1a77cc;
`;

export default SelectOptions;
