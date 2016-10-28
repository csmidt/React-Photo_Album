import React from 'react';
import { Link, hashHistory } from 'react-router';








const onephoto =  React.createClass({
	goBack: function (){
			hashHistory.goBack()
	},

	render:function(){


		return (
			<div>
			<button onClick={this.goBack}>Go Back</button><br />
			<h3>{photo.name}</h3>
			
			<div className="singlePhoto">
				<img src={photos.url} />
			</div>
		</div>
			
			
		)
	}
})

export default onephoto