/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import uuid from "uuid"; //eslint-disable-line

const Header = (props) => {
  const { handleClick } = props; // eslint-disable-line
  const textAndTypes = [
    ["people", "People", uuid()],
    ["planets", "Planets", uuid()],
    ["starships", "Starships", uuid()],
  ];
  return (
    <ButtonGroup className="m-2">
      {textAndTypes.map(([type, text, id]) => (
        <Button key={id} className="m-2" variant="info" onClick={handleClick(type)}>{text}</Button>
      ))}
    </ButtonGroup>
  );
};

export default Header;
