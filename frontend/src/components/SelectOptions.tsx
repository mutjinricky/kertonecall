import styled from "styled-components";
import BottomButtons from "./BottomButton";
import StyledCheckbox from "./StyledCheckbox";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  setStep: (arg: number) => void;
  members: number;
  setMembers: (arg: number) => void;
  isChallengeMode: boolean;
  setIsChallengeMode: (arg: boolean) => void;
}

function SelectOptions({
  members,
  setMembers,
  setStep,
  isChallengeMode,
  setIsChallengeMode,
}: Props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Wrapper>
      <Text>인원을 선택해주세요</Text>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">인원</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="인원"
            onChange={handleChange}
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
        <BottomButtons.button handleClick={() => setStep(1)}>
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
  padding: 20px;
`;

const Text = styled.div`
  align-self: flex-start;
  font-size: 15px;
  padding-top: 60px;
`;

export default SelectOptions;
