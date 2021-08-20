import { getData } from "./actionsCreators";

export const requestData = () => async (dispatch: any) => {
	try {
		const data = await fetch('https://swapi.dev/api/people').then((res) => res.json());
		dispatch(getData(data.results));
	}
	catch (error) {
		console.log(error)
	}
}
