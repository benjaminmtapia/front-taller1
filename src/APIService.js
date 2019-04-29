import axios from 'axios';
const API_URL = 'http://localhost:8081';
export class APIService{

  constructor(){
  }

  getActors() {
    const url = `${API_URL}/actors/`;
    return axios.get(url).then(response => response.data);
  }

  getActor(id) {
    const url = `${API_URL}/actors/${id}`;
    return axios.get(url).then(response => response.data);
  }

  createActor(actor){

    const url = `${API_URL}/actors/`;
    return axios.post(url,actor);
  }

  getFilms() {
    const url = `${API_URL}/films/`;
    return axios.get(url).then(response => response.data);
  }
}
