import React from 'react';
import { Link, hashHistory } from 'react-router';
import { getPhoto } from 'api/albumsapi'


const PhotoContainer = React.createClass ({
	getInitialState: function () {
		return {
			photo:{}
		}
	},

	componentWillMount: function () {
		console.log('photoId', this.props.params.id)
		getPhoto(this.props.params.id).then(photo => {
			this.setState({
				photo: photo.data
			})
		})
	},

	render:function () {
		return (
			<Onephoto photo={this.state.photo} />

		)
	}

})
const Onephoto =  React.createClass({
	goBack: function (){
		hashHistory.goBack()
	},

	render:function(){
		return (
			<div>
				<button onClick={this.goBack}>Go Back</button><br />
				<h3>{this.props.photo.name}</h3>
				
				<div className="singlePhoto">
					<img src={this.props.photo.url} />
				</div>
			</div>
	
		)
	}
})

export default PhotoContainer