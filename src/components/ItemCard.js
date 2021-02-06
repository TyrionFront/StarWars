/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import uuid from "uuid"; //eslint-disable-line
import keyModify from "../utils/utils";

const ItemCard = ({ cardData }) => {
  const { imgUrl, itemInfo, handleImageError } = cardData;
  const [name, ...rest] = Object.keys(itemInfo);
  return (
    <Jumbotron className="d-flex flex-fill">
      {
        <Image
          src={imgUrl}
          onError={handleImageError}
          className="rounded float-start"
        />
      }
      <div className="ml-5">
        <h3>{itemInfo[name] || "data is stolen"}</h3>
        <ul>
          {rest.map((key) => (
            <li key={uuid()}>
              <b>{`${keyModify(key)}`}:</b>{" "}
              {`${itemInfo[key] || "data is stolen"}`}
            </li>
          ))}
        </ul>
      </div>
    </Jumbotron>
  );
};

export default ItemCard;
