export const selectLibrary = (libraryId) => {
	console.log("running selectLibrary action function() passing in libraryId and returning the object with type property and payLoad property of libraryID");
	return {
		type: "select_library",
		payload: libraryId
	};
};