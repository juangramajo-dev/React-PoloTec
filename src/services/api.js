import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';
const IMG_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

const headers = () => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return headers;
};

const POST = async (url, payload) => {
  try {
    const res = await axios.post(url, payload, headers());
    return (res && res.data) || null;
  } catch (error) {
    throw (error && error.response && error.response.data.error) || errorMessage;
  }
};

const GET = async (url) => {
  try {
    const res = await axios.get(url, headers());
    return (res && res.data) || null;
  } catch (error) {
    throw (error && error.response && error.response.data.error) || errorMessage;
  }
};

const PATCH = async (url, payload) => {
  try {
    const res = await axios.patch(url, payload, headers());
    return (res && res.data) || null;
  } catch (error) {
    throw (error && error.response && error.response.data.error) || errorMessage;
  }
};

const DELETE = async (url) => {
  try {
    const res = await axios.delete(url, headers());
    return (res && res.data) || null;
  } catch (error) {
    throw (error && error.response && error.response.data.error) || errorMessage;
  }
};

const errorMessage = {
    message: "Error en el servidor",
    name: "serverError",
    statusCode: 500
    }

const api = {
  POST,
  GET,
  PATCH,
  DELETE,
};

export { BASE_URL, IMG_URL, api };
