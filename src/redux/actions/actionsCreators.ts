import { GET } from "./actionTypes";

export const getData = (data: any) => {
	return {
		type: GET,
		payload: {data}
	};
};
