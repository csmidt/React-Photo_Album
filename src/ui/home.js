import React from 'react'
import { Link, hashHistory } from 'react-router'
import { getAlbums,getAlbum } from 'api/albumsapi'
import * as actions from 'actions'
import store from 'store'


const HomeContainer = React.createClass({
	getInitialState: function (){
			return {
				albums:[]
			}
	},

	componentWillReceiveProps(props) {
		getAlbum(props.params.id)
	},
	componentWillMount: function (){
		getAlbums()

		this.unsubscribe = store.subscribe(() => {
			const state = store.getState()
			this.setState({
				albums: state.albums,
				album: state.currentAlbum
			})
		})
	},
	componentWillUnmount: function () {
		this.unsubscribe()
	},
	render:function () {
		return (
			<HomeView albums={this.state.albums} />
		)
	}
})
const HomeView = React.createClass({	
	navToAlbumAdd: function(e) {
	e.preventDefault()
	hashHistory.push('/album/add')
	},
	render:function(){
		return (
			<div className="my_albumContainer">
				<h3 className="header">My Albums</h3>
				<ul className="pictures">
						{this.props.albums.map(album => {
						return (
							<li key={album.id} className="homeAlbums" >
								<Link to={`/album_view/${album.id}`}>
									<div className="albumTitle">
										<img src={album.coverphoto} />
										<span className="span">{album.name}</span>
									</div>
								</Link>
							</li>
						)	
					})}
							<li>
								<button onClick={this.navToAlbumAdd} className="homeAlbums">Add Album</button>
							</li>	
				</ul>
			</div>
		)
	}
})

export default HomeContainer