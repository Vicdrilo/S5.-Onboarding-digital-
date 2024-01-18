import { useState } from "react";
import { Card } from "./Card";
import "./App.css";
import time_managment from "./assets/time_managment.svg";
import programming from "./assets/programming.svg";
import meditation from "./assets/meditation.svg";

function App() {
  //estados según se clique el botón de siguiente o anterior
  const [step, setStep] = useState(0);

  //cambio estado. Botón: siguiente
  const nextStep = function () {
    setStep(step + 1);
  };
  //cambio estado. Botón: anterior
  const prevStep = function () {
    setStep(step - 1);
  };

  //Contenido de las distintas cartas del tutorial
  let tutorialData = [
    {
      title: "Dedica moltes hores",
      description:
        "Un mínim de 30 hores a la setmana. " +
        "Si no en tens prou, hauràs de dedicar-li més hores. " +
        "Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#33cccc",
      image: time_managment,
    },
    {
      title: "Programa projectes propis",
      description:
        "Més val 10 hores treballant en projectes " +
        "propis, que 10 hores mmirant tutorials. La motivació i la " +
        "implicació en el projecte ajudarà a accelerar el teu paprenentatge.",
      bgColor: "#a6a6a6",
      image: programming,
    },
    {
      title: "Procura descansar",
      description:
        "Descansar bé i desconnectar són vitals. " +
        "D'aquesta manera reduiràs l'estrés i l'ansietat. Milloraràs " +
        "la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#ffcc66",
      image: meditation,
    },
  ];

  return (
    <>
      <Card
        currentData={tutorialData[step]}
        changeNextStep={nextStep}
        changePrevStep={prevStep}
        checkStep={step}
        setStep={setStep}
        lengthTutorialData={tutorialData.length}
      />
    </>
  );
}

export default App;
