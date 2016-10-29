import {createStore} from 'redux'
import photoReducer from 'reducers/photo-reducer'
import albumReducer from 'reducer/album-reducer'

const store = createStore(photoReducer)

const store = createStore(albumReducer)

export default store