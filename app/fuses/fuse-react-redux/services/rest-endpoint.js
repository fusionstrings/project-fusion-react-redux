import fetch from 'isomorphic-fetch';
import {connectEndpoint} from "fetch-plus";
import jsonMiddleware from "fetch-plus-json";

export default connectEndpoint(
	"http://gateway.marvel.com/v1/public", {}, [jsonMiddleware()]
);