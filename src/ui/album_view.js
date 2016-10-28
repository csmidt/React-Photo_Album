import React from 'react'
import { Link, hashHistory } from 'react-router'
import { getPhotos } from 'api/albumsapi'

const PhotosContainer = React.createClass ({
	getInitialState: function () {
		return {
			photos:[]
		}
	},

	componenetWillMount: function (){
		getPhotos().then(photos => {
			this.setState ({
				photos: photos.data
			})
		})
	},

	render: function () {
		return (
			<Album_view photos={this.state.photos} />
		)
	}
})

const Album_view =  React.createClass({
	goBack: function (){
			hashHistory.goBack()
		},

	render:function(){
		return (
			<div className="albumArray">
				<h3>My Photos</h3>
				<div className="albumDisplay">
					<div className="selectAlbums">
						<ul className="select">
							{this.props.photos.map(photos => {
								return (
									<li>
									<button>
										<Link to={`photos/${album.id}`}>Album 1</Link>
									</button>
									</li>
									<li>
										<button>
											<Link to={`photos/${album.id}`}>Album 1</Link>
										</button>
									</li>
									<li>
										<button>
											<Link to={`photos/${album.id}`}>Album 1</Link>
										</button>
									</li>
									<li>
										<button>
											<Link to={`photos/${album.id}`}>Album 1</Link>
										</button>
									</li>
									<li>
										<button>
											<Link to={`photos/${album.id}`}>Album 1</Link>
										</button>
									</li>
									<li>
										<button>
											<Link to={`photos/${album.id}`}>Album 1</Link>
										</button>
									</li>
								)	
							})}		
						</ul>
				</div>
				<div className ="photoArray">
					<button onClick={this.goBack}>Go Back</button><br />
					<ul className="eachAlbum">
						{this.props.photos.map(photos => {
							return
							<li className="aPhoto" key={photo.id}>
								<Link to={`/photos/${photos.id}`}>
									<img src={photos.id} />
								</Link>

							</li>
							
						})}
					</ul>

				</div>
			</div>
		</div>
			
		)
	}
})

export default album_view