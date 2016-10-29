const albumsDefaultState = {
	albums:[]
}

export default function(state= albumsDefaultState, action) {
	switch(action.type){
		case 'GET_ALBUMS';
			return {...state, albums: actions.albums}

		default:
			return state
	}
}