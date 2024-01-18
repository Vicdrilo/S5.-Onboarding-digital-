import styled from "styled-components";
const transitions = ` 
`;
const ActiveDot = styled.div`
  width: 1rem;
  height: 0.5rem;
  border-radius: 50px;
  background-color: #000;
  cursor: pointer;
`;

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #a6a6a6;
  cursor: pointer;
`;

const IdentificatorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 0.2rem;
`;

export function Indicator({ lengthTutorial, stepTutorial, setStep }) {
  const changeStep = function (index) {
    setStep(index);
  };
  const dots = Array.from({ length: lengthTutorial }).map((_, index) =>
    index === stepTutorial ? (
      <ActiveDot key={index} onClick={() => changeStep(index)} />
    ) : (
      <Dot key={index} onClick={() => changeStep(index)} />
    )
  );

  return (
    <>
      <IdentificatorContainer>{dots}</IdentificatorContainer>
    </>
  );
}
