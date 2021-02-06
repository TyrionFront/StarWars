import axios from "axios";
import "regenerator-runtime";

export default class {
  getItemInfo = async (url) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
      return "";
    }
  }

  people = (data) => {
    const {
      name, gender, birth_year, eye_color, //eslint-disable-line
    } = data;

    return {
      name, gender, birth_year, eye_color,
    };
  }

  planets = (data) => {
    const {
      name, rotation_period, orbital_period, climate, population, //eslint-disable-line
    } = data;

    return {
      name, rotation_period, orbital_period, climate, population,
    };
  }

  starships = (data) => {
    const {
      name, model, cost_in_credits, starship_class, //eslint-disable-line
    } = data;

    return {
      name, model, cost_in_credits, starship_class,
    };
  }
}
