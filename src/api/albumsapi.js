import axios from 'axios'


export function getAlbums() {
	return axios.get('albums')
}

export function getPhotos() {
	return axios.get('photos')
}