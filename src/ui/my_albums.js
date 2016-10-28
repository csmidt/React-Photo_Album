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
			<My_albums albums={this.state.albums} />
		)
	}
})

const My_albums = React.createClass({	
	render:function(){
		return (
			<div className="my_albumContainer">
				<h3 className="homeHeader">My Albums</h3>
				<ul className="albums">
					{this.props.albums.map(album => {
							return (
							<li key={album.id} className="homeAlbums" >
								<Link to={`/album_view/${album.id}`}>
										<img src={album.coverphoto} />	
										<span className="span">{album.name}</span>
								</Link>
							</li>
						)	
					})}
						
				</ul>
			</div>
		)
	}
})

export default AlbumCollection