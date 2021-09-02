const initialState = {
	data: []
};

export const rootReducer= (state = initialState, action: any) => {
	const {payload} = action;

	switch(action.type) {
		case 'GET':
			return {
				data: payload.data
			}
		case 'DELETE_ELEMENT':
			return {
				...state,
				data: state.data.filter(el => el !== payload)
			}
		default:
			return state
	};
}
