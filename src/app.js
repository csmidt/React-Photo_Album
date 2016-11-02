import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

require('assets/styles/style.css')

// Layouts
import App from 'layouts/app'

import home from 'ui/home'
import album_view from 'ui/album_view'
import photo from 'ui/photo'
import addAlbum from 'ui/addAlbum'
import addPhoto from 'ui/addPhoto'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
    	<Route path="/" component={home} />
    	<Route path="/album/add" component={ addAlbum} />
		<Route path="/album/:id/add" component={ addPhoto} />
    	<Route path="/album_view/:id" component={album_view} />
    	<Route path="/photo/:id" component={photo} />
	 </Route>
  </Router>
    
),document.getElementById('app')) 

// 

//  

