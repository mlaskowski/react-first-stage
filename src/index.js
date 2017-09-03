import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

//create new component witch produce some html
//pace this component on the page in the dome
const YOUTUBE_API_KEY = 'AIzaSyDPIJvWF4L7EcVy1M9M87H3VWv4y2FSHy0';




const App = function() {
    return (
        <div>
            <SearchBar></SearchBar>
        </div>
    );
};

ReactDOM.render(<App></App>, document.querySelector('.container'));