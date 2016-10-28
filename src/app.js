import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

require('assets/styles/style.css')

// Layouts
import App from 'layouts/app';

import my_albums from 'ui/my_albums';
import album_view from 'ui/album_view';
import photos from 'ui/photos';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
    	<Route path="/" component={my_albums} />
    	<Route path="/album_view/:id" component={album_view} />
    	<Route path="/photo/:id" component={photos} />
	 </Route>
  </Router>
    
),document.getElementById('app')) 

// 

//  

