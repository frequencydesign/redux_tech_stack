import {combineReducers} from "redux";
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from "./SelectionReducer";
console.log("running combineReducers() which combines all the reducers");
export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});