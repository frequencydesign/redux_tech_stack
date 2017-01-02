export default (state = null, action) => {
	console.log("running SelectionReducer reducer which checks the action.type and if there's a match, returns action.payload, otherwise just returns state");

	switch (action.type) {
		case "select_library":
			return action.payload;

		default: 
			return state;
	}
};

