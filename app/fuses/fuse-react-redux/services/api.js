import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import fetch from 'isomorphic-fetch';
import {connectEndpoint} from "fetch-plus";
import jsonMiddleware from "fetch-plus-json";

export default connectEndpoint(
	"https://api.github.com", {}, [jsonMiddleware()]
);