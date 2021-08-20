const initialState = {
	data: null
};

export const rootReducer= (state = initialState, action: any) => {
	const {payload} = action;

	switch(action.type) {
		case 'GET':
			return {
				data: payload.data
			}
		default:
			return state
	};
}
