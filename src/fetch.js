export const getData = fetch('https://swapi.dev/api/people')
	.then((response) => {
		return response.json()
	});


