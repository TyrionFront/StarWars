export default (key) => `${key[0].toUpperCase()}${key.slice(1).split("_").join(" ")}`;
