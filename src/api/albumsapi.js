import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getAlbums() {
	return axios.get('albums')
}

export function getPhotos(albumId) {
	return axios.get(`photos?album_id=${albumId}`)
}

export function getPhoto(photoId) {
	return axios.get(`photos/${photoId}`)
}