import React from 'react'
import { Link, hashHistory } from 'react-router'
import { getAlbums } from 'api/albumsapi'



const AlbumCollection = React.createClass({
	getInitialState: function (){
			return {
				albums:[]
			}	
	},

	componentWillMount: function (){
		getAlbums().then(albums => {
			this.setState({
				albums: albums.data
			})
		})	
	},
	render:function () {
		return (
			<my_albums albums={this.state.albums} />
		)
	}
})

const my_albums = React.createClass({	
	render:function(){
		return (
			<div className="my_albumContainer">
				<h3 className="homeHeader">My Albums</h3>
				<ul className="albums">
					{this.props.albums.map(album => {
							return (
							<li key={albums.id} className="homeAlbums" >
								<Link to={`/album_view/${album.id}`}>
									<div className="albumTitle">
										<img src={album.cover} />
										<span>{album.name}</span>
									</div>
								</Link>
							</li>
						)	
					})}
						
				</ul>
			</div>
		)
	}
})

export default My_albums