import React from "react";
import { card, card__image, card__info } from "./InfoCard.module.scss";

//info = additional info of what the card is about (if there is any, if not leave empty),
//infoNumber = number regarding that info, ex: total cars in fleet
//image = an image or icon to represent the card

//TODO: FINISH THE CARD (STYLES, DESIGN)
function InfoCard({ bgcolor, title, info, infoNumber, image }) {
  const style = { backgroundColor: bgcolor };
  return (
    <>
      <div className={card} style={style}>
        <div className={card__info}>
          <h1>{title}</h1>
          <p>{infoNumber}</p>
        </div>
        <div className={card__image}>
          <img src={image} />
        </div>
      </div>
    </>
  );
}

export default InfoCard;
