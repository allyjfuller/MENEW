const initialState = {
	data: []
}

const dummyReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'DUMMY_ACTION':

		return {
			...state,
			data: ...state.data
		}

		default:
		return state
	}
}

export default dummyReducer