// NODE MODULES
import React, { Component } from 'react';
import axios from 'axios';

// COMPONENTS
import Header from './components/Header';
import Form from './components/Form';
import Content from './components/Content';
import Comments from './components/Comments';

// GLOBAL VARIABLES
const proxyUrl = 'https://proxy.hackeryou.com';
const url = 'http://superheroapi.com/api/10205575676227056/search/';

class App extends Component {
	constructor() {
		console.log('constructor was called');
		super();
		this.state = {
			character: null
		}
	}
	getHero(heroName) {
		axios({
			method: 'GET',
			url: proxyUrl,
			dataResponse: 'json',
			params: {
				reqUrl: url + heroName,
				xmlToJSON: false
			}
		}).then((res) => {
			this.setState({
				character: res.data.results,
			});
		});
	}
	heroName = (name) => {
		this.getHero(name);
	}
	render() {
		return (
			<div className="App">
				<header className={'header'}>
					<Header />
					<Form heroName={this.heroName}/>
				</header>
				<main className={'main'}>
					{this.state.character === null || this.state.character ?
					this.state.character && <Content hero={this.state.character}/>
					: <div className={'infoFallback'}>
						<h2>No Match in Database</h2>
						<h3>(or you spelled it wrong)</h3>
					</div>}
				</main>
				<footer className={'footer'}>
					<Comments />
				</footer>
			</div>
		);
	}
}

export default App;