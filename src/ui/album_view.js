import React from 'react'
import { Link, hashHistory } from 'react-router'
import { getPhotos, getAlbums } from 'api/albumsapi'

const PhotosContainer = React.createClass ({
	getInitialState: function () {
		return {
			photos:[],
			albums:[]
		}
	},

	componentWillMount: function (){
		this.rerender()
	},

	rerender: function () {
		var id = this.props.params.id

		getPhotos(id).then(resp =>{
			this.setState({
				photos: resp.data
			})
		})

		// getAlbums().then(resp => {
		// 	this.setState ({
		// 		albums: resp.data 
		// 	})
		// })
	},

	render: function () {
		return (
			<Album_view photos={this.state.photos} albums={this.state.albums} />
		)
	},
})



const Album_view =  React.createClass({
	goBack: function (){
			hashHistory.goBack()
		},

	render:function(){
		console.log('photos',this.props.photos)
		return (
			<div className="albumArray">
				<button onClick={this.goBack}>Go Back</button><br />
				<h3>My Photos</h3>
				<div className="albumDisplay">
					<div className="selectAlbums">
						<ul className="select">
							{this.props.albums.map(album => {
								return (
									<li key={album.id}>
									<button>
										<Link to={`/album_view/${album.id}`}>{album.name}</Link>
									</button>
									</li>		
								)
							})}		
						</ul>
					</div>
					<div className ="photoArray">
						<ul className="albums">
							{this.props.photos.map(photo => {
								console.log(photo)
								return (
									<li className="homeAlbums" key={photo.id}>
										<Link to={`/photo/${photo.id}`}>
											<img src={photo.url} />
											<span className="span">{photo.name}</span>
										</Link>
									</li>
								)
							})}
						</ul>
					</div>
				</div>	
			</div>
			
		)
	}
})

export default PhotosContainer