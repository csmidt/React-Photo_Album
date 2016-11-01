import axios from 'axios'
import store from 'store'
import galleryReducer from 'reducers/galleryReducer'
import * as actions from 'actions'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getAlbums() {
	return axios.get('albums').then(resp => {
		store.dispatch({
			type: actions.GET_ALBUMS,
			albums: resp.data
		})
	})		
}

export function getAlbum (id) {
	return axios.get(`albums/${id}?_embed=photos`).then(resp => {
		store.dispatch({
			type: actions.GET_CURRENT_ALBUM,
			album: resp.data
		})
	})
}


export function getPhoto(id) {
	return axios.get('photos/' + id).then(resp => {
		store.dispatch ({
			type: actions.GET_CURRENT_PHOTO,
			photo: resp.data
		})

	})
}

