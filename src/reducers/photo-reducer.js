const photosDefaultState = {
	photos: []
}

export default function(state= photosDefaultState, action) {
 	switch (action.type){
		case 'GET_PHOTOS':
			return {...state, photos: actions.photos}
//we will be passing the new photos as an array. here are the new photos, 
//update the state of the new object with the new photos

 		case 'CREATE_PHOTO':
 			return {...state, photos:[...state.photos, action.photos]}
 //...means leave all existing things in object as they are and add the new ones

 		default:
 			return state 
	}
}

