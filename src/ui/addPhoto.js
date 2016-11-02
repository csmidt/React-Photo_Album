import React from 'react'
import { Link, hashHistory } from 'react-router'
import { addPhoto } from 'api/albumsapi'
import store from 'store'

export default React.createClass({
	getInitialState: function() {
		return {
			name:'',
			url:''
		}
	},
	handleSubmit: function (e) {
		e.preventDefault()
		var photoObj = {
			name: this.state.name,
			url: this.state.url,
			albumId:this.props.params.id
		}
		addPhoto(photoObj)
	},
	update: function (e) {
		var val = e.target.value
		var id = e.target.id

		var stateObj = {}

		stateObj[id] = val

		this.setState(stateObj)
	},
	render: function () {
		return (
			<div className="addPhoto">
				<form onSubmit={this.handleSubmit}>
					<input id="name" onChange={this.update} type="text" placeholder="Enter Photo Name" value={this.state.name}/>				
					<input  id="url" onChange={this.update} type="url" placeholder="Enter URL Here" value={this.state.url}/>			
					<button className="submit" type="submit"> Submit </button>
				</form>
			</div>
		)
	}
})