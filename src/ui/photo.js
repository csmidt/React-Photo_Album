
import React from 'react';
import { Link, hashHistory } from 'react-router';
import { getPhoto } from 'api/albumsapi'
import store from 'store'
import {deletePhoto} from 'api/albumsapi'


const PhotoContainer = React.createClass ({
	getInitialState: function () {
		return {
			photo:{
				id:"",
				url:"",
				name:""
			}
		}
	},
	componentWillMount: function () {
		getPhoto(this.props.params.id)

		this.unsubscribe = store.subscribe(()=>{
			const state = store.getState()

			this.setState({
				photo: state.currentPhoto
			})
		})
	},
	componentWillUnmount: function () {
		this.unsubscribe()
	},
	render:function () {
		return (
			<Onephoto photo={this.state.photo} />
		)
	}
})
const Onephoto =  React.createClass({
	goBack: function (e){
		e.preventDefault()
		hashHistory.goBack()
	},
	deletePhoto: function (e) {
		var id = e.target.id

		deletePhoto(id, this.props.photo.albumId)
	},

	render:function(){
		return (
			<div>
				<button onClick={this.goBack}>Back to Albums</button><br />
				<h3 className="header">{this.props.photo.name}</h3>
				<div className="singlePhoto">
					<img src={this.props.photo.url} />
				</div>
				<button id={this.props.photo.id} onClick={this.deletePhoto}>Delete Photo</button>
			</div>
	
		)
	}
})

export default PhotoContainer