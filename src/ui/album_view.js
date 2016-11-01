import React from 'react'
import { Link, hashHistory } from 'react-router'
import { getAlbum, getAlbums } from 'api/albumsapi'
import store from 'store'


const PhotosContainer = React.createClass ({
	getInitialState: function () {
		return {
			album:{
				name:'',
				photos:[]
			},
			albums:[]
		}
	},
	componentWillReceiveProps(props) {
		getAlbum(props.params.id)
	},
	componentWillMount: function (){
		getAlbum(this.props.params.id)
		getAlbums()

		this.unsubscribe = store.subscribe(()=>{
			const state = store.getState()

			this.setState({
				album: state.currentAlbum,
				albums: state.albums
			})
		})
	},
	componentWillUnmount: function() {
		this.unsubscribe()
	},	
	render:function () {
		return (
			<Album_view albums={this.state.albums} album={this.state.album} />
		)
	}
})
const Album_view =  React.createClass({
	goBack: function (e){
		e.preventDefault()
		hashHistory.goBack()
	},
	render:function(){
		return (
			<div className="albumDisplay">
				<button onClick={this.goBack}>Go Back</button><br />
				<h3 className="header">{this.props.album.name}</h3>
				<div className="albumArray">
						
							<ul className="select">
								{this.props.albums.map(album => (
									<li key={album.id}>
										<button>
											<Link to={`/album_view/${album.id}`} className="navButton">
											{album.name}
											</Link>
										</button>
									</li>		
								))}		
							</ul>					
											
							<ul className="pictures">
								{this.props.album.photos.map(photo => {
									return (
										<li className="homeAlbums" key={photo.id}>
											<Link to={`/photo/${photo.id}`}>
												<div className="albumTitle">
													<img src={photo.url} />
													<span className="span">{photo.name}</span>
												</div>
											</Link>
										</li>
									)
								})}
							</ul>
						
				</div>	
			</div>				
		)
	}
})

export default PhotosContainer