// React is modular- we need to explicitly say the other pages we need access to
import _ from 'lodash'; // throttles a function for a certain time
import React, { Component } from 'react'; // create and manage components
import ReactDOM from 'react-dom'; // how to render component to the dom
import YTSearch from 'youtube-api-search'; // include search function from Youtube
import CarouselInstance from './components/carousel';
import JumbotronInstance from './components/jumbotron';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import {Well} from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';

const YOUTUBE_API_KEY = AIzaSyAg5TbW5uTo-q-FguiWN3ZQR56DsBClno4;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('drake');
	}

	videoSearch(term) {
		YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
		// YTSearch({key: process.env.YOUTUBE_API_KEY, term: term}, (videos) => {
			// this.setState({ videos: videos }) Refactores below in ES6
			this.setState({ 
				videos: videos,
				selectedVideo: videos[4]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<JumbotronInstance />
				<JumbotronInstance />
				<JumbotronInstance />
				<JumbotronInstance />
				<JumbotronInstance />
				
        <Well bsSize="small"><PageHeader><SearchBar onSearchTermChange={videoSearch} /></PageHeader></Well>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />

			</div>
			);
	}
}

// Take this component's generated HTML and put it on the page (In the DOM)

ReactDOM.render(
	// wrap it in jsx tags to make it an instance
	<App/>,
	document.querySelector('.container')
	);









// Create a new component and this component should produce some HTML
// instantiate components before 
// ES 5 SYNTAX:
// const App = function() {
// ES 6 SYNTAX => does the same thing as function