import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

import Collection from './collection';
import Footer from './Footer';

import Header from './Header';

// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.

class App extends Component {
	constructor() {
		// In a constructor, call `super` first if the classNameName extends another classNameName
		super();
	}

	// `render` is called whenever the component's props OR state are updated.
	render() {
		// console.log('The App component was rendered')
	return (
	 <div>
	 		<nav id="tf-menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Find'O Bistro</a>
        </div>

        
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#tf-home" className="page-scroll">Home</a></li>
            <li><a href="#tf-about" className="page-scroll">Collections</a></li>
            <li><a href="#tf-team" className="page-scroll">Sign Up</a></li>
            <li><a href="#tf-services" className="page-scroll">Login</a></li>
            
          </ul>
        </div>
      </div>
    </nav>

    <div id="tf-home" className="text-center">
        <div className="overlay">
            <div className="content">
                <div className="txt">
				 		<div className="input-group">
								 <input type="text" placeholder="Hungry??  Find your favourite Bistro...." className="form-control" /> 
									<span className="input-group-btn">
									<button className="btn btn-danger" type="button" >
									<i className="glyphicon glyphicon-search"></i></button>
									</span>
						</div>
				</div>
                <a href="#tf-about" className="fa fa-angle-down page-scroll"></a>
            </div>
        </div>
    </div>


		
			
		<Collection />
		<Footer />
		</div>

		);
		
	 }
 }

export default App;