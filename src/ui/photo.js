
import React from 'react';
import { Link, hashHistory } from 'react-router';
import { getPhoto } from 'api/albumsapi'
import store from 'store'


const PhotoContainer = React.createClass ({
	getInitialState: function () {
		return {
			photo:{
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
				photo:state.currentPhoto
			})
		})
	},
	componentWillUnmount: function () {
		this.unsubcscribe()
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