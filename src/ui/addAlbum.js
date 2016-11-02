import React from 'react'
import { Link, hashHistory } from 'react-router'
import { addAlbum } from 'api/albumsapi'
import store from 'store'

export default React.createClass({
	getInitialState: function() {
		return {
			name:'',
			coverphoto:''
		}
	},
	handleSubmit: function (e) {
		e.preventDefault()
		var albumObj = {
			name: this.state.name,
			coverphoto: this.state.coverphoto
		}

		console.log(albumObj)
		addAlbum(albumObj)
	},
	update: function (e) {
		var val = e.target.value
		var id = e.target.id

		var stateObj = {}

		stateObj[id] = val

		this.setState(stateObj)
	},
	goBack: function (e){
		e.preventDefault()
		hashHistory.goBack()
	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input id="name" onChange={this.update} type="text" placeholder="Enter Album Name" value={this.state.name}/>				
					<input  id="coverphoto" onChange={this.update} type="url" placeholder="Upload Cover photo" value={this.state.coverphoto}/>			
					<button className="submit" type="submit"> Submit </button>
				</form>
			</div>
		)
	}
})