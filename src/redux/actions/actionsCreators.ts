import { DELETEELEMENT, GET } from "./actionTypes";

export const getData = (data: any) => {
	return {
		type: GET,
		payload: {data}
	};
};

export const deleteElement = (element: any) => {
	return {
		type: DELETEELEMENT,
		payload: element
	};
};
