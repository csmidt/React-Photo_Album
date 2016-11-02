import React from 'react'
import { Link, hashHistory } from 'react-router'
import { getAlbum, getAlbums } from 'api/albumsapi'
import store from 'store'


const PhotosContainer = React.createClass ({
	getInitialState: function () {
		return {
			name:'',
			id:'',
			photos:[],
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
				name: state.currentAlbum.name,
				id: state.currentAlbum.id,
				photos: state.currentAlbum.photos,
				albums: state.albums
			})
		})
	},
	componentWillUnmount: function() {
		this.unsubscribe()
	},	
	render:function () {
		return (
			<Album_view {...this.state} />
		)
	}
})
const Album_view =  React.createClass({
	navToHome: function (e){
		e.preventDefault()
		hashHistory.push('/')
	},
	navToPhotoAdd: function(e) {
		e.preventDefault()
		hashHistory.push(`/album/${this.props.id}/add`)
	},
	render:function(){
		return (
			<div className="albumDisplay">
				<button onClick={this.navToHome}>Back to Home</button><br />
				<h3 className="header">{this.props.name}</h3>
				<div className="albumArray">
							<ul className="select">
								{this.props.albums.map(album => (
									<li key={album.id}>
										<Link to={`/album_view/${album.id}`} className="navButton"><button>
											{album.name}
										</button></Link>
									</li>
								))}		
							</ul>																
							<ul className="pictures">
								{this.props.photos.map(photo => {
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
								<li>
										<button className="homeAlbums" onClick={this.navToPhotoAdd}>Add Photo</button>
									</li>
							</ul>
						
				</div>	
			</div>				
		)
	}
})

export default PhotosContainer