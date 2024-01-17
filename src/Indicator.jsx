import styled from "styled-components";

export function Indicator({ lengthTutorial, step }) {
  const activeDot = styled.div`
    width: 1rem;
    hight: 0.5rem;
    border-radius: 50px;
    background-color: #000;
  `;

  const dot = styled.div`
    width: 0.5rem;
    hight: 0.5rem;
    border-radius: 50%;
    background-color: #a6a6a6;
  `;

  let dots = Array.from({ length: lengthTutorial }).map((_, index) => {
    index === step ? activeDot : dot;
  });

  return <div className="indicator-container">{dots}</div>;
}
