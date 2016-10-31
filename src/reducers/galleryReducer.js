import * as actions from 'actions'


const initialState= {
	currentAlbum: {},
	albums: [],
	currentPhoto: {}
}

export default function(state= initialState, action) {
 	switch (action.type){
		case actions.GET_ALBUMS:
			return {...state, albums:action.albums}

		case actions.GET_CURRENT_ALBUM:
			return{...state, currentAlbum:action.album}
//we will be passing the new photos as an array. here are the new photos, 

//update the state of the new object with the new photos

 		//case 'CREATE_PHOTO':
 			//return {...state, photos:...state.photos, action.photos]}
 //...means leave all existing things in object as they are and add the new one

		case actions.GET_CURRENT_PHOTO:
			return{...state, currentPhoto:action.photo}


 		default:
 			return state 
	}
}

