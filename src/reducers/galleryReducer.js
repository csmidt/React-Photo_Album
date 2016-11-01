import * as actions from 'actions'


const initialState = {
	currentAlbum: {},
	albums: [],
	currentPhoto: {}
}

export default function(state= initialState, action) {
 	switch (action.type) {
		case actions.GET_ALBUMS:
			return {...state, albums:action.albums}
		case actions.GET_CURRENT_ALBUM:
			return{...state, currentAlbum:action.album}
		case actions.GET_CURRENT_PHOTO:
			return{...state, currentPhoto:action.photo}
 		default:
 			return state 
	}
}

