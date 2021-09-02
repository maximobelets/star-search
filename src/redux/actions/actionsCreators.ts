import { DELETE_ELEMENT, GET } from "./actionTypes";

export const getData = (data: any) => ({
		type: GET,
		payload: {data}
});

export const deleteElement = (element: any) => ({
		type: DELETE_ELEMENT,
		payload: element
});
