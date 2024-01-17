import styled from "styled-components";

const ActiveDot = styled.div`
  width: 1rem;
  height: 0.5rem;
  border-radius: 50px;
  background-color: #000;
`;

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #a6a6a6;
`;

const IdentificatorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: raw;
  justify-content: start;
  align-items: center;
  gap: 0.2rem;
`;

export function Indicator({ lengthTutorial, step }) {
  const dots = Array.from({ length: lengthTutorial }).map((_, index) =>
    index === step ? <ActiveDot key={index} /> : <Dot key={index} />
  );

  return (
    <>
      <IdentificatorContainer>{dots}</IdentificatorContainer>
    </>
  );
}
