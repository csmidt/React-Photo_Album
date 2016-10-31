import React from 'react'
import { Link, hashHistory } from 'react-router'
import { getAlbum } from 'api/albumsapi'
import store from 'store'

const PhotosContainer = React.createClass ({
	getInitialState: function () {
		return {
			album:{
				name:'',
				photos:[]
			}
		}
	},

	componentWillMount: function (){
		getAlbum(this.props.params.id)

		this.unsubscribe = store.subscribe(()=>{
			const state = store.getState()

			this.setState({
				album: state.currentAlbums
			})
		})
	},

	componentWillUnmount: function() {
		this.unsubscribe()
	},	
	render:function () {
		return (
			<Album_view albums={this.state.currentAlbums} />
		)
	}
})


const Album_view =  React.createClass({
	goBack: function (e){
		e.preventDefault()
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
							{this.props.albums.photos.map(photo => {
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