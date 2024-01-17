import arrowLeft from "./assets/arrow-83-24.png";
import arrowRight from "./assets/arrow-58-24.png";
import "./Card.css";

export function Card({
  currentData,
  changeNextStep,
  changePrevStep,
  checkStep,
}) {
  const backgroundColor = { backgroundColor: currentData.bgColor };

  //crear clase para que aparezca el botón o no
  let disappearNext =
    checkStep === 2 ? "card-button-next disappear" : "card-button-next";
  let disappearPrev =
    checkStep === 0 ? "card-button-prev disappear" : "card-button-prev";

  return (
    <div className="card-container col-4">
      <div className="card-image" style={backgroundColor}>
        <img src={currentData.image} alt="imatge" className="card-image-img" />
      </div>
      <div className="card-description">
        <h2>{currentData.title}</h2>
        <p>{currentData.description}</p>
        <div className="card-button">
          <button onClick={changePrevStep} className={disappearPrev}>
            <img
              src={arrowLeft}
              alt="arrowRight"
              className="card-button-prev-img"
            />
          </button>
          <button onClick={changeNextStep} className={disappearNext}>
            <img
              src={arrowRight}
              alt="arrowRight"
              className="card-button-next-img"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

//export default Card;
