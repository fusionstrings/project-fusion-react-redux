import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import connection from './rest-endpoint.js';

function callApi(endpoint, schema){
  connection.browse(endpoint, {
    apikey: '80b92e5fcd73415e7fafc407d9c8d391'
  }).then((json) => {
    const camelizedJson = camelizeKeys(json);
    return normalize(camelizedJson, schema);
  })
  .then(
    response => ({response}),
    error => ({error: error.message || 'Something bad happened'})
  )
}

const characterSchema = new Schema();

export const fetchCharacter = characterId => callApi([`characters`, characterId], characterSchema);