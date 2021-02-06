import "regenerator-runtime";
import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Header from "../Header";
import ItemCard from "../ItemCard";
import Processor from "../../services/sw-service";
import { API_URL_IMG, API_URL, API_DEFAULT_URL_IMG } from "../../utils/api";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProcessor: new Processor(),
      imagesSource: API_URL_IMG,
      infoSource: API_URL,
      currentActive: "people",
      placeholderImgUrl: API_DEFAULT_URL_IMG,
      imgUrl: "",
      itemInfo: "",
      count: 0,
    };
  }

  getData = (dataType, count = 1) => async () => {
    const { dataProcessor, infoSource, imagesSource } = this.state;
    const itemInfoUrl = `${infoSource}${dataType}/${count}/`;
    const itemData = await dataProcessor.getItemInfo(itemInfoUrl);
    const itemInfo = dataProcessor[dataType](itemData);
    const imgType = dataType === "people" ? "characters" : dataType;
    const imgUrl = `${imagesSource}/${imgType}/${count}.jpg`;
    this.setState({
      currentActive: dataType, itemInfo, imgUrl, count,
    });
  };

  getNextData = async () => {
    const { currentActive, count } = this.state;
    this.getData(currentActive, count + 1)();
  }

  handleImageError = () => {
    const { placeholderImgUrl } = this.state;
    this.setState({ imgUrl: placeholderImgUrl });
  }

  componentDidMount() {
    this.getData("people")();
  }

  render() {
    const { imgUrl, itemInfo } = this.state;
    const currentCardData = {
      imgUrl, itemInfo, handleImageError: this.handleImageError,
    };
    return (
      <Container>
        <Row className="justify-content-center">
          <Header handleClick={this.getData} />
        </Row>
        <Row className="justify-content-center">
          <Button variant="primary" size="md" className="px-5" onClick={this.getNextData}>
            <b>Next</b>
          </Button>
        </Row>
        <Row className="justify-content-center mt-2">
          <ItemCard cardData={currentCardData} />
        </Row>
      </Container>
    );
  }
}
