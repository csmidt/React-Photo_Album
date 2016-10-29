import axios from 'axios'
import store from 'store'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getAlbums() {
	return axios.get('albums').then(function(resp){
		store.dispatch({
			type: 'GET_ALBUMS',
			albums: resp.data
		})
	})
}

export function getPhotos(albumId) {
	return axios.get(`photos?album_id=${albumId}`).then(function(resp){
		store.dispatch({
			type: 'GET_PHOTOS',
			photos: resp.data
		})
	})
}

export function getPhoto(photoId) {
	return axios.get(`photos/${photoId}`)
}

